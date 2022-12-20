import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Box, Card, CardContent } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getTodoAction } from "./Store/Action";

export function DisplayUserInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getTodoAction());
  }, []);
  let addUser = () => {
    navigate("/");
  };
  const { todos } = useSelector((state) => state);
  return (
    <div>
      <div>
        <button className="btnback" onClick={() => addUser()}>
          Add User
        </button>
      </div>
      <div>
        {todos.map((todo, index) => (
          <Box width="300px">
            <Card key={index} variant="outlined" className="card-bg">
              <CardContent>UserName: {todo.name}</CardContent>
              <CardContent>Email: {todo.email}</CardContent>
            </Card>
            <Link
              className="LinkTag"
              to={"/UpdateUser"}
              state={{ Index: index }}
            >
              <Button variant="outline-success">EDIT</Button>
            </Link>
          </Box>
        ))}
      </div>
    </div>
  );
}
