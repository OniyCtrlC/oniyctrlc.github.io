(function () {
  const position_item = document.querySelector(".position-item");
  const item_top = document.querySelector(".home-tool-bar .item.top");

  if (window.scrollY >= position_item.getBoundingClientRect().top + window.scrollY) {
    item_top.style.display = "block";
  }

  window.addEventListener("scroll", function () {

    if (window.scrollY >= position_item.getBoundingClientRect().top + window.scrollY) {
      item_top.style.display = "block";
    }
    else {
      item_top.style.display = "none";
    }

  });
})();