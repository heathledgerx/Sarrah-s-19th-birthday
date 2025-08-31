$(function () {

    var flame = $('#flame');
    var txt = $('h1');

    flame.on({
        click: function () {
            // إنشاء الصوت وتشغيله
            var sound = new Audio("Blowing out a candle.mp3");
            sound.play();

            flame.removeClass('burn').addClass('puff');
            $('.smoke').each(function () {
                $(this).addClass('puff-bubble');
            });
            $('#glow').remove();
            txt.hide().html("It <b>will</b> come true, Sarsora...<br> <i>Just believe!</i><br><b>I Love YOU</b>").delay(750).fadeIn(300);
            $('#candle').animate({
                'opacity': '.5'
            }, 100);
        }
    })
});
