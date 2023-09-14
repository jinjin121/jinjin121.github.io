$(function () {
    // $(window).on('scroll', function () {
    //     let sct = $(window).scrollTop();
    //     sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    // });
    var option = {
        anchors: ['01', '02', '03', '04', '05', '06'],
        afterRender: function () {
            setTimeout(function () { $('.section').eq(0).addClass('on') }, 10)
        },
        css3: false,
        onLeave: function (origin, destination) {
            console.log(destination.index);
            $('.slideBtn li').eq(destination.index).addClass('on')
                .siblings().removeClass('on');
            $('.section').eq(destination.index).addClass('on')
                .siblings().removeClass('on');

            if (destination.index == 2) {
                $('.header').addClass('on');
            } else {
                $('.header').removeClass('on');
            }

        },

    }
    $('#main_full').fullpage(option);


})