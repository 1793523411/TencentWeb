/**
 * Created by hp on 2019/8/19.
 */
    window.onload = function() {
        hiddenBox1();
        hiddenBox11();
        //顶部固定
        fix1();
        //右侧固定栏1
        fix2();
        kuang();
        leave();
        move4();

}
function hiddenBox1() {
    //console.log(123);
    var box1 = document.getElementById("one");
    var div = document.getElementById("show");

    //console.log(box1);

    box1.onclick = fn1;
    
    function fn1() {
        if (div.getAttribute("class") == "box hidden") {
            div.setAttribute("class", "box show");
        } else {
            div.setAttribute("class", "box hidden");
        }
    }
}
function hiddenBox11() {
    //console.log(123);
    var box1 = document.getElementById("three");
    var div = document.getElementById("four");

    //console.log(box1);

    box1.onclick = fn1;
    box1.onclick = fn1;

    function fn1() {
        if (div.getAttribute("class") == "box hidden") {
            div.setAttribute("class", "box show");
        } else {
            div.setAttribute("class", "box hidden");
        }
    }
}

function fix1(){
    var topDiv = document.getElementById("top");
    var height = topDiv.offsetHeight;
    var middle = document.getElementById("Q-nav1");
    var imgArr = document.getElementById("img");
    var img1 = document.getElementById("img1");

    window.onscroll = function () {
        if(scroll().top > height){
            middle.className = "fixed";
            //console.log(111);
            //console.log(height);
        }else{
            middle.className = "search1";
        }
        /*---------------*/
        var val = scroll().top;
        animate(imgArr,val+100);

        if(scroll().top>1000){
            img1.style.display = "block";
        }else{
            img1.style.display = "none";
        }
        leader = scroll().top;
    }
    /*-------------------*/
    var timer = null;
    var target = 0;
    var leader = 0;
    img1.onclick = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            var step = (target-leader)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            leader = leader +step;
            window.scrollTo(0,leader);
            if(leader === 0){
                clearInterval(timer);
            }
        },25);
    }
    /*-----------------------*/

    function animate(ele,target) {
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            var step = (target-ele.offsetTop)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            ele.style.top = ele.offsetTop + step + "px";
            console.log(1);
            if(Math.abs(target-ele.offsetTop)<Math.abs(step)){
                ele.style.top = target + "px";
                clearInterval(ele.timer);
            }
        },20);
    }
}

function fix2(){
    var img = document.getElementById("img1")
    var img1 = document.getElementById("id");
    var img3 = document.getElementById("img3");
    var img33 = document.getElementById("id3");
    var img4 = document.getElementById("img4");
    var img44 = document.getElementById("id4");
    var div = document.getElementById("e");
    var heart = document.getElementById("heart");
    var heart1 = document.getElementById("heart1");
    var heart2 = document.getElementById("heart2");
    var heart3 = document.getElementById("heart3");
    var heart4 = document.getElementById("heart4");
    var heart5 = document.getElementById("heart5");
    var h = document.getElementById("h");
    var h1 = document.getElementById("h1");
    var h2 = document.getElementById("h2");
    var h3 = document.getElementById("h3");
    var h4 = document.getElementById("h4");
    var h5 = document.getElementById("h5");
    img.onmouseover = function () {
        img1.src = "images/向上箭头1.png";
    }
    img.onmouseout = function () {
        img1.src = "images/向上箭头.png";
    }
    img3.onmouseover = function () {
        img33.src = "images/二维码1.png";
        div.className = "er show";
    }
    img3.onmouseout = function () {
        img33.src = "images/二维码.png";
        div.className = "er hidden";
    }
    img4.onmouseover = function () {
        img44.src = "images/信息 1.png";
    }
    img4.onmouseout = function () {
        img44.src = "images/信息.png";
    }
    h.onmouseover = function(){
        heart.src = "images/love3.png"
        console.log(111);
    }
    h1.onmouseover = function(){
        heart1.src = "images/love3.png"
        console.log(111);
    }
    h2.onmouseover = function(){
        heart2.src = "images/love3.png"
        console.log(111);
    }
    h3.onmouseover = function(){
        heart3.src = "images/love3.png"
        console.log(111);
    }
    h4.onmouseover = function(){
        heart4.src = "images/love3.png"
        console.log(111);
    }
    h5.onmouseover = function(){
        heart5.src = "images/love3.png"
        console.log(111);
    }
    h.onmouseout = function(){
        heart.src = "images/love2.png"
        console.log(111);
    }
    h1.onmouseout = function(){
        heart1.src = "images/love2.png"
        console.log(111);
    }
    h2.onmouseout = function(){
        heart2.src = "images/love2.png"
        console.log(111);
    }
    h3.onmouseout = function(){
        heart3.src = "images/love2.png"
        console.log(111);
    }
    h4.onmouseout = function(){
        heart4.src = "images/love2.png"
        console.log(111);
    }
    h5.onmouseout = function(){
        heart5.src = "images/love2.png"
        console.log(111);
    }
}

