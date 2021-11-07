$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $("#header").addClass("smaller");
        } else {
            $("#header").removeClass("smaller");
        }
      });
    //#HEADER 메뉴이름 HOVER작업:
    $('#header .gc>a').hover(function () {
        $("#header .gc>a>img").attr("src", "../img/icon-gc-green.png")
    },function () {
        $("#header .gc>a>img").attr("src", "../img/icon-gc-black.png")
    });
    $('#header .ls>a').hover(function () {
        $("#header .ls>a>img").attr("src", "../img/icon-ls-orange.png")
    },function () {
        $("#header .ls>a>img").attr("src", "../img/icon-ls-black.png")
    });
});