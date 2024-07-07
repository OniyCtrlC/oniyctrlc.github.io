(function () {

  const data = [
    //Xiaomi手机
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0dce5029e2367f3e70cd786cb192d04a.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Xiaomi Civi 4 Pro",
      price: "2999元起"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/16cb4384a3d34bf7b480f3b9ce4f00a7.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Xiaomi 14 Ultra",
      price: "6499元起"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2714d55e6fe4db5e2981f82c5a6b710b.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Xiaomi 14 Pro",
      price: "4599元起"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/717290eeccdbc60c541c4d98985d3012.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Xiaomi 14",
      price: "3999元起"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35f352268526045e077a230802beb588.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Xiaomi MlX Fold 3",
      price: "6999元起"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b4846501f1e9be04d6d2e859deb0d80e.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Xiaomi Civi 3",
      price: "2999元起"
    }],
    //Redmi手机
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2d2df29f703cb991f0425ef37ac1aa96.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Redmi Turbo 3",
      price: "1799元起"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e15d7d1f415b440172d0c6553c00247a.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Redmi 13C 5G",
      price: "6499元起"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c29ce8888fee7bf46aa56cfdb5367b06.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Redmi K70 Pro",
      price: "2999元起"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d523ece50afa1ae1c4121c93289d7e86.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Redmi K70",
      price: "2299元起"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/185e0ed850202ed9cbb48eda5f68e255.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Redmi K70E",
      price: "1799元起"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7996692767ae8a8f3f83fb1c31fd6463.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Redmi Note 13 Pro",
      price: "1299元起"
    }],
    // 电视
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b16339167ac548f07334116f0ab80907.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "小米电视 S Pro Mini LED系列",
      price: "7999元"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/300ebd5f0fa66a25a52da567134db676.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "小米电视 S Mini LED系列",
      price: "3499元"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/59dba1732074d35c9258ef3bcca65624.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "小米电视S系列",
      price: "2799元"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a32280bcf272b9ee7cc03f01ff921db0.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Redmi MAX100 2025款",
      price: "8599元"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a32280bcf272b9ee7cc03f01ff921db0.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Redmi智能电视 MAX85英寸",
      price: "4599元"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdbe7f972404bbdac0dea1330b4f3677.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "RedmiA75 2025款",
      price: "2799元"
    }],
    //笔记本
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3a5d8336e401924d82e77c105bc90b8d.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Redmi G Pro 游戏本 2024",
      price: "8999元"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3442ea8432af37766b3a1f900348469.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Redmi Book Pro 14 2024",
      price: "4999元起"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1f6a20434940961e37aa3ab8f956217.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Redmi Book Pro 16 2024",
      price: "6399元起"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3f6c0ada0b42c98348d0c222c6e3a844.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Redmi Book 16 2024",
      price: "3699元起"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/998fe69710528d4744a50ded67ec05ef.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Redmi Book 14 2024",
      price: "4299元起"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/be052059c621f4a2d2ad605d8dabe879.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Redmi Book Pro 15 2023 锐龙版",
      price: "4799元起"
    }],
    //平板
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8dd1013092765f219fb3f90a1076539.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Redmi Pad Pro",
      price: "1499元起"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/02afd89b3e5ca18b30e73b4ff7a31893.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Xiaomi Pad 6S Pro 12.4",
      price: "2999元起"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/75f234c4bc74c6a3cc6b054b24a5a94c.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Redmi Pad SE",
      price: "899元起"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dca0249868dc6938fda3f71baafe10db.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "XiaomiPad6Max14",
      price: "3499元起"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7097fe3a8afcc3b82cbbb6309e3090ce.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Xiaomi Pad 6 Pro",
      price: "2099元起"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a533fdb09c9e8d9e027ee7c1915ba815.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Xiaomi Pad 6",
      price: "1699元起"
    }],
    //家电
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/531efbd4fd88b64a94079436851f56f1.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "米家冰箱对开门610L墨羽岩",
      price: "2799元"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/52c8cab6760eadd9e01871dfbf27817f.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "米家冰箱 对开门536L墨羽岩",
      price: "2499元"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/950767dbf6e63b853d39d413e97685a8.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "新风空调 立式3匹",
      price: "6799元"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/80416c1c7040aabbafa527a6ea652948.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "小米空调 1.5匹新1级能效",
      price: "2099元"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/85009f514f7505825899635daeb761b0.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "米家洗烘一体机 12kg",
      price: "1999元"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a274a6d7848f625214239386a23f27a.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "米家波轮洗衣机 10kg",
      price: "899元"
    }],
    //路由器
    [{
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b5de7ae24c438974939453553420f1a0.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Xiaomi路由器AX3000T",
      price: "169元"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a8cc8ccb1c0e8cc58d96b7ec00df6634.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Xiaomi路由器 BE3600",
      price: "249元"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2e4e053bd4dd41341ce8950ae1c3896d.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Xiaomi路由器 BE6500 Pro",
      price: "699元"
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/81f833a72b840274af1cf5931fb516f8.png?thumb=1&w=220&h=151&f=webp&q=90",
      title: "Xiaomi路由器 BE5000",
      price: "279元"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/026a28fc18eff2cfa4d26a799a2da9cc.jpg?thumb=1&w=220&h=151",
      title: "小米路由器4A 千兆版",
      price: "99元"
    },
    {
      img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2ddc6a2789c5f5ff78fa4ca1402417c8.png?thumb=1&w=220&h=151",
      title: "查看全部",
      price: "小米路由器"
    }],
  ];


  let timeID = 0;
  const children = document.querySelector(".item-children");
  const list = document.querySelector(".header-nav .nav-list");
  children.addEventListener("mouseover", show);
  children.addEventListener("mouseout", hide);

  list.addEventListener("mouseover", show);
  list.addEventListener("mouseout", hide);


  function show(e) {
    if (e.target.tagName === "A" && e.target.dataset.index) {
      clearInterval(timeID);
      let str = "";
      data[e.target.dataset.index].forEach(item => {
        const { img, title, price } = item;
        str += `
          <li>
            <a href="javascript:;">
              <div class="figure-thumb">
                <img
                  src="${img}"
                  alt="">
              </div>
              <p class="title">${title}</p>
              <p class="price">${price}</p>
            </a>
          </li>
          `
      });

      document.querySelector(".item-children .children-list").innerHTML = str;
      if (e.target.dataset.index === "6") {
        const p = document.querySelector(".item-children .children-list li:last-child p:last-child");
        p.style.color = "#333";
      }

      children.style.height = "250px";
      children.style.boxShadow = "0 3px 10px rgba(200, 200, 200, 0.3)";
    } else if (this === children) {
      clearInterval(timeID);
    }
  }

  function hide(e) {
    if (e.target.tagName === "A" && e.target.dataset.index || this === children) {
      timeID = setTimeout(() => {
        children.style.height = "0px";
        children.style.boxShadow = "none";
      }, 200);
    }
  }

})();