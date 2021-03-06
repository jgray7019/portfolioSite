
const portfolio = {};

//Portfolio Initialize
portfolio.init = function () {
	portfolio.consoleWelcome();
	portfolio.scroll();
  portfolio.menu();
  portfolio.menuLinkClick();

};

portfolio.menu = function() {
    $('.hamburger').on('click', function(){
      // toggle class overlay on the menu
        $('.header__nav').toggleClass('overlay');

        // toggle class show on the ul inside of the menu
        $('.header__nav ul').toggleClass('show');
   	})
};

portfolio.menuLinkClick = function() {
    $('.header__nav li').on('click', function(){

        $('.header__nav').removeClass('overlay');

        $('.header__nav ul').removeClass('show');

    })
};

portfolio.scroll = function() {

   $('.home-scroll').on('click', function(e) {
    e.preventDefault;

   	   $('html,body').animate({
         scrollTop: $("html").offset().top},
         'slow');
    });

   $('.about-scroll').on('click', function(e) {
       e.preventDefault;

       $('html,body').animate({
            scrollTop: $(".aboutMe").offset().top},
            'slow');
   });

   $('.projects-scroll').on('click', function(e) {
       e.preventDefault;

       $('html,body').animate({
            scrollTop: $(".projects").offset().top},
            'slow');
   });

   $('.skills-scroll').on('click', function(e) {
       e.preventDefault;

       $('html,body').animate({
            scrollTop: $(".skills").offset().top},
            'slow');
   });

   $('.contact-scroll').on('click', function(e) {
       e.preventDefault;

       $('html,body').animate({
            scrollTop: $("footer").offset().top},
            'slow');

   });

   $('.header__btn').on('click', function(e) {
       e.preventDefault;

       $('html,body').animate({
            scrollTop: $(".aboutMe").offset().top},
            'slow');
   });
};


portfolio.consoleWelcome = function () {
	console.log('Hi! Welcome to my site! Feel free to contact me at hello@jennifergray.ca');
};


// doc ready to run init
$(function () {
	portfolio.init();
});