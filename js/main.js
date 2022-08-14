var elSiteHeaderBtn = document.querySelector(".header-box__btn");
var elHeader = document.querySelector(".site-header");

elSiteHeaderBtn.addEventListener("click",function(){
  elHeader.classList.toggle("site-header--open");
});