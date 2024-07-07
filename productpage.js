(function () {
  const Commoditydata = [
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ed30ba825d2c0a27f9c9867c6376e02.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "Redmi Buds 6S",
      desc: "14.2mm超大动圈单元 | 半入耳主动降噪 | 33小时超长续航",
      price: "199",
      num: ""
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202405161349_af5d2bb2e50bf45ff23d766e49da6cc5.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "Redmi Buds 6 活力版",
      desc: "14.2mm超大动圈 | 内置五种调音模式 | 30小时长续航",
      price: "99",
      num: ""
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202404091941_350d7e8fb99f243754861b986168c187.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "Xiaomi 开放式耳机",
      desc: "舒适稳固佩戴｜超线性发声单元｜独立防漏音系统",
      price: "699",
      num: ""
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202311292123_5f019eb3ce2987e60596f7a54630e44c.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "Redmi Buds 5 Pro",
      desc: "同轴双单元 旗舰音质 | 52dB/4kHz 旗舰降噪 | 49ms 超低延迟",
      price: "379",
      num: "399"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202309211159_17fe0c43d4e970c047f2a69b73e15459.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "Redmi Buds 5",
      desc: "46dB深度降噪丨12.4mm镀钛动圈丨40小时超长续航",
      price: "179",
      num: "199"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208111200_c1016839eae2c1f5bb79d5afde498e81.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "Xiaomi Buds 4 Pro",
      desc: "48dB智能动态降噪｜骨声纹通话降噪 | 独立空间音频",
      price: "799",
      num: "1099"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202205241526_03b4bf93894a1297a7f1c74d46446fac.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "Redmi Buds 4 Pro",
      desc: "43dB 宽频降噪 | HiFi 高保真音质 | 59ms 游戏低延迟",
      price: "289",
      num: "399"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202306102210_23dba6609bd84ca6a776ee4fb49fbb04.png?thumb=1&w=100&h=100&f=webp&q=90",
      title: "Redmi Buds 4活力版",
      desc: "",
      price: "89",
      num: "",
      name: "耳机"
    }],

    //////////////////
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202312081723_8c6876edb9fd120f765149945f77a4f1.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米手环8 Pro 原神定制版",
      desc: "达达利亚主题定制手环 | 主题定制充电底座 | 专属定制礼盒",
      price: "549",
      num: ""
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202311292146_8c5d78b2a31eeea568ef97352879aa1d.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "Redmi Watch 4",
      desc: "1.97英寸AMOLED大屏丨潮流金属表框丨20天超长续航",
      price: "499",
      num: ""
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202310261939_ad76b79c71d77843da233ec1e94ccff8.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "Xiaomi Watch S3",
      desc: "百变表圈 | 小米澎湃OS | 12通道心率检测模组",
      price: "779",
      num: "799"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202310262032_d6242148bfa088bfb75dfadf38a14a63.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米腕部心电血压记录仪",
      desc: "血压测量｜心电采集｜跌倒检测 紧急呼救｜蓝牙通话",
      price: "1999",
      num: ""
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202308141734_05a676c7c7649f9dbf50373e609304f4.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米手环 8 Pro",
      desc: "1.74″AMOLED炫彩大屏 | 手表级健康监测 | 独立GNSS定位",
      price: "399",
      num: ""
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202304181447_fff5c19e16988b91042cfddba800fc19.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米手环8 NFC版",
      desc: "多样快拆时尚腕带 | 跑步豆模式 | 体感互动拳击",
      price: "239",
      num: "299"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202304181447_fff5c19e16988b91042cfddba800fc19.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米手环8",
      desc: "多样快拆时尚腕带 | 跑步豆模式 | 体感互动拳击",
      price: "189",
      num: "249"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202207011906_e7f02b803d3da16ec56a611e790243ba.png?thumb=1&w=100&h=100&f=webp&q=90",
      title: "小米手环7 Pro",
      desc: "",
      price: "239",
      num: "",
      name: "穿戴"
    }]
  ];

  const appliancesdata = [
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c95135c31082640c8f42f9a61966b635.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米电视S系列",
      desc: "144HZ超高刷  3+32G   多色温色彩还原技术",
      price: "2599",
      num: ""
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/086a234cdcc9234c236b1b744ab2df68.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米电视S Pro Mini LED系列",
      desc: "144Hz超高刷、4+64G大存储",
      price: "4999",
      num: ""
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202403131610_4c436d462d84b5109080ccf6b632844c.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米电视 S Mini LED 系列",
      desc: "Mini LED 高分区背光、1200nits峰值亮度",
      price: "2999",
      num: ""
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/21429638bdd453e8c1cb5c357ff4835b.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "巨省电 小米空调 1.5匹新1级能效",
      desc: "强劲制冷 | 高效节能 | 智能互联",
      price: "2199",
      num: "2499"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9cd8a5a447b4f84faeb3791811a179f9.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家新风空调 立式3匹",
      desc: "全屋快通风，就要大新风",
      price: "6799",
      num: "7299"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/db032eeb9e8efe9551161ee18bf70d3f.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家波轮洗衣机 10kg",
      desc: "全景玻璃阻尼上盖 防夹手",
      price: "999",
      num: "1499"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202212131701_80db3da0f97aeb6b724039a4c5a24dd7.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家迷你波轮洗衣机Pro 3kg",
      desc: "高温煮洗 杀菌除螨",
      price: "849",
      num: "1599"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/608a47f5d655fc1372de67ee2f7b1c43.jpg?thumb=1&w=100&h=100&f=webp&q=90",
      title: "米家冰箱无霜两门186L",
      desc: "",
      price: "1199",
      num: "",
      name: "热门"
    }],
    ////////////
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202304180958_20a47c43888b873b18af2b89216e9c9d.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米电视大师 86英寸 Mini LED",
      desc: "千级分区 Mini LED",
      price: "14999",
      num: "15999"
    },
    {
      img: "",
      title: "",
      desc: "",
      price: "",
      num: "",
      name: "电视影音"
    }],
    //////////////////
    [{
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1664285178.54196051.jpg?thumb=1&w=200&h=200",
      title: "巨省电 小米空调 1.5匹新1级能效",
      desc: "强劲制冷 | 高效节能 | 智能互联",
      price: "2199",
      num: "2499"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1656418637.39296454.jpg?thumb=1&w=200&h=200",
      title: "巨省电 小米空调 大1匹新1级能效",
      desc: "温湿双控 | 全直流变频 | 宽温域运行",
      price: "2099",
      num: "2299"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1653472239.43129036.jpg?thumb=1&w=200&h=200",
      title: "巨省电Pro 小米空调 1.5匹新1级能效",
      desc: "能效领先一代的智能空调",
      price: "2599",
      num: "2999"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202310081508_18b8d7deaaca3515a957de09c1e18703.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家新风空调 1.5匹新1级能效 2023",
      desc: "打造室内天然氧吧|4重深度净化",
      price: "2599",
      num: "2999"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1605536123.55818348.jpg?thumb=1&w=200&h=200",
      title: "巨省电 小米空调 立式3匹新1级能效",
      desc: "高效节能 | 立体送风 | 智能互联",
      price: "4599",
      num: "5299"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a7263d580ca820db7e8de56a42641ca.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家新风空调 立式3匹新1级能效",
      desc: "全屋快通风，就要大新风",
      price: "6799",
      num: "7299"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202309261016_5420d0a9f0e651054aef1352b4b3b10a.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家中央空调风管机 3匹",
      desc: "嵌入式安装|自然融入|智能互联",
      price: "5899",
      num: "6999"
    },
    {
      img: "",
      title: "",
      desc: "",
      price: "",
      num: "",
      name: "空调"
    }]
  ];


  const householddata = [
    ////// 第一页
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202405071649_02120cc434ac8a8ce8802b8a0a83b52a.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家直流变频落地扇 Pro",
      desc: "收纳有序，与自然风同行",
      price: "399",
      num: "499"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202302241018_811ae593ad1aeb56f96048b55cb77e51.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家智能直流变频落地扇1X 升级版",
      desc: "静音舒适自然风，支持充电宝供电，随处可用， 小爱语音控制",
      price: "279",
      num: "329"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202402291951_a51413c89dd1192de0b856f9ec812af6.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家循环扇",
      desc: "风量强劲，广域覆盖",
      price: "319",
      num: "349"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3edbb646a3296374f5fb6e68e0352bfe.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家落地扇",
      desc: "静享智能轻风",
      price: "219",
      num: "299"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202207211454_7f7f5c35f38bb7fa52f1089fce037631.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家智能直流变频循环扇 落地式",
      desc: "智能温湿度控风，超广域空气循环",
      price: "399",
      num: "499"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202302241033_c60cf51538aa172fd59f62b85cfda65d.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家智能直流变频塔扇2",
      desc: "DIY自然风 ，环抱式柔和送风 ，儿童安全防护",
      price: "299",
      num: "349"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202205091848_078ef4f782ef2c81098fe5a898c3d780.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家桌面移动风扇",
      desc: "无线长续航，随处享清凉",
      price: "129",
      num: ""
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202305051744_5aa9fc57f355d850c5418dd64eddae22.png?thumb=1&w=100&h=100&f=webp&q=90",
      title: "米家智能蒸发式冷风扇",
      desc: "",
      price: "499",
      num: "",
      name: "风扇"
    }],
    ///////////////
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202403221728_bb09314672ebb191d2a6eee63dcb09b1.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家全能扫拖机器人 M30 S",
      desc: "机械臂贴边清洁，毛发实时防缠绕",
      price: "2999",
      num: "3699"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202311251129_94eabb38d397de731c90cd014b104afd.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家全能扫拖机器人M30 Pro",
      desc: "创新「毛发切割」，AI高能扫拖清洁",
      price: "3299",
      num: "4699"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202304201532_de6f38151ff0489f2017296a66710d5a.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家免洗扫拖机器人 2",
      desc: "扫、吸、拖、洗四合一的清洁助手",
      price: "1899",
      num: "2499"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202404221604_0dd9a284c241ef9ac5f87a1ad842774d.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家全能扫拖机器人 M30",
      desc: "三重激光避障，7000Pa超大吸力",
      price: "2499",
      num: "3299"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202307260056_e9953630b3f39fa0825313bfd5bef057.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家全能扫拖机器人2",
      desc: "托管式智能扫拖，一机包揽全屋地面清洁",
      price: "2399",
      num: "3499"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202209201505_51fd440d528e6a509d1fc2d3be2b8492.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家全能扫拖机器人 1S",
      desc: "智能语音召唤，清洁动口不动手",
      price: "2599",
      num: "3999"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202307211847_1c77463c39e656ec5478b8af16fdac5d.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家扫拖机器人 3C增强版",
      desc: "家庭地面清洁优选",
      price: "1099",
      num: "1299"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202308221138_8be174f9f068341d55b43aea9372a2db.png?thumb=1&w=100&h=100&f=webp&q=90",
      title: "米家扫拖机器人3",
      desc: "",
      price: "1399",
      num: "",
      name: "扫地机"
    }],
    ////////////////
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202209221524_5e4867fe23e374a7a92842614578681a.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家全效空气净化器 Ultra",
      desc: "7KG超级滤芯，7重深度净化，",
      price: "4799",
      num: "5499"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202403251650_b8232ba4d92cf2448bcf6b833789a8f4.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家空气净化器 5S",
      desc: "可监测可去除，超能除醛专家",
      price: "1499",
      num: "1699"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202304101504_22b0ebf11c5a60a76ba6de0a1c7fd2d5.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家全效空气净化器",
      desc: "分解式除醛，超能净化旗舰",
      price: "3299",
      num: "3999"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d9e887830eee09bd341b9ed130db2d9c.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家空气净化器 4 Pro",
      desc: "除醛抗菌升级",
      price: "1099",
      num: "1499"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5f2d5c086ec68c203d22b09af10233cf.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家空气净化器 4 Lite",
      desc: "洁净家中小天地，助你奔赴大世界",
      price: "599",
      num: "699"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208231100_293a400896600f574f787f78bec7d038.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家空气净化器 4 MAX",
      desc: "固态甲醛传感器，适用96㎡大空间",
      price: "2099",
      num: "3299"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202307311510_3013fc0d91cbbbdda2167d46e3384297.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家空气净化器4 Pro H",
      desc: "超能不止一面，超能净化全屋",
      price: "1899",
      num: "2199"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202405211005_e0e76f0b11cf69052b3b74ea7393ea5e.png?thumb=1&w=100&h=100&f=webp&q=90",
      title: "米家空气净化器 4",
      desc: "",
      price: "849",
      num: "",
      name: "空净"
    }],
    ///////////////////////
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202405161450_80a6da4faf22104ca9ba7f47ff1b43e4.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家无线洗地机3 Max",
      desc: "180°躺平杀菌洗烘，五合一全屋吸尘除螨*",
      price: "2599",
      num: "2999"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202403291113_d944f7fc0589038389838a7516849655.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家无线洗地机3 Pro",
      desc: "180°灵活躺平，全链路杀菌洗烘",
      price: "1899",
      num: "2499"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202310161117_0343c25251e7a2468e734dce07b9e736.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家无线洗地机2C",
      desc: "轻松杀菌洗，千元旗舰机",
      price: "979",
      num: "1499"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202405141416_139d3c6b4923cc79e41a4c53361d4ef0.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家无线吸尘器2 显尘版",
      desc: "绿光精密显尘，精准清洁防缠毛",
      price: "999",
      num: "1199"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202209281724_6ba505dea770a32533f9f08639ba8d56.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家无线吸尘器2 Lite",
      desc: "强悍大吸力 硬核快除尘",
      price: "469",
      num: "499"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202405071211_3a24ac824582475643bbdc019774310d.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家除螨仪 Pro",
      desc: "LED智能屏显丨14kPa大吸力",
      price: "379",
      num: "399"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202403151420_1cbd44314bb5be98602cd544a3464483.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家除螨仪2",
      desc: "四重除螨，洁净床褥织物",
      price: "199",
      num: "249"
    },
    {
      img: "",
      title: "",
      desc: "",
      price: "",
      num: "",
      name: "清洁"
    }],
  ];


  const kitchendata = [
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202209201443_41fb0bb47d46874e982822c1b6e14b07.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家净水器1600G",
      desc: "2.1秒一杯水，还原自来水的澎湃流速",
      price: "3499",
      num: "4599"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c5909c8e91f871efaf94e2159b6f85e.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米即热净水器Q600",
      desc: "净热一体，1秒速热，精选调温每1℃",
      price: "2299",
      num: "3499"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6594e9856ed024575434d7d81d86e868.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米净水器H600G",
      desc: "纯净生活双出水，六级过滤健康直饮",
      price: "1099",
      num: "1499"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dc7c9f2277e5181fc3d3ee2320246f26.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家净水器1000G",
      desc: "澎湃大水量，5年免换RO滤芯",
      price: "1699",
      num: "2499"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e79891260659fa51cac50f64c4e4147d.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米净水器H800G Pro",
      desc: "长效过滤，鲜活好水随心出",
      price: "1599",
      num: "1999"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f924ad94c8c598766a0d60bee5ca7006.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米即热净水器Q800",
      desc: "净水速热二合一",
      price: "2399",
      num: "2499"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202205211919_7f0456d9b7b282c920292d2206cc1ee4.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家净水器1200G",
      desc: "澎湃出水 高端净水新选择",
      price: "1999",
      num: "2799"
    },
    {
      img: "",
      title: "",
      desc: "",
      price: "",
      num: "",
      name: "净水器"
    }],
    /////////////////
    [{
      img: "",
      title: "",
      desc: "",
      price: "",
      num: "",
      name: "烟灶"
    }],
    //////////////////
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b5e7b8356420596e2116ca901e11cb7b.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家智能电饭煲 微压版 3L",
      desc: "看得见的真微压",
      price: "369",
      num: "499"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d96feb0267ddea24666b32a28984a83b.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家智能电压力锅5L",
      desc: "一锅双胆，9挡调节口感",
      price: "379",
      num: "399"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6cb309bfab923dd888a569e1b62e44ba.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家电饭煲C1",
      desc: "快慢收放自如，小巧身材内有乾坤",
      price: "159",
      num: ""
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f9f6b78a4e55001a0dffed85c099bfb0.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家智能电压力锅2.5L",
      desc: "煮饭快，焖炖煲煮一机多能",
      price: "279",
      num: "299"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/07390d2d89220f2e3f06710360ec1077.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家智能压力IH电饭煲1S 3L",
      desc: "压力IH加热 智能烹饪 ",
      price: "899",
      num: "999"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202209261417_25cc1c7fffc0d1d81e4db1b641db76ca.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家透明蒸汽电饭煲 4L",
      desc: "可视化烹饪 | 无涂层玻璃内胆 | 沥汤蒸饭&慢炖",
      price: "549",
      num: "699"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202205201909_0c600f8b38a0c5de1354c613dffa28b4.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家智能小饭煲 2",
      desc: "28分钟超快饭 体积更小",
      price: "179",
      num: "199"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208301420_72bbba99dfeac7f5c818a63e0e5f24e4.jpg?thumb=1&w=100&h=100&f=webp&q=90",
      title: "米家智能快煮电饭煲5L",
      desc: "",
      price: "289",
      num: "",
      name: "电饭煲"
    }],
    ///////////////////////
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0fabb6c16cbadaf300da4a2c2ffb9afa.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家智能蒸烤箱",
      desc: "30L大容积， 蒸烤烘炸炖一机多用",
      price: "1199",
      num: "1499"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b6a47f33993a59ff3a5c1112d484eed.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家微波炉",
      desc: "APP操控，精选食谱",
      price: "409",
      num: "449"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d9990f4266c0fb20482d637618fe9366.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家智能空气炸锅3.5 L",
      desc: "无油低脂，健康烹饪新选择",
      price: "299",
      num: "399"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1612c93ad4756215774a0dbec7a81bb2.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家电烤箱",
      desc: "全能烘焙体验",
      price: "299",
      num: "329"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb1e375d2beca06b684650de635520df.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家智能微烤一体机",
      desc: "能烧烤的微波炉",
      price: "549",
      num: ""
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f69003fc4b34010c2d69d9a23a76ba39.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家智能蒸汽小烤箱 12L",
      desc: "智享酥嫩美味",
      price: "299",
      num: ""
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d13eee83c8e9487256ad14befc4f7d46.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家智能嵌入式蒸烤一体机 S1",
      desc: "蒸烤炸一机多能，释放更多厨房空间",
      price: "3299",
      num: "3499"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202205202040_62a3156576af2ac79910581abe324e4b.png?thumb=1&w=100&h=100&f=webp&q=90",
      title: "米家智能空气炸锅Pro 4L",
      desc: "",
      price: "329",
      num: "",
      name: "微蒸烤"
    }]
  ];


  const intelligentdata = [
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202204191820_88e1f0fded3b4f05c5bdecf433a868cf.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "Xiaomi智能家庭屏 10",
      desc: "MIUI Home｜10.1 高清大屏｜115°超广角摄像头｜儿童模式｜家庭 KTV｜小爱同学",
      price: "949",
      num: "999"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/adce4500b997efaf6e3ff8e8150215f4.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米小爱音箱Play 增强版",
      desc: "LED时钟显示，语音控制传统家电",
      price: "129",
      num: "149"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e7c6e79433c883e1a022ec21402c1679.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米小爱音箱 Play",
      desc: "听音乐、语音遥控家电",
      price: "99",
      num: "109"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b619d27877bbc497468c673a317a847.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米小爱音箱 Pro",
      desc: "澎湃低音，语音遥控传统家电",
      price: "279",
      num: "299"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/86c3f61639ae6a2a9a205a463d338ed2.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米AI音箱（第二代）",
      desc: "低频饱满有深度，人声清晰有细节",
      price: "189",
      num: "199"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9946e252a7c49662376c056ced004a20.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米小爱触屏音箱",
      desc: "可视化智能家居，海量视听资源",
      price: "229",
      num: "269"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e13900c094ae4ac4eb53b35f2d0c95b0.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米小爱音箱",
      desc: "Hi-Fi级音频芯片，支持AUX IN接口，你桌面的有源音箱",
      price: "229",
      num: "249"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/49f30069c778b494257320d9da5a1a60.jpg?thumb=1&w=100&h=100&f=webp&q=90",
      title: "Redmi小爱触屏音箱 8英寸",
      desc: "",
      price: "349",
      num: "",
      name: "小爱音箱"
    }],
    /////////////////////
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5c7cb198d71ee962b38a45aa03515341.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米全自动智能门锁 Pro",
      desc: "172°高清超广角摄像头 | 智能AI人形侦测录像 | 高端全自动锁体 | 多维半导体指纹",
      price: "1599",
      num: "2199"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8db2ee381ce25dc2305829d6e151d32.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米人脸识别智能门锁 X",
      desc: "3D结构光人脸识别 | 直插芯全自动锁体 | 8种开锁方式 | MIoT+Homekit双平台智能控制",
      price: "2499",
      num: "3299"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/47332a26f2d1ad4bd7c9718cf0a6d2df.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米智能猫眼1S",
      desc: "高清摄像，远程看家，安全守护",
      price: "579",
      num: "599"
    },
    {
      img: "",
      title: "",
      desc: "",
      price: "",
      num: "",
      name: "门锁门铃"
    }],
    ////////////////////////////
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/314df4955a5f305de306155078bb103d.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米路由器AX3000",
      desc: "小米路由器AX3000 小米手机专属加速，四路独立信号放大器，新一代高通芯片，超稳运行不掉线",
      price: "299",
      num: "349"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11a222051f90dafb22b939cc5142e69.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米路由器4A千兆版",
      desc: "双核全千兆AC1200路由器",
      price: "99",
      num: "139"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c2af30d499323618f9abdaffd82b581b.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "Redmi路由器AX3000",
      desc: "Redmi AX3000 小米手机专属加速，四路独立信号放大器，新一代高通芯片，超稳运行不掉线",
      price: "239",
      num: "269"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/500a840ec69f9ce885345e9a9471a9f9.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "Redmi路由器AX6S",
      desc: "Redmi路由器AX6S",
      price: "239",
      num: "329"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/07419ed5047471b60d0232c9d8a7d84f.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米路由器4C",
      desc: "300M单频",
      price: "79",
      num: ""
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/11db80e3fcb3e186e5ea7078b0a1de5a.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米路由器AX6000",
      desc: "小米AX6000 | 2.5G全速网口 | 6路独立高性能信号放大器",
      price: "429",
      num: "549"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4023ef3196d312cda144ecb768b91cdf.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米路由器AX9000",
      desc: "三频电竞旗舰 | 12路独立信号放大器 | 9000兆级疾速体验 | 电竞专属深度优化",
      price: "999",
      num: "1299"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/9085cddd-530a-0bf0-8b09-74e96fa97cc9.jpg?thumb=1&w=100&h=100",
      title: "小米WiFi放大器 Pro",
      desc: "",
      price: "69",
      num: "",
      name: "路由器"
    }],
    //////////////////////////////
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74f5975a77c6d9fcf67e294c47561994.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "米家空调伴侣2",
      desc: "传统空调轻松智能化",
      price: "79",
      num: ""
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/068940a89c1c35a9924cb64c762879fe.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米米家智能开关",
      desc: "不同款式，多种选择",
      price: "59",
      num: ""
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7fe0a1143670e2b37e4beb91c8b0d717.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米门窗传感器2",
      desc: "开合记录",
      price: "49",
      num: ""
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0130f299091fff0d471720d9a6d3319f.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米天然气卫士",
      desc: "小米天然气卫士",
      price: "159",
      num: "179"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2bb58f6ea6660a2f4a24bfb5092fcac3.jpg?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米米家电子温湿度计Pro",
      desc: "知冷暖懂干湿的电子表",
      price: "89",
      num: "99"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202205161530_acc36b04e6966fdf0143f8c6b7932a6c.png?thumb=1&w=200&h=200&f=webp&q=90",
      title: "小米智能门锁NFC卡 全球版",
      desc: "贴心门卡 便捷安全",
      price: "49",
      num: ""
    },

    {
      img: "",
      title: "",
      desc: "",
      price: "",
      num: "",
      name: "智能设备"
    }]
  ];


  const tab_list = document.querySelectorAll(".more .tab-list");
  const brick_list = document.querySelectorAll(".span16 .brick-list");

  for (let i = 0; i < tab_list.length; i++) {
    tab_list[i].addEventListener("mouseover", function (e) {
      if (e.target.tagName === "LI") {

        const tab_active = this.querySelector(".tab-list .tab-active");
        if (tab_active) tab_active.classList.remove("tab-active");
        e.target.classList.add("tab-active");

        if (e.target.id === "1")
          render(e, Commoditydata);
        else if (e.target.id === "3")
          render(e, appliancesdata);
        else if (e.target.id === "4")
          render(e, householddata);
        else if (e.target.id === "5")
          render(e, kitchendata);
        else if (e.target.id === "6")
          render(e, intelligentdata);

      }
    });
  }


  function render(e, arr) {

    if (!e.target.id)
      return;

    let str = "";

    for (let i = 0; i < arr[e.target.dataset.index].length; ++i) {

      let { img, title, desc, price, num, name } = arr[e.target.dataset.index].at(i);

      if (i === arr[e.target.dataset.index].length - 1) {

        if (img) {
          str += `
            <li class="brick-item box-brick-item-s">
                <ul>
                  <li class="brick-item-s">
                    <a href="">
                      <div class="title-box">
                        <h3 class="title">${title}</h3>
                        <p class="price"><span class="num">${price}元</span></p>
                      </div>
                      <div class="figure-img"><img
                          src=${img}
                          alt="">
                      </div>
                    </a>
                  </li>
                  <li class="brick-item-s">
                    <a href="">
                      <div class="title-box clearfix">
                        <h3 class="xtx-title2">浏览更多</h3>
                        <span class="xtx-title">${name}</span>
                      </div>
                      <i class="iconfont icon-right"></i>
                    </a>
                  </li>
                </ul>
            </li>
            `;

          break;

        }

        str += `
          <li class="brick-item box-brick-item-s">
            <ul>
              <li class="brick-item-s">
                <a href="">
                  <div class="title-box clearfix">
                    <h3 class="xtx-title2">浏览更多</h3>
                    <span class="xtx-title">${name}</span>
                  </div>
                  <i class="iconfont icon-right"></i>
                </a>
              </li>
            </ul>
          </li>
        `;

        break;

      }

      num ? num += "元" : num;

      e.target.id === "3" ? price += "元起" : price += "元";

      str += `
          <li class="brick-item">
            <a href="">
              <div class="figure"><img
                  src=${img}
                  alt=""></div>
              <h3 class="tiele">${title}</h3>
              <p class="desc">${desc}</p>
              <p class="price">
                <span class="num">${price}</span>
                <del><span>${num}</span></del>
              </p>
            </a>
          </li>
      `;

    }

    brick_list[e.target.id].innerHTML = str;

  }
})();