/*
 * Tugas Pemrograman Web lanjutan
 * Pendidikan Teknik Informatika

 * Arif Puji Nugroho - Ketua Kelompok Web Lanjutan (HTML + CSS)
 * Mitchell - Kelompok Pemrograman Web lanjutan (HTML + Javascript)
 * Chiva - Kelompok Pemrograman Web Lanjutan (Design Mock Up + CSS)
 * W3School Reference
 * Bootstrap v3.3.7
 * Animate -http://daneden.me/animate
 * Link https://W3School.com || https://getbootstrap.com
 */

$( document ).ready(function() {
    $("#modal-first").modal('show');
     });


(function($) {
"use strict";
    function subpages_resize() {
        var subpagesHeight = $('.pt-page-current').height();
        $(".subpages").height(subpagesHeight + 50);
    }
    
  
    function mobileMenuHide() {
        var windowWidth = $(window).width();
        if (windowWidth < 1024) {
            $('#site_header').addClass('mobile-menu-hide');
        }
    }

    $(window)
        .on('load', function() { 
            $(".preloader").fadeOut("slow");

            var ptPage = $('.subpages');
            if (ptPage[0]) {
                PageTransitions.init({
                    menu: 'ul.site-main-menu',
                });
            }
        })
        .on('resize', function() { 
             mobileMenuHide();

             setTimeout(function(){
                subpages_resize();
            }, 500);
        })
        .scroll(function () {
            if ($(window).scrollTop() < 20) {
                $('.header').removeClass('sticked');
            } else {
                $('.header').addClass('sticked');
            }
        })
        .scrollTop(0);



    $(document).on('ready', function() {
        var $portfolio_container = $("#portfolio-grid");

        $portfolio_container.imagesLoaded(function () {
            setTimeout(function(){
                portfolio_init(this);
            }, 500);
        });

        $(' #portfolio_grid > figure ').each( function() { $(this).hoverdir(); } );

  
        setTimeout(function(){
            var $container = $(".blog-masonry");
            $container.masonry();
        }, 500);

        $('.menu-toggle').on("click", function () {
            $('#site_header').toggleClass('mobile-menu-hide');
        });

        $('.site-main-menu').on("click", "a", function (e) {
            mobileMenuHide();
        });

        $('.sidebar-toggle').on("click", function () {
            $('#blog-sidebar').toggleClass('open');
        });

        $(".testimonials.owl-carousel").owlCarousel({
            nav: true, 
            items: 3,
            loop: false,
            navText: false,
            margin: 25,
            responsive : {
            
                0 : {
                    items: 1,
                },
                
                480 : {
                    items: 1,
                },
                
                768 : {
                    items: 2,
                },
                1200 : {
                    items: 2,
                }
            }
        });


        
        $('.text-rotation').owlCarousel({
            loop: true,
            dots: false,
            nav: false,
            margin: 0,
            items: 1,
            autoplay: true,
            autoplayHoverPause: false,
            autoplayTimeout: 3800,
            animateOut: 'zoomOut',
            animateIn: 'zoomIn'
        });

        
        $('body').magnificPopup({
            delegate: 'a.lightbox',
            type: 'image',
            removalDelay: 300,

            mainClass: 'mfp-fade',
            image: {
                titleSrc: 'title',
                gallery: {
                    enabled: true
                },
            },

            iframe: {
                markup: '<div class="mfp-iframe-scaler">'+
                        '<div class="mfp-close"></div>'+
                        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                        '<div class="mfp-title mfp-bottom-iframe-title"></div>'+
                      '</div>', 

                patterns: {
                    youtube: {
                      index: 'youtube.com/', 
                      id: null, 
                      src: '%id%?autoplay=1' 
                    },
                    vimeo: {
                      index: 'vimeo.com/',
                      id: '/',
                      src: '//player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                      index: '//maps.google.',
                      src: '%id%&output=embed'
                    }
                },

                srcAction: 'iframe_src', 
            },

            callbacks: {
                markupParse: function(template, values, item) {
                 values.title = item.el.attr('title');
                }
            },
        });

        $('.ajax-page-load-link').magnificPopup({
            type: 'ajax',
            removalDelay: 300,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true
            },
        });

        
        $('.form-control')
            .val('')
            .on("focusin", function(){
                $(this).parent('.form-group').addClass('form-group-focus');
            })
            .on("focusout", function(){
                if($(this).val().length === 0) {
                    $(this).parent('.form-group').removeClass('form-group-focus');
                }
            });
    });

})(jQuery);
