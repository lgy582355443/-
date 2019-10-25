
init(0, 6, $('.bed'));
init(1, 3, $('.sofa'));
init(2, 3, $('.chair'));
init(3, 3, $('.closet'));
init(4, 3, $('.light'));

nav($('.duct0'),$('.bed'))
nav($('.duct1'),$('.sofa'))
nav($('.duct2'),$('.chair'))
nav($('.duct3'),$('.closet'))
nav($('.duct4'),$('.light'))

function init(index, num, el) {
    let proStr = '';
    let proItem = '';
    let pro = '';
    let title = '';
    let title_item = '';
    title = `<div class="title">
                <div class="title-l">
                <p>你的位置:产品展示><a href="#">产品</a></p>
            </div>
            <ul class="title-r">`;
    for (let i = 0; i < productArr.length; i++) {
        title_item += `<li class="pro-title-item ${i == index ? ' active' : ''} duct${i}"><a href="javascript:void(0);" class="${i == index ? 'active' : ''}">${productArr[i].title.replace(/\S*\b/, '')}</a></li>`;
    }
    title += title_item + `</ul></div>`;
    pro += `<div class="product-box">`;
    for (let j = 0; j < num; j++) {
        proItem +=
            `<div class="product-item">
            <img src="../../static/imgs/${productArr[index].img[j]}" alt="">
            <div class="text">
                <p class="text-en">${productArr[index].title_en[j]}</p>
                <p class="text-ch">${productArr[index].title_ch[j]}</p>
            </div>
            <div class="masks">
                <div class="m-text">
                    <div class="number"><span></span>0${j + 1}</div>
                    <p class="text-t">${productArr[index].title_en[j]}</p>
                    <p class="text-b">${productArr[index].title_ch[j]}</p>
                </div>
            </div>
        </div>`;
    }
    pro += proItem + `</div>`;
    proStr += pro;
    el.innerHTML = title + proStr;
}

// 项目展示栏跳转
function nav(elArr, target) {
    for (let i = 0; i < elArr.length; i++) {
        // $('.pro1')[i].addEventListener('click', scrollTo($('.home').offsetTop-$('.header').offsetHeight), false);
        elArr[i].onclick = function () {
            scrollTo(target.offsetTop - $('.header').offsetHeight - 20);
        }
    }
}

// 导航
function scrollTo(target) {
    clearInterval(window.timer);
    // 缓动动画
    window.timer = setInterval(function () {
        // 起点
        var start = sct();
        // 终点
        // var target = container.offsetTop;
        // 步长
        var step = (target - start) / 10;
        // 判断步长区间
        if (Math.abs(step) < 1) {
            step = step > 0 ? 1 : Math.floor(step);
        }
        // 运动
        window.scroll(0, start + step);
        if (start + step === target) {
            clearInterval(window.timer);
        }
    }, 10)
}

// 封装函数获取被页面卷入的高度
function sct() {
    return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
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