function kuang(){
    var mask = document.getElementById("mask");
    var a = document.getElementById("a");

    a.onclick = function (event) {
        show(mask);

        event = event || window.event;
        if(event && event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }

    }

    document.onclick = function (event) {

        event = event || window.event;
        var aaa = event.target?event.target:event.srcElement;

        console.log(event.target);

        if(aaa.id == "leave"){
            mask.style.display = "none";
        }
    }

    function show(ele){
        ele.style.display = "block";
    }
}

function leave() {
    var password = document.getElementById("password");

    addEvent("inp1", function () {
        if(/^[1-9][0-9]{4,}$/.test(this.value)){
            setClassName(this,"right1");
            setInnerHTML(this,"恭喜您,输入正确！");
        }else{
            setClassName(this,"wrong");
            setInnerHTML(this,"格式错误！");
        }
    });

    addEvent("inp2", function () {
        if(/^((13[0-9])|(15[^4,\D])|(18[0-9]))\d{8}$/.test(this.value)){
            setClassName(this,"right1");
            setInnerHTML(this,"恭喜您,输入正确！");
        }else{
            setClassName(this,"wrong");
            setInnerHTML(this,"格式错误！");
        }
    });

    addEvent("inp3", function () {
        if(/^[\w\-\.]{5,}\@[\w]+\.[\w]{2,4}$/.test(this.value)){
            setClassName(this,"right1");
            setInnerHTML(this,"恭喜您,输入正确！");
        }else{
            setClassName(this,"wrong");
            setInnerHTML(this,"格式错误！");
        }
    });

    addEvent("inp4", function () {
        if(/^((12[0-9])|(15[^4,\D])|(18[0-9]))\d{8}$/.test(this.value)){
            setClassName(this,"right1");
            setInnerHTML(this,"恭喜您,输入正确！");
        }else{
            setClassName(this,"wrong");
            setInnerHTML(this,"格式错误！");
        }
    });

    addEvent("inp5", function () {
        if(/^[a-zA-Z0-9_-]{3,16}$/.test(this.value)){
            setClassName(this,"right1");
            setInnerHTML(this,"恭喜您,输入正确！");
        }else{
            setClassName(this,"wrong");
            setInnerHTML(this,"格式错误！");
        }
    });

    addEvent("inp6", function () {
        if(/^[a-zA-Z0-9_\-$]{6,18}$/.test(this.value)){
            setClassName(this,"right1");
            setInnerHTML(this,"恭喜您,输入正确！");
            password.className = "pwd str1";
            //只有密码通过了，才能执行密码强度测试
            //从大往小判断。
            if(/^[A-Za-z0-9]+[_$][A-Za-z0-9]*$/.test(this.value)){
                password.className = "pwd str4";
            }else if(/^([a-z].*[0-9])|([A-Z].*[0-9])|[0-9].*[a-zA-Z]$/.test(this.value)){
                password.className = "pwd str3";
            }else if(/^([a-z].*[A-Z])|([A-Z].*[a-z])$/.test(this.value)){
                password.className = "pwd str2";
            }
        }else{
            setClassName(this,"wrong");
            setInnerHTML(this,"格式错误！");
        }
    });

    function addEvent(str,fn){
        document.getElementById(str).onblur = fn;
    }

    function setClassName(aaa,txt){
        var span = aaa.nextElementSibling || this.nextSibling;
        span.className = txt;
    }
    function setInnerHTML(aaa,txt){
//            console.log(this);
        var span = aaa.nextElementSibling || this.nextSibling;
        span.innerHTML = txt;
    }

}

