$(function(){
 //.main_box 링크 누르면 스크롤로 내려가기
    $('.main_box').find('a').click(function(){
        $('html,body').animate({scrollTop:
            $($(this).attr('href')).offset().top
        }, 500);
    });

    $(".more_btn").click(function(){
        $(".popup").fadeIn()/* 서서히 나타나게 하고 싶으면 fadeIn, 그냥 나타나게 하고 싶으면 show를 사용 */
        
    });
    $(".close").click(function(){
        $(".popup").fadeOut()
    });
    
});