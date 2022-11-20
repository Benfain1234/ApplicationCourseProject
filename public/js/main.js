$(() => {
  $.get("/isConnect").done(function (res) {
    if (res) {
      $("#login").remove();
      $("#register").remove();

    } else {
      $("#logout").remove();
      $("#dropdown").remove();
      for (var j = 0; j < 6; j++) {
        if ($("#shoplink").hasClass("cat-img")) {
          $("#shoplink").removeAttr("href");
        } else {
          $("#shoplink").remove();
        }
      }
      var cart = document.querySelectorAll("#addToCart");
      for (var i = 0; i < cart.length; i++) {
        $("#addToCart").remove();
      }
      $("#qlinkcart").remove();
      $("#qlinkcheckout").remove();
    }
  });

  var droppers = document.querySelectorAll("#dropProd");
  for (var i = 0; i < droppers.length; i++) {
    const id = droppers[i].parentElement.parentElement.id;
    droppers[i].addEventListener("click", function () {
      $.ajax({
        url: `http://localhost:8080/dropProduct?id=${id}`,
      }).done(function (obj) {
        var list = document.getElementById(id).parentElement;
        var prod = document.getElementById(id);
        list.removeChild(prod);
      });
    });
  }
  var cart = document.querySelectorAll("#addToCart");
  for (var i = 0; i < cart.length; i++) {
    const id = cart[i].parentElement.parentElement.id;
    cart[i].addEventListener("click", function () {
      $.ajax({
        url: `http://localhost:8080/addProduct?id=${id}`,
      }).done(function (obj) {
        $("#cartVal").html(`${obj}`);
        for (let index = 0; index < obj.length; index++) {
          const element = obj[index];
          let template = $("#cart_template").html();
          for (const key in element) {
            template = template.replace("{" + key + "}", element[key]);
          }
        }
      });
    });
  }
});

