import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Quantity } from "./Quantity";
import { getProductAction } from "./ProductStore/ProductAction";

export function DisplayProductInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getProductAction());
  }, []);
  let addProduct = () => {
    navigate("/ProductList");
  };
  const { selectedproducts } = useSelector((state) => state); // object destructring
  let sum = 0;
  let calculateTotal = () => {
    for (let i of selectedproducts) {
      if (parseInt(i.productprice)) {
        sum += parseFloat(i.productprice * i.productquantity);
      }
    }
    return sum.toFixed(2);
  };

  return (
    <div className="DisplayProduct">
      <div className="cartTopBar">
        <Button className="btnaddProd" onClick={() => addProduct()}>
          Add Product
        </Button>
      </div>
      <div className="ProductListDiv">
        <table>
          <thead>
            <tr width="100%">
              <th width="25%">PRODUCT IMAGE</th>
              <th width="25%">PRODUCT NAME</th>
              <th width="25%">PRODUCT PRICE</th>
              <th width="25%">PRODUCT QUANTITY</th>
            </tr>
          </thead>
          <tbody>
            {selectedproducts.map((item, index) => (
              <tr>
                <td>
                  <img
                    src={item.productimage}
                    className="tdDress"
                    alt="dress"
                  />
                </td>
                <td>{item.productdressname}</td>
                <td>{item.productprice}</td>
                <td>
                  <Quantity index={index} item={item} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="GrandTotalDiv">
          <label>GRAND TOTAL :</label>
          <label className="GrandTotal">{calculateTotal()}</label>
        </div>
      </div>
    </div>
  );
}
