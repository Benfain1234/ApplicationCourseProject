



(function ($) {
  "use strict";
  var filter = {
    pricearray: [],
    colorarray: [],
    sizearray: []
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

  $("#price-1").click(()=>{
   let index = filter.pricearray.findIndex((number)=> number === 100)
   if(index===-1){
     filter.pricearray.push(100);
   }else{
     filter.pricearray.splice(index,index+1);
   }

    console.log(filter);
    $("#filter").load('http://localhost:8080/pricefilter1', {filter})
  })

  $("#price-2").click(()=>{
    let index = filter.pricearray.findIndex((number)=> number === 200)
    if(index===-1){
      filter.pricearray.push(200);
    }else{
      filter.pricearray.splice(index,index+1);
    }
    console.log(filter);
    $("#filter").load('http://localhost:8080/pricefilter1',{filter})
  })

  $("#price-3").click(()=>{
    let index = filter.pricearray.findIndex((number)=> number === 300)
    if(index===-1){
      filter.pricearray.push(300);
    }else{
      filter.pricearray.splice(index,index+1);
    }
    console.log(filter);
    $("#filter").load('http://localhost:8080/pricefilter1',{filter})
  })

  $("#price-4").click(()=>{
    let index = filter.pricearray.findIndex((number)=> number === 400)
    if(index===-1){
      filter.pricearray.push(400);
    }else{
      filter.pricearray.splice(index,index+1);
    }
    console.log(filter);
    $("#filter").load('http://localhost:8080/pricefilter1',{filter})
  })

  $("#price-5").click(()=>{
    let index = filter.pricearray.findIndex((number)=> number === 500)
    if(index===-1){
      filter.pricearray.push(500);
    }else{
      filter.pricearray.splice(index,index+1);
    }
    console.log(filter);
    $("#filter").load('http://localhost:8080/pricefilter1',{filter})
  })

  $("#color-1").click(()=>{
    let index = filter.colorarray.findIndex((color)=> color === "black")
    if(index===-1){
      filter.colorarray.push("black");
    }else{
      filter.colorarray.splice(index,index+1);
    }
    console.log(filter);
    $("#filter").load('http://localhost:8080/pricefilter1',{filter})
  })
  $("#color-2").click(()=>{
    let index = filter.colorarray.findIndex((color)=> color === "white")
    if(index===-1){
      filter.colorarray.push("white");
    }else{
      filter.colorarray.splice(index,index+1);
    }
    console.log(filter);
    $("#filter").load('http://localhost:8080/pricefilter1',{filter})
  })
  $("#color-3").click(()=>{
    let index = filter.colorarray.findIndex((color)=> color === "red")
    if(index===-1){
      filter.colorarray.push("red");
    }else{
      filter.colorarray.splice(index,index+1);
    }
    console.log(filter);
    $("#filter").load('http://localhost:8080/pricefilter1',{filter})
  })

  $("#color-4").click(()=>{
    let index = filter.colorarray.findIndex((color)=> color === "blue")
    if(index===-1){
      filter.colorarray.push("blue");
    }else{
      filter.colorarray.splice(index,index+1);
    }
    console.log(filter);
    $("#filter").load('http://localhost:8080/pricefilter1',{filter})
  })

  $("#color-5").click(()=>{
    let index = filter.colorarray.findIndex((color)=> color === "green")
    if(index===-1){
      filter.colorarray.push("green");
    }else{
      filter.colorarray.splice(index,index+1);
    }
    console.log(filter);
    $("#filter").load('http://localhost:8080/pricefilter1',{filter})
  })

  $("#size-1").click(()=>{
    let index = filter.sizearray.findIndex((color)=> color === "XS")
    if(index===-1){
      filter.sizearray.push("XS");
    }else{
      filter.sizearray.splice(index,index+1);
    }
    console.log(filter);
    $("#filter").load('http://localhost:8080/pricefilter1',{filter})
  })

  $("#size-2").click(()=>{
    let index = filter.sizearray.findIndex((color)=> color === "S")
    if(index===-1){
      filter.sizearray.push("S");
    }else{
      filter.sizearray.splice(index,index+1);
    }
    console.log(filter);
    $("#filter").load('http://localhost:8080/pricefilter1',{filter})
  })

  $("#size-3").click(()=>{
    let index = filter.sizearray.findIndex((color)=> color === "M")
    if(index===-1){
      filter.sizearray.push("M");
    }else{
      filter.sizearray.splice(index,index+1);
    }
    console.log(filter);
    $("#filter").load('http://localhost:8080/pricefilter1',{filter})
  })

  $("#size-4").click(()=>{
    let index = filter.sizearray.findIndex((color)=> color === "L")
    if(index===-1){
      filter.sizearray.push("L");
    }else{
      filter.sizearray.splice(index,index+1);
    }
    console.log(filter);
    $("#filter").load('http://localhost:8080/pricefilter1',{filter})
  })

  $("#size-5").click(()=>{

    let index = filter.sizearray.findIndex((color)=> color === "XL")
    if(index===-1){
      filter.sizearray.push("XL");
    }else{
      filter.sizearray.splice(index,index+1);
    }
    console.log(filter);
    $("#filter").load('http://localhost:8080/pricefilter1',{filter})
  })

  $(".search_product_button2").click(()=>{
    const value =  $(".input2").val();
    const filter2 = filter;
    if($("#price-1")[0].checked  === true) {
      $("#price-1").click();
    }
    if($("#price-2")[0].checked  === true) {
      $("#price-2").click();
    }
    if($("#price-3")[0].checked  === true) {
      $("#price-3").click();
    }
    if($("#price-4")[0].checked  === true) {
      $("#price-4").click();
    }
    if($("#price-5")[0].checked  === true) {
      $("#price-5").click();
    }
    if($("#color-1")[0].checked  === true) {
      $("#color-1").click();
    }
    if($("#color-2")[0].checked  === true) {
      $("#color-2").click();
    }
    if($("#color-3")[0].checked  === true) {
      $("#color-3").click();
    }
    if($("#color-4")[0].checked  === true) {
      $("#color-4").click();
    }
    if($("#color-5")[0].checked  === true) {
      $("#color-5").click();
    }
    if($("#size-1")[0].checked  === true) {
      $("#size-1").click();
    }
    if($("#size-2")[0].checked  === true) {
      $("#size-2").click();
    }
    if($("#size-3")[0].checked  === true) {
      $("#size-3").click();
    }
    if($("#size-4")[0].checked  === true) {
      $("#size-4").click();
    }
    if($("#size-5")[0].checked  === true) {
      $("#size-5").click();
    }
    $("#filter").load('http://localhost:8080/searchproduct',{filter2,value})


  })

  $(".dropdown-menu-right a:nth-of-type(1)").click(()=>{
    $("#filter").load('http://localhost:8080/sortbyprice',{filter})
  })
  $(".dropdown-menu-right a:nth-of-type(2)").click(()=>{
    $("#filter").load('http://localhost:8080/sortbysize',{filter})
  })
  $(".dropdown-menu-right a:nth-of-type(3)").click(()=>{
    $("#filter").load('http://localhost:8080/sortbycolor',{filter})
  })
})(jQuery);
=======
(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });


    // Related carousel
    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });
    
})(jQuery);


