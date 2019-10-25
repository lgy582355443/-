//渲染projuect
var proArr = [
    {
        title: '家居',
        img: ['pro-img-1.jpg', 'pro-img-2.jpg', 'pro-img-3.jpg','pro-img-4.jpg', 'pro-img-5.jpg', 'pro-img-6.jpg'],
        text_t: ['Marylebone公寓室内改造 上海', '月见棱廓 北京', '亭仔脚 台北','白虎头村老宅改造 北京','藏式民居改造 拉萨','Florentine公寓 杭州',],
        text_b: ['木隔墙创造出简约的生活空间', '舒适而注重情感交流的小住宅', '生活记忆的延续','老宅，院落，远山','兼顾藏族传统精神生活的现代住宅','两种色调与两种氛围的居住空间'],

    },
    {
        title: '办公',
        img: ['pro-img-7.jpg', 'pro-img-8.jpg', 'pro-img-9.jpg'],
        text_t: ['Olste办公空间 深圳', '百分金融办公室 北京', '感物办公空间 杭州'],
        text_b: ['干净明亮的办公空间', '从“私密”到“开放”', '我和我的森林性感受'],

    },
    {
        title: '餐饮',
        img: ['pro-img-10.jpg', 'pro-img-11.jpg', 'pro-img-12.jpg'],
        text_t: ['肯德基西安大雁塔店 西安', 'La Palma餐厅 重庆', 'LUCKY PIGGY 杭州'],
        text_b: ['以现代语言讲述古城历史文化', '亲和力满满的轻食餐厅'],
    },
    {
        title: 'MORE',
        img: ['pro-img-13.jpg', 'pro-img-14.jpg', 'pro-img-15.jpg'],
        text_t: ['筑蹊生活主题书店 宁波', 'R FITNESS健身工作室 香港', '月饼博物馆 乌兰察布'],
        text_b: ['有机几何与循环路径的购书体验', '由光定义的空间', '一个本地材料营造的低成本博物馆'],
    },
];

var productArr = [
    {
        title: '床 bed',
        icon: 'product-nav-1.png',
        title_en: ['Pemberly&nbsp;&nbsp;Row', 'Soloman', 'Chester', 'Hawthorne', 'Henry&nbsp;&nbsp;Mid-Century', 'Modberg'],
        title_ch: ['软垫加州特大号床板', '中世纪浅米色面料平台床', '簇绒天鹅绒特大号床', '女王平台床', '现代软垫平台床', '墨西拿灰色生态床'],
        img: ['product-bed-1.jpg', 'product-bed-2.jpg', 'product-bed-3.jpg', 'product-bed-4.jpg', 'product-bed-5.jpg', 'product-bed-6.jpg',],
    },
    {
        title: '沙发 sofa',
        icon: 'product-nav-2.png',
        title_en: ['Outdoor', 'Hampton', 'Premier', 'Outdoor', 'Hampton', 'Premier',],
        title_ch: ['户外庭院沙发', '汉普顿客厅套装', '总统客厅套装', '户外庭院沙发', '汉普顿客厅套装', '总统客厅套装',],
        img: ['product-sofa-1.jpg', 'product-sofa-2.jpg', 'product-sofa-3.jpg', 'product-sofa-1.jpg', 'product-sofa-2.jpg', 'product-sofa-3.jpg',],
    },
    {
        title: '椅子 chair',
        icon: 'product-nav-3.png',
        title_en: ['Filton', 'Ashford&nbsp;&nbsp;Sean', 'Mariette', 'Filton', 'Ashford&nbsp;&nbsp;Sean', 'Mariette'],
        title_ch: ['绗缝皮革柜台凳', '深色帆布柜台凳', '玛丽埃塔户外铸铝黑沙套件', '绗缝皮革柜台凳', '深色帆布柜台凳', '玛丽埃塔户外铸铝黑沙套件'],
        img: ['product-chair-1.jpg', 'product-chair-2.jpg', 'product-chair-3.jpg', 'product-chair-1.jpg', 'product-chair-2.jpg', 'product-chair-3.jpg'],
    },
    {
        title: '柜子 closet',
        icon: 'product-nav-4.png',
        title_en: ['Manhattan', 'Magnussen', 'South&nbsp;&nbsp;Shore', 'Manhattan', 'Magnussen', 'South&nbsp;&nbsp;Shore'],
        title_ch: ['曼哈顿现代白色衣橱', 'Lancaster燕尾灰衣橱', 'Axess&nbsp;&nbsp;Armoire黑色绅士衣橱', '曼哈顿现代白色衣橱', 'Lancaster燕尾灰衣橱', 'Axess&nbsp;&nbsp;Armoire黑色绅士衣橱'],
        img: ['product-cupboard-1.jpg', 'product-cupboard-2.jpg', 'product-cupboard-3.jpg', 'product-cupboard-1.jpg', 'product-cupboard-2.jpg', 'product-cupboard-3.jpg'],
    },
    {
        title: '灯 light',
        icon: 'product-nav-5.png',
        title_en: ['5-Light', 'Zeplin&nbsp;&nbsp;12-Light', 'Mousse', '5-Light', 'Zeplin&nbsp;&nbsp;12-Light', 'Mousse'],
        title_ch: ['油擦青铜枝形吊灯', 'Sputnik枝形吊灯', '现代枝形吊灯米白色灯罩', '油擦青铜枝形吊灯', 'Sputnik枝形吊灯', '现代枝形吊灯米白色灯罩'],
        img: ['product-light-1.jpg', 'product-light-2.jpg', 'product-light-3.jpg', 'product-light-1.jpg', 'product-light-2.jpg', 'product-light-3.jpg'],
    },
];