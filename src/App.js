import "./App.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import Gazebo from "./pages/gazebo/Gazebo";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Detail from "./pages/detail/Detail";
import Login from "./pages/Login/Login";

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <Topbar /> */}
      <div>
        {/* <Sidebar /> */}
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/:uid/Dashboard" element={<Home />}></Route>
          <Route path="/:uid/users" element={<UserList />}></Route>
          <Route path="/:uid/user/:userId" element={<User />}></Route>
          <Route path="/:uid/gazebo" element={<Gazebo />}></Route>
          <Route path="/product/:productId" element={<Product />}></Route>
          <Route path="/newproduct" element={<NewProduct />}></Route>
          <Route path="/:uid/Detail" element={<Detail />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
