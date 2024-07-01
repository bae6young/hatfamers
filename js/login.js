$(function(){

    $(".icon").find("a").click(function(){
        $(".popup").fadeIn()/* 서서히 나타나게 하고 싶으면 fadeIn, 그냥 나타나게 하고 싶으면 show를 사용 */
        
    });
    $(".close").click(function(){
        $(".popup").fadeOut()
    });
});