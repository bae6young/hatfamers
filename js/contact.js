$(function(){
    $('.more_btn').on('click', function(event) {
        var allFilled = true;

        // 각 필드 검사
        $('input[required], textarea[required]').each(function() {
            if ($(this).val() === '') {
                allFilled = false;
                return false; // 반복문 종료
            }
        });

        if (allFilled) {
            $('.false').hide();
            $('.sus').fadeIn().delay(2000).fadeOut();
        } else {
            event.preventDefault(); // 폼 제출 막기
            $('.sus').hide();
            $('.false').fadeIn().delay(2000).fadeOut();
        }
    });
});
//버튼 옆에 글 넣고 none해뒀다가 비어있으면 NO보여주도 채워져있으면 YES보여주기