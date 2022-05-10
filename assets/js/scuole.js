/* JS include */

// @codekit-append "functions.js";


/* Functions */

// Minified version of isMobile included in the HTML since it's small
(function () {var a={};var f=/iPhone/i,h=/iPod/i,i=/iPad/i,r=/\biOS-universal(?:.+)Mac\b/i,g=/\bAndroid(?:.+)Mobile\b/i,j=/Android/i,c=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,d=/Silk/i,b=/Windows Phone/i,k=/\bWindows(?:.+)ARM\b/i,m=/BlackBerry/i,n=/BB10/i,o=/Opera Mini/i,p=/\b(CriOS|Chrome)(?:.+)Mobile/i,q=/Mobile(?:.+)Firefox\b/i;function s(l){return function($){return $.test(l)}}function e(l){var $=(l=l||("undefined"!=typeof navigator?navigator.userAgent:"")).split("[FBAN");void 0!==$[1]&&(l=$[0]),void 0!==($=l.split("Twitter"))[1]&&(l=$[0]);var a=s(l),e={apple:{phone:a(f)&&!a(b),ipod:a(h),tablet:!a(f)&&a(i)&&!a(b),universal:a(r),device:(a(f)||a(h)||a(i))&&!a(b)},amazon:{phone:a(c),tablet:!a(c)&&a(d),device:a(c)||a(d)},android:{phone:!a(b)&&a(c)||!a(b)&&a(g),tablet:!a(b)&&!a(c)&&!a(g)&&(a(d)||a(j)),device:!a(b)&&(a(c)||a(d)||a(g)||a(j))||a(/\bokhttp\b/i)},windows:{phone:a(b),tablet:a(k),device:a(b)||a(k)},other:{blackberry:a(m),blackberry10:a(n),opera:a(o),firefox:a(q),chrome:a(p),device:a(m)||a(n)||a(o)||a(q)||a(p)},any:!1,phone:!1,tablet:!1};return e.any=e.apple.universal||e.apple.device||e.android.device||e.windows.device||e.other.device,e.phone=e.apple.phone||e.android.phone||e.windows.phone,e.tablet=e.apple.tablet||e.android.tablet||e.windows.tablet,e}a=e();if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=a}else if(typeof define==="function"&&define.amd){define(function(){return a})}else{this["isMobile"]=a}})();


/* Responsive DOM */
var $movenav = jQuery('#sub-nav .nav-list');
$movenav.responsiveDom({
    appendTo: '.nav-list-mobile',
    mediaQuery: '(max-width: 1200px)'
});
var $usermenu = jQuery('.menu-user-wrapper');
$usermenu.responsiveDom({
    appendTo: '.menu-user-mobile',
    mediaQuery: '(max-width: 1200px)'
});
var $description = jQuery('.article-description');
$description.responsiveDom({
    appendTo: '.article-description-mobile',
    mediaQuery: '(max-width: 768px)'
});
var $searchfilters = jQuery('.search-results-filters');
$searchfilters.responsiveDom({
    appendTo: '.search-results-filters-mobile',
    mediaQuery: '(max-width: 992px)'
});
/* End Transport Responsive DOM */

/* jPush Menu */
jQuery(document).ready(function($) {
	jQuery('.toggle-menu').jPushMenu({
		closeOnClickLink: false,
    activeClass: 'is-active'
	});
  jQuery('.menu-mobile-close').click(function(){
    jQuery('.push-body').removeClass('push-body-search');
    jQuery('.push-body').removeClass('push-body-toleft');
    jQuery('.push-body').removeClass('push-body-toright');
    jQuery('.cbp-spmenu-search').removeClass('menu-open');
  });
  jQuery(document).on('click',function() {
    jQuery('.push-body').removeClass('push-body-search');
    jQuery('.push-body').removeClass('push-body-toleft');
    jQuery('.push-body').removeClass('push-body-toright');
    jQuery('.cbp-spmenu-search').removeClass('menu-open');
  });
});
/* End jPush Menu */

/* Perfect Scrollbar */
jQuery(document).ready(function ($) {
    jQuery('.perfect-scrollbar').perfectScrollbar();

    let sidebar = jQuery('.map-aside');
    if ( isMobile.any ) {
        sidebar.height( 'auto');
    } else {
        sidebar.perfectScrollbar();
    }
});
/* End Perfect Scrollbar */

