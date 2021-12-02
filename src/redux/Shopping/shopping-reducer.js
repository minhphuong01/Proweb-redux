import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "K&M 2606",
      description:"Gọng kính K&M 2606-C3 làm bằng chất liệu nhựa TR90 giúp người mang kính được nhẹ nhàng, thoải mái nhẹ nhàng và trọng lượng không quá nặng đè lên sống mũi.",
      price: 54000,
      image:
        "https://glassyzone.vn/wp-content/uploads/2021/05/gong-kinh-2606-2.jpg",
    },
    {
      id: 2,
      title: "K&M 68108",
      description:
        "Gọng kính K&M 68108-C3 làm bằng chất liệu nhựa TR90 giúp người mang kính được nhẹ nhàng, thoải mái nhẹ nhàng và trọng lượng không quá nặng đè lên sống mũi.",      
      price: 65000,
      image:
        "https://glassyzone.vn/wp-content/uploads/2021/05/gong-kinh-68108-C3-8.jpg",
    },
    {
      id: 3,
      title: "K&M 68126",
      description:"Gọng kính 68126.C4 làm bằng chất liệu nhựa TR90 giúp người mang kính được nhẹ nhàng, thoải mái nhẹ nhàng và trọng lượng không quá nặng đè lên sống mũi.",
      price: 76000,
      image:
        "https://glassyzone.vn/wp-content/uploads/2021/05/gong-kinh-68126-2.jpg",
    },
    {
      id: 4,
      title: "Plastic A221",
      description:"Gọng làm bằng chất liệu nhựa TR90 giúp người mang kính được nhẹ nhàng, thoải mái nhẹ nhàng và trọng lượng không quá nặng đè lên sống mũi.",
      price: 150000,
      image:
        "https://glassyzone.vn/wp-content/uploads/2020/08/IMG_7389.jpg",
    },
    {
      id: 5,
      title: "Gz 8876C",
      description:
        "Kính mát GZ8876.C với kiểu dáng hiện đại, thời trang vừa giúp bảo vệ mắt vừa thể hiện đẳng cấp và sự sành điệu của bạn gái",
      price: 55000,
      image:"https://glassyzone.vn/wp-content/uploads/2020/07/kinh-mat-34.jpg",
    },
    {
      id: 6,
      title: "Plastic 2383",
      description:"Gọng kính GZ 2383 với kiểu dáng mắt mèo xếch trẻ trung năng động, rất phù hợp cho các bạn nữ hơn cả đem lại cảm giác thoải mái khi sử dụng trong khoảng thời gian dài.",
      price: 45000,
      image:
        "https://glassyzone.vn/wp-content/uploads/2021/03/2383-C3-1.jpg",
    },
    {
      id: 7,
      title: "Plastic 8265",
      description:"Gọng kính GZ 8265.C4 được thiết kế kiểu dáng mắt mèo (Cat eye) cực kì sang trọng, trẻ trung, sành điệu phù hợp cho các chị em",
      price: 65000,
      image:
        "https://glassyzone.vn/wp-content/uploads/2021/05/gong-kinh-8265-3.jpg",
    },
    {
      id: 8,
      title: "Plastic 8247",
      description:"Gọng làm bằng chất liệu nhựa TR90 giúp người mang kính được nhẹ nhàng, thoải mái nhẹ nhàng và trọng lượng không quá nặng đè lên sống mũi.",
      price: 80000,
      image:
        "https://glassyzone.vn/wp-content/uploads/2020/08/IMG_7391.jpg",
    },
    {
      id: 9,
      title: "Plastic P8013",
      description:
        " Gọng làm bằng chất liệu nhựa TR90 giúp người mang kính được nhẹ nhàng, thoải mái nhẹ nhàng và trọng lượng không quá nặng đè lên sống mũi.",
      price: 58000,
      image:
        "https://glassyzone.vn/wp-content/uploads/2020/09/IMG_7395.jpg",
    },
    {
      id: 10,
      title: "GM Plasba 14M",
      description:
        "Kính mát thời trang GM Flatba 14M là form kính mát không thể thiếu của các tín đồ thời trang",
      price: 91000,
      image:
        "https://glassyzone.vn/wp-content/uploads/2020/07/GM-23.jpg",
    },
    {
      id:11,
      title: "Metal S11728",
      description:"Chiéc kính mắt mèo S11728 với cấu trúc kim loại lấy điểm nhấn ở mặt trước của kính phù hợp với các khách hàng yêu thích sự mới lạ độc đáo.",
      price: 149000,
      image:
        "https://glassyzone.vn/wp-content/uploads/2021/12/S11728-C10-1.jpg",
    },
    {
      id: 12,
      title: "Plastic K9054",
      description:"Gọng kính GZ K9054 với kiểu dáng tròn bầu trẻ trung năng động phù hợp với mọi lứa tuổi, chất liệu nhựa dẻo đem lại cảm thoải mái khi sử dụng trong khoảng thời gian dài.",
      price: 80000,
      image:
        "https://glassyzone.vn/wp-content/uploads/2021/11/IMG_0073.jpg",
    },
    {
      id: 13,
      title: "Plastic 8828",
      description:"Gọng làm bằng chất liệu nhựa TR90 giúp người mang kính được nhẹ nhàng, thoải mái nhẹ nhàng và trọng lượng không quá nặng đè lên sống mũi.",
      price: 127000,
      image:
        "https://glassyzone.vn/wp-content/uploads/2021/01/gong-kinh-8828-11.jpg",
    },
    {
      id: 14,
      title: "Plastic M2053",
      description:"Gọng kính M2053-C4 làm bằng chất liệu nhựa TR90 giúp người mang kính được nhẹ nhàng, thoải mái nhẹ nhàng và trọng lượng không quá nặng đè lên sống mũi.",
      price: 80000,
      image:
        "https://glassyzone.vn/wp-content/uploads/2020/10/gong-kinh-M2053-4.jpg",
    },
    {
      id: 15,
      title: "Đừng chạy theo số đông",
      description:
        "Cuốn sách này muốn làm nổi bật một hệ tư duy ngầm lớn và khủng khiếp hơn thế mà chúng ta không nhận ra. Một sức hút vô hình nhưng mạnh mẽ.",
      price: 80000,
      image:
        "https://salt.tikicdn.com/cache/400x400/ts/product/95/c5/71/f260011660001af960c42d7d2f1c5dc1.jpg.webp",
    },
    {
      id: 16,
      title: "Plastic 1001",
      description:"Gọng kính GZ Z1001.C15 được thiết kế kiểu dáng mắt mèo (Cat eye) cực kì sang trọng, trẻ trung, sành điệu phù hợp cho các chị em",
      price: 58000,
      image:
        "https://glassyzone.vn/wp-content/uploads/2021/04/gong-kinh-Z1001-1.jpg",
    },
    {
      id: 17,
      title: "Plastic Z1004",
      description:"Gọng kính GZ Z1004.C17 được thiết kế kiểu dáng mắt mèo (Cat eye) cực kì sang trọng, trẻ trung, sành điệu phù hợp cho các chị em",
      
      price: 65000,
      image:
        "https://glassyzone.vn/wp-content/uploads/2021/05/gong-kinh-Z1004-3.jpg",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
