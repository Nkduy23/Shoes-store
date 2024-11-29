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
