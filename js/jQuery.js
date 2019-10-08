/**
 * Created by hp on 2019/8/24.
 */
$(function(){
    var index=0;

    var isTransitionEnd=true;

    $('.prev').click(function(){

        if(isTransitionEnd){
            index++;
            var r=90*index;
            isTransitionEnd=false;
            $('.view li').css('transform','rotateX('+r+'deg)');

            $('.view li').each(function(index,item){
                $(item).css('transition-delay',index*0.25+'s');
            });
        }
    });
// 下一张
    $('.next').click(function(){
        if(isTransitionEnd){
            index--;
            var r=90*index;
            isTransitionEnd=false;

            $('.view li').css('transform','rotateX('+r+'deg)');

            $('.view li').each(function(index,item){
                $(item).css('transition-delay',index*0.25+'s');
            });

        }

    });
    $('.view li').eq(4).on('webkitTransitionEnd',function(){
        isTransitionEnd=true;
    })


    initUI();

    initEvent();

    autoPlay();

    kanguo();
})

var arr=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"];
var ord = 0;
var myTimer = null;

function initUI() {
    $("#last ul li:first").css({"background":"#fff"});
}
function initEvent(){
    $("#last").mouseenter(function(){
        stopPlay();
    });
    $("#last").mouseleave(function(){
        autoPlay();
    });
    $("#last1 li").click(function(){
        goImg($("#last1 li").index(this));
    });
}

function autoPlay() {
    myTimer = setInterval(function(){
        var outOrd = ord;
        ord++;
        if(ord>arr.length-1){
            ord=0;
        }
        var $img = $("#last img");
        $img.eq(outOrd).animate({"opacity":0},2000);
        $img.eq(ord).animate({"opacity":1},2000);
        //$("#last li a").eq(ord).css({"color":"#CE9C3F"}).siblings().css({"color":"fff"})
    },3000);
}

function stopPlay() {
    window.clearInterval(myTimer);
}
function goImg(transOrd) {
    var outOrd = ord;
    ord = transOrd;
    if(ord>arr.length-1){
        ord = 0;
    }
    var $img = $("#last img");
    $img.eq(outOrd).animate({"opacity":0},2000);
    $img.eq(ord).animate({"opacity":1},2000);
    //$("#last1 li a").eq(ord).css({"color":"#CE9C3F"}).siblings().css({"color":"fff"})
}

function kanguo() {
    //$("#two1,#two2").mouseenter(function() {
    //    $("#two").slideDown(1000);
    //});
    //$("#two1").mouseleave(function() {
    //    $("#two").slideUp(1000);
    //});
    $("#two1").click(function() {
        $("#two").slideToggle(700);
    });
}