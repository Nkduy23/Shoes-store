const listImage = document.querySelector(".slider-image-list");
const imgs = document.querySelectorAll(".slider-item");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const length = imgs.length;
let current = 0;

// Biến dùng để xử lý kéo/vuốt
let isDragging = false;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;

// Hàm cập nhật slider
function updateSlider() {
  const width = imgs[0].offsetWidth; // Lấy chiều rộng mỗi lần cập nhật để đảm bảo tính linh hoạt
  currentTranslate = -imgs[0].offsetWidth * current;
  prevTranslate = currentTranslate; // Cập nhật vị trí trước
  listImage.style.transform = `translateX(${currentTranslate}px)`;
  listImage.style.transition = "transform 0.5s ease-in-out";
}

// Tự động chuyển ảnh
let autoSlider = setInterval(nextSlide, 4000);

function nextSlide() {
  if (current === length - 1) {
    current = 0; // Quay lại ảnh đầu tiên
  } else {
    current++;
  }
  updateSlider();
}

// Sự kiện Click nút Next
btnRight.addEventListener("click", () => {
  clearInterval(autoSlider); // Dừng tự động chuyển ảnh khi người dùng click vào
  nextSlide();
});

// Sự kiện Click nút Previous
btnLeft.addEventListener("click", () => {
  clearInterval(autoSlider); // Dừng tự động chuyển ảnh khi người dùng click vào
  if (current === 0) {
    current = length - 1;
  } else {
    current--;
  }
  updateSlider();
});

// Sự kiện kéo chuột hoặc vuốt
listImage.addEventListener("mousedown", startDrag);
listImage.addEventListener("mousemove", drag);
listImage.addEventListener("mouseup", endDrag);
listImage.addEventListener("mouseleave", endDrag);
listImage.addEventListener("touchstart", startDrag);
listImage.addEventListener("touchmove", drag);
listImage.addEventListener("touchend", endDrag);

function startDrag(e) {
  clearInterval(autoSlider); // Dừng auto-slide khi kéo
  isDragging = true;
  startX = getPositionX(e);
  listImage.style.transition = "none"; // Tắt hiệu ứng khi đang kéo
}

function drag(e) {
  if (!isDragging) return;
  const currentPosition = getPositionX(e);
  const delta = currentPosition - startX; // Tính khoảng kéo
  listImage.style.transform = `translateX(${currentTranslate + delta}px)`;
}

function endDrag(e) {
  if (!isDragging) return;
  isDragging = false;
  const movedBy = getPositionX(e) - startX; // Khoảng cách kéo
  const width = imgs[0].offsetWidth;

  // Kiểm tra điều kiện để chuyển ảnh
  if (movedBy < -width / 4 && current < length - 1) {
    current++; // Vuốt trái -> ảnh tiếp theo
  } else if (movedBy > width / 4 && current > 0) {
    current--; // Vuốt phải -> ảnh trước đó
  }
  updateSlider();
  autoSlider = setInterval(nextSlide, 4000); // Khởi động lại auto-slide
}

function getPositionX(e) {
  return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
}
