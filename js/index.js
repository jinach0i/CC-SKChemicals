$(function () {
  AOS.init();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $("#header").addClass("smaller");
    } else {
        $("#header").removeClass("smaller");
    }
  });
  $('.menu-r>a').click(function () {
      $('.menu-r .gnb-pc').css({display:"block"})
  });
  $('.menu-r .close-button').click(function () {
    $('.menu-r .gnb-pc').css({display:"none"})
  })
  $('.cs').hover(function () {
      $(this).css({backgroundSize: '120% 120%',transition: '.3s'})
      },function () {
        $(this).css({backgroundSize: '100% 100%' })
      });
  //#HEADER 메뉴이름 HOVER작업:
  $('#header .gc>a').hover(function () {
    $("#header .gc>a>img").attr("src", "./img/icon-gc-green.png")
  },function () {
    $("#header .gc>a>img").attr("src", "./img/icon-gc-black.png")
  });
  $('#header .ls>a').hover(function () {
    $("#header .ls>a>img").attr("src", "./img/icon-ls-orange.png")
  },function () {
    $("#header .ls>a>img").attr("src", "./img/icon-ls-black.png")
  });
  // .bussiness hover작업:
  $(".business>div .text-box").hover(function () {
    $(this).find('.hovered-box').css("display","block");
    
    
}, function () {
  $(this).find('.hovered-box').css("display","none");
  $(this).find('.title').css("text-decoration","none");
}
);
$('.business .gc').hover(function () {
  $(this).find('.title').css("text-decoration","underline 8px #a9c962;");
    
  }, function () {
    $(this).find('.title').css("text-decoration","none");
  }
);
$('.business .ls').hover(function () {
  $(this).find('.title span').css("text-decoration","underline 8px #ef8009;");
    
  }, function () {
    $(this).find('.title span').css("text-decoration","none");
  }
);
  
})