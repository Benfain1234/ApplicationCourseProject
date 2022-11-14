const express = require("express");
const app = express();

const http = require("http");
const s = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(s);
var counter = 0;
io.on("connection", (socket) => {
  io.emit("userCnt", ++counter);
  socket.on("disconnect", () => {
    io.emit("userCnt", --counter);
  });
});
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");
const checkoutRoutes = require("./routes/checkout");
const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register");
const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");
const graphRoutes = require("./routes/graph");
const pieRoutes = require("./routes/pie");
var bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
const session = require("express-session");
app.use(
  session({
    secret: "foo",
    saveUninitialized: false,
    resave: false,
  })
);

app.use(productRoutes);
app.use(cartRoutes);
app.use(checkoutRoutes);
app.use(loginRoutes);
app.use(registerRoutes);
app.use(shopRoutes);
app.use(adminRoutes);
app.use(graphRoutes);
app.use(pieRoutes);
s.listen(8080);
