$(function(){
    
    /*best 아이텐 이미지 호버하면 애니메이션 일시정지*/
    $(".best_wrap li img").hover(function(){
        $(".best_wrap").css({
            "animation-play-state":"paused"
        });
    }, 
    function(){
        $(".best_wrap").css({
            "animation-play-state":"running"
        });
    });
});