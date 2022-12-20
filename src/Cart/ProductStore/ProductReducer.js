let initialState = [];

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [
        ...state,
        {
          productid: action.payload.productId,
          productimage: action.payload.productImage,
          productdressname: action.payload.productDress,
          productprice: action.payload.productPrice,
          productquantity: action.payload.productQuantity,
          isDone: true
        }
      ];
    case "GET_PRODUCT":
      const newState = [...state];
      return newState;
    case "MARK_TODO": {
      let newState1 = [...state];
      // for (let i of newState1) {
      //   if (i.productid === action.payload.id) {
      //     i.productquantity = action.payload.productQuantity;
      //     console.log(i.productquantity);
      //   }
      // }
      // console.log(newState1);
      return newState1.map((value, index) =>
        index === action.payload.index
          ? {
              productquantity: action.payload.productQuantity,
              productid: action.payload.productId,
              productimage: action.payload.productImage,
              productdressname: action.payload.productDress,
              productprice: action.payload.productPrice
            }
          : {
              productid: value.productid,
              productimage: value.productimage,
              productdressname: value.productdressname,
              productprice: value.productprice,
              productquantity: value.productquantity
            }
      );
    }
    default:
      return state;
  }
}
