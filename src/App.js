// src/App.jsx

import "./App.css";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import axios from "./axiosInstance";

// Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/footer";

// Pages
import Home from "./screens/Home";
import Products from "./screens/Products";
import SingleProduct from "./screens/SingleProduct";
import Cart from "./screens/Cart";
import WishList from "./screens/WishList";
import Login from "./screens/Login";
import Register from "./screens/Register";
import PageNotFound from "./screens/PageNotFound";
import About from "./screens/About/aboutus";
import FAQ from "./screens/FAQ";
import TermsConditions from "./screens/TermsConditions";

// Categories
import Phones from "./screens/Phones";
import Watches from "./screens/Watches";
import Laptops from "./screens/Laptops";
import Cameras from "./screens/Cameras";

// Checkout & Confirmation
import Checkout from './screens/CheckoutTemp/Checkout'; // ✅ Use this exact case


import AddressForm from "./screens/AddressForm";
import Confirmation from "./screens/Confirmation";

// Footer Static Pages
import ShippingPolicy from "./screens/ShippingPolicy";
import Payments from "./screens/Payments";
import ShoppingDetails from './screens/ShoppingDetails';

import ContactSupport from "./screens/ContactSupport";

// Admin Dashboard
import Dashboard from "./screens/Dashboard/Dashboard";
import ProductPanel from "./screens/Dashboard/AdminPanels/ProductPanel";
import OrderPanel from "./screens/Dashboard/AdminPanels/OrderPanel";
import UserPanel from "./screens/Dashboard/AdminPanels/UserPanel";

// Redux Actions
import { fetchProducts } from "./slices/ProductSlice";
import { fetchCartItems } from "./slices/CartSlice";
import { fetchWishListItems } from "./slices/wishListSlice";
import { logout } from "./slices/userSlice";

// Styles
import { GlobalStyle } from "./styles/GlobalStyle";

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
    if (user) {
      axios
        .get("http://localhost:8080/api/v1/user/checkUser", {
          headers: {
            authorization: `Bearer ${user?.token}`,
          },
        })
        .catch((err) => {
          if (err?.response?.status === 401) {
            dispatch(logout());
          }
        });
    }
  }, [user]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (user) {
      dispatch(fetchCartItems(user?.token));
      dispatch(fetchWishListItems(user?.token));
    }
  }, [user, totalQty]);

  return (
    <>
      <CssBaseline />
      <ToastContainer />
      <GlobalStyle />
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/singleproduct/:_id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/support" element={<ContactSupport />} />

        {/* Categories */}
        <Route path="/categories/phones" element={<Phones />} />
        <Route path="/categories/watches" element={<Watches />} />
        <Route path="/categories/laptops" element={<Laptops />} />
        <Route path="/categories/cameras" element={<Cameras />} />

        {/* Footer Help Links */}
        <Route path="/shipping" element={<ShippingPolicy />} />
        <Route path="/account/payments" element={<Payments />} />
        <Route path="/shopping-details" element={<ShoppingDetails />} />


        {/* Checkout */}
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
        <Route path="/checkout/addressform" element={<AddressForm />} />
        <Route path="/checkout/success" element={<Confirmation />} />

        {/* Admin Dashboard Routes */}
        <Route
          path="/dashboard"
          element={user?.isAdmin ? <Dashboard /> : <Navigate to="/login" />}
        >
          <Route index element={<ProductPanel />} />
          <Route path="products" element={<ProductPanel />} />
          <Route path="orders" element={<OrderPanel />} />
          <Route path="users" element={<UserPanel />} />
        </Route>

        {/* Catch-all */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
