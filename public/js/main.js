$(() => {
  var appID = "105027989101153";
  var token =
    "EABa8mWVPnRwBALl9lPSH3iey7aM2VKZBTbOhm0aSMZCx83d7zITCEnUyPqLRnJJy1VULxJpUJklyUhGZB2iAMbCifCFeZAHZAhGltq8IcQUZCT4Mn3pMm0n24B1ltV7gkUFc2BLEdgYFYl063VIUDgxoVtSGdmtnmf0GGlzLTK4bIyA57j1ubgLt82hUuLFZCcZD";
  // $.ajax({
  //   url: `https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&
  //   client_id=6399816503368988&
  //   client_secret=f55f827724b771a3737d500bd0968e78&
  //   fb_exchange_token=EABa8mWVPnRwBAOAF9emYUE4ltNaUriTERRVY83zfRRPYvxiUKiSWF8rlEzOuF8ZC2GdFxisZApieLF24GmGxvVIbmZAPi2l08lrCk3yTSG3REgR8t06bldsFZAZBzALxYjz1z6ITj0I8dKbqdgGcVtoVrYBPSLoSkq83vicGCPJdT3MviqwKwnrpekMLacy6htixHlS2rDQZDZD`,
  // }).done(function (e) {
  //   console.log(e.access_token);
  // });
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
  $("#regForms").submit(function (e) {
    var elems = document.getElementById("regForms").elements;
    var message = `We have just added ${elems[0].value} to our products, enjoy!`;
    var link = elems[5].value;
    $.ajax({
      url: `https://graph.facebook.com/v15.0/${appID}/photos?message=${message}&url=${link}&access_token=${token}`,
      type: "post",
    }).done(function () {
      console.log("success");
    });
    return true;
  });
  $("#filter").on("click", "#dropProd", function (e) {
    const id = e.currentTarget.parentElement.parentElement.id;
    $.ajax({
      url: `http://localhost:8080/dropProduct?id=${id}`,
    }).done(function () {
      var list = document.getElementById(id).parentElement;
      var prod = document.getElementById(id);
      list.removeChild(prod);
    });
  });
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
    var totalPrice = document
      .getElementById(`totalPrice${id}`)
      .innerText.slice(1);
    if (parseInt(numOfProds) == 0) {
      prod.removeChild(elem);
    } else {
      numOfProds = parseInt(numOfProds) - 1;
      $(`#totalPrice${id}`).html(`$${parseInt(totalPrice) - currPrice}`);
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
function increaseClick(id) {
  $.ajax({
    url: `http://localhost:8080/increaseProduct?id=${id}`,
  }).done(function (obj) {
    const currPrice = parseInt(
      document.getElementById(`price${id}`).innerText.slice(1)
    );
    var numOfProds = document.getElementById(`num${id}`).value;
    var totalPrice = document
      .getElementById(`totalPrice${id}`)
      .innerText.slice(1);
    numOfProds = parseInt(numOfProds) + 1;
    $(`#totalPrice${id}`).html(`$${parseInt(totalPrice) + currPrice}`);
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
  var cartListMinus = document.querySelectorAll("#decreaseProd");
  for (var i = 0; i < cartListMinus.length; i++) {
    const id = cartListMinus[i].parentElement.parentElement.parentElement.id;
    cartListMinus[i].addEventListener("click", function () {
      decreaseClick(id);
    });
  }
  var cartListPlus = document.querySelectorAll("#increaseProd");
  for (var i = 0; i < cartListPlus.length; i++) {
    const id = cartListPlus[i].parentElement.parentElement.parentElement.id;
    cartListPlus[i].addEventListener("click", function () {
      increaseClick(id);
    });
  }
});
(function ($) {
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

  // Vendor carousel
  //   $(".vendor-carousel").owlCarousel({
  //     loop: true,
  //     margin: 29,
  //     nav: false,
  //     autoplay: true,
  //     smartSpeed: 1000,
  //     responsive: {
  //       0: {
  //         items: 2,
  //       },
  //       576: {
  //         items: 3,
  //       },
  //       768: {
  //         items: 4,
  //       },
  //       992: {
  //         items: 5,
  //       },
  //       1200: {
  //         items: 6,
  //       },
  //     },
  //   });

  //   // Related carousel
  //   $(".related-carousel").owlCarousel({
  //     loop: true,
  //     margin: 29,
  //     nav: false,
  //     autoplay: true,
  //     smartSpeed: 1000,
  //     responsive: {
  //       0: {
  //         items: 1,
  //       },
  //       576: {
  //         items: 2,
  //       },
  //       768: {
  //         items: 3,
  //       },
  //       992: {
  //         items: 4,
  //       },
  //     },
  //   });

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
