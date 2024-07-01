$(function(){
    $(".text_box").hide();
    $(".tabs").children().eq(0).addClass("active","active a").show();
    $(".text_box:first").show();
    
    $(".tabs").children().click(function(){
        $(".tabs").children().removeClass("active");
        $(this).addClass("active a");
        $(".text_box").hide();

        var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
        /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
        .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
        $(activeTab).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
        return false;
    });

    //버튼 클릭하면 이미지 올라감
    $(".faq_wrap").click(function(){
		$(this).children(".text_inform").slideToggle();
        $(this).toggleClass("on").siblings().removeClass("on");
		$(this).siblings().children(".text_inform").slideUp()
	});


    $(".more_btn").hover(function(){
        $(this).parent(".more_btn_box").siblings("img").css({"transform":"translateY(-15px)"});
    }, function(){
        $(this).parent(".more_btn_box").siblings("img").css({"transform":"translateY(0px)"});
    });

    $(".more_btn").click(function(){
        $(".popup").fadeIn()/* 서서히 나타나게 하고 싶으면 fadeIn, 그냥 나타나게 하고 싶으면 show를 사용 */
        
    });
    $(".close").click(function(){
        $(".popup").fadeOut()
    });
});