/* Responsive Multilevel Menu */
/* jQuery(document).ready(function ($) {
	jQuery( '.dl-menuwrapper' ).dlmenu();
}); */
/* End Responsive Multilevel Menu */

/* Sticky Header */
jQuery(document).ready(function() {
  function sticky_relocate() {
    var window_top = jQuery(window).scrollTop();
    var div_top = jQuery('#main-wrapper').offset().top;
    if (window_top > div_top) {
      jQuery('#main-header').addClass('is-sticky');
      jQuery('#main-wrapper').addClass('sticked-menu');
      jQuery('body').addClass('sticked-menu-body');
    } else {
      jQuery('#main-header').removeClass('is-sticky');
      jQuery('#main-wrapper').removeClass('sticked-menu');
      jQuery('body').removeClass('sticked-menu-body');
    }
  }
  jQuery(function() {
    jQuery(window).scroll(sticky_relocate);
    sticky_relocate();
  });
});
/* End Sticky Header */

/* Main Menu */
jQuery(document).ready(function() {
  if (jQuery(".nav-list").length) {
    jQuery(".nav-list .toggle-dropdown").on("click", function(e){
      if ( jQuery(this).next(".menu-dropdown").hasClass("active") ) {
        jQuery(this).next(".menu-dropdown").slideUp(100);
        jQuery(this).next(".menu-dropdown").removeClass("active");
        jQuery(this).removeClass("active");
      } else {
        jQuery(this).parent().parent().find('.toggle-dropdown').removeClass('active');
        jQuery(this).addClass("active");
        jQuery(this).parent().parent().find('.menu-dropdown').removeClass('active');
        jQuery(this).parent().parent().find('.menu-dropdown').slideUp(100);
        jQuery(this).next(".menu-dropdown").slideDown(100);
        jQuery(this).next(".menu-dropdown").addClass("active");
      }
      e.stopPropagation();
      e.preventDefault();
    });
    jQuery(document).click(function (e) {
      jQuery('.menu-dropdown').slideUp(100);
      jQuery('.menu-dropdown').removeClass('active');
      jQuery('.toggle-dropdown').removeClass('active');
    });
    jQuery('.menu-dropdown').click(function (e) {
      e.stopPropagation();
    });
  }
});
/* End Main Menu */

/* Mobile Menu Back Text */
/* jQuery(document).ready(function() {
  if (jQuery(".dl-menuwrapper").length) {
    jQuery(".dl-menu .toggle-dropdown").on("click", function(){
      jQuery(".dl-back a").replaceWith('<a href="#">' + jQuery(this).text() + '</a>');
    });
    jQuery(".dl-back").on("click", function(){
      jQuery(".dl-back a").replaceWith('<a href="#">' + jQuery(this).parent().parent().parent().prev('.toggle-dropdown').text() + '</a>');
    });
  }
}); */
/* End Mobile Menu Back Text */

/* Scroll Anchor Offset */
jQuery(function() {
  jQuery('.scroll-anchor-offset').bind('click',function(event){
    var $anchor = jQuery(this);
      jQuery('html, body').stop().animate({
        scrollTop: jQuery($anchor.attr('href')).offset().top -150
      }, 200,'easeInOutExpo');
    event.preventDefault();
  });
});
/* End Scroll Anchor Offset */

/* Accordion */
jQuery(document).ready(function() {
  if (jQuery(".accordion-wrapper").length) {
    accordion();
  }
});
/* End Accordion */