function removeClick(id) {
  $.ajax({
    url: `http://localhost:8080/removeProduct?id=${id}`,
  }).done(function (obj) {
    let prod = document.getElementById("prodList");
    let elem = document.getElementById(id);
    const currPrice = parseInt(
      document.getElementById(`price${id}`).innerText.slice(1)
    );
    var numOfProds = document.getElementById(`num${id}`).value;
    prod.removeChild(elem);
    var subT = parseInt(document.getElementById("subTotal").innerText.slice(1));
    var subTotal = subT - currPrice * parseInt(numOfProds);
    var total = subTotal + 10;
    $("#subTotal").html(`$${subTotal}`);
    $("#total").html(`$${total}`);
    var cartVal = parseInt(document.getElementById("cartVal").innerText);
    $("#cartVal").html(`${cartVal - parseInt(numOfProds)}`);
    numOfProds = 0;
  });
}
function decreaseClick(id) {
  $.ajax({
    url: `http://localhost:8080/decreaseProduct?id=${id}`,
  }).done(function (obj) {
    let prod = document.getElementById("prodList");
    let elem = document.getElementById(id);
    const currPrice = parseInt(
      document.getElementById(`price${id}`).innerText.slice(1)
    );
    var numOfProds = document.getElementById(`num${id}`).value;
    console.log(numOfProds);
    if (parseInt(numOfProds) == 0) {
      prod.removeChild(elem);
    } else {
      numOfProds = parseInt(numOfProds) - 1;
    }
    var subT = parseInt(document.getElementById("subTotal").innerText.slice(1));
    var subTotal = subT - currPrice;
    var total = subTotal + 10;
    $("#subTotal").html(`$${subTotal}`);
    $("#total").html(`$${total}`);
    var cartVal = parseInt(document.getElementById("cartVal").innerText);
    $("#cartVal").html(`${cartVal - 1}`);
  });
}
function RiseClick(id) {
  $.ajax({
    url: `http://localhost:8080/addProduct?id=${id}`,
  }).done(function (obj) {
    let prod = document.getElementById("prodList");
    let elem = document.getElementById(id);
    const currPrice = parseInt(
      document.getElementById(`price${id}`).innerText.slice(1)
    );
    var numOfProds = document.getElementById(`num${id}`).value;
    console.log(numOfProds);
    if (parseInt(numOfProds) == 0) {
      prod.Child(elem);
    } else {
      numOfProds = parseInt(numOfProds) + 1;
    }
    var subT = parseInt(document.getElementById("subTotal").innerText.slice(1));
    var subTotal = subT + currPrice;
    var total = subTotal + 10;
    $("#subTotal").html(`$${subTotal}`);
    $("#total").html(`$${total}`);
    var cartVal = parseInt(document.getElementById("cartVal").innerText);
    $("#cartVal").html(`${cartVal + 1}`);
  });
}
$(() => {
  var s = io();
  s.on("userCnt", (msg) => {
    $("#users").html(`Users connected: ${msg}`);
  });
  var cartList = document.querySelectorAll("#removeProd");
  for (var i = 0; i < cartList.length; i++) {
    const id = cartList[i].parentElement.parentElement.id;
    cartList[i].addEventListener("click", function () {
      removeClick(id);
    });
  }
});
$(() => {
  var cartList = document.querySelectorAll("#decreaseProd");
  for (var i = 0; i < cartList.length; i++) {
    const id = cartList[i].parentElement.parentElement.parentElement.id;
    cartList[i].addEventListener("click", function () {
      decreaseClick(id);
    });
  }
});
$(() => {
  var cartList = document.querySelectorAll("#RiseProd");
  for (var i = 0; i < cartList.length; i++) {
    const id = cartList[i].parentElement.parentElement.parentElement.id;
    cartList[i].addEventListener("click", function () {
      RiseClick(id);
    });
  }
});
(function ($) {

  $("#PlaceOrder").click(()=>{

    if($("#paypal")[0].checked === false&&$("#directcheck")[0].checked === false && $("#banktransfer")[0].checked === false){
      $("#CheckoutDetails").append("<h1>Choose One Of The Payment Methods</h1>")
      setTimeout(()=>{
        $("#CheckoutDetails h1").remove();
      },5000)
    }else {
      $.get("/emptycart").done(function (res){
        if(res){
          $("#CheckoutDetails").html("<h1>Congratulation We Got Your Order And We Will Contact You As Soon As Possibole<h1>")
        }else {
          $("#CheckoutDetails").append("<h1 id='payment-error' >Sorry Your Cart Is Empty Add Items To Complete Your Order</h1>")
          setTimeout(()=>{
            $("#CheckoutDetails h1").remove();
          },5000)
        }
      });
    }


  })
  "use strict";
  var filter = {
    pricearray: [],
    colorarray: [],
    sizearray: [],
  };
  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Product Quantity
  $(".quantity button").on("click", function () {
    var button = $(this);
    var oldValue = button.parent().parent().find("input").val();
    if (button.hasClass("btn-plus")) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    button.parent().parent().find("input").val(newVal);
  });

  $(".dropdown-menu-right a:nth-of-type(1)").click(() => {
    $("#filter").load("http://localhost:8080/sortbyprice", { filter });
  });
  $(".dropdown-menu-right a:nth-of-type(2)").click(() => {
    $("#filter").load("http://localhost:8080/sortbysize", { filter });
  });
  $(".dropdown-menu-right a:nth-of-type(3)").click(() => {
    $("#filter").load("http://localhost:8080/sortbycolor", { filter });
  });
  $("#tel-aviv").click(() => {
    $("#map").load("/telaviv");
    $("#weather").empty();
    const settings = {
      async: true,
      crossDomain: true,
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json?q=tel-aviv&days=3",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2fc7d7c819msh6602ac9ee5edd5dp104abfjsn84c7351d0387",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    $.ajax(settings).done(function (response) {
      var txt1 = $("<p></p>").text(
        "Weather at Tel-Aviv :" + response.current.condition.text
      );
      $("#weather").html(txt1);
      var txt2 = $("<p></p>").text("Temp (F) : " + response.current.temp_f);
      $("#weather").append(txt2);
    });
  });
  $("#bat-yam").click(() => {
    $("#map").load("/batyam");
    $("#weather").empty();
    const settings = {
      async: true,
      crossDomain: true,
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json?q=bat%20yam&days=3",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2fc7d7c819msh6602ac9ee5edd5dp104abfjsn84c7351d0387",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    $.ajax(settings).done(function (response) {
      var txt3 = $("<p></p>").text(
        "Weather at Bat-Yam :" + response.current.condition.text
      );
      $("#weather").html(txt3);
      var txt4 = $("<p></p>").text(
        "Local time : " + response.location.localtime
      );
      $("#weather").append(txt4);
    });
  });
  $("#rishon-lezion").click(() => {
    $("#map").load("/rishon");
    $("#weather").empty();
    const settings = {
      async: true,
      crossDomain: true,
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json?q=rishon%20lezion&days=3",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2fc7d7c819msh6602ac9ee5edd5dp104abfjsn84c7351d0387",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    $.ajax(settings).done(function (response) {
      var txt1 = $("<p></p>").text(
        "Weather at Rishon-Lezion :" + response.current.condition.text
      );
      $("#weather").html(txt1);
      var txt2 = $("<p></p>").text("Temp (C) : " + response.current.temp_c);
      $("#weather").append(txt2);
    });
  });
})(jQuery);
