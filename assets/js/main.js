// navbar toggler
$(".menu-btn").on("click", () => {
    $(".navbar").css({
        right: "0"
    })
})

// navbar close-btn
$(".close-btn").on("click", () => {
    $(".navbar").css({
        right: "-100rem"
    })
})

// intro image owl-carousel 
$("#my-picture-slide").owlCarousel({
    loop: 1,
    items: 1,
    autoplay: true,
})

// project owl-carousel
$("#my-projects").owlCarousel({
    loop: 1,
    autoplay: true,
    items: 1,
    responsiveClass: true,
    responsive: {
        740: {
            items: 2
        }
    }
})

// intro text slide
var typed = new Typed(".slide", {
    strings: ["Software developer", "Web developer", "Artificial Intelligence"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 1000,
})

// add and remove onscroll class to navbar element when scrolling
var nav = $("nav");
var navbrand = $(".nav-brand a");
var menuBtn = $(".menu-btn div");
var navButton = $(".header-right button, .header-right i");
var navLinks = $(".navbar a");
var clickables = $("button, a, span, li");

// add active class when scrolling down
const navbarOnscrollDown = () => {
    nav.addClass("onscroll");
    navbrand.addClass("onscroll");
    menuBtn.addClass("onscroll");
    navButton.addClass("onscroll");
    clickables.addClass("onscroll");
    navLinks.addClass("onscroll");
}

// remove active class when scrolling back to position
const navbarOnscrollBack = () => {
    nav.removeClass("onscroll");
    navbrand.removeClass("onscroll");
    menuBtn.removeClass("onscroll");
    navButton.removeClass("onscroll");
    clickables.removeClass("onscroll");
    navLinks.removeClass("onscroll");
}

//header on scroll
$(window).on("scroll", () => {
    window.scrollY > 500 ?
        navbarOnscrollDown() : navbarOnscrollBack()
    window.scrollY > 500 ?
        $(".scroll-top").css({
            transform: "scale(1)"
        }) : $(".scroll-top").css({
            transform: "scale(0)"
        })
    window.scrollY > 3000 ?
        $(".chatbot .header").css({
            transform: "scale(1)"
        }) : $(".chatbot .header").css({
            transform: "scale(0)"
        })
})

//close navbar when nav links clicked
$(".navbar li a").on("click", () => {
    $(".navbar").css({
        right: "-50rem"
    })
})

// close pre loader when document is ready
$(window).on("load", () => {
    $(".preloader").css({
        transform: "scale(0)",
        background: "transparent"
    })
})

// scroll to the top when clicked
$(".scroll-top").on("click", () => {
    window.scroll(0, 0)
})

// contact section validation
var msg = $("#contact .msg");
var inputbar = $("#contact .input")
var input = $("#contact .input input");
var placeholder;
var username = $("#contact #name");
var email = $("#contact #email");
var textarea = $("#contact textarea")

// move placeholder to position
input.on("mouseover", function (event) {
    placeholder = event.target.nextElementSibling;
    !input.val() === "" ?
        placeholder.style.bottom = "1.5rem" :
        placeholder.style.bottom = "2.65rem";
})

input.on("focusout", function (event) {
    placeholder = event.target.nextElementSibling;
    $(event.target).val() === "" ?
        placeholder.style.bottom = "1.5rem" :
        placeholder.style.bottom = "2.65rem";
})

$("#contact form button").on("click", () => {
    if (username.val() === "" || email.val() === "" || textarea.val() === "") {
        msg.html("All fields are required");
        msg.removeClass("alert-success");
        msg.addClass("alert-danger");
    } else {
        msg.html("Message sent!");
        msg.removeClass("alert-danger");
        msg.addClass("alert-success");
    }
})

// hire me section
const hireme = () => {
    $("#hireme").css({
        transform: "translateY(0rem)",
        transition: "1s"
    })
}

$("#hireme").on("click", () => {
    $("#hireme").css({
        transition: "1s",
        transform: "translateY(100rem)"
    })
})


// animation
AOS.init();