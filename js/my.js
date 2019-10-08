/**
 * Created by andy on 2015/12/8.
 */
function scroll() {
    if(window.pageYOffset !== undefined) {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode === "CSS1Compat") {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}

//缓动动画封装
function animate(ele,target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = (target-ele.offsetLeft)/10;
        step = step>0?Math.ceil(step):Math.floor(step);
        ele.style.left = ele.offsetLeft + step + "px";
        console.log(1);
        if(Math.abs(target-ele.offsetLeft)<Math.abs(step)){
            ele.style.left = target + "px";
            clearInterval(ele.timer);
        }
    },18);
}
