        ;
        (function($) {

          $('#recruit').on('click', function() {
            Swal.fire({
              imageUrl: 'dist/img/portfollo/recruit-f.png',
              showConfirmButton: false,
            })
          });
          $('#membercenter').on('click', function() {
            Swal.fire({
              imageUrl: 'dist/img/portfollo/membercenter-f.png',
              showConfirmButton: false,
            })
          });

          $('#vacancy').on('click', function() {
            Swal.fire({
              imageUrl: 'dist/img/portfollo/vacancy-f.png',
              showConfirmButton: false,
            })
          });

          $('#hr').on('click', function() {
            Swal.fire({
              imageUrl: 'dist/img/portfollo/hr-f.png',
              showConfirmButton: false,
            })
          });
          $('#kokokara').on('click', function() {
            Swal.fire({
              imageUrl: 'dist/img/portfollo/kokokara-f.png',
              showConfirmButton: false,
            })
          });
          $('#twkc').on('click', function() {
            Swal.fire({
              imageUrl: 'dist/img/portfollo/twkc-f.png',
              showConfirmButton: false,
            })
          });
          $('#123share').on('click', function() {
            Swal.fire({
              html: '<img class="img-responsive" src="dist/img/portfollo/123Share-1.png" alt="123 SHare App ReDesign"><img class="img-responsive" src="dist/img/portfollo/123Share-2.png" alt="123 SHare App ReDesign"><img class="img-responsive" src="dist/img/portfollo/123Share-3.png" alt="123 SHare App ReDesign">',
              showConfirmButton: false,
            })
          });
          $('#coupon').on('click', function() {
            Swal.fire({
              html: '<img class="img-responsive" src="dist/img/portfollo/ifansCouPon-1.png" alt="瘋折扣 App ReDesign"><img class="img-responsive" src="dist/img/portfollo/ifansCouPon-2.png" alt="瘋折扣 App ReDesign"><img class="img-responsive" src="dist/img/portfollo/ifansCouPon-3.png" alt="瘋折扣 App ReDesign">',
              showConfirmButton: false,
            })
          });
          $('#market').on('click', function() {
            Swal.fire({
              html: '<img class="img-responsive" src="dist/img/portfollo/market-1.png" alt="瘋市場 App ReDesign"><img class="img-responsive" src="dist/img/portfollo/market-2.png" alt="瘋市場 App ReDesign"><img class="img-responsive" src="dist/img/portfollo/market-3.png" alt="瘋市場 App ReDesign">',
              showConfirmButton: false,
            })
          });

          $('#myweb').on('click', function() {
            Swal.fire({
              html: '<img class="img-responsive" src="dist/img/portfollo/MyWeb-1.png" alt="MyWeb App ReDesign"><img class="img-responsive" src="dist/img/portfollo/MyWeb-2.png" alt="MyWeb App ReDesign"><img class="img-responsive" src="dist/img/portfollo/MyWeb-3.png" alt="MyWeb App ReDesign">',
              showConfirmButton: false,
            })
          });
          $('#onefix').on('click', function() {
            Swal.fire({
              html: '<img class="img-responsive" src="dist/img/portfollo/onefixCIS-01.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-02.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-03.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-04.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-05.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-06.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-07.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-08.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-09.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-10.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-11.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-12.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-13.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-14.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-15.png" alt="onefixCIS">',
              showConfirmButton: false,
            })
          });

          $.BcMain = {

            init: function() {

              $(document).ready(function(e) {

                // Extends jQuery
                $.BcMain.helpers.extendjQuery();

                // Detect Internet Explorer (IE)
                $.BcMain.helpers.detectIE();

                $.BcBackToGo.init('.js-go-to');

              });

              $(window).on('load', function(e) {

                scrollSpy('#redeMenu', {
                  sectionClass: '.scrollspy',
                  menuActiveTarget: '#redeMenu li a',
                  offset: 100
                });

                $('#reAside').mCustomScrollbar({
                  axis: "y"
                });

              });

            },

            components: {

              filterList: function() {

                $('#portfoliolist').mixItUp({
                  selectors: {
                    target: '.portfolio',
                    filter: '.filter'
                  },
                  load: {
                    filter: 'all' // show app tab on first load
                  }
                });
              },

            },

            helpers: {

              Math: {



              },


              /**
               * Extends basic jQuery functionality
               *
               * @return undefined
               */
              extendjQuery: function() {

                $.fn.extend({

                  /**
                   * Runs specified function after loading of all images.
                   *
                   * @return Deferred
                   */
                  imagesLoaded: function() {

                    var $imgs = this.find('img[src!=""]');

                    if (!$imgs.length) {
                      return $.Deferred().resolve().promise();
                    }

                    var dfds = [];

                    $imgs.each(function() {
                      var dfd = $.Deferred();
                      dfds.push(dfd);
                      var img = new Image();
                      img.onload = function() {
                        dfd.resolve();
                      };
                      img.onerror = function() {
                        dfd.resolve();
                      };
                      img.src = this.src;
                    });

                    return $.when.apply($, dfds);

                  }

                });

              },


              /**
               * Detect Internet Explorer (IE)
               *
               * @return version of IE or false, if browser is not Internet Explorer
               */

              detectIE: function() {

                var ua = window.navigator.userAgent;

                var msie = ua.indexOf('MSIE ');
                if (msie > 0) {
                  // IE 10 or older => return version number
                  var ieV = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
                  document.querySelector('body').className += 'ie ie' + ieV + ' ';
                }

                var trident = ua.indexOf('Trident/');
                if (trident > 0) {
                  // IE 11 => return version number
                  var rv = ua.indexOf('rv:');
                  var ieV = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
                  document.querySelector('body').className += 'ie ie' + ieV + ' ';
                }

                var edge = ua.indexOf('Edge/');
                if (edge > 0) {
                  // IE 12 (aka Edge) => return version number
                  var ieV = parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
                  document.querySelector('body').className += 'ie ie' + ieV + ' ';
                }

                // other browser
                return false;

              },

            },

            settings: {
              rtl: false
            }

          };

          $.BcMain.init();
          $.BcMain.components.filterList();

        })(jQuery);