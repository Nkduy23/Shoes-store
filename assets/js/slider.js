const listImage = document.querySelector(".slider-image-list");
const imgs = document.querySelectorAll(".slider-item__img");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const length = imgs.length;
let current = 0;

// Lấy chiều rộng của một hình ảnh
const width = imgs[0].offsetWidth;

// Hàm cập nhật slider
function updateSlider() {
  listImage.style.transform = `translateX(${-width * current}px)`;
  listImage.style.transition = "transform 0.5s ease-in-out";
}

// Tự động chuyển ảnh
const autoSlide = setInterval(() => {
  if (current === length - 1) {
    current = 0; // Quay lại ảnh đầu tiên
  } else {
    current++;
  }
  updateSlider();
}, 4000);

// Sự kiện Click nút Next
btnRight.addEventListener("click", () => {
  clearInterval(autoSlide); // Dừng tự động chuyển ảnh khi người dùng nhấn
  if (current === length - 1) {
    current = 0;
  } else {
    current++;
  }
  updateSlider();
});

// Sự kiện Click nút Previous
btnLeft.addEventListener("click", () => {
  clearInterval(autoSlide); // Dừng tự động chuyển ảnh khi người dùng nhấn
  if (current === 0) {
    current = length - 1;
  } else {
    current--;
  }
  updateSlider();
});
