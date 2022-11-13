<<<<<<< Updated upstream
const express = require("express");
const cartController = require("../controllers/cart");
const router = express.Router();

router.get("/cart", cartController.Cart);
router.get("/addProduct", cartController.AddProd);
router.get("/decreaseProduct", cartController.DecreaseProd);
router.get("/removeProduct", cartController.RemoveProd);
router.get("/emptycart",cartController.EmptyCart);


module.exports = router;
=======
const express = require("express");
const cartController = require("../controllers/cart");
const router = express.Router();

router.get("/cart", cartController.Cart);
router.get("/addProduct", cartController.AddProd);
router.get("/decreaseProduct", cartController.DecreaseProd);
router.get("/removeProduct", cartController.RemoveProd);
router.get("/emptycart",cartController.EmptyCart);


module.exports = router;
>>>>>>> Stashed changes
