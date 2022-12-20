import React from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTodoAction } from "./Store/Action";
import { useNavigate } from "react-router-dom";

export default function FormTodo() {
  const [name, setValue] = React.useState();
  const [email, setEmail] = React.useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name && !email) return;
    const post = {
      Name: name,
      Email: email
    };
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, { post })
      .then((res) => {
        // console.log(res);
        console.log(res.data);
        let newarry = [];
        newarry = res.data.post;
        dispatch(addTodoAction(newarry));
        if (dispatch) {
          navigate("/DisplayUserInfo", {});
        }
      });
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>
            <b>Name</b>
          </Form.Label>
          <Form.Control
            type="text"
            className="input"
            value={name}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <b>Email</b>
          </Form.Label>
          <Form.Control
            type="text"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </Form.Group>
        <Button
          variant="primary mb-3"
          style={{ marginTop: "5px" }}
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
