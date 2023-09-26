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

            if (destination.index !== 0) {
                $('.header').addClass('on');
            } else {
                $('.header').removeClass('on');
            }
        },

    }
    var slide = new Swiper('.swiper', {
        slidesPerView: '1', // 한 슬라이드에 보여줄 갯수
        loop: true, // 슬라이드 반복 여부
        pagination: true, // pager 여부
        autoplay: { // 자동 슬라이드 설정 
            delay: 5000, // 시간 설정
            disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        navigation: { // 버튼 사용자 지정
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        //breakpoints: { //반응형
        // 화면의 넓이가 320px 이상일 때
        //320: {
        //slidesPerView: 2,
        //spaceBetween: 20
        //},
        // 화면의 넓이가 640px 이상일 때
        //640: {
        //slidesPerView: 4,
        //spaceBetween: 40
        // }
        //}
    })
    $('#main_full').fullpage(option);

    $('.grapic_btn li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.grapic').eq(idx).addClass('on').siblings().removeClass('on');
    });

})