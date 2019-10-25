
initProject();
initProduct();

window.onload = function () {
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        });
        wow.init();
    };
}

//banner轮播
var bannerSwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true, // 循环模式选项
    autoplay: true,
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

//初始化project栏
function initProject() {
    var proStr = '';
    for (var i = 0; i < proArr.length; i++) {
        var proItem = '';
        var pro = '';
        pro += `<div class="swiper-slide">`;
        for (var j = 0; j < 3; j++) {
            proItem +=
                `<div class="project-item">
        <img src="./static/imgs/${proArr[i].img[j]}" alt="">
        <div class="text">
            <p class="text-t">${proArr[i].text_t[j]}</p>
            <p class="text-b">${proArr[i].text_b[j]}</p>
            <div class="btn"></div>
        </div>
        <div class="masks">
            <div class="m-text">
                <p class="text-t">${proArr[i].text_t[j]}</p>
                <p class="text-b">${proArr[i].text_b[j]}</p>
                <div class="btn"></div>
            </div>
        </div>
    </div>`;
        }
        pro += proItem + `</div>`;
        proStr += pro;
    }
    $('.project-c').innerHTML = proStr;
}


//projuect轮播
var proSwiper = new Swiper('.project-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: false, // 循环模式选项
    observer: true,//实时检测，动态更新
    pagination: {
        el: '.project-title',
        type: 'custom',
        clickable: true,
        autoplayDisableOnInteraction: false,
        renderCustom: function (swiper, current, total) {
            var _html = '';
            for (var i = 0; i < total; i++) {
                if (current == i + 1) {
                    _html += `<li class="pro-title-item active" onclick=goTo(proSwiper,${i})>${proArr[i].title}</li>`;
                } else {
                    _html += `<li class="pro-title-item" onclick=goTo(proSwiper,${i})>${proArr[i].title}</li>`;
                }
            }
            return _html;//返回所有的页码html   
        }
    }
})

//初始化product栏
function initProduct() {
    var productStr = '';
    var title = '';
    for (var i = 0; i < productArr.length; i++) {
        var productItem = '';
        var product = '';
        title += `<li class="product-title-item">
                        <img src="./static/imgs/${productArr[i].icon}" alt="">
                        <p class="product-title-text">${productArr[i].title}</p>
                    </li>`
        product += `<div class="swiper-slide"><div class="product-box">`;
        for (var j = 0; j < productArr[i].img.length; j++) {
            productItem +=
                `<div class="product-item">
                <img src="./static/imgs/${productArr[i].img[j]}" alt="">
                <div class="text">
                    <p class="text-en">${productArr[i].title_en[j]}</p>
                    <p class="text-ch">${productArr[i].title_ch[j]}</p>
                </div>
                <div class="masks">
                    <div class="m-text">
                        <div class="number"><span></span>0${j + 1}</div>
                        <p class="text-t">${productArr[i].title_en[j]}</p>
                        <p class="text-b">${productArr[i].title_ch[j]}</p>
                    </div>
                </div>
            </div>`;
        }
        product += productItem + `</div></div>`;
        productStr += product;
    }
    $('.product-c').innerHTML = productStr;
    // $('.product-title')[0].innerHTML = title;
}

//product轮播
var ductSwiper = new Swiper('.product-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: false, // 循环模式选项
    observer: true,//实时检测，动态更新
    pagination: {
        el: '.product-title',
        type: 'custom',
        clickable: true,
        autoplayDisableOnInteraction: false,
        renderCustom: function (swiper, current, total) {
            var _html = '';
            for (var i = 0; i < total; i++) {
                if (current == i + 1) {
                    _html += `<li class="product-title-item active"  onclick=goTo(ductSwiper,${i})>
                                <img class='duct-t activeImg' src="./static/imgs/${productArr[i].icon}" alt="">
                                <p class="product-title-text active">${productArr[i].title}</p>
                            </li>`;
                } else {
                    _html += `<li class="product-title-item"  onclick=goTo(ductSwiper,${i})>
                                <img class='duct-t' src="./static/imgs/${productArr[i].icon}" alt="">
                                <p class="product-title-text">${productArr[i].title}</p>
                            </li>`;
                }
            }
            return _html;//返回所有的页码html   
        }
    }
})


//轮播跳转
function goTo(swiperName, index) {
    swiperName.slideTo(index, 500, false);
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