function move4() {
    var arr = [
        {   //  1
            width:400,
            top:70,
            left:50,
            opacity:20,
            zIndex:2
        },
        {  // 2
            width:600,
            top:120,
            left:0,
            opacity:80,
            zIndex:3
        },
        {   // 3
            width:800,
            top:100,
            left:200,
            opacity:100,
            zIndex:4
        },
        {  // 4
            width:600,
            top:120,
            left:600,
            opacity:80,
            zIndex:3
        },
        {   //5
            width:400,
            top:70,
            left:750,
            opacity:20,
            zIndex:2
        }
    ];

    //0.获取元素
    var slide = document.getElementById("slide");
    var liArr = slide.getElementsByTagName("li");
    var arrow = slide.children[1];
    var arrowChildren = arrow.children;
    //设置一个开闭原则变量，点击以后修改这个值。
    var flag = true;

    //1.鼠标放到轮播图上，两侧的按钮显示，移开隐藏。
    slide.onmouseenter = function () {
        //arrow.style.opacity = 1;
        animate1(arrow,{"opacity":100});
    }
    slide.onmouseleave = function () {
        //arrow.style.opacity = 1;
        animate1(arrow,{"opacity":0});
    }

    move();
    //3.把两侧按钮绑定事件。(调用同一个方法，只有一个参数，true为正向旋转，false为反向旋转)
    arrowChildren[0].onclick = function () {
        if(flag){
            flag = false;
            move(true);
        }
    }
    arrowChildren[1].onclick = function () {
        if(flag){
            flag = false;
            move(false);
        }
    }

    //4.书写函数。
    function move(bool){
        //判断：如果等于undefined,那么就不执行这两个if语句
        if(bool === true || bool === false){
            if(bool){
                arr.unshift(arr.pop());
            }else{
                arr.push(arr.shift());
            }
        }
        //在次为页面上的所有li赋值属性，利用缓动框架
        for(var i=0;i<liArr.length;i++){
            animate1(liArr[i],arr[i], function () {
                flag = true;
            });
        }
    }

    function animate1(ele,json,fn){
        //先清定时器
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            //开闭原则
            var bool = true;


            //遍历属性和值，分别单独处理json
            //attr == k(键)    target == json[k](值)
            for(var k in json){
                //四部
                var leader;
                //判断如果属性为opacity的时候特殊获取值
                if(k === "opacity"){
                    leader = getStyle(ele,k)*100 || 1;
                }else{
                    leader = parseInt(getStyle(ele,k)) || 0;
                }

                //1.获取步长
                var step = (json[k] - leader)/10;
                //2.二次加工步长
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                //3.赋值
                //特殊情况特殊赋值
                if(k === "opacity"){
                    ele.style[k] = leader/100;
                    //兼容IE678
                    ele.style.filter = "alpha(opacity="+leader+")";
                    //如果是层级，一次行赋值成功，不需要缓动赋值
                    //为什么？需求！
                }else if(k === "zIndex"){
                    ele.style.zIndex = json[k];
                }else{
                    ele.style[k] = leader + "px";
                }
                //4.清除定时器
                //判断: 目标值和当前值的差大于步长，就不能跳出循环
                //不考虑小数的情况：目标位置和当前位置不相等，就不能清除清除定时器。
                if(json[k] !== leader){
                    bool = false;
                }
            }

            console.log(1);
            //只有所有的属性都到了指定位置，bool值才不会变成false；
            if(bool){
                clearInterval(ele.timer);
                //所有程序执行完毕了，现在可以执行回调函数了
                //只有传递了回调函数，才能执行
                if(fn){
                    fn();
                }else {

                }
            }
        },25);
    }
    function getStyle(ele,attr){
        if(window.getComputedStyle){
            return window.getComputedStyle(ele,null)[attr];
        }
        return ele.currentStyle[attr];
    }
}



