// SearchForm Section code
let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};
window.onscroll = () => {
  searchForm.classList.remove("active");
};

$(document).ready(function () {
  $(window).scroll(function () {
    //Navbar-bottom scrolling
    if (this.scrollY > 5) {
      $(".navbar-bottom").addClass("sticky");
    } else {
      $(".navbar-bottom").removeClass("sticky");
    }

    //Scrolling Button Btn
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  //slide up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  //owl owlCarousel
  $(".owl-carousel").owlCarousel({
    margin: 5,
    mavigation: true,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

//Valores del formulario
const principle = document.getElementById("principle");
const interest = document.getElementById("interest");
const duration = document.getElementById("duration");
const output = document.getElementById("output");

//grab monthly id for monthly contributions
const daily = document.getElementById("daily");

const btn_ = document.getElementById("btn_").addEventListener("click", e => {
  if (daily.value == "" || daily.value == "0") {
    daily.value = 0;
  }

  let percentage = interest.value / 100; //8 => 0.08 => 8%
  let n = 365; //365 => compounds 365 time per year (Daily compound interval)

  let A1 = principle.value * (1 + percentage / n) ** (n * duration.value);
  let pmt_v =
    (daily.value * (1 + percentage / n) ** (n * duration.value) - daily.value) /
    (percentage / n);

  let A2 = A1 + pmt_v;

  let A3 = A2.toLocaleString("en-US");

  output.value = "$" + A3;
});
