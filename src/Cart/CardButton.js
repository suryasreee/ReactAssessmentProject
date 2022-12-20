import React from "react";
import { Button } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { addProductAction } from "./ProductStore/ProductAction";

export function CardButton({ product, index }) {
  const dispatch = useDispatch();
  let addToCart = (productid, image, dressname, price) => {
    console.log(dressname);
    let productArray = {
      productId: productid,
      productImage: image,
      productDress: dressname,
      productPrice: price,
      productQuantity: 1
    };
    let newarry = [];
    newarry = productArray;
    dispatch(addProductAction(newarry));
  };
  return (
    <div className="">
      {!product.isDone ? (
        <div className="addProductBtnDiv">
          <Button
            className="addProductBtn"
            onClick={() =>
              addToCart(product.id, product.image, product.title, product.price)
            }
          >
            Add
          </Button>
        </div>
      ) : (
        <div className="addProductBtnDiv">
          <Button className="addProductBtn">Remove</Button>
        </div>
      )}
    </div>
  );
}