/* Carousel */
jQuery(document).ready(function($) {
  jQuery('.carousel-simple').owlCarousel({
		nav: true,
        navElement: 'button type="button" role="presentation" aria-label="button"',
        navText: ['<svg class="svg-arrow-circular-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-arrow-circular-left"></use></svg>','<svg class="svg-arrow-circular-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-arrow-circular-right"></use></svg>'],
		dots: false,
		margin: 30,
		loop: false,
		autoplay: false,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
			items: 1,
			stagePadding: 0,
      dots: true,
      margin: 0,
      nav: false,
			},
      576: {
			items: 1,
			stagePadding: 0,
      dots: true,
      margin: 0,
      nav: false,
			},
			768: {
			items: 2,
			stagePadding: 0,
      dots: true,
      nav: false,
			},
      992: {
			items: 2,
			stagePadding: 0,
      dots: true,
      nav: false,
      },
			1400: {
			items: 2,
			stagePadding: 0,
			}
		}
  });
  jQuery('.carousel-simple-pager').owlCarousel({
		nav: false,
        navElement: 'button type="button" role="presentation" aria-label="button"',
        navText: ['<svg class="svg-arrow-circular-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-arrow-circular-left"></use></svg>','<svg class="svg-arrow-circular-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-arrow-circular-right"></use></svg>'],
		dots: true,
		margin: 30,
		loop: false,
		autoplay: false,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
			items: 1,
			stagePadding: 0,
      margin: 0,
			},
      576: {
			items: 1,
			stagePadding: 0,
      margin: 0,
			},
			768: {
			items: 2,
			stagePadding: 0,
			},
      992: {
			items: 2,
			stagePadding: 0,
      },
			1400: {
			items: 2,
			stagePadding: 0,
			}
		}
  });
  jQuery('.carousel-single').owlCarousel({
		nav: true,
        navElement: 'button type="button" role="presentation" aria-label="button"',
		navText: ['<svg class="svg-arrow-circular-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-arrow-circular-left"></use></svg>','<svg class="svg-arrow-circular-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-arrow-circular-right"></use></svg>'],
		dots: false,
		margin: 30,
		loop: false,
		autoplay: false,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
			items: 1,
			stagePadding: 0,
      dots: true,
      margin: 0,
      nav: false,
			},
      576: {
			items: 1,
			stagePadding: 0,
      dots: true,
      margin: 0,
      nav: false,
			},
			768: {
			items: 1,
			stagePadding: 0,
      dots: true,
      nav: false,
			},
      992: {
			items: 1,
			stagePadding: 0,
      dots: true,
      nav: false,
      },
			1400: {
			items: 1,
			stagePadding: 0,
      dots: true,
			}
		}
  });
  jQuery('.carousel-double').owlCarousel({
		nav: true,
        navElement: 'button type="button" role="presentation" aria-label="button"',
		navText: ['<svg class="svg-arrow-circular-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-arrow-circular-left"></use></svg>','<svg class="svg-arrow-circular-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-arrow-circular-right"></use></svg>'],
		dots: false,
		margin: 30,
		loop: false,
		autoplay: false,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
			items: 1,
			stagePadding: 0,
      dots: true,
      margin: 0,
      nav: false,
			},
      576: {
			items: 1,
			stagePadding: 0,
      dots: true,
      margin: 0,
      nav: false,
			},
			768: {
			items: 1,
			stagePadding: 0,
      dots: true,
      nav: false,
			},
      992: {
			items: 2,
			stagePadding: 0,
      dots: true,
      nav: false,
      },
			1400: {
			items: 2,
			stagePadding: 0,
      dots: true,
			}
		}
  });
  jQuery('.carousel-large').owlCarousel({
		nav: true,
        navElement: 'button type="button" role="presentation" aria-label="button"',
		navText: ['<svg class="svg-arrow-circular-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-arrow-circular-left"></use></svg>','<svg class="svg-arrow-circular-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-arrow-circular-right"></use></svg>'],
		dots: false,
		margin: 24,
		loop: false,
		autoplay: false,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
			items: 1,
			stagePadding: 0,
      dots: true,
      margin: 0,
      nav: false,
			},
      576: {
			items: 2,
			stagePadding: 0,
      dots: true,
      nav: false,
			},
			768: {
			items: 3,
			stagePadding: 0,
      dots: true,
      nav: false,
			},
      992: {
			items: 3,
			stagePadding: 0,
      dots: true,
      nav: false,
      },
			1400: {
			items: 3,
			stagePadding: 0,
			}
		}
  });

  calendaryears = jQuery(".carousel-calendar-years");
  calendarevents = jQuery(".carousel-calendar");

  calendaryears.on('change.owl.carousel', function(event) {
    if (event.namespace && event.property.name === 'position') {
      var target = event.relatedTarget.relative(event.property.value, true);
      calendarevents.owlCarousel('to', target, 500, true);
    }
  })

  calendaryears.owlCarousel({
    nav: true,
    navElement: 'button type="button" role="presentation" aria-label="button"',
    navText: ['<svg class="svg-arrow-circular-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-arrow-circular-left"></use></svg>','<svg class="svg-arrow-circular-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-arrow-circular-right"></use></svg>'],
    center: false,
    items: 2,
    loop: false,
    dots: false,
    margin: 0,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

  calendarevents.owlCarousel({
    nav: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    center: false,
    items: 2,
    loop: false,
    dots: false,
    margin: 30,
    lazyLoad: true,

    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

  function brandSliderClasses() {
    calendaryears.each(function() {
      var total = jQuery(this).find('.owl-item.active').length;
      jQuery(this).find('.owl-item').removeClass('firstactiveitem');
      jQuery(this).find('.owl-item').removeClass('lastactiveitem');
      jQuery(this).find('.owl-item.active').each(function(index) {
        if (index === 0) {
          jQuery(this).addClass('firstactiveitem')
        }
        if (index === 1) {
          jQuery(this).addClass('lastactiveitem')
        }
      })
    })
  }
  brandSliderClasses();
  calendaryears.on('translated.owl.carousel', function(event) {
    brandSliderClasses()
  });



  jQuery(function() {
    var owl = jQuery('.carousel-cards'),
    owlOptions = {
      nav: false,
      navElement: 'button type="button" role="presentation" aria-label="button"',
      navText: ['<svg class="svg-arrow-circular-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-arrow-circular-left"></use></svg>','<svg class="svg-arrow-circular-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-arrow-circular-right"></use></svg>'],
      dots: false,
      margin: 30,
      loop: false,
      autoplay: false,
      responsive: {
        0: {
        items: 1,
        stagePadding: 40,
        loop: true,
        center: false,
        dots: true,
        },
        576: {
        items: 2,
        stagePadding: 40,
        loop: true,
        center: false,
        dots: true,
        },
        768: {
        items: 2,
        stagePadding: 0,
        loop: true,
        center: false,
        dots: true,
        },
        1200: {
        items: 3,
        stagePadding: 0,
        }
      }
    };

    if ( jQuery(window).width() < 1200 ) {
      var owlActive = owl.owlCarousel(owlOptions);
    } else {
      owl.addClass('off');
    }

    jQuery(window).resize(function() {
      if ( jQuery(window).width() < 1200 ) {
        if ( jQuery('.carousel-cards').hasClass('off') ) {
          var owlActive = owl.owlCarousel(owlOptions);
          owl.removeClass('off');
        }
      } else {
        if ( !jQuery('.carousel-cards').hasClass('off') ) {
          owl.addClass('off').trigger('destroy.owl.carousel');
          owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
        }
      }
    });
  });
  
  
  jQuery('.carousel-hours').owlCarousel({
		nav: true,
        navElement: 'button type="button" role="presentation" aria-label="button"',
		navText: ['<svg class="svg-arrow-circular-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-arrow-circular-left"></use></svg>','<svg class="svg-arrow-circular-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-arrow-circular-right"></use></svg>'],
		dots: false,
		margin: 25,
		loop: false,
		autoplay: false,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
			items: 1,
      stagePadding: 80,
      margin: 10,
			},
      576: {
			items: 2,
      stagePadding: 120,
			},
			768: {
			items: 2,
      stagePadding: 120,
			},
      992: {
			items: 2,
      stagePadding: 120,
      },
			1200: {
			items: 3,
			stagePadding: 200,
			}
		}
  });

});
/* End Carousel */

