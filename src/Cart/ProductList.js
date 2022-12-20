import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CardButton } from "./CardButton";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Card, CardContent, CardMedia } from "@material-ui/core";

export const ProductList = () => {
  const navigate = useNavigate();
  var [productList, setProductList] = useState([]);
  let [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getallProducts();
  }, []); //  ComponentDidMount

  const url = "https://fakestoreapi.com/products";
  const getallProducts = () => {
    try {
      axios.get(`${url}`).then((response) => {
        setProductList(response.data);
        //console.log(response.data);
      });
    } catch (err) {
      // Handle error
      const error = err.response;
      if (error.status === 404) {
        setErrorMessage("Url Not Found");
      }
    }
  };
  let showCart = () => {
    navigate("/DisplayProductInfo");
  };
  return (
    <div className="DisplayProduct">
      <div class="cartBtnDiv">
        <button className="cartBtn carticon" onClick={() => showCart()}>
          <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> View Cart
        </button>
      </div>
      <div className="ProductListDiv">
        {!errorMessage && productList.length ? (
          productList.map((post, key) => {
            return (
              <div className="Card-width">
                <Box width="300px">
                  <Card key={key} variant="outlined" className="card-bg">
                    <CardContent className="brandName">
                      {post.category}
                    </CardContent>
                    <CardMedia className="Avatar-img">
                      <img
                        src={post.image}
                        alt="clothes"
                        className="img-responsive"
                      />
                    </CardMedia>
                    <CardContent className="dressName">
                      {post.title}
                    </CardContent>
                    <div className="dresspriceDiv">
                      <CardContent className="dressprice">
                        ₹ {post.price}
                      </CardContent>
                    </div>
                    <CardButton key={key} index={key} product={post} />
                  </Card>
                </Box>
              </div>
            );
          })
        ) : (
          <span> No data found</span>
        )}
      </div>
    </div>
  );
};
