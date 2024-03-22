$(window).scroll(function (e) {
    if ($(window).scrollTop() <= 0) {
        $(".explore, .navbar").addClass("at_top");
    } else {
        $(".explore, .navbar").removeClass("at_top");
    }
});

$(document).on('click', 'a', function (event) {
    event.preventDefault();
    var target = $(this).attr("href");

    $('html,body').animate({
        scrollTop: $(target).offset().top
    }, 500);
});

function detect(name, x) {
    var windowWidth = $(window).width();
    var elementWidth = $(name).width();

    var center = (windowWidth - elementWidth) / 2;
    if (x > 0 && x < 400) { 
        $(name).css("left",0); 
    } else {
        $(name).css("left", "-1600px"); 
    }
}

function right_detect(name, x) {
    var windowWidth = $(window).width();
    var elementWidth = $(name).width();

    var center = (windowWidth - elementWidth) / 2;
    if (x > 800 && x < 1200) {
        $(name).css("right",0); 
    } else {
        $(name).css("right", "-1600px"); 
    }
}
//滑鼠移動事件
$(window).mousemove(function (evt) {
    var pagex = evt.pageX;
    var pagey = evt.pageY;

    $(".boat").css("transform", "translateX(" + (pagex / -20 + 30) + "px) scale(1.2)");

    detect(".process-content", pagex);
    detect(".roro", pagex);
    right_detect(".publish-content", pagex);
    right_detect(".roro2", pagex);
    
});

var worksdata = [
    { url: "./image/work1.jpg", text: "Penny-Recipes" },
    { url: "./image/work2.jpg", text: "The Penny Animals" },
    { url: "./image/work3.jpg", text: "Rock Paper Scissors Game" },
    { url: "./image/work4.jpg", text: "Personal Information" },
];

var vm = new Vue({
    el: '#works',
    data: {
        works: worksdata
    }
});

/* teams area */
var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});
function flipPage(){
    document.body.classList.toggle('flipped');
    window.scrollTo(0, 0);
}