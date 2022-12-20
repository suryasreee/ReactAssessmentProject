import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { markTodoAction } from "./ProductStore/ProductAction";

export function Quantity({ item, index }) {
  var [count, setCount] = useState(1);
  const dispatch = useDispatch();
  let decrementValue = (number, index) => {
    let newQuantity = item.productquantity - 1;
    let updateArray = {
      index: index,
      productQuantity: newQuantity,
      productId: item.productid,
      productImage: item.productimage,
      productDress: item.productdressname,
      productPrice: item.productprice
    };
    let newarry = [];
    newarry = updateArray;
    dispatch(markTodoAction(newarry));
    setCount(newQuantity);
  };
  let incrementValue = (item, index) => {
    let newQuantity = item.productquantity + 1;
    let updateArray = {
      index: index,
      productQuantity: newQuantity,
      productId: item.productid,
      productImage: item.productimage,
      productDress: item.productdressname,
      productPrice: item.productprice
    };
    let newarry = [];
    newarry = updateArray;
    dispatch(markTodoAction(newarry));
    setCount(newQuantity);
  };
  return (
    <div>
      <input
        type="button"
        onClick={() => decrementValue(item, index)}
        value="-"
      />
      <div>{count}</div>
      <input
        type="button"
        onClick={() => incrementValue(item, index)}
        value="+"
      />
    </div>
  );
}
