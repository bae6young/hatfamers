$(function(){

    /*header 스크롤 내리면 사라지고 올리면 나타나기*/
    var didScroll; 
    var lastScrollTop = 0;
    var delta = 5; //동작의 구현이 시작되는 위치
    var navbarHeight = $('#header').outerHeight();//영향을 받을 요소를 선택

    //스크롤시 사용자가 스크롤 했다는 것을 알림
    $(window).scroll(function(event){
        didScroll = true;
    });

    //hasScrolled()를 실행하고 didScroll 상태를 재설정
    setInterval(function(){
        if(didScroll){
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled(){
        //동작구현
        var st = $(this).scrollTop();

        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        if(st > lastScrollTop && st > navbarHeight){
            //스크롤 다운
            $("#header").removeClass("nav-down").addClass("nav-up")
        } else {
            //스크롤 업
            if(st + $(window).height() < $(document).height()) {
                $('#header').removeClass('nav-up').addClass("nav-down");
            }
        }
        lastScrollTop = st;

    };
    /*스크롤 내려야 top버튼 나오게*/
    $(".top_btn").hide();
    $(window).scroll(function(){
        if($(this).scrollTop() > 100) {
            $(".top_btn").fadeIn();
        } else{
            $(".top_btn").fadeOut();
        };
    });

    $(".top_btn").click(function() {
		$('html, body').animate({scrollTop:0}, '300');
	});
    


});