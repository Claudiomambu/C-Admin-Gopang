import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Detail from "./pages/detail/Detail";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      {/* <Topbar /> */}
      <div>
        {/* <Sidebar /> */}
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Dashboard" element={<Home />}></Route>
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/user/:userId" element={<User />}></Route>
          <Route path="/newUser" element={<NewUser />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/product/:productId" element={<Product />}></Route>
          <Route path="/newproduct" element={<NewProduct />}></Route>
          <Route path="/:uid/Detail" element={<Detail />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
