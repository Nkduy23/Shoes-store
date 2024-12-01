$(document).ready(function () {
    $(".slider-image-list").slick({
      slidesToShow: 1, // Số ảnh hiển thị tại một thời điểm
      slidesToScroll: 1, // Số ảnh chuyển mỗi lần
      autoplay: true, // Chế độ tự động chuyển ảnh
      autoplaySpeed: 3000, // Thời gian chuyển mỗi ảnh (3 giây)
      prevArrow: ".btn-left", // Nút chuyển ảnh sang trái
      nextArrow: ".btn-right", // Nút chuyển ảnh sang phải
    });
  });