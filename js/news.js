$(function(){
    $(".main_con").hide();
    $(".tabs").children().eq(0).addClass("active a").show();
    $(".main_con:first").show();
    
    $(".tabs").children().click(function(){
        $(".tabs").children().removeClass("active a");
        $(this).addClass("active a");
        $(".main_con").hide();

        var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
        /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
        .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
        $(activeTab).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
        return false;
    });

    $(".event_box").hide();
    $(".event_tabs").children().eq(0).addClass("active a").show();
    $(".event_box:first").show();
    
    $(".event_tabs").children().click(function(){
        $(".event_tabs").children().removeClass("active a");
        $(this).addClass("active a");
        $(".event_box").hide();

        var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
        /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
        .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
        $(activeTab).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
        return false;
    });

});