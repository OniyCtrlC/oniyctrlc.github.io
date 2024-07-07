(function () {
  const data = [
    //手机
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5c57d3a5e8a2fde79bcffce9d5344c80.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Xiaomi MIX系列"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d989ce63c679d0e9e8cf64397cef588a.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Redmi 数字系列"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3dfefde90afce9f056ea5946ed69d0b1.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Xiaomi 数字旗舰"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/faec0354fdd95311ed8ae9a5e4e4df0e.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Xiaomi Civi系列"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Redmi K系列"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e12d8f226458729f4c92063b09d4f0f2.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Redmi Turbo系列"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Redmi Note系列"
    }],
    //电视
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/17d347270c93f22df0a78a56aa3d8550.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "小米电视 S Pro Mini LED"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fb29bd1fdc24747f29a1391842e7249b.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Redmi电视 A系列 2025"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c2e3fdbf6fe7a13c06644f16c8dc8877.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "小米电视 S系列"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4b477b5e44c1b9eb7d75c55f1c3f440.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "小米电视A竞技系列"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/30508961963af8937ead2013b77b97fe.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Redmi K系列"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/30508961963af8937ead2013b77b97fe.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Redmi电视 MAX100 202"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b72abec0b476c741a85669009add9.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Redmi MAX85"
    }],
    //家电
    [{
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/630b9e523bb2e1387ce6c7be1edaca18.png?thumb=1&w=38&h=38",
      text: "壁挂空调"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/20e478a62b19d36ff05e92763fe7396f.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "立式空调"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afcf69ccc6c889edb4ceeca205799d23.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "中央空调"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e6fe32cdaf14e104013384d89100f9c6.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "冰箱"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f23bac0cfa0082b79230350b87d27eea.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "滚筒洗衣机"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd480335781b6c6d6c0ba586c5bb209c.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "波轮洗衣机"
    },
    ////////////////////////////////
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fc14493d86277936ebf37fe79b95c6f4.jpg?thumb=1&w=38&h=38&f=webp&q=90",
      text: "米家石墨烯折叠踢脚线电.."
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/245008085a0758287da30d4e5d186d04.jpg?thumb=1&w=38&h=38&f=webp&q=90",
      text: "米家石墨烯踢脚线电暖骼."
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6aa1871d84aaae98cd676f5e2cf5c2f2.jpg?thumb=1&w=38&h=38",
      text: "电暖器"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12f4b26ced3716d07bfcc6beba751188.jpg?thumb=1&w=38&h=38",
      text: "净水器"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f7dcbb8c268574041ce0b4b98e591cf1.jpg?thumb=1&w=38&h=38&f=webp&q=90",
      text: "微蒸烤"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bf07e32a082098cc81a433fe360811c8.gif?thumb=1&w=38&h=38&f=webp&q=90",
      text: "烟灶"
    },
    ////////////////////////////
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/91ccbb3270bcfd72a3c3ae98f15aed9d.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "洗碗机"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/603beb09930e32addd1b362bf43c7ac2.jpg?thumb=1&w=38&h=38",
      text: "扫地机器人"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/26deda5474eb7eb7e5b34547c58b9893.jpg?thumb=1&w=38&h=38",
      text: "吸尘器"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e997ed31cd5199ec0a24eeb48a37b1e7.jpg?thumb=1&w=38&h=38",
      text: "空气净化器"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/390e15818dd103b2f96f4ac742d47379.jpg?thumb=1&w=38&h=38",
      text: "电饭煲"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d93e6a98403262a506c9e9b22293cdae.jpg?thumb=1&w=38&h=38",
      text: "电磁炉"
    },
    ///////////////////////////////////////////
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/39c8ccbebd08687bc6780373b7ef2a95.jpg?thumb=1&w=38&h=38",
      text: "水壶"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3a3e4238b70ef8db89ae77f8a3762fc8.png?thumb=1&w=38&h=38",
      text: "落地风扇"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c12fd1da9fed662842d6f5c57d7737c9.png?thumb=1&w=38&h=38",
      text: "投影仪"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c0a6b523433a492dbf32035b2983d98e.jpg?thumb=1&w=38&h=38",
      text: "灯具"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d1c8cfb055709db380c6de981a4c894b.jpg?thumb=1&w=38&h=38",
      text: "插线板"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1cc417a7cae8c4ff8b0041fa29003717.jpg?thumb=1&w=38&h=38",
      text: "新风机"
    }],
    //笔记本 平板
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/89a663c2e6c714754ec3d7d762edbe0c.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Xiaomi轻薄本"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc502a8cdc637161c1dc813bd4e35b49.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Redmi轻薄本"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cdb9f2fce41769ecf852fa84fd078c5c.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "RedmiG 游戏本"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/01093ece938a05e0e6e6b64299eb89ae.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Redmi 显示器 G34WQ"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/627ca9afd92d4efa4e29dce497c7bf8b.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Redmi显示器 GPro 27"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a65a61d8b1c682eb18dd265652534f3.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Redmi显示器A27IPS版"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2ac4fd34e03041586d6507444d0a24ca.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Xiaomi 平板"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/722dcf898f2db1e5689a6df08e87b525.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Redmi平板"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d021135f38996f2de646b70103b91ba.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Redmi 显示器 G27"
    }],
    //出行 穿戴
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b2db8cbb0eb80872b0a17b6ed28f3b04.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "小米手环8 Pro 原神定制版"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bcc439a3b36d1a845747a31afa49625d.jpg?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Redmi Watch 4"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/04d43426739f027486327c3b3bf5eaaf.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Xiaomi Watch S3"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/12c3328f8729e50462b439512521a694.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "小米手环 8 Pro"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2f036af51af263aa6368718828e0d82e.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "RedmiWatch 3 青春版"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c8c904c349d47cbcb4eefc803a66544.jpg?thumb=1&w=38&h=38&f=webp&q=90",
      text: "小米手环8"
    },
    ////////////////////////////////
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ce3d8a9eff7374f1dc11d2f08c73011.jpg?thumb=1&w=38&h=38&f=webp&q=90",
      text: "小米手环8 NFC版"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ce3d8a9eff7374f1dc11d2f08c73011.jpg?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Redmi 手环2"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9571e91cffc2f1e5f9ea0d00d97b3b32.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "小米手环7 Pro"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab4a67cfa9b5c4839b83c342d6a9a469.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "九号平衡车"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/50180b158690a40f9cbc684c7646d297.jpg?thumb=1&w=38&h=38",
      text: "九号平衡车 Plus"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/626b982c94f48ed1b259483adb90e4d6.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "九号平衡车燃动版"
    },
    ////////////////////////////
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/54d0cbba1ae104949c0ab3c0dc3fb4f3.jpg?thumb=1&w=38&h=38&f=webp&q=90",
      text: "米家电动滑板车1S"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c9c97f78e2ffad07e7e16221785fed55.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "米家电动滑板车 3 青春版"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/54fd3448445f5d7bf2fa6178ca09c90b.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "g面HIMO Z20 折叠电动助力."
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bf2f0c73b5a46c9e1997c06129b52ab2.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "九号平衡车 改装套件"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2cf094ef537b34ed15028f7d50811e6e.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "九号卡丁车Pro兰博基尼."
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/02944ae550c085526b0f4954d84f1de0.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "小米车载充电器快充版"
    },
    ///////////////////////////////////////////
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/787c807176455f9ae40146af11e98b1e.jpg?thumb=1&w=38&h=38&f=webp&q=90",
      text: "小米车载充电器快充版1A."
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/46bbc5d5750f6af3f505c029ee6f1ba4.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "落地风扇"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/90cf14361fbe72fb8b063606d243610b.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "小米无线车充 Pr0"
    }, {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac25dffa570f0b12b6d52f968bfec3f6.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "米家充气宝1S"
    }],
    // 耳机 音响
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b98ec4b01e8a36886e5830bb78a5555f.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Redmi Buds 6S"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b2acd6de4ca7d7997a62eb1f9fb91a23.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Redmi Buds 6 活力版"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/373ebc31f973aeeed8896bdefacffe74.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Xiaomi 开放式耳机"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6d342fe78c4aca7e6458bd25ab15bdc9.jpg?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Redmi Buds 5 Pro"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/08491e78c629cadf0945d2668e9d2cc5.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Redmi Buds 5"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e490f40e07f1808a1f6f01fc7aef2158.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Redmi Buds 4活力版"
    },
    ////////////////////////////////
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/07461cc775ecbcd34629676e69b8fbf5.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Xiaomi Buds 4"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e490f40e07f1808a1f6f01fc7aef2158.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Redmi Buds 4青春版"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/07461cc775ecbcd34629676e69b8fbf5.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Xiaomi Buds 4 Pro"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d5ba4e161efa507a06c7d4935bd6a4c.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Redmi Buds 4 Pro"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1dbed761e2d9b1d2814d626b67878bdd.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Redmi Buds 4"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5ea8cb5505802096e0fcffd2b5ac01a1.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Neckdace"
    },
    ////////////////////////////
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e079a49ae127017d507698ea21b7cae7.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "小米活塞耳机"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/29f9d79865444eb994e5bd087eb07ae8.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Xiaomi Sound"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4086b6775c5194fff928ccd23d325acf.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Xiaomi智能家庭屏 10"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3080f7634a71b9863966ff0b10ad1a53.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "小米小爱触屏音箱Pro 8"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9177af7098efadcaac278e2f9c6f113a.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "小爱音箱 Pro"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/360215a1e32317abb912d48c3e80dd20.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Xiaomi蓝牙音箱 Mini"
    },
    ///////////////////////////////////////////
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa861ad93e69c69c7b2d1d21fd6946cd.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "小爱音箱Play 增强版"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/df7c5b83fa173824052ca7929dbb0c37.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "小米小爱触屏音箱"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/abe665fafbef94eb3626ae8baf1de97e.jpg?thumb=1&w=38&h=38",
      text: "Xiaomi智能家庭屏Pro 8"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/007308d07c93d959c1ca8c8d62853914.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Xiaomi Sound Pro"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/daeb40550103b72449ee783eabb45b0d.jpg?thumb=1&w=38&h=38&f=webp&q=90",
      text: "小米小爱音箱 Play"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3d5963e212402fa5ebd2e71dd10c426c.jpg?thumb=1&w=38&h=38",
      text: "小米小爱音箱 Play"
    }],
    //健康 儿童
    [{
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/da43c3dd6b171ee267f1fd1ec01b9208.jpg?thumb=1&w=38&h=38",
      text: "洗手机"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/60d7bdf307ceaba08b3275246ad3ab53.jpg?thumb=1&w=38&h=38",
      text: "剃须刀"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96b5d738ce5926e3a6969ad68fa1521d.jpg?thumb=1&w=38&h=38&f=webp&q=90",
      text: "修剪器"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/15447769c461fdc71e84a7badb83f09b.jpg?thumb=1&w=38&h=38",
      text: "牙刷"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bba7ce79f4d61939c69b7a26bf507bae.jpg?thumb=1&w=38&h=38",
      text: "吹风机"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/459afd0eb2a3bc6313e7ac62bd3a52df.png?thumb=1&w=38&h=38",
      text: "体重秤"
    },
    //////////////////////////
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fe6166ca2026008abb86bc67dfd8211d.jpg?thumb=1&w=38&h=38",
      text: "体脂秤"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9e04107f99edded4a64b7e92ae25641d.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "米家跑步机"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/84ca0dbb3d7b8debc2e531109d7c2b58.jpg?thumb=1&w=38&h=38&f=webp&q=90",
      text: "米家动感单车"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fb1fee7e2f2963baae34d3611a2b7e9f.jpg?thumb=1&w=38&h=38",
      text: "走步机"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d9d211ae20e700690ce9eec644ac3f31.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "益智积木"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a0b3a592784632760a7ef25de50147a7.jpg?thumb=1&w=38&h=38",
      text: "儿童手表"
    },
    /////////////////////////////////////
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9f6a34ed8071b821ee5aa8d32a7be95d.jpg?thumb=1&w=38&h=38",
      text: "儿童滑板车"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg?thumb=1&w=38&h=38",
      text: "婴儿推车"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c4568ec9535a8707cea88dcd0148dda8.jpeg?thumb=1&w=38&h=38&f=webp&q=90",
      text: "理发器"
    }],
    //生活 箱包
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=38&h=38&f=webp&q=90",
      text: "小背包"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg?thumb=1&w=38&h=38",
      text: "双肩包"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2846c64ffd97969c639979da9bb97974.jpg?thumb=1&w=38&h=38&f=webp&q=90",
      text: "胸包"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5138635ef1396e35856ec942e3b6c0.jpg?thumb=1&w=38&h=38&f=webp&q=90",
      text: "旅行箱"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/77aa97808ebf4965cf823fd2199433ec.jpg?thumb=1&w=38&h=38&f=webp&q=90",
      text: "收纳袋"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e899d08e36c306570d4fe3c75df90a42.jpg?thumb=1&w=38&h=38",
      text: "运动鞋"
    },
    //////////////////////////
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c6b6895044b55858102f72d87a6c39f.jpg?thumb=1&w=38&h=38&f=webp&q=90",
      text: "服饰"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d521bd58668f66c50562b8fa8949f67c.jpg?thumb=1&w=38&h=38",
      text: "眼镜"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/aba45662667dceaf4ba0e5b08f44d3a7.jpg?thumb=1&w=38&h=38",
      text: "床垫"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/744306b95df4d130bdfc346ff2b3c871.png?thumb=1&w=38&h=38",
      text: "枕头"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/458169c8138413666feb860068ce1a56.jpg?thumb=1&w=38&h=38",
      text: "螺丝刀"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/813d173eff50a83abb8abd5abde5f5a6.jpg?thumb=1&w=38&h=38",
      text: "水杯"
    },
    /////////////////////////////////////
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/59d3a701ac0bbb78f1b1d0ea7ebc7505.jpg?thumb=1&w=38&h=38",
      text: "驱蚊器"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/21c3ec8638dd75f5c54f1a69864a1cc9.jpg?thumb=1&w=38&h=38",
      text: "毛巾/浴巾"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c9279a17e9399958420af64e449e3214.jpg?thumb=1&w=38&h=38",
      text: "笔"
    }],
    // 智能 路由器
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/435f8b56d41de210d1c4598f4f00fa50.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "MIJIA K歌麦克风"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&w=38&h=38",
      text: "打印机"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4670a965ac5f0dd32689e06c27cea78f.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "小米路由器"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/399b717a9d27252f21e32a981403c1c0.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "Redmi路由器"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa7c5302bf6c8e040b084dee50fa699f.jpg?thumb=1&w=38&h=38&f=webp&q=90",
      text: "智能家庭"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/21fedf7ba9019bce59cbc4856f907076.jpg?thumb=1&w=38&h=38",
      text: "对讲机"
    },
    //////
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/067f4a6f0ffb264ed40734a97deae52d.jpg?thumb=1&w=38&h=38",
      text: "摄像机"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4fb7885d49255b93f7245aa53501294c.jpg?thumb=1&w=38&h=38",
      text: "智能门锁"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b2f1afe3f26a673a736c0927fefe238a.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "门铃/猫眼"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/286f1b9527d8df27c43ca28fcf71f062.jpg?thumb=1&w=38&h=38&f=webp&q=90",
      text: "小爱音箱"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7242436b36197a81d73b67ce6a5f26f5.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "家庭屏"
    }],
    // 电源 配件
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/458adc268050c17312da7c12328395e8.jpg?thumb=1&w=38&h=38&f=webp&q=90",
      text: "插座插排"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "移动电源"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/45dd7a2c4fc3d17d5d261ed3eed7cd15.jpg?thumb=1&w=38&h=38",
      text: "数据线"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/49f1917ed50c197e7b27407a10256fa3.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "平板配件"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/864bcd18999a7b0fe22365f7ea7909e0.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "充电器"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/10ec831749f1c657fc0a494feab15ed4.jpg?thumb=1&w=38&h=38",
      text: "电池"
    },
    //////
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2725e04c955dc060ac142fabbf809c1e.jpg?thumb=1&w=38&h=38",
      text: "自拍杆"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5c6e60e48edf17219724faad95963b93.jpg?thumb=1&w=38&h=38",
      text: "手机壳"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e9e248c899fd895c9267f494ea1aaebf.jpg?thumb=1&w=38&h=38",
      text: "手机贴膜"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/27074367aa02371a3c3c417c41195346.png?thumb=1&w=38&h=38&f=webp&q=90",
      text: "无线充电器"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9c3ead590f49767a4f562b7285215f5e.jpg?thumb=1&w=38&h=38",
      text: "黑鲨配件"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/57d9989807dbc15c1a82bc49acc1f06f.jpg?thumb=1&w=38&h=38",
      text: "其他配件"
    }]
  ];


  const category = document.querySelector(".site-category");
  const children = document.querySelector(".children");
  const list = document.querySelector(".children-list");
  let timeID = null;
  category.addEventListener("mouseover", show);
  category.addEventListener("mouseout", hide);

  children.addEventListener("mouseenter", show);
  children.addEventListener("mouseleave", hide);


  function show(e) {
    if (e.target.tagName === "LI" && e.target.dataset.index) {
      clearInterval(timeID);
      if (e.target.dataset.index === "0" || e.target.dataset.index === "1" ||
        e.target.dataset.index === "3" || e.target.dataset.index === "8" || e.target.dataset.index === "9") {
        list.style.width = "500px";
      }
      else if (e.target.dataset.index === "2" || e.target.dataset.index === "4" || e.target.dataset.index === "5") {
        list.style.width = "990px";
      } else if (e.target.dataset.index === "6" || e.target.dataset.index === "7") {
        list.style.width = "750px";
      }



      const li = document.querySelector(".category-item.active");
      if (li) li.classList.remove("active");
      e.target.classList.add("active");
      let str = "";
      data[e.target.dataset.index].forEach(item => {

        const { img, text } = item;

        str += `
        <li>
          <a href="" class="link">
            <img class="thumb" src="${img}" alt="">
            <span class="text">${text}</span>
          </a>
        </li>
        `;
      });

      list.innerHTML = str;
      list.style.boxShadow = "0 0 5px rgb(0, 0, 0, 0.3)";
      children.classList.add("active");
    } else if (this === children) {
      clearInterval(timeID);
    }
  }

  function hide(e) {
    if (e.target.tagName === "LI" && e.target.dataset.index || this === children) {
      timeID = setTimeout(() => {
        const li = document.querySelector(".category-item.active");
        if (li) li.classList.remove("active");
        children.classList.remove("active");
        list.style.boxShadow = "none";
      }, 200);
    }
  }
})();