function updateProgressBar(progressElement, soldQuantity, maxQuantity) {
  const progressFill = progressElement.querySelector(
    ".product-list__progress-fill"
  );
  const progressCounter = progressElement.querySelector(
    ".product-list__progress-counter"
  );

  // Tính toán tỷ lệ phần trăm dựa trên số lượng đã bán và số lượng tối đa
  const percentage = (soldQuantity / maxQuantity) * 100;
  const validPercentage = Math.min(percentage, 100); // Đảm bảo giá trị phần trăm không vượt quá 100%

  // Cập nhật thanh tiến độ
  progressFill.style.width = `${validPercentage}%`;

  // Cập nhật số lượng đã bán
  progressCounter.textContent = soldQuantity;
}

// Tiến độ bán của 4 sản phẩm

const progressData = [
  { sold: 10, max: 100 },
  { sold: 24, max: 100 },
  { sold: 12, max: 100 },
  { sold: 30, max: 100 },
];

const progressElements = document.querySelectorAll(".product-list__progress");
// Duyệt qua tất cả các thanh tiến độ và cập nhật giá trị tương ứng
progressElements.forEach((progressElement, index) => {
  //destructuring
  // const { sold, max } = product;
  const { sold, max } = progressData[index]; // Lấy dữ liệu tiến độ từ mảng progressData
  updateProgressBar(progressElement, sold, max); // Cập nhật giá trị tương ứng
});
