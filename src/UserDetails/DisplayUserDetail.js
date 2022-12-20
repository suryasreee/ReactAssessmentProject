import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Card, CardContent, CardMedia } from "@material-ui/core";
export let DisplayUserDetail = () => {
  const [loading, setLoading] = useState(false);
  let [f_name, setf_name] = useState();
  let [l_name, setl_name] = useState();
  let [email, setemail] = useState();
  let [avatar, setavatar] = useState();
  let [id, setid] = useState();
  let [errorMessage, setErrorMessage] = useState("");
  let location = useLocation();
  const { Userid } = location.state;
  useEffect(() => {
    getuserDetails();
  }, []);
  const navigate = useNavigate();
  let goBack = () => {
    navigate("/UserList");
  };
  const url = `https://reqres.in/api/users/${Userid}`;
  let getuserDetails = () => {
    try {
      setLoading(true);
      axios.get(`${url}`).then((response) => {
        setLoading(false);
        setid(response.data.data.id);
        setemail(response.data.data.email);
        setavatar(response.data.data.avatar);
        setf_name(response.data.data.first_name);
        setl_name(response.data.data.last_name);
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
    <div className="">
      <div className="btndiv">
        <button className="btnback btnmargin" onClick={() => goBack()}>
          Back
        </button>
      </div>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div Class="UserDetail">
          <div class="LeftWidth"></div>
          <div class="AlignMiddle">
            {!errorMessage ? (
              <Box>
                <Card variant="outlined" className="card-pos">
                  <CardMedia className="Avatar-img">
                    <img src={avatar} alt="userimg" className="img-style" />
                  </CardMedia>
                  <CardContent className="UserName">
                    {f_name} {l_name}
                  </CardContent>
                  <CardContent>FirstName: {f_name}</CardContent>
                  <CardContent>LastName: {l_name}</CardContent>
                  <CardContent>UserId: {id}</CardContent>
                  <CardContent>Email: {email}</CardContent>
                </Card>
              </Box>
            ) : (
              <span> No data found</span>
            )}
          </div>
          <div class="RightWidth"></div>
        </div>
      )}
    </div>
  );
};
