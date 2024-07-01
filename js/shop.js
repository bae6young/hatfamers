$(function(){
    $(".tab_con").hide();
    $(".tabs").children().eq(0).addClass("active a").show();
    $(".tab_con:first").show();
    $(".title_wrap").children(".title").hide();
    $(".title_wrap").children(".title:first").show();
    
    $(".tabs").children().click(function(){
        $(".tabs").children().removeClass("active a");
        $(this).addClass("active a");
        $(".tab_con").hide();

        var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
        /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
        .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
        $(activeTab).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
        return false;
    });

    $(".shop_btn").hide();
    $(window).scroll(function(){
        if($(this).scrollTop() > 300){
            $(".shop_btn").fadeIn();
        } else{
            $(".shop_btn").fadeOut()
        };
    });

    timer();

    /* review 슬라이드 */
var current=0;
var $interval;

function timer(){
  var $interval=setInterval(function(){slide()},2000);                        
}

function slide(){
  $(".review_box").animate({top:"-=246px"},1000,function(){
    $(this).css({"top":0});
    $(".review_box").append( $("ul").children(".review_wrap").eq(0) );
  });    

  current++;
  if(current==5)current=0;
}    
});


//누른거에 맞는 title 나오게
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tabs li');
  const titles = document.querySelectorAll('.title_wrap .title');
  
  function showTitle(index) {
      titles.forEach((title, i) => {
          title.style.display = (i === index) ? 'block' : 'none';
      });
  }
  
  // 초기 상태로 첫 번째 타이틀만 보이도록 설정
  showTitle(0);
  
  tabs.forEach((tab, index) => {
      tab.addEventListener('click', function() {
          showTitle(index);
      });
  });
});