/* Responsive Tabs */
jQuery('.responsive-tabs').responsiveTabs({
  startCollapsed: 'accordion'
});
/* End Responsive Tabs */

/* FitVids */
jQuery(document).ready(function(){
  jQuery(".video-container ").fitVids();
});
/* End FitVids */

/* Sticky Sidebar */
jQuery(document).ready(function($) {
  if (jQuery(".sticky-sidebar").length) {
    var window_width = jQuery( window ).width();
    if (window_width < 992) {
      jQuery(".sticky-sidebar").trigger("sticky_kit:detach");
    } else {
      make_sticky();
    }
    jQuery( window ).resize(function() {
      window_width = jQuery( window ).width();
      if (window_width < 992) {
        jQuery(".sticky-sidebar").trigger("sticky_kit:detach");
      } else {
        make_sticky();
      }
    });
    function make_sticky() {
      jQuery(".sticky-sidebar").stick_in_parent({
				parent: ".sticky-sidebar-container",
        offset_top: 100
      });
      jQuery(".sticky-sidebar")
      .on("sticky_kit:bottom", function(e) {
          jQuery(this).parent().css("position", "static");
      })
      .on("sticky_kit:unbottom", function(e) {
          jQuery(this).parent().css("position", "relative");
      })
    }
  }
});
/* End Sticky Sidebar */

