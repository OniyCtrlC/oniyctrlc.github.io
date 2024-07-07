(function () {
  const imglist = [
    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/80e65c47ad6ed80ebee2aaab0bb369d5.jpg?w=2452&h=920",
    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/397f2569b126d8fba446b6bbf57ef771.jpg?thumb=1&w=1686&h=633&f=webp&q=90",
    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/01a422c2d04a7668e6d1d4748aeadf61.jpg?thumb=1&w=1686&h=633&f=webp&q=90",
    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69d476acc0af86cce9521b97ea29214f.jpg?thumb=1&w=1686&h=633&f=webp&q=90"
  ];

  const prev = document.querySelector(".swiper-button-prev");
  const next = document.querySelector(".swiper-button-next");
  const img = document.querySelector(".swiper-container .swiper-lazy");
  next.addEventListener("click", nextToggle);
  prev.addEventListener("click", prevToggle);
  let i = 0;
  let timeID = setInterval(nextToggle, 6000);

  function nextToggle() {
    clearInterval(timeID);
    i++;
    i = i >= imglist.length ? 0 : i;

    img.style.opacity = 0;
    document.querySelector(".swiper-pagination-bullet.swiper-pagination-bullet-active").classList.remove("swiper-pagination-bullet-active");
    document.querySelector(`.swiper-pagination-bullet:nth-child(${i + 1})`).classList.add("swiper-pagination-bullet-active");
    setTimeout(() => {
      img.src = imglist[i];
      img.style.opacity = 1;

    }, 500);
    timeID = setInterval(nextToggle, 6000);
  };

  function prevToggle() {
    clearInterval(timeID);
    i--;
    i = i <= -1 ? imglist.length - 1 : i;

    img.style.opacity = 0;
    document.querySelector(".swiper-pagination-bullet.swiper-pagination-bullet-active").classList.remove("swiper-pagination-bullet-active");
    document.querySelector(`.swiper-pagination-bullet:nth-child(${i + 1})`).classList.add("swiper-pagination-bullet-active");
    setTimeout(() => {

      img.src = imglist[i];
      img.style.opacity = 1;
    }, 500);
    timeID = setInterval(nextToggle, 6000);
  }
})();