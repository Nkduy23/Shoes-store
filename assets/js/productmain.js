document.addEventListener("DOMContentLoaded", function () {
  const productData = [
    // Flash Sale
    {
      id: "product-1",
      image: "assets/img/mwc(3).jpg",
      category: "flash-sale",
      isSale: true,
      saleTag: "GIẢM 30%",
      price: "2.000.000đ",
      sold: 50,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc4.jpg",
          hoverImage: "assets/img/mwc(3).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc5.jpg",
          hoverImage: "assets/img/mwc(3.1).jpg",
        },
        {
          color: "black",
          image: "assets/img/mwc6.jpg",
          hoverImage: "assets/img/mwc(3.2).jpg",
        },
      ],
    },
    {
      id: "product-2",
      image: "assets/img/mwc(7).jpg",
      category: "flash-sale",
      isSale: true,
      saleTag: "GIẢM 30%",
      price: "2.000.000đ",
      sold: 20,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc5.jpg",
          hoverImage: "assets/img/mwc(7).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc6.jpg",
          hoverImage: "assets/img/mwc(7.1).jpg",
        },
      ],
    },
    {
      id: "product-3",
      image: "assets/img/mwc(8).jpg",
      category: "flash-sale",
      isSale: true,
      saleTag: "GIẢM 30%",
      price: "2.000.000đ",
      sold: 21,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc10.jpg",
          hoverImage: "assets/img/mwc(8).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc9.jpg",
          hoverImage: "assets/img/mwc(8.1).jpg",
        },
        {
          color: "black",
          image: "assets/img/mwc6.jpg",
          hoverImage: "assets/img/mwc(8.2).jpg",
        }, // Ảnh cho black variant
      ],
    },
    {
      id: "product-4",
      image: "assets/img/mwc(11).jpg",
      category: "flash-sale",
      isSale: true,
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc9.jpg",
          hoverImage: "assets/img/mwc(11).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc10.jpg",
          hoverImage: "assets/img/mwc(11.1).jpg",
        },
      ],
    },
    // Sản phẩm bán chạy
    {
      id: "product-5",
      image: "assets/img/mwc(12).jpg",
      category: "Sản Phẩm Bán Chạy",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc5.jpg",
          hoverImage: "assets/img/mwc(12).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc6.jpg",
          hoverImage: "assets/img/mwc(12.1).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc13.jpg",
          hoverImage: "assets/img/mwc(12.2).jpg",
        },
      ],
    },
    {
      id: "product-6",
      image: "assets/img/mwc(14).jpg",
      category: "Sản Phẩm Bán Chạy",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc5.jpg",
          hoverImage: "assets/img/mwc(14).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc6.jpg",
          hoverImage: "assets/img/mwc(14.1).jpg",
        },
      ],
    },
    {
      id: "product-7",
      image: "assets/img/mwc(15).jpg",
      category: "Sản Phẩm Bán Chạy",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc17.jpg",
          hoverImage: "assets/img/mwc(15).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc16.jpg",
          hoverImage: "assets/img/mwc(15.1).jpg",
        },
      ],
    },
    {
      id: "product-8",
      image: "assets/img/mwc(18).jpg",
      category: "Sản Phẩm Bán Chạy",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc13.jpg",
          hoverImage: "assets/img/mwc(18).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc5.jpg",
          hoverImage: "assets/img/mwc(18.1).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc6.jpg",
          hoverImage: "assets/img/mwc(18.2).jpg",
        },
      ],
    },
    // Giày Cao Gót Nữ
    {
      id: "product-5",
      image: "assets/img/mwc(12).jpg",
      category: "Giày Cao Gót Nữ",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc5.jpg",
          hoverImage: "assets/img/mwc(12).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc6.jpg",
          hoverImage: "assets/img/mwc(12.1).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc13.jpg",
          hoverImage: "assets/img/mwc(12.2).jpg",
        },
      ],
    },
    {
      id: "product-6",
      image: "assets/img/mwc(14).jpg",
      category: "Giày Cao Gót Nữ",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc5.jpg",
          hoverImage: "assets/img/mwc(14).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc6.jpg",
          hoverImage: "assets/img/mwc(14.1).jpg",
        },
      ],
    },
    {
      id: "product-7",
      image: "assets/img/mwc(15).jpg",
      category: "Giày Cao Gót Nữ",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc17.jpg",
          hoverImage: "assets/img/mwc(15).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc16.jpg",
          hoverImage: "assets/img/mwc(15.1).jpg",
        },
      ],
    },
    {
      id: "product-8",
      image: "assets/img/mwc(18).jpg",
      category: "Giày Cao Gót Nữ",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc13.jpg",
          hoverImage: "assets/img/mwc(18).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc5.jpg",
          hoverImage: "assets/img/mwc(18.1).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc6.jpg",
          hoverImage: "assets/img/mwc(18.2).jpg",
        },
      ],
    },
    // Balo Thời Trang
    {
      id: "product-5",
      image: "assets/img/mwc(12).jpg",
      category: "Balo Thời Trang",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc5.jpg",
          hoverImage: "assets/img/mwc(12).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc6.jpg",
          hoverImage: "assets/img/mwc(12.1).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc13.jpg",
          hoverImage: "assets/img/mwc(12.2).jpg",
        },
      ],
    },
    {
      id: "product-6",
      image: "assets/img/mwc(14).jpg",
      category: "Balo Thời Trang",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc5.jpg",
          hoverImage: "assets/img/mwc(14).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc6.jpg",
          hoverImage: "assets/img/mwc(14.1).jpg",
        },
      ],
    },
    {
      id: "product-7",
      image: "assets/img/mwc(15).jpg",
      category: "Balo Thời Trang",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc17.jpg",
          hoverImage: "assets/img/mwc(15).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc16.jpg",
          hoverImage: "assets/img/mwc(15.1).jpg",
        },
      ],
    },
    {
      id: "product-8",
      image: "assets/img/mwc(18).jpg",
      category: "Balo Thời Trang",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc13.jpg",
          hoverImage: "assets/img/mwc(18).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc5.jpg",
          hoverImage: "assets/img/mwc(18.1).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc6.jpg",
          hoverImage: "assets/img/mwc(18.2).jpg",
        },
      ],
    },
    // Dép Và Sandal Nữ
    {
      id: "product-5",
      image: "assets/img/mwc(12).jpg",
      category: "Dép Và Sandal Nữ",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc5.jpg",
          hoverImage: "assets/img/mwc(12).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc6.jpg",
          hoverImage: "assets/img/mwc(12.1).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc13.jpg",
          hoverImage: "assets/img/mwc(12.2).jpg",
        },
      ],
    },
    {
      id: "product-6",
      image: "assets/img/mwc(14).jpg",
      category: "Dép Và Sandal Nữ",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc5.jpg",
          hoverImage: "assets/img/mwc(14).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc6.jpg",
          hoverImage: "assets/img/mwc(14.1).jpg",
        },
      ],
    },
    {
      id: "product-7",
      image: "assets/img/mwc(15).jpg",
      category: "Dép Và Sandal Nữ",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc17.jpg",
          hoverImage: "assets/img/mwc(15).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc16.jpg",
          hoverImage: "assets/img/mwc(15.1).jpg",
        },
      ],
    },
    {
      id: "product-8",
      image: "assets/img/mwc(18).jpg",
      category: "Dép Và Sandal Nữ",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc13.jpg",
          hoverImage: "assets/img/mwc(18).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc5.jpg",
          hoverImage: "assets/img/mwc(18.1).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc6.jpg",
          hoverImage: "assets/img/mwc(18.2).jpg",
        },
      ],
    },
    // Sandal Và Dép Nam
    {
      id: "product-5",
      image: "assets/img/mwc(12).jpg",
      category: "Sandal Và Dép Nam",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc5.jpg",
          hoverImage: "assets/img/mwc(12).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc6.jpg",
          hoverImage: "assets/img/mwc(12.1).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc13.jpg",
          hoverImage: "assets/img/mwc(12.2).jpg",
        },
      ],
    },
    {
      id: "product-6",
      image: "assets/img/mwc(14).jpg",
      category: "Sandal Và Dép Nam",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc5.jpg",
          hoverImage: "assets/img/mwc(14).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc6.jpg",
          hoverImage: "assets/img/mwc(14.1).jpg",
        },
      ],
    },
    {
      id: "product-7",
      image: "assets/img/mwc(15).jpg",
      category: "Sandal Và Dép Nam",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc17.jpg",
          hoverImage: "assets/img/mwc(15).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc16.jpg",
          hoverImage: "assets/img/mwc(15.1).jpg",
        },
      ],
    },
    {
      id: "product-8",
      image: "assets/img/mwc(18).jpg",
      category: "Sandal Và Dép Nam",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc13.jpg",
          hoverImage: "assets/img/mwc(18).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc5.jpg",
          hoverImage: "assets/img/mwc(18.1).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc6.jpg",
          hoverImage: "assets/img/mwc(18.2).jpg",
        },
      ],
    },
    // Giày Nam Thời Trang
    {
      id: "product-5",
      image: "assets/img/mwc(12).jpg",
      category: "Giày Nam Thời Trang",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc5.jpg",
          hoverImage: "assets/img/mwc(12).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc6.jpg",
          hoverImage: "assets/img/mwc(12.1).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc13.jpg",
          hoverImage: "assets/img/mwc(12.2).jpg",
        },
      ],
    },
    {
      id: "product-6",
      image: "assets/img/mwc(14).jpg",
      category: "Giày Nam Thời Trang",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc5.jpg",
          hoverImage: "assets/img/mwc(14).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc6.jpg",
          hoverImage: "assets/img/mwc(14.1).jpg",
        },
      ],
    },
    {
      id: "product-7",
      image: "assets/img/mwc(15).jpg",
      category: "Giày Nam Thời Trang",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc17.jpg",
          hoverImage: "assets/img/mwc(15).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc16.jpg",
          hoverImage: "assets/img/mwc(15.1).jpg",
        },
      ],
    },
    {
      id: "product-8",
      image: "assets/img/mwc(18).jpg",
      category: "Giày Nam Thời Trang",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc13.jpg",
          hoverImage: "assets/img/mwc(18).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc5.jpg",
          hoverImage: "assets/img/mwc(18.1).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc6.jpg",
          hoverImage: "assets/img/mwc(18.2).jpg",
        },
      ],
    },
    // Thời Trang MWC
    {
      id: "product-5",
      image: "assets/img/mwc(12).jpg",
      category: "Thời Trang MWC",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc5.jpg",
          hoverImage: "assets/img/mwc(12).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc6.jpg",
          hoverImage: "assets/img/mwc(12.1).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc13.jpg",
          hoverImage: "assets/img/mwc(12.2).jpg",
        },
      ],
    },
    {
      id: "product-6",
      image: "assets/img/mwc(14).jpg",
      category: "Thời Trang MWC",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc5.jpg",
          hoverImage: "assets/img/mwc(14).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc6.jpg",
          hoverImage: "assets/img/mwc(14.1).jpg",
        },
      ],
    },
    {
      id: "product-7",
      image: "assets/img/mwc(15).jpg",
      category: "Thời Trang MWC",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc17.jpg",
          hoverImage: "assets/img/mwc(15).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc16.jpg",
          hoverImage: "assets/img/mwc(15.1).jpg",
        },
      ],
    },
    {
      id: "product-8",
      image: "assets/img/mwc(18).jpg",
      category: "Thời Trang MWC",
      isSale: false,
      name: "Dép Nữ MWC 8346 - Dép Nữ Quai Ngang Bản To Đính Nơ Phối Khóa Chữ Xinh Xắn, Thời Trang .",
      price: "2.000.000đ",
      sold: 45,
      total: 100,
      variants: [
        {
          color: "white",
          image: "assets/img/mwc13.jpg",
          hoverImage: "assets/img/mwc(18).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc5.jpg",
          hoverImage: "assets/img/mwc(18.1).jpg",
        },
        {
          color: "yellow",
          image: "assets/img/mwc6.jpg",
          hoverImage: "assets/img/mwc(18.2).jpg",
        },
      ],
    },
  ];

  const productLists = {
    "flash-sale": document.querySelector(
      "#flash-sale .product-list-sale__container"
    ),
    "Sản Phẩm Bán Chạy": document.querySelector(
      "#best-sellers .product-list__container"
    ),
    "Giày Cao Gót Nữ": document.querySelector(
      "#high-heels-women .product-list__container"
    ),
    "Balo Thời Trang": document.querySelector(
      "#fashion-backpacks .product-list__container"
    ),
    "Dép Và Sandal Nữ": document.querySelector(
      "#women-sandals .product-list__container"
    ),
    "Sandal Và Dép Nam": document.querySelector(
      "#men-sandals .product-list__container"
    ),
    "Giày Nam Thời Trang": document.querySelector(
      "#men-fashion-shoes .product-list__container"
    ),
    "Thời Trang MWC": document.querySelector(
      "#fashion-mwc .product-list__container"
    ),
  };

  const fragment = document.createDocumentFragment();

  productData.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-list__item");
    productItem.id = product.id;

    productItem.innerHTML = `
  <a href="#!">
    <img 
      id="main-product-image-${product.id.split("-")[1]}" 
      class="lazy"
      data-src="${product.image}" 
      alt="product" 
    />
    ${
      product.isSale
        ? `
      <div class="product-list__tag">
        <span class="product-list__tag-inner">${product.saleTag}</span>
      </div>
    `
        : ""
    }
    ${
      product.isSale
        ? `
      <div class="product-list__item-content">
        <p class="product-list__item-price">
          ${product.price}
        </p>
      </div>
        `
        : `
      <div class="product-list__item-content">
        <p class="product-list__item-name">
          ${product.name}
        </p>
        <p class="product-list__item-price product-list__item-price--color-black">
          ${product.price}
        </p>
      </div>
        `
    }
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
            <span 
              class="product-list__variant-color-item" 
              data-image="${variant.hoverImage}"
            >
              <img 
                src="${variant.image}" 
                alt="color ${variant.color}" 
              />
            </span>
          `
        )
        .join("")}
    </div>
  </a>