/* Simple Toggle */
jQuery(document).ready(function() {
  if (jQuery(".dropdown-toggle").length) {
    jQuery('.dropdown-toggle').click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      jQuery(this).toggleClass('active');
      jQuery(this).next('.dropdown-content').slideToggle(100);
    });
    jQuery(document).click(function (e) {
      jQuery('.dropdown-content').slideUp(100);
      jQuery('.dropdown-content').removeClass('active');
      jQuery('.dropdown-toggle').removeClass('active');
    });
  }
});
/* End Simple Toggle */

/* User Logged Sticky */
jQuery(document).ready(function() {
  function header_utils_sticky() {
    var window_top = jQuery(window).scrollTop();
    var div_top = jQuery('#main-wrapper').offset().top;
    if (window_top > div_top) {
      jQuery(".header-utils").appendTo(jQuery(".header-utils-sticky"));
      jQuery(".header-utils-wrapper").addClass("utils-moved");
      jQuery("#sub-nav .nav-list-primary").appendTo(jQuery(".sticky-main-nav"));
    } else {
      jQuery(".header-utils").appendTo(jQuery(".header-utils-wrapper"));
      jQuery(".header-utils-wrapper").removeClass("utils-moved");
      jQuery(".header-top .nav-list-primary").appendTo(jQuery("#sub-nav .nav-container"));
    }
  }
  jQuery(function() {
    jQuery(window).scroll(header_utils_sticky);
    header_utils_sticky();
  });
});
/* End User Logged Sticky */

/* Match Height */
jQuery(document).ready(function() {
  if (jQuery(".match-height").length) {
    jQuery(function() {
    	jQuery('.match-height').matchHeight();
    });
  }
});
/* Match Height */

/** custom **/
jQuery(document).ready(function() {
    let tabs = jQuery('.responsive-tabs');
    if(tabs.length > 0 ) {
        tabs.responsiveTabs('activate', 0);
    }
});

jQuery(document).ready(function() {
    var max_heigth = 0;
    jQuery('.dsi_more').each(function() {
        let id= jQuery(this).data('id');
        let obj_container = jQuery('#dsi_description_container_'+id);
        let height = obj_container.outerHeight();
        max_heigth = height > max_heigth ? height : max_heigth;
    });

    jQuery('.dsi_more').each(function() {
        let id= jQuery(this).data('id');
        let obj_description = jQuery('#dsi_description_'+id);
        let excerpt = obj_description.html();
        let obj_container = jQuery('#dsi_description_container_'+id);
        let dif = max_heigth - obj_description.outerHeight();
        obj_container.css('height', max_heigth + "px");

        jQuery(this).click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            let obj_more = jQuery(this);

            obj_description.html(excerpt.replace('...', '') + jQuery('#dsi_description_more_'+id).html());
            let container_height = obj_more.hasClass('show') ? obj_description.outerHeight()+dif : max_heigth;

            obj_container.animate({
                height: container_height
            }, {
                duration: 750,
                start: function () {
                    if (obj_more.hasClass('show')) {
                        obj_more.html('Nascondi');
                    }
                },
                complete: function () {
                    if (obj_more.hasClass('show')) {
                        obj_more.removeClass('show').addClass('hide');
                    } else {
                        obj_more.removeClass('hide').addClass('show');
                        obj_more.html('Visualizza altro');
                        obj_description.html(excerpt);
                    }
                }
            });
        });
    });
});