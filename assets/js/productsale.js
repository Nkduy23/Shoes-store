document.addEventListener("DOMContentLoaded", function () {
  const productData = [
    {
      id: "product-1",
      image: "assets/img/mwc(3).jpg",
      saleTag: "GIẢM 30%",
      price: "2.000.000đ",
      sold: 50,
      total: 100,
      variants: [
        { color: "white", image: "assets/img/mwc4.jpg", hoverImage: "assets/img/mwc(3).jpg" }, // Ảnh cho white variant
        { color: "yellow", image: "assets/img/mwc5.jpg", hoverImage: "assets/img/mwc(3.1).jpg" }, // Ảnh cho yellow variant
        { color: "black", image: "assets/img/mwc6.jpg", hoverImage: "assets/img/mwc(3.2).jpg" }, // Ảnh cho black variant
      ],
    },
    {
      id: "product-2",
      image: "assets/img/mwc(7).jpg",
      saleTag: "GIẢM 30%",
      price: "2.000.000đ",
      sold: 20,
      total: 100,
      variants: [
        { color: "white", image: "assets/img/mwc5.jpg", hoverImage: "assets/img/mwc(7).jpg" }, // Ảnh cho white variant
        { color: "yellow", image: "assets/img/mwc6.jpg", hoverImage: "assets/img/mwc(7.1).jpg" }, // Ảnh cho yellow variant
      ],
    },
    {
      id: "product-3",
      image: "assets/img/mwc(8).jpg",
      saleTag: "GIẢM 30%",
      price: "2.000.000đ",
      sold: 21,
      total: 100,
      variants: [
        { color: "white", image: "assets/img/mwc10.jpg", hoverImage: "assets/img/mwc(8).jpg" }, // Ảnh cho white variant
        { color: "yellow", image: "assets/img/mwc9.jpg", hoverImage: "assets/img/mwc(8.1).jpg" }, // Ảnh cho yellow variant
        { color: "black", image: "assets/img/mwc6.jpg", hoverImage: "assets/img/mwc(8.2).jpg" }, // Ảnh cho black variant
      ],
    },
    {
      id: "product-4",
      image: "assets/img/mwc(11).jpg",
      saleTag: "GIẢM 30%",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        { color: "white", image: "assets/img/mwc9.jpg", hoverImage: "assets/img/mwc(11).jpg" }, // Ảnh cho white variant
        { color: "yellow", image: "assets/img/mwc10.jpg", hoverImage: "assets/img/mwc(11.1).jpg" }, // Ảnh cho yellow variant
      ],
    },
    // Thêm dữ liệu các sản phẩm khác ở đây
  ];

  const productList = document.querySelector(".product-list-sale__container");
  const fragment = document.createDocumentFragment(); // Khởi tạo Document Fragment

  // Tạo phần tử box sản phẩm và thêm vào fragment
  productData.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-list__item");
    productItem.id = product.id;

    productItem.innerHTML = `
      <a href="#!">
        <img id="main-product-image-${product.id.split('-')[1]}" src="${product.image}" alt="product" />
        <div class="product-list__tag">
          <span class="product-list__tag-inner">${product.saleTag}</span>
        </div>
        <div class="product-list__item-content">
          <p class="product-list__item-price">${product.price}</p>
        </div>
        <div class="product-list__progress">
          <div class="product-list__progress-bar">
            <div class="product-list__progress-fill"></div>
          </div>
          <div class="product-list__progress-info">
            <span class="product-list__progress-text">Đã bán</span>
            <span class="product-list__progress-counter">${product.sold}</span>
          </div>
        </div>
        <div class="product-list__variant-color">
          ${product.variants
            .map(
              (variant) => `
                <span class="product-list__variant-color-item" data-image="${variant.hoverImage}">
                  <img src="${variant.image}" alt="color ${variant.color}" />
                </span>
              `
            )
            .join("")}
        </div>
      </a>
    `;

    // Thêm phần tử sản phẩm vào Fragment
    fragment.appendChild(productItem);
  });

  // Thêm tất cả các sản phẩm vào DOM 1 lần
  productList.appendChild(fragment);

  // Hàm cập nhật thanh tiến độ
  function updateProgressBar(progressElement, soldQuantity, maxQuantity) {
    const progressFill = progressElement.querySelector(".product-list__progress-fill");
    const progressCounter = progressElement.querySelector(".product-list__progress-counter");

    // Tính toán tỷ lệ phần trăm
    const percentage = (soldQuantity / maxQuantity) * 100;
    const validPercentage = Math.min(percentage, 100); // Đảm bảo tỷ lệ không vượt quá 100%

    // Cập nhật thanh tiến độ
    progressFill.style.width = `${validPercentage}%`;

    // Cập nhật số lượng đã bán
    progressCounter.textContent = soldQuantity;
  }

  // Hàm cập nhật thanh tiến độ cho tất cả các sản phẩm
  function updateAllProgressBars() {
    const progressElements = document.querySelectorAll(".product-list__progress");

    progressElements.forEach((progressElement, index) => {
      // Kiểm tra nếu index hợp lệ và có dữ liệu tương ứng trong productData
      if (productData[index]) {
        const { sold, total } = productData[index]; // Lấy dữ liệu tiến độ từ mảng productData
        updateProgressBar(progressElement, sold, total); // Cập nhật thanh tiến độ
      }
    });
  }

  // Cập nhật thanh tiến độ cho tất cả các sản phẩm
  updateAllProgressBars();

  // Lấy tất cả các sản phẩm
  const productItems = document.querySelectorAll('.product-list__item');

  productItems.forEach(item => {
    // Lấy ID của mỗi sản phẩm
    const productId = item.id;

    // Lấy hình ảnh chính của sản phẩm
    const mainProductImage = document.querySelector(`#main-product-image-${productId.split('-')[1]}`);
    
    // Lấy tất cả các variant color items của sản phẩm
    const variantColorItems = item.querySelectorAll('.product-list__variant-color-item');

    variantColorItems.forEach(colorItem => {
      colorItem.addEventListener('mouseover', function() {
        const newImage = colorItem.getAttribute('data-image');
        mainProductImage.src = newImage;
        colorItem.classList.add('active-variant');
      });

      colorItem.addEventListener('mouseout', function() {
        const defaultImage = colorItem.getAttribute('data-image');
        mainProductImage.src = defaultImage;
        colorItem.classList.remove('active-variant');
      });
    });
  });
});
