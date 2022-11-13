<<<<<<< Updated upstream
$(() => {
  $("#filter").on("click", "#addToCart", function (e) {
    const id = e.currentTarget.parentElement.parentElement.id;
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

  $("#sub").click(function (e) {
    const v = document.getElementById("forms").elements;
    const url = `http://localhost:8080/updateProduct?id=${v.id.value}&&title=${v.title.value}&&desc=${v.desc.value}
    &&price=${v.price.value}&&color=${v.color.value}&&size=${v.size.value}&&quantity=${v.quantity.value}&&
    src=${v.src.value}`;
    $.ajax({
      url: url,
    }).done(function (obj) {
      $("#filter").html("");
      for (let index = 0; index < obj.length; index++) {
        const element = obj[index];
        let template = $("#price_template").html();
        for (const key in element) {
          template = template.replace("{" + key + "}", element[key]);
        }
        $("#filter").append(template);
      }
    });
  });

  document.getElementById("priceSort").addEventListener("click", function () {
    $.ajax({
      url: `http://localhost:8080/sortByPrice`,
    }).done(function (obj) {
      $("#filter").html("");
      for (let index = 0; index < obj.length; index++) {
        const element = obj[index];
        let template = $("#price_template").html();
        for (const key in element) {
          template = template.replace("{" + key + "}", element[key]);
        }
        $("#filter").append(template);
      }
    });
  });

  function clickedFilter(priceArr, colorArr, sizeArr, name) {
    var urlArr = [];
    var colorNames = ["black", "white", "red", "blue", "green"];
    var sizeNames = ["XS", "S", "M", "L", "XL"];
    var checkedSizes = [];
    var checkedColors = [];
    var checkCounter = 0;
    for (var i = 0; i < colorArr.length; i++) {
      if (colorArr[i].checked) {
        checkedColors.push(colorNames[i]);
      }
      if (sizeArr[i].checked) {
        checkedSizes.push(sizeNames[i]);
      }
    }
    for (var i = 0; i < priceArr.length; i++) {
      if (priceArr[i].checked) {
        checkCounter++;
        var min = (parseInt(priceArr[i].id.split("-")[1]) - 1) * 100;
        var max = parseInt(priceArr[i].id.split("-")[1]) * 100 - 1;
        var tempURL = `http://localhost:8080/pricefilter1?min=${min}&&max=${max}&&color[]=${checkedColors}&&size[]=${checkedSizes}&&name=${name}`;
        urlArr.push(tempURL);
      }
    }
    if (checkCounter > 0) {
      $("#filter").html("");
      for (var i = 0; i < urlArr.length; i++) {
        $.ajax({
          url: urlArr[i],
        }).done(function (obj) {
          for (var j = 0; j < obj.length; j++) {
            const element = obj[j];
            let template = $("#price_template").html();
            for (const key in element) {
              template = template.replace(`{${key}}`, element[key]);
            }
            $("#filter").append(template);
          }
        });
      }
    } else {
      var url = `http://localhost:8080/pricefilter1?min=0&&max=1000000000&&color[]=${checkedColors}&&size[]=${checkedSizes}&&name=${name}`;
      $.ajax({
        url: url,
      }).done(function (obj) {
        $("#filter").html("");
        for (var j = 0; j < obj.length; j++) {
          const element = obj[j];
          let template = $("#price_template").html();
          for (const key in element) {
            template = template.replace(`{${key}}`, element[key]);
          }
          $("#filter").append(template);
        }
      });
    }
  }
  var prices = [];
  var colors = [];
  var sizes = [];
  prices.push(document.getElementById("price-1"));
  prices.push(document.getElementById("price-2"));
  prices.push(document.getElementById("price-3"));
  prices.push(document.getElementById("price-4"));
  prices.push(document.getElementById("price-5"));
  colors.push(document.getElementById("color-1"));
  colors.push(document.getElementById("color-2"));
  colors.push(document.getElementById("color-3"));
  colors.push(document.getElementById("color-4"));
  colors.push(document.getElementById("color-5"));
  sizes.push(document.getElementById("size-1"));
  sizes.push(document.getElementById("size-2"));
  sizes.push(document.getElementById("size-3"));
  sizes.push(document.getElementById("size-4"));
  sizes.push(document.getElementById("size-5"));
  $("#inp_search").keyup(() => {
    clickedFilter(prices, colors, sizes, $("#inp_search").val());
  });
  for (var i = 0; i < prices.length; i++) {
    prices[i].addEventListener("click", function () {
      clickedFilter(prices, colors, sizes, $("#inp_search").val());
    });
    colors[i].addEventListener("click", function () {
      clickedFilter(prices, colors, sizes, $("#inp_search").val());
    });
    sizes[i].addEventListener("click", function () {
      clickedFilter(prices, colors, sizes, $("#inp_search").val());
    });
  }
});

$(".search_product_button2").click(() => {
  const value = $(".input2").val();
  const filter2 = filter;
  if ($("#price-1")[0].checked === true) {
    $("#price-1").click();
  }
  if ($("#price-2")[0].checked === true) {
    $("#price-2").click();
  }
  if ($("#price-3")[0].checked === true) {
    $("#price-3").click();
  }
  if ($("#price-4")[0].checked === true) {
    $("#price-4").click();
  }
  if ($("#price-5")[0].checked === true) {
    $("#price-5").click();
  }
  if ($("#color-1")[0].checked === true) {
    $("#color-1").click();
  }
  if ($("#color-2")[0].checked === true) {
    $("#color-2").click();
  }
  if ($("#color-3")[0].checked === true) {
    $("#color-3").click();
  }
  if ($("#color-4")[0].checked === true) {
    $("#color-4").click();
  }
  if ($("#color-5")[0].checked === true) {
    $("#color-5").click();
  }
  if ($("#size-1")[0].checked === true) {
    $("#size-1").click();
  }
  if ($("#size-2")[0].checked === true) {
    $("#size-2").click();
  }
  if ($("#size-3")[0].checked === true) {
    $("#size-3").click();
  }
  if ($("#size-4")[0].checked === true) {
    $("#size-4").click();
  }
  if ($("#size-5")[0].checked === true) {
    $("#size-5").click();
  }
  $("#filter").load("http://localhost:8080/searchproduct", {
    filter2,
    value,
  });
});
=======
$(() => {
  $("#filter").on("click", "#addToCart", function (e) {
    const id = e.currentTarget.parentElement.parentElement.id;
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

  $("#sub").click(function (e) {
    const v = document.getElementById("forms").elements;
    const url = `http://localhost:8080/updateProduct?id=${v.id.value}&&title=${v.title.value}&&desc=${v.desc.value}
    &&price=${v.price.value}&&color=${v.color.value}&&size=${v.size.value}&&quantity=${v.quantity.value}&&
    src=${v.src.value}`;
    $.ajax({
      url: url,
    }).done(function (obj) {
      $("#filter").html("");
      for (let index = 0; index < obj.length; index++) {
        const element = obj[index];
        let template = $("#price_template").html();
        for (const key in element) {
          template = template.replace("{" + key + "}", element[key]);
        }
        $("#filter").append(template);
      }
    });
  });

  document.getElementById("priceSort").addEventListener("click", function () {
    $.ajax({
      url: `http://localhost:8080/sortByPrice`,
    }).done(function (obj) {
      $("#filter").html("");
      for (let index = 0; index < obj.length; index++) {
        const element = obj[index];
        let template = $("#price_template").html();
        for (const key in element) {
          template = template.replace("{" + key + "}", element[key]);
        }
        $("#filter").append(template);
      }
    });
  });

  function clickedFilter(priceArr, colorArr, sizeArr, name) {
    var urlArr = [];
    var colorNames = ["black", "white", "red", "blue", "green"];
    var sizeNames = ["XS", "S", "M", "L", "XL"];
    var checkedSizes = [];
    var checkedColors = [];
    var checkCounter = 0;
    for (var i = 0; i < colorArr.length; i++) {
      if (colorArr[i].checked) {
        checkedColors.push(colorNames[i]);
      }
      if (sizeArr[i].checked) {
        checkedSizes.push(sizeNames[i]);
      }
    }
    for (var i = 0; i < priceArr.length; i++) {
      if (priceArr[i].checked) {
        checkCounter++;
        var min = (parseInt(priceArr[i].id.split("-")[1]) - 1) * 100;
        var max = parseInt(priceArr[i].id.split("-")[1]) * 100 - 1;
        var tempURL = `http://localhost:8080/pricefilter1?min=${min}&&max=${max}&&color[]=${checkedColors}&&size[]=${checkedSizes}&&name=${name}`;
        urlArr.push(tempURL);
      }
    }
    if (checkCounter > 0) {
      $("#filter").html("");
      for (var i = 0; i < urlArr.length; i++) {
        $.ajax({
          url: urlArr[i],
        }).done(function (obj) {
          for (var j = 0; j < obj.length; j++) {
            const element = obj[j];
            let template = $("#price_template").html();
            for (const key in element) {
              template = template.replace(`{${key}}`, element[key]);
            }
            $("#filter").append(template);
          }
        });
      }
    } else {
      var url = `http://localhost:8080/pricefilter1?min=0&&max=1000000000&&color[]=${checkedColors}&&size[]=${checkedSizes}&&name=${name}`;
      $.ajax({
        url: url,
      }).done(function (obj) {
        $("#filter").html("");
        for (var j = 0; j < obj.length; j++) {
          const element = obj[j];
          let template = $("#price_template").html();
          for (const key in element) {
            template = template.replace(`{${key}}`, element[key]);
          }
          $("#filter").append(template);
        }
      });
    }
  }
  var prices = [];
  var colors = [];
  var sizes = [];
  prices.push(document.getElementById("price-1"));
  prices.push(document.getElementById("price-2"));
  prices.push(document.getElementById("price-3"));
  prices.push(document.getElementById("price-4"));
  prices.push(document.getElementById("price-5"));
  colors.push(document.getElementById("color-1"));
  colors.push(document.getElementById("color-2"));
  colors.push(document.getElementById("color-3"));
  colors.push(document.getElementById("color-4"));
  colors.push(document.getElementById("color-5"));
  sizes.push(document.getElementById("size-1"));
  sizes.push(document.getElementById("size-2"));
  sizes.push(document.getElementById("size-3"));
  sizes.push(document.getElementById("size-4"));
  sizes.push(document.getElementById("size-5"));
  $("#inp_search").keyup(() => {
    clickedFilter(prices, colors, sizes, $("#inp_search").val());
  });
  for (var i = 0; i < prices.length; i++) {
    prices[i].addEventListener("click", function () {
      clickedFilter(prices, colors, sizes, $("#inp_search").val());
    });
    colors[i].addEventListener("click", function () {
      clickedFilter(prices, colors, sizes, $("#inp_search").val());
    });
    sizes[i].addEventListener("click", function () {
      clickedFilter(prices, colors, sizes, $("#inp_search").val());
    });
  }
});

$(".search_product_button2").click(() => {
  const value = $(".input2").val();
  const filter2 = filter;
  if ($("#price-1")[0].checked === true) {
    $("#price-1").click();
  }
  if ($("#price-2")[0].checked === true) {
    $("#price-2").click();
  }
  if ($("#price-3")[0].checked === true) {
    $("#price-3").click();
  }
  if ($("#price-4")[0].checked === true) {
    $("#price-4").click();
  }
  if ($("#price-5")[0].checked === true) {
    $("#price-5").click();
  }
  if ($("#color-1")[0].checked === true) {
    $("#color-1").click();
  }
  if ($("#color-2")[0].checked === true) {
    $("#color-2").click();
  }
  if ($("#color-3")[0].checked === true) {
    $("#color-3").click();
  }
  if ($("#color-4")[0].checked === true) {
    $("#color-4").click();
  }
  if ($("#color-5")[0].checked === true) {
    $("#color-5").click();
  }
  if ($("#size-1")[0].checked === true) {
    $("#size-1").click();
  }
  if ($("#size-2")[0].checked === true) {
    $("#size-2").click();
  }
  if ($("#size-3")[0].checked === true) {
    $("#size-3").click();
  }
  if ($("#size-4")[0].checked === true) {
    $("#size-4").click();
  }
  if ($("#size-5")[0].checked === true) {
    $("#size-5").click();
  }
  $("#filter").load("http://localhost:8080/searchproduct", {
    filter2,
    value,
  });
});
>>>>>>> Stashed changes
