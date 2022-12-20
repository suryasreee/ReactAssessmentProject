import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Box, Card, CardContent, CardMedia } from "@material-ui/core";

export let UserList = () => {
  var [usersList, setUsersList] = useState([]);
  let [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getallusers();
  }, []);

  const url = "https://reqres.in/api/users?page=2";
  const getallusers = () => {
    try {
      axios.get(`${url}`).then((response) => {
        setUsersList(response.data.data);
        // console.log("usersList", usersList);
      });
    } catch (err) {
      // Handle error
      const error = err.response;
      if (error.status === 404) {
        setErrorMessage("Url Not Found");
      }
    }
  };
  return (
    <div className="DisplayUsers">
      {!errorMessage &&
        (usersList.length ? (
          <div>
            {usersList.map((post, key) => {
              return (
                <div className="Card-width">
                  <Link
                    className="LinkTag"
                    to={"/DisplayUserDetail"}
                    state={{ Userid: post.id }}
                  >
                    <Box width="300px">
                      <Card key={key} variant="outlined" className="card-bg">
                        <CardMedia className="Avatar-img">
                          <img src={post.avatar} alt="recipe thumbnail" />
                        </CardMedia>
                        <CardContent>FirstName: {post.first_name}</CardContent>
                        <CardContent>LastName: {post.last_name}</CardContent>
                        <CardContent>UserId: {post.id}</CardContent>
                        <CardContent>Email: {post.email}</CardContent>
                      </Card>
                    </Box>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <span> No data found</span>
        ))}
    </div>
  );
};
