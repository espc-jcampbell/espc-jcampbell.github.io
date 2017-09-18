$(document).ready(function() {
    $('.num').text(0);
    $(".item").click(function(e) {
        $(this).toggleClass('checked')
        $(".item").each(function() {
            var t = $('.item').length,
                c = $('.checked').length,
                percentage = (c / t) * 100;
            $('.num').html(percentage.toFixed(0));
            $('.progressbar').css({
                width: percentage + '%'
            });
        });
    });
});
