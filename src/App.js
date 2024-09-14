import React from "react";
import Products from "./components/products";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Customers from "./components/customers";
import ProductForm from "./components/productForm";
import Sales from "./components/sales";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/products/:id" element={<ProductForm />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/productForm" element={<ProductForm />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/notFound" element={<NotFound />} />
          <Route path="/" element={<Navigate to="/register" replace />} />
          <Route path="*" element={<Navigate to="/notFound" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;