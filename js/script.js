
$(document).ready(function(){
    $('#exp-content div').hide();
    $('#list-01-ds').show();
});

// ------------- move to each menu (click action)
$('.menu li button').on('click', function(){
   let menu = $(this).attr('id');

   if(menu == "btn-about"){
       $('html, body').animate({scrollTop: $('#about').position().top}, 1000);
   } else if(menu == "btn-exp"){
       $('html, body').animate({scrollTop: $('#exp').position().top}, 1000);
   } else if(menu == "btn-work"){
       $('html, body').animate({scrollTop: $('#work').position().top}, 1000);
   } else if(menu == "btn-contact"){
       $('html, body').animate({scrollTop: $('#contact').position().top}, 1000);
   }
});

// ------------- to top botton
$('.navbar #btn-toTop').on('click', function(){
    $('html, body').animate({scrollTop: 0}, 1000);
});

// ------------- scroll action
function scrollHandler(){
    let scrollPos = $(window).scrollTop();
    let screenBottom = $(window).scrollTop() + $(window).height();
    // let screenMiddle = $(window).scrollTop() + ($(window).height() / 3);

    // --- opacity content
    $('section').each(function(){
        if(screenBottom >= $(this).position().top){
            $(this).find('.vertical-center').animate({top: 0, opacity: 1}, 2500);
        }

        // --- activate current menu
        let currMenu = $(this).attr('id');
        let menuOffset = $('#' + currMenu).offset().top - 200;
        let menuheight = $('#' + currMenu).height();
        // console.log(menuOffset);
        // console.log(menuheight);

        if(menuOffset <= scrollPos && menuOffset + menuheight > scrollPos) {
            $('.menu li button').removeClass('active');
            $('#btn-' + currMenu).addClass('active');
        } else {
            $('#btn-' + currMenu).removeClass('active');
        }
    });
}

// ------------- exp job-list ds
$('#job-list button').on('click', function(){
    let joblist = $(this).attr('id');
    $('#job-list button').removeClass('active');
    $('#' + joblist).addClass('active');

    $('#exp-content div').hide();
    $('#' + joblist + '-ds').show();
});


$('.btn-send').on('click', function(){
    window.open('mailto:kate.heejeong.roh@gmail.com');
});



$(window).on('scroll', scrollHandler);
scrollHandler();