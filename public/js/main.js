


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
    $("#filter").load('http://localhost:8080/pricefilter2',{filter})
  })

  $("#price-3").click(()=>{
    let index = filter.pricearray.findIndex((number)=> number === 300)
    if(index===-1){
      filter.pricearray.push(300);
    }else{
      filter.pricearray.splice(index,index+1);
    }
    console.log(filter);
    $("#filter").load('http://localhost:8080/pricefilter3',{filter})
  })

  $("#price-4").click(()=>{
    let index = filter.pricearray.findIndex((number)=> number === 400)
    if(index===-1){
      filter.pricearray.push(400);
    }else{
      filter.pricearray.splice(index,index+1);
    }
    console.log(filter);
    $("#filter").load('http://localhost:8080/pricefilter4',{filter})
  })

  $("#price-5").click(()=>{
    let index = filter.pricearray.findIndex((number)=> number === 500)
    if(index===-1){
      filter.pricearray.push(500);
    }else{
      filter.pricearray.splice(index,index+1);
    }
    console.log(filter);
    $("#filter").load('http://localhost:8080/pricefilter5',{filter})
  })


})(jQuery);
