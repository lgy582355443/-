//nav显示或隐藏
let btnFalg = true; 
$('.close').onclick=function(){
    $('.nav').classList.toggle("nav-show");
    if(btnFalg){
        $('.top').style.animation = 'on1 ease 1 1s both';
        $('.center').style.animation = 'on2 ease 1 1s both';
        $('.bottom').style.animation = 'on3 ease 1 1s both';
        btnFalg = false;
    }else{
        $('.top').style.animation = 'off1 ease 1 1s both';
        $('.center').style.animation = 'off2 ease 1 1s both';
        $('.bottom').style.animation = 'off3 ease 1 1s both';
        btnFalg = true;
    }
    
}

// 类jq的$
function $(str) {
    var arr = [];
    // 判断首位字符
    if (str[0] === ".") {
        arr = document.getElementsByClassName(str.slice(1));
        return arr.length > 1 ? arr : arr[0];
    } else if (str[0] === "#") {
        return document.getElementById(str.slice(1));
    } else {
        arr = document.getElementsByTagName(str);
        return arr.length > 1 ? arr : arr[0];
    }
}