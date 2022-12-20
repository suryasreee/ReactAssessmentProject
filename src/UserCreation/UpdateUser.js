import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateTodoAction, getTodoAction } from "./Store/Action";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

export default function UpdateUser() {
  const navigate = useNavigate();
  const [name, setValue] = React.useState();
  const [email, setEmail] = React.useState();
  let location = useLocation();
  let checkIndex = "";
  if (location.state !== null && location.state !== undefined) {
    checkIndex = location.state.Index;
  }
  const dispatch = useDispatch();
  useEffect(() => {
    if (checkIndex !== "" && checkIndex !== null) {
      console.log("checkIndex", checkIndex);
      dispatch(getTodoAction(checkIndex));
    }
  }, []);

  const setUserValue = () => {
    // setValue(name);
    // setEmail(email);
    // e.preventDefault();
    if (!name && !email) return;
    const post = {
      Name: name,
      Email: email,
      Index: checkIndex
    };
    dispatch(updateTodoAction(post));
    if (dispatch) {
      navigate("/DisplayUserInfo", {});
    }
  };
  const { todos } = useSelector((state) => state);

  return (
    <div>
      {todos.map((todo, index) => (
        <div>
          {index === checkIndex && (
            <div>
              <div>
                <label>
                  <b>Name</b>
                </label>
                <input
                  type="text"
                  className="input"
                  defaultValue={todo.name}
                  value={name}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Add new todo"
                />
              </div>
              <div>
                <label>
                  <b>Email</b>
                </label>
                <input
                  type="text"
                  className="input"
                  defaultValue={todo.email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              {/* <Link
   className="LinkTag"
   to={"/DisplayUserInfo"}
   state={{ Index: index }}
 > */}
              <button
                variant="primary mb-3"
                style={{ marginTop: "5px" }}
                type="submit"
                onClick={() => setUserValue()}
              >
                Submit
              </button>
              {/* </Link> */}
            </div>

            // <Form onSubmit={handleSubmit}>
            // <Form>
            //   <Form.Group>
            //     <Form.Label>
            //       <b>Name</b>
            //     </Form.Label>
            //     <Form.Control
            //       type="text"
            //       className="input"
            //       defaultValue={todo.name}
            //       value={name}
            //       //onChange={(e) => setValue(e.target.value)}
            //       placeholder="Add new todo"
            //     />
            //   </Form.Group>
            //   <Form.Group>
            //     <Form.Label>
            //       <b>Email</b>
            //     </Form.Label>
            //     <Form.Control
            //       type="text"
            //       className="input"
            //       defaultValue={todo.email}
            //       value={email}
            //       // onChange={(e) => setEmail(e.target.value)}
            //       placeholder="Email"
            //     />
            //   </Form.Group>
            //   {/* <Link
            //     className="LinkTag"
            //     to={"/DisplayUserInfo"}
            //     state={{ Index: index }}
            //   > */}
            //   <Button
            //     variant="primary mb-3"
            //     style={{ marginTop: "5px" }}
            //     type="submit"
            //     onClick={() => setUserValue(name, email)}
            //   >
            //     Submit
            //   </Button>
            //   {/* </Link> */}
            // </Form>
          )}
        </div>
      ))}
    </div>
  );
}