`;

    // Thêm sản phẩm vào đúng danh mục
    const category = product.category;
    if (productLists[category]) {
      productLists[category].appendChild(productItem);
    }
  });

  // Hàm cập nhật thanh tiến độ
  function updateProgressBar(progressElement, soldQuantity, maxQuantity) {
    const progressFill = progressElement.querySelector(
      ".product-list__progress-fill"
    );
    const progressCounter = progressElement.querySelector(
      ".product-list__progress-counter"
    );

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
    const progressElements = document.querySelectorAll(
      ".product-list__container .product-list__progress"
    );

    progressElements.forEach((progressElement, index) => {
      if (productData[index]) {
        const { sold, total } = productData[index];
        updateProgressBar(progressElement, sold, total);
      }
    });
  }

  // Cập nhật thanh tiến độ cho tất cả các sản phẩm
  updateAllProgressBars();

  // Lấy tất cả các sản phẩm
  const productItems = document.querySelectorAll(".product-list__item");

  productItems.forEach((item) => {
    // Lấy ID của mỗi sản phẩm
    const productId = item.id;

    // Lấy hình ảnh chính của sản phẩm
    const mainProductImage = document.querySelector(
      `#main-product-image-${productId.split("-")[1]}`
    );

    // Lấy tất cả các variant color items của sản phẩm
    const variantColorItems = item.querySelectorAll(
      ".product-list__variant-color-item"
    );

    variantColorItems.forEach((colorItem) => {
      colorItem.addEventListener("mouseover", function () {
        const newImage = colorItem.getAttribute("data-image");
        mainProductImage.src = newImage;
        colorItem.classList.add("active-variant");
      });

      colorItem.addEventListener("mouseout", function () {
        const defaultImage = colorItem.getAttribute("data-image");
        mainProductImage.src = defaultImage;
        colorItem.classList.remove("active-variant");
      });
    });
  });
});
