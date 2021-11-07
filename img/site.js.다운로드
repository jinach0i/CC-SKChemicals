$(document).ready(function(){

    //메인
    // $(".main_content .business .title").mouseenter(function(){
    //     $(this).nextAll(".over-box").addClass("on");
    //     $(this).addClass("on");
    // });
    // $(".over-box").mouseleave(function(){
    //     $(this).removeClass("on");
    //     $(this).prevAll(".title").removeClass("on");
    // });
    //
    // function m_business() {
    //     if($(window).width() > 1200){
    //       $(".main_content .business .title").removeClass("on");
    //       $(".main_content .business .over-box").removeClass("on");
    //       $(".over-box").mouseleave(function(){
    //           $(this).removeClass("on");
    //           $(this).prevAll(".title").removeClass("on");
    //       });
    //   } else if($(window).width() <= 1200) {
    //         $(".main_content .business .title").addClass("on");
    //         $(".main_content .business .over-box").addClass("on");
    //         $(".over-box").mouseleave(function(){
    //             $(this).addClass("on");
    //             $(this).prevAll(".title").addClass("on");
    //         });
    //     }
    // }
    // $(window).resize(function(){
    //   m_business();
    // })
    // m_business();
    $(".main_content .business .title").mouseenter(function(){
        $(this).nextAll(".over-box").addClass("on");
    });
    $(".main_content .business .title").mouseleave(function(){
        $(this).nextAll(".over-box").removeClass("on");
    });


    TweenMax.to($(".main_content .qa"), 0, {backgroundSize:"100% 100%", ease:Power3.easeOut});
    $(".main_content .qa").on("mouseenter focusin", function(){
        TweenMax.to($(this), 0.5, {
            backgroundSize:"120% 120%",
            ease:Power3.easeOut
        });
    });
    $(".main_content .qa").on("mouseleave focusout", function(){
        TweenMax.to($(this), 0.5, {
            backgroundSize:"100% 100%",
            ease:Power3.easeOut
        });
    });



    // 회사개요_숫자카운팅
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    //자회사탭
   // $(".sub-company .ctn-area .ctn").hide();
   // $(".sub-company .ctn-area.ctn01 .ctn").show();
    $(".sub-company .ctn-area.ctn01 .title-area").addClass("on");
    $(".sub-company .title-area a").click(function(){
        $(this).toggleClass("on");
        $(this).parent(".title-area").next(".ctn").slideToggle(200);
    });

     //채용정보_마우스오버
     TweenMax.to($(".sub-employ .job-more"), 0, {backgroundSize:"100% 100%", ease:Power3.easeOut});
     $(".sub-employ .job-more").on("mouseenter focusin", function(){
         TweenMax.to($(this), 0.1, {
             backgroundSize:"120% 120%",
             ease:Power3.easeOut
         });
     });
     $(".sub-employ .job-more").on("mouseleave focusout", function(){
         TweenMax.to($(this), 0.1, {
             backgroundSize:"100% 100%",
             ease:Power3.easeOut
         });
     });

     //이사회_이사단탭
     $(".sub-invest03 .ctn01 .thum-list a").click(function() {

         $(".sub-invest03 .ctn01 .thum-list a").removeClass("on");
         $(this).addClass("on");
         $(".sub-invest03 .ctn01 .list-wrap .list").removeClass("on");

         var activeTab = $(this).attr("href");
         $(activeTab).addClass("on");
         return false;

     });

     //이사회_테이블탭
     $(".sub-invest03 .ctn04 .year a").click(function() {

         $(".sub-invest03 .ctn04 .year a").removeClass("on");
         $(this).addClass("on");
         $(".sub-invest03 .ctn04 .table-wrap").removeClass("on");

         var activeTab = $(this).attr("href");
         $(activeTab).addClass("on");
         return false;

     });

     //esg레프트메뉴
     $(".subNav-nav li a").click(function() {

         $(".subNav-nav li a").removeClass("on");
         $(this).addClass("on");
         $(".subNav-ctn").removeClass("on");

         var activeCtn = $(this).attr("href");
         $(activeCtn).addClass("on");
         return false;

     });

     //윤리경영바로가기
     TweenMax.to($(".sub-ethic-more a"), 0, {backgroundSize:"100% 100%", ease:Power3.easeOut});
     $(".sub-ethic-more a").on("mouseenter focusin", function(){
         TweenMax.to($(this), 0.1, {
             backgroundSize:"120% 120%",
             ease:Power3.easeOut
         });
     });
     $(".sub-ethic-more a").on("mouseleave focusout", function(){
         TweenMax.to($(this), 0.1, {
             backgroundSize:"100% 100%",
             ease:Power3.easeOut
         });
     });

     //윤리경영개요
     $(".sub-ethic .ctn03 a.open").click(function(){
         $(".desc-wrap").show();
         $(this).hide();
     });
     $(".sub-ethic .ctn03 a.close").click(function(){
         $(".desc-wrap").hide();
         $(".sub-ethic .ctn03 a.open").show();
     });

     // sk소식 갤러리게시판
     // $('.gallery-board .list-wrap').isotope({
     //      itemSelector: '.list-box',
     //      percentPosition: true
     //  });

    //PR센터 광고 슬라이드
    $('.sub-advertise .list-slide').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: true,
       prevArrow: $('.arrow .prev'),
       nextArrow: $('.arrow .next')
    });

    //PR센터수상인증
    $(".sub-award .award .list a").click(function(){
        $(this).parent(".list").toggleClass("on");
        $(this).next(".ctn").slideToggle(200);
    });

     // tab_type02_탭
     $(".tab-type02 ul li a").click(function() {

         $(".tab-type02 ul li a").removeClass("on");
         $(this).addClass("on");
         $(".tab-ctn").removeClass("on");

         var activeTab = $(this).attr("href");
         $(activeTab).addClass("on");
         return false;

     });

     //서브_레프트메뉴
     $(".left-nav a").click(function() {

         $(".left-nav a").removeClass("on");
         $(this).addClass("on");
         $(".leftNav-area .ctn").removeClass("on");

         var activeTab = $(this).attr("href");
         $(activeTab).addClass("on");
         return false;

     });

     //ls 퀵메뉴 고정
     function ls_quick() {
         var footer = $("#footer").offset();

         $(window).scroll(function(){
     		if($(window).scrollTop() + $(window).height() >= footer.top - 30){
     			//$(".ls-contents .container .quick-menu").removeClass("fixed");
     		}else{
     			//$(".ls-contents .container .quick-menu").addClass("fixed");
     		}
     	});
     }

     $(window).resize(function(){
       ls_quick();
     });
     ls_quick();


    // ls약국찾기_모바일슬라이드
    function mobileOnlySlider() {
        $('.ls-pharmacy .map-area .list-wrap').slick({
                autoplay: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: $('.arrow .prev'),
                nextArrow: $('.arrow .next')
            });
        }
            if(window.innerWidth < 768) {
            mobileOnlySlider();
        }

    $(window).resize(function(e){
        if(window.innerWidth < 768) {
            if(!$('.ls-pharmacy .map-area .list-wrap').hasClass('slick-initialized')){
                mobileOnlySlider();
            }

        }else{
            if($('.ls-pharmacy .map-area .list-wrap').hasClass('slick-initialized')){
                $('.ls-pharmacy .map-area .list-wrap').slick('unslick');
            }
        }
    });

    //gc_브랜드 이미지배너 슬라이더
    $(".gc-brand-slide .slider").slick({
        pauseOnFocus: false,
        pauseOnHover: false,
        autoHover: false,
        autoControls: false,
        controls: false,
        arrows: true,
        prevArrow: $('.slide-arrow .prev'),
        nextArrow: $('.slide-arrow .next'),
        pager: false,
        dots: false,
        pause: 1000,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        touchMove : false, // 손가락 터치시 이동 여부...
        swipe : false, // swipe 여부...
        draggable : false,
        pauseOnHover: false
    });

    //gc-다운로드버튼
    $(".gc-brand .download-box .btn-area a").click(function(){
        $(".gc-brand .download-box .btn-area a").removeClass("on");
        $(this).addClass("on");
    });

     // GC_industry
     $('.gc-industry .ctn').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.gc-industry .thum-wrap'
    });
    $('.gc-industry .thum-wrap').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.gc-industry .ctn',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: '.gc-industry .slide-btn .prev',
        nextArrow: '.gc-industry .slide-btn .next',
        variableWidth: true,
        responsive: [{
			breakpoint: 768,
			settings: {
				centerMode: true,
				slidesToShow: 3
    			}
    		},
            {
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		}]
    });

        // 팝업
        $(".gc-industry .ctn .list ul li a").click(function() {
            var id = $(this).attr("href");
            $(id).show();
            return false;
        });
        $('.layer-popup .close').click(function() {
           $('.layer-popup').hide();
       });
       $('.layer-popup .close').focusout(function() {
           $('.layer-popup').hide();
       });
       $(document).click(function(e) {
        $('.layer-popup')
            .not($(this).has($(e.target)))
            .hide();
        });

        // LS상세보기_썸네일
        $(".ls-product-view .top-area .thum-area .thum-small a").click(function(){
            var imgPath = $(this).attr("href");
            $(".ls-product-view .top-area .thum-area .thum img").attr({src:imgPath})
            .hide()
            .fadeIn();
            return false;
        })

        //채용정보new
        var targetSlide = $('.sub-jobinfo .slide');
        targetSlide.slick({
           dots: true,
           arrows: true,
           prevArrow: $('.sub-jobinfo .slide-btn .prev'),
           nextArrow: $('.sub-jobinfo .slide-btn .next'),
           appendDots: targetSlide.siblings(".slider-controls").find(".wrap-controls").addClass("type-title"),
           // customPaging: function(slider, index) { // Text Indicator의 경우 추가
           //     return "<button></button>";
           // }
        });
        // 팝업
        $(".sub-jobinfo .list02 a").click(function() {
            var id = $(this).attr("href");
            $(id).show();
            return false;
        });
        $(".sub-jobinfo .popup.talent .top-area .go").click(function() {
            var id = $(this).attr("href");
            $(this).parent(".top-area").parent(".popup").hide();
            $(id).show();
            return false;
        });
        $(".sub-jobinfo .list03 .txt-box ul li a").click(function() {
            var id = $(this).attr("href");
            $(id).show();
            return false;
        });
        $('.popup .close').click(function() {
           $('.popup').hide();
       });
       $('.popup .close').focusout(function() {
          $('.popup').hide();
      });

})
