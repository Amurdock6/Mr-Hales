(function ($) {
    /*USE STRICT*/
    "use strict";
    
    /*Images Loader*/
        $(window).on('load', function() {
        $('.images-preloader').fadeOut();
        });
    /* End Images Loader*/

    /* Masonry Section */
    $(window).on('load', function() {
        var $grid = $('.grid').masonry({
            itemSelector: '.grid-item',
            percentPosition: true,
            columnWidth: '.grid-sizer',
        });
    });
    /* End Masonry Section */

    /*noUiSlider*/
    var marginSlider = document.getElementById('slider-margin');
    if (marginSlider != undefined) {
        noUiSlider.create(marginSlider, {
            start: [ 2, 50 ],
            margin: 0,
            connect: true,
            range: {
                'min': 2,
                'max': 50
            }
        });

        /*Show the slider value*/
        var marginMin = document.getElementById('slider-margin-value-min'),
        marginMax = document.getElementById('slider-margin-value-max');

        marginSlider.noUiSlider.on('update', function ( values, handle ) {
            if ( handle ) {
                marginMax.innerHTML = values[handle];
            } else {
                marginMin.innerHTML = values[handle];
            }
        });
    }
    /*End noUiSlider*/

        var executed = false;
        var waypointSelector = $('.js-waypoint');
        if (waypointSelector) {
            waypointSelector.waypoint(function () {
                if (!executed) {
                    executed = true;
                    /*progress bar*/
                    $('.au-progress-1 .au-progress-bar').progressbar({
                        update: function (current_percentage, $this) {
                            $this.find("span").html(current_percentage + '%');
                        }
                    });

                    /*progress bar*/
                    $('.au-progress-3 .au-progress-bar').progressbar({
                        update: function (current_percentage, $this) {
                            $this.find("span").html(current_percentage + '%');
                        }
                    });

                    /*progress bar*/
                    $('.au-progress-2 .au-progress-bar').progressbar({
                        update: function (current_percentage, $this) {
                            $this.find("span").html(current_percentage + '%');
                            var $circle = $this.find(".bar-color");
                            var offset = $circle.attr('stroke-dashoffset');
                            var pct = offset - (offset * current_percentage) / 100 + 10;
                            $circle.css('stroke-dashoffset', pct);
                        }
                    });

                }
            }, {offset: 'bottom-in-view'});
        }


    /*Couter up*/
        var counterUp = $(".counterUp");
        if (counterUp) {
            counterUp.counterUp({
                delay: 10,
                time: 1000
            });
        }

    /*Isotope Section*/
    $(window).on('load', function() {
        var $topeContainer = $('.isotope-grid');
        var $filter = $('.filter-tope-group');

        /*filter items on button click*/
        $filter.each(function () {
            $filter.on('click', 'li span', function () {
                var filterValue = $(this).attr('data-filter');
                $topeContainer.isotope({filter: filterValue});
            });
            var $buttonGroup = $('.filter-tope-group');
            $buttonGroup.on('click', 'li', function () {
                $buttonGroup.find('.active').removeClass('active');
                $(this).addClass('active');
            });
        });
        /*init Isotope*/
        var $grid = $topeContainer.each(function () {
            $(this).isotope({
                itemSelector: '.isotope-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.isotope-item'
                }
            });
        });
    });
    /*End Isotope Section*/

    /*Search Box*/
    $('body').on('click', function(event) {
        $(this).find('.search-button .search-form input').fadeOut();
    });
    $('.search-button .search-form .search-icon').on('click', function(event) {
        $(this).parent().find('input').fadeToggle();
        event.stopPropagation(); //ko tính click body
    });
    $('.search-button .search-form input').on('click', function(event) {
        $(this).fadeIn();
        event.stopPropagation();
    });
    /*End Search Box*/

    
            /*MatchHeight*/
        var matchHeigh = $('.matchHeigh');
        if (matchHeigh) {
            matchHeigh.matchHeight();
        }

    // Fancybox
    $('a.gallery-elements').fancybox({
        'transitionIn'  :   'elastic',
        'transitionOut' :   'elastic',
        'speedIn'       :   500, 
        'speedOut'      :   500, 
        'overlayShow'   :   false,
        'width'         : 700,
        'autoDimensions' : false,
        'centerOnScroll' : true
    });
    // End Fancybox

    /*Mobile Menu*/
    /*Hamburger Button*/
    $('.hamburger').on("click", function () {
        $(this).toggleClass("is-active");
        $('.au-navbar-mobile').slideToggle(200, 'linear');
    });
    /*Navbar menu dropdown*/
    $('.au-navbar-mobile .au-navbar-menu .drop .drop-link').on('click', function (e) {
        $(this).siblings('.drop-menu').slideToggle(200, 'linear');
        $(this).toggleClass('clicked');
        e.stopPropagation();
    });
    /*End Mobile Menu*/

    /*Back To Top Button*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
          $('#back-to-top').fadeIn('slow');
        } else {
          $('#back-to-top').fadeOut('slow');
        }
      });
    $('#back-to-top').on( 'click', function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });     
    /*End Back To Top Button*/

    /*Header Scroll*/
    /*Fixed Navbar When Scroll*/
   /* var navbarFixed = $("#js-navbar-fixed");
    var headerOffset = navbarFixed.offset().top + 0;
    $(window).on('scroll',function () {
        if ($(window).scrollTop() > headerOffset) {
            navbarFixed.addClass('fixed').removeClass("unfixed");
        } else {
            navbarFixed.addClass('unfixed').removeClass("fixed");
        }
    });
	*/
	
	window.onscroll = function() {
	  navbarFun()
	};

	var navbar = document.getElementById("#js-navbar-fixed");
	var sticky = navbar.offsetTop;

	function navbarFun() {
	  if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	  } else {
		navbar.classList.remove("sticky");
	  }
	}
	
	
	
	
    /*End Header Scroll*/

    /*Client Section hp-1*/
    $('#client-hp-1').owlCarousel({
        items:2,
        loop:false,
        margin: 30,
        nav:true,
        slideSpeed: 300,
        panigationSpeed: 400,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            576:{
                items:2
                
            },
            992:{
                items:2
            }
        }
    });
    /*End Client Blog Section hp-1*/

    /*Services Section hp-1*/
    $('#services-hp-1').owlCarousel({
        items:3,
        loop:false,
        margin: 30,
        nav:true,
        navText: [ 
            "<i class='la la-angle-left'></i>",
            "<i class='la la-angle-right'></i>"],
        slideSpeed: 300,
        panigationSpeed: 400,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            576:{
                items:2
                
            },
            992:{
                items:3
            }
        }
    });
    /* End Services Blog Section hp-1*/

    /*Services Section hp-2*/
    $('#services-hp-2').owlCarousel({
        items:4,
        loop:false,
        margin: 30,
        nav:true,
        slideSpeed: 300,
        panigationSpeed: 400,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            576:{
                items:2
                
            },
            992:{
                items:4
            }
        }
    });
    /* End Services Blog Section hp-2*/

    /*Testimonials Section hp-2*/
    $('#client-hp-2').owlCarousel({
        items:3,
        loop:false,
        margin: 30,
        nav:true,
        slideSpeed: 300,
        panigationSpeed: 400,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            768:{
                items:2
                
            },
            1200:{
                items:3
            }
        }
    });
    /*End Testimonials Section hp-2*/

    /*Car Type Section hp-2*/
    $('#car-type').owlCarousel({
        items:4,
        loop:false,
        margin: 30,
        nav:true,
        navText: [ 
            "<i class='la la-arrow-left'></i>",
            "<i class='la la-arrow-right'></i>"],
        slideSpeed: 300,
        panigationSpeed: 400,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            576:{
                items:2
                
            },
            992:{
                items:4
            }
        }
    });
    /* End Car Type Section hp-2*/

    /*Testimonials Section hp-4*/
    $('#our-team-hp-4').owlCarousel({
        items:3,
        loop:false,
        margin: 30,
        nav:true,
        slideSpeed: 300,
        panigationSpeed: 400,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            768:{
                items:2
                
            },
            992:{
                items:3
            }
        }
    });
    /*End Testimonials Section hp-4*/

    /*Our Team Section of About Us Page*/
    $('#our-team').owlCarousel({
        items:3,
        loop:false,
        margin: 30,
        nav:true,
        slideSpeed: 300,
        panigationSpeed: 400,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            576:{
                items:2
                
            },
            992:{
                items:3
            }
        }
    });
    /*End Our Team Section of About Us Page*/

    /*Slider Revolution For Hp-1*/
    /* initialize the slider based on the Slider's ID attribute FROM THE WRAPPER above */
        jQuery('#rev_slider_1').show().revolution({

            responsiveLevels: [1200, 992, 768, 576],

            gridheight:[512, 512, 750, 950],
                
            /* [DESKTOP, LAPTOP, TABLET, SMARTPHONE] */         
            navigation: {

                arrows: {
                    enable: true,
                    style: 'zeus',
                    tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
                    hide_onleave: false,
                    hide_onmobile: true,
                    hide_under: 576,

                },

                bullets: {
                    enable: true,
                    style: 'uranus',
                    tmp: '<span class="tp-bullet-inner"></span>',
                    hide_onleave: false,
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 20,
                    space: 5
                }
            }
        });   
    /*End Slider Revolution For Hp-1*/  

    /*Slider Revolution For Hp-2*/
    /* initialize the slider based on the Slider's ID attribute FROM THE WRAPPER above */
        jQuery('#rev_slider_2').show().revolution({

            responsiveLevels: [1200, 992, 768, 576],

            gridheight:[524, 524, 750, 950],
                
            /* [DESKTOP, LAPTOP, TABLET, SMARTPHONE] */         
            navigation: {

                arrows: {
                    enable: true,
                    style: 'zeus',
                    tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
                    hide_onleave: false,
                    hide_onmobile: true,
                    hide_under: 576,

                },

                bullets: {
                    enable: true,
                    style: 'uranus',
                    tmp: '<span class="tp-bullet-inner"></span>',
                    hide_onleave: false,
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 20,
                    space: 5
                }
            }
        });   
    /*End Slider Revolution For Hp-2*/  

        /*Slider Revolution For Hp-3*/
    /* initialize the slider based on the Slider's ID attribute FROM THE WRAPPER above */
        jQuery('#rev_slider_3').show().revolution({

            responsiveLevels: [1400, 1200, 992, 768],

            gridheight:[748, 748, 850, 1050],
                
            /* [DESKTOP, LAPTOP, TABLET, SMARTPHONE] */         
            navigation: {

                arrows: {
                    enable: true,
                    style: 'zeus',
                    tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
                    hide_onleave: false,
                    hide_onmobile: true,
                    hide_under: 576,

                },

                bullets: {
                    enable: true,
                    style: 'uranus',
                    tmp: '<span class="tp-bullet-inner"></span>',
                    hide_onleave: false,
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 20,
                    space: 5
                }
            }
        });   
    /*End Slider Revolution For Hp-3*/  

    /*Slider Revolution For Hp-4*/
    /* initialize the slider based on the Slider's ID attribute FROM THE WRAPPER above */
        jQuery('#rev_slider_4').show().revolution({

            responsiveLevels: [1200, 992, 768, 576],

            gridheight:[500, 500, 750, 950],
                
            /* [DESKTOP, LAPTOP, TABLET, SMARTPHONE] */         
            navigation: {

                arrows: {
                    enable: true,
                    style: 'zeus',
                    tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
                    hide_onleave: false,
                    hide_onmobile: true,
                    hide_under: 576,

                },

                bullets: {
                    enable: true,
                    style: 'uranus',
                    tmp: '<span class="tp-bullet-inner"></span>',
                    hide_onleave: false,
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 20,
                    space: 5
                }
            }
        });   
    /*End Slider Revolution For Hp-4*/  

    /*Slider Revolution For Hp-5*/
    /* initialize the slider based on the Slider's ID attribute FROM THE WRAPPER above */
        jQuery('#rev_slider_5').show().revolution({

            responsiveLevels: [1200, 992, 768, 576],

            gridheight:[760, 760, 850, 1050],
                
            /* [DESKTOP, LAPTOP, TABLET, SMARTPHONE] */         
            navigation: {

                arrows: {
                    enable: true,
                    style: 'zeus',
                    tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
                    hide_onleave: false,
                    hide_onmobile: true,
                    hide_under: 576,

                },

                bullets: {
                    enable: true,
                    style: 'uranus',
                    tmp: '<span class="tp-bullet-inner"></span>',
                    hide_onleave: false,
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 20,
                    space: 5
                }
            }
        });   
    /*End Slider Revolution For Hp-5*/  

    /*Slider Revolution For Hp-5*/
    /* initialize the slider based on the Slider's ID attribute FROM THE WRAPPER above */
        jQuery('#rev_slider_6').show().revolution({

            responsiveLevels: [1200, 992, 768, 576],

            gridheight:[740, 740, 800, 950],
                
            /* [DESKTOP, LAPTOP, TABLET, SMARTPHONE] */         
            navigation: {

                arrows: {
                    enable: true,
                    style: 'zeus',
                    tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
                    hide_onleave: false,
                    hide_onmobile: true,
                    hide_under: 576,

                },

                bullets: {
                    enable: true,
                    style: 'uranus',
                    tmp: '<span class="tp-bullet-inner"></span>',
                    hide_onleave: false,
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 20,
                    space: 5
                }
            }
        });   
    /*End Slider Revolution For Hp-5*/ 

    /*Our Services Section hp-6 --- change color og image*/
    $('.services-hp-6-section .services-content').on('mouseenter', function(){
        var currentSrc = $(this).find('img').attr('src');
        var activeSrc = currentSrc.replace('hp-2','hp-1');
        $(this).find('img').attr('src', activeSrc);
        console.log('mouseenter');
    });

    $('.services-hp-6-section .services-content').on('mouseleave', function(){
        var newSrc = $(this).find('img').attr('src');
        var oldSrc = newSrc.replace('hp-1','hp-2');
        $(this).find('img').attr('src', oldSrc);  
        console.log('mouseleave');    
    });
    /*End Our Services Section hp-6*/

    /*Our Services Section hp-3 --- change color og image*/
    $('.services-section-hp-3 .services-content').on('mouseenter', function(){
        var currentSrc = $(this).find('img').attr('src');
        var activeSrc = currentSrc.replace('blue','while');
        $(this).find('img').attr('src', activeSrc);
    });

    $('.services-section-hp-3 .services-content').on('mouseleave', function(){
        var newSrc = $(this).find('img').attr('src');
        var oldSrc = newSrc.replace('while','blue');
        $(this).find('img').attr('src', oldSrc);
    });
    /*End Our Services Section hp-3*/

    /*Shipping Calculator of Shopping Cart Page*/
    $(".shipping-calculator-form").hide();
    $(".shipping-calculator-button").on('click',function(){
        $(".shipping-calculator-form").slideToggle();
    });
    /*End Shipping Calculator of Shopping Cart Page*/


})(jQuery);
