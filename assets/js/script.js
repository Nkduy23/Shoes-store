const navPC = document.querySelector("#header__nav-list--pc");
console.log(navPC);
const navMobile = document.querySelector("#header__nav-list--mobile");
navMobile.innerHTML = navPC.innerHTML;