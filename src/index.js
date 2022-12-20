// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
// import store from "./UserCreation/Store/Store";
import cartStore from "./Cart/ProductStore/ProductStore";
import CartApp from "./CartApp";
// import App from "./App";
//import UserApp from "./UserApp";
// import UserCreationApp from "./UserCreationApp";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
  //   <Router>
  //      <App />
  //     <UserApp />
  //   </Router>
  // </StrictMode>
  <Provider store={cartStore()}>
    {/* <Router> */}
    <CartApp />
    {/* <UserCreationApp /> */}
    {/* </Router> */}
  </Provider>
);
