$(function () {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="./images/arrow-left.svg" alt="" />',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="./images/arrow-right.svg" alt="" />',
    asNavFor: ".slider-dots-header",
  });

  $(".slider-dots-header").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header__slider",
    responsive: [
      {
        breakpoint: 950,
        settings: "unslick",
      },
    ],
  });

  $(".surf-slider").slick({
    infinite: true,

    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="./images/arrow-left.svg" alt="" />',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="./images/arrow-right.svg" alt="" />',
    asNavFor: ".slider-map",
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 798,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 725,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".slider-map").slick({
    slidesToShow: 8,
    arrows: false,
    slidesToScroll: 1,
    asNavFor: ".surf-slider",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1102,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 725,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".holder__slider, .shop__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="./images/arrow-left.svg" alt="" />',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="./images/arrow-right.svg" alt="" />',
    asNavFor: ".slider-map",
  });

  $(
    '<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="./images/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="./images/minus.svg" alt=""></div></div>'
  ).insertAfter(".quantity input");
  $(".quantity").each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  $(".quantity-button").on("click", function () {
    let summ =
      $(".nights-quantity").val() * $(".summ").data("night") +
      ($(".guests-quantity").val() - 1) * $(".summ").data("people");

    $(".summ").html("$" + summ);
  });

  let summ =
    $(".nights-quantity").val() * $(".summ").data("night") +
    ($(".guests-quantity").val() - 1) * $(".summ").data("people");

  $(".summ").html("$" + summ);

  $(".surfboard-box__circle").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".menu-btn").on("click", function () {
    $(".menu").toggleClass("active");
  });

  new WOW().init();
});

//counte doesnt working on other slides
