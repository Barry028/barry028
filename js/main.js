// main.js 2019.12 
;
(function($) {

  $.Main = {

    init: function() {

      $(document).ready(function(e) {

        // Botostrap Tootltips
        $('[data-toggle="tooltip"]').tooltip();

        // Botostrap Popover
        // $('[data-toggle="popover"]').popover();
        $('#pluginBtn[data-toggle="popover"]').popover({
          html: true,
          content: `<ul id="plugin" class="ml-12 pt-8">
          <li>
            <b>1.</b> 常用類型：彈窗組件、延遲加載 <font class="text--lightgrey">(lazyload)</font>、無限滾動、滾動觸發動畫組件、暗黑模式切換<font class="text--lightgrey">(搭配 Scss & Css Variables)</font>、Go Top 組件、Youtube 截圖、數字三位一撇
          </li>
          <li>
            <b>2.</b> 佈局類型：滾動黏性盒子組件、自動產生監聽導航選單、Drowdown Menu 組件、產生代圖以及文字<font class="text--lightgrey">(用於大頭照｜Layout 說明)</font>
          </li>
          <li>
            <b>3.</b> 訊息類型：吐司訊息組件、通知訊息組件
          </li>
          <li>
            <b>4.</b> 輸入類型：兩層複選選單 <font class="text--lightgrey">(傳入 json 並且指定 第一、二層的 obj.name 值)</font>
          </li>
          <li>
            <b>5.</b> 表單類型：輸入框遮罩、計算輸入框字數、Table 排序、視覺化編輯表單、即時上傳圖片
          </li>
        </ul>`
        });

        // Extends jQuery
        $.Main.helpers.extendjQuery();

        // filterList
        $.Main.components.filterList();

        // Set Background Image Dynamically
        if ($('[data-bg-img-src]').length)
          $.Main.helpers.bgImage($('[data-bg-img-src]'));

        // Go Top
        $.BackToGo.init('.js-go-to');


        var link = $('#redeMenu li a');
        // Move to specific section when click on menu link
        link.on('click', function(e) {
          var target = $($(this).attr('href'));
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 200);
          $(this).addClass('active');
          e.preventDefault();
        });

        // Run the scrNav when scroll
        $(window).on('scroll', function() {
          scrNav();
        });

        // scrNav function 
        // Change active dot according to the active section in the window
        function scrNav() {
          var sTop = $(window).scrollTop();
          $('.scroll_menu').each(function() {
            var id = $(this).attr('id'),
              offset = $(this).offset().top - 160,
              height = $(this).height();
            if (sTop >= offset && sTop < offset + height) {
              link.removeClass('active');
              $('#redeMenu').find('[data-scroll="' + id + '"]').addClass('active');
            }
          });
        }
        scrNav();


        // attr valuenow add styles
        $('.js-hr-progress-bar').each(function() {
          var bar_value = $(this).find('.js-hr-progress-bar-indicator').attr('aria-valuenow') + '%';
          $(this).find('.js-hr-progress-bar-indicator').css('width', bar_value);
        });
        // initialization of horizontal progress bars
        setTimeout(function() {
          var horizontalProgressBars = $.ProgressBar.init('.js-hr-progress-bar', {
            direction: 'horizontal',
            indicatorSelector: '.js-hr-progress-bar-indicator'
          });
        }, 50);



        // Swal Modals
        let portfolio = Swal.mixin({
          showConfirmButton: false,
          // width: '80%',
          showCloseButton: true
        });

        $('#avatar').on('click', function() {
          Swal.fire({
            imageUrl: 'dist/img/me.jpg',
            imageAlt: 'BarrY',
            showCloseButton: false,
            showConfirmButton: false,
          })
        });

        // wdaCoueseFront
        $('#wdaCoueseFront').on('click', function() {
          portfolio.fire({
            html: '<img class="img-responsive" src="dist/img/portfollo/Landing - frontend - wdaCourse - 1.jpg" alt="wdaCouese">' +
              '<img class="img-responsive" src="dist/img/portfollo/Landing - frontend - wdaCourse - 2.jpg" alt="wdaCouese">' +
              '<img class="img-responsive" src="dist/img/portfollo/Landing - frontend - wdaCourse - 3.jpg" alt="wdaCouese">' +
              '<img class="img-responsive" src="dist/img/portfollo/Landing - frontend - wdaCourse - 4.jpg" alt="wdaCouese">' +
              '<img class="img-responsive" src="dist/img/portfollo/Landing - frontend - wdaCourse - 5.jpg" alt="wdaCouese">' +
              '<img class="img-responsive" src="dist/img/portfollo/Landing - frontend - wdaCourse - 6.jpg" alt="wdaCouese">' +
              '<img class="img-responsive" src="dist/img/portfollo/Landing - frontend - wdaCourse - 7.jpg" alt="wdaCouese">',
          })
        });
        // wdaCoueseBackend
        $('#wdaCoueseBackend').on('click', function() {
          portfolio.fire({
            html: '<img class="img-responsive" src="dist/img/portfollo/Landing - backend - wdaCourse - 1.jpg" alt="wdaCouese">' +
              '<img class="img-responsive" src="dist/img/portfollo/Landing - backend - wdaCourse - 2.jpg" alt="wdaCouese">' +
              '<img class="img-responsive" src="dist/img/portfollo/Landing - backend - wdaCourse - 3.jpg" alt="wdaCouese">' +
              '<img class="img-responsive" src="dist/img/portfollo/Landing - backend - wdaCourse - 4.jpg" alt="wdaCouese">' +
              '<img class="img-responsive" src="dist/img/portfollo/Landing - backend - wdaCourse - 5.jpg" alt="wdaCouese">' +
              '<img class="img-responsive" src="dist/img/portfollo/Landing - backend - wdaCourse - 6.jpg" alt="wdaCouese">' +
              '<img class="img-responsive" src="dist/img/portfollo/Landing - backend - wdaCourse - 7.jpg" alt="wdaCouese">',
          })
        });
        $('#taiwanJobs').on('click', function() {
          portfolio.fire({
            html: '<iframe width="100%" height="644" src="https://xd.adobe.com/embed/87201462-e071-440d-b062-5358a05ef59f-d273/" frameborder="0" allowfullscreen></iframe>',
          })
        });
        // 1111
        $('#membercenter').on('click', function() {
          portfolio.fire({
            html: '<img class="img-responsive" src="dist/img/portfollo/membercenter-f1.png" alt="membercenter">' +
              '<img class="img-responsive" src="dist/img/portfollo/membercenter-f3.png" alt="membercenter">' +
              '<img class="img-responsive" src="dist/img/portfollo/membercenter-f2.png" alt="membercenter">',

          })
        });

        $('#vacancy').on('click', function() {
          portfolio.fire({
            imageUrl: 'dist/img/portfollo/vacancy-f.png',
            showConfirmButton: false,
          })
        });

        $('#recruit').on('click', function() {
          portfolio.fire({
            imageUrl: 'dist/img/portfollo/recruit-f.png',
          })
        });

        $('#hr').on('click', function() {
          portfolio.fire({
            imageUrl: 'dist/img/portfollo/hr-f.png',
            showConfirmButton: false,
          })
        });

        // kokokara
        $('#kokokara').on('click', function() {
          portfolio.fire({
            imageUrl: 'dist/img/portfollo/kokokara-f.png',
            showConfirmButton: false,
          })
        });

        $('#twkc').on('click', function() {
          portfolio.fire({
            imageUrl: 'dist/img/portfollo/twkc-f.png',
            showConfirmButton: false,
          })
        });

        $('#taea').on('click', function() {
          portfolio.fire({
            imageUrl: 'dist/img/portfollo/taea-f.png',
            showConfirmButton: false,
          })
        });

        $('#tscm').on('click', function() {
          portfolio.fire({
            imageUrl: 'dist/img/portfollo/tcsm-f.png',
            showConfirmButton: false,
          })
        });

        $('#ccu').on('click', function() {
          portfolio.fire({
            html: '<img class="img-responsive" src="dist/img/portfollo/ccu-f.png" alt="國立中正大學"><img class="img-responsive" src="dist/img/portfollo/ccu-1-f.png" alt="國立中正大學">',
            showConfirmButton: false,
          })
        });

        $('#123share').on('click', function() {
          portfolio.fire({
            html: '<img class="img-responsive" src="dist/img/portfollo/123Share-1.png" alt="123 SHare App ReDesign"><img class="img-responsive" src="dist/img/portfollo/123Share-2.png" alt="123 SHare App ReDesign"><img class="img-responsive" src="dist/img/portfollo/123Share-3.png" alt="123 SHare App ReDesign">',
            showConfirmButton: false,
          })
        });

        $('#coupon').on('click', function() {
          portfolio.fire({
            html: '<img class="img-responsive" src="dist/img/portfollo/ifansCouPon-1.png" alt="瘋折扣 App ReDesign"><img class="img-responsive" src="dist/img/portfollo/ifansCouPon-2.png" alt="瘋折扣 App ReDesign"><img class="img-responsive" src="dist/img/portfollo/ifansCouPon-3.png" alt="瘋折扣 App ReDesign">',
            showConfirmButton: false,
          })
        });

        $('#market').on('click', function() {
          portfolio.fire({
            html: '<img class="img-responsive" src="dist/img/portfollo/market-1.png" alt="瘋市場 App ReDesign"><img class="img-responsive" src="dist/img/portfollo/market-2.png" alt="瘋市場 App ReDesign"><img class="img-responsive" src="dist/img/portfollo/market-3.png" alt="瘋市場 App ReDesign">',
            showConfirmButton: false,
          })
        });

        $('#myweb').on('click', function() {
          portfolio.fire({
            html: '<img class="img-responsive" src="dist/img/portfollo/MyWeb-1.png" alt="MyWeb App ReDesign"><img class="img-responsive" src="dist/img/portfollo/MyWeb-2.png" alt="MyWeb App ReDesign"><img class="img-responsive" src="dist/img/portfollo/MyWeb-3.png" alt="MyWeb App ReDesign">',
            showConfirmButton: false,
          })
        });

        $('#onefix').on('click', function() {
          portfolio.fire({
            html: '<img class="img-responsive" src="dist/img/portfollo/onefixCIS-01.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-02.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-03.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-04.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-05.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-06.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-07.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-08.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-09.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-10.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-11.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-12.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-13.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-14.png" alt="onefixCIS"><img class="img-responsive" src="dist/img/portfollo/onefixCIS-15.png" alt="onefixCIS">',
            showConfirmButton: false,
          })
        });


        AOS.init({
          easing: 'ease-out-back',
          duration: 250,
          offset: 50,
        });
        
      });

      $(window).on('load', function(e) {

        setTimeout(() => {
        $('#logo_loader').fadeOut();
        }, 2500);

        // $('#logo_loader').fadeOut();

        $('.re-about-cnt h1').addClass('ani-type');

        $('#redeMenu li').addClass('active-li');


      });

    },

    components: {

      filterList: function() {

        $('#portfolioList').mixItUp({
          selectors: {
            target: '.portfolio-item',
            filter: '.filter-item'
          },
          load: {
            filter: 'all'
          },
        });
      },

    },

    helpers: {

      Math: {



      },
      /**
       * Sets background-image dynamically.
       *
       * @param jQuery collection
       *
       * @return jQuery|undefined
       */
      bgImage: function(collection) {

        if (!collection || !collection.length) return;

        return collection.each(function(i, el) {

          var $el = $(el),
            bgImageSrc = $el.data('bg-img-src');

          if (bgImageSrc) $el.css('background-image', 'url(' + bgImageSrc + ')');

        });

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

  $.Main.init();


})(jQuery);