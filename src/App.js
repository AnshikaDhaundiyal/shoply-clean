import "./App.css";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./screens/Home";
import Products from "./screens/Products";
import SingleProduct from "./screens/SingleProduct";
import Cart from "./screens/Cart";
import PageNotFound from "./screens/PageNotFound";
import { GlobalStyle } from "./styles/GlobalStyle";
import Login from "./screens/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/footer";
import Register from "./screens/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartItems } from "./slices/CartSlice";
import { useEffect } from "react";
import Dashboard from "./screens/Dashboard/Dashboard";
import { fetchProducts } from "./slices/ProductSlice";
import About from "./screens/About/aboutus";
import ProductPanel from "./screens/Dashboard/AdminPanels/ProductPanel";
import OrderPanel from "./screens/Dashboard/AdminPanels/OrderPanel";
import UserPanel from "./screens/Dashboard/AdminPanels/UserPanel";
import Checkout from "./screens/Checkout";
import Confirmation from "./screens/Confirmation";
import axios from "./axiosInstance";
import { logout } from "./slices/userSlice";
import WishList from "./screens/WishList";
import { fetchWishListItems } from "./slices/wishListSlice";
import Shipping from "./screens/Shipping";
import AddressForm from "./screens/AddressForm";

// // ✅ NEWLY ADDED ROUTES
// import Phones from "./screens/Phones";
// import Payments from "./screens/Payments";
// import Shipping from "./screens/checkout/Shipping";

// import ShoppingDetails from "./screens/ShoppingDetails";
// import FAQ from "./screens/FAQ";

import TermsConditions from "./screens/TermsConditions";
import Phones from "./screens/Phones";
import Watches from "./screens/Watches";
import Laptops from "./screens/Laptops";
import Cameras from "./screens/Cameras";
import FAQ from "./screens/FAQ";
import ShoppingDetails from "./screens/ShoppingDetails";
import TermsAndConditions from "./screen/TermsAndConditions";



function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { user } = useSelector((state) => state.userstate);
  const { totalQty, cart } = useSelector((state) => state.cartState);
  const { wishList } = useSelector((state) => state.wishLishState);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    user &&
      axios
        .get("http://localhost:8080/api/v1/user/checkUser", {
          headers: {
            authorization: `Bearer ${user?.token}`,
          },
        })
        .then((res) => true)
        .catch((err) => {
          if (err?.response?.status === 401) {
            dispatch(logout());
          }
        });
  }, [user]);

  useEffect(() => {
    window.scrollTo(0, 0);
    return undefined;
  }, [pathname]);

  useEffect(() => {
    user && dispatch(fetchCartItems(user?.token));
    user && dispatch(fetchWishListItems(user?.token));
  }, [user, totalQty]);

  return (
    <>
      <CssBaseline />
      <ToastContainer />
      <GlobalStyle />
      <Navbar />
      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/singleproduct/:_id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        <Route path="/about" element={<About />} />


<Route path="/terms" element={<TermsAndConditions />} />
<Route path="/categories/phones" element={<Phones />} />
<Route path="/categories/watches" element={<Watches />} />
<Route path="/categories/laptops" element={<Laptops />} />
<Route path="/categories/cameras" element={<Cameras />} />
<Route path="/faq" element={<FAQ />} />
<Route path="/account/shopping" element={<ShoppingDetails />} />
<Route path="/shipping" element={<Shipping />} />
<Route path="/checkout/addressform" element={< AddressForm />} />
        {/* ✅ New Routes for Footer Links
        <Route path="/categories/phones" element={<Phones />} />
        <Route path="/account/payments" element={<Payments />} />
        <Route path="/account/shipping" element={<Shipping />} />
        <Route path="/account/shopping" element={<ShoppingDetails />} />
        <Route path="/faq" element={<FAQ />} /> */}

        {/* ✅ Admin Dashboard Routes */}
        <Route path="/dashboard" element={user?.isAdmin ? <Dashboard /> : <Navigate to="/login" />}>
          <Route index element={user?.isAdmin ? <ProductPanel /> : <Navigate to="/" />} />
          <Route path="products" element={user?.isAdmin ? <ProductPanel /> : <Navigate to="/" />} />
          <Route path="orders" element={user?.isAdmin ? <OrderPanel /> : <Navigate to="/" />} />
          <Route path="users" element={user?.isAdmin ? <UserPanel /> : <Navigate to="/" />} />
        </Route>

        <Route
          path="/checkout"
          element={
            !user ? (
              <Navigate to="/login" />
            ) : user && cart?.items?.length > 0 ? (
              <Checkout />
            ) : (
              <Navigate to="/products" />
            )
          }
        />
        <Route path="/checkout/success" element={<Confirmation />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
