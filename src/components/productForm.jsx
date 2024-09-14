import React, { useState, useEffect } from "react";
import { getCategories } from "../services/fakeCategoryService";
import Joi from "joi-browser";
import { getProduct, saveProduct } from "../services/fakeProductService";
import { useNavigate } from "react-router-dom";

export default function ProductForm() {
  const [data, setData] = useState({
    name: "",
    categoryId: "",
    numberInStock: "",
    price: "",
    imageUrl: "",
  });
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});

  const schema = {
    _id: Joi.string(),
    name: Joi.string().required().label("Name"),
    categoryId: Joi.string().required().label("Category"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("In Stock"),
    price: Joi.number()
      .required()
      .min(0)
      .max(1000)
      .label("Price"),
    imageUrl: Joi.string(),
  };

  useEffect(() => {
    const categories = getCategories();
    setCategories(categories);

    if (window.location.pathname !== "/products/new") {
      const productId = window.location.pathname.split("/").pop();
      const product = getProduct(productId);
      if (!product) return window.location.replace("/notFound");

      setData(mapToViewModel(product));
    }
  }, []);

  const mapToViewModel = (product) => {
    return {
      _id: product._id,
      name: product.name,
      categoryId: product.category._id,
      numberInStock: product.numberInStock,
      price: product.price,
      imageUrl: product.imageUrl,
    };
  };

  const navigate = useNavigate();

  const doSubmit = () => {
    saveProduct(data);
    navigate("/products");
  };

  const renderInput = (name, label, type) => {
    return (
      <div>
        <label>{label}</label>
        <input type={type} value={data[name]} onChange={(e) => setData({ ...data, [name]: e.target.value })} />
      </div>
    );
  };

  const renderSelect = (name, label, options) => {
    return (
      <div>
        <label>{label}</label>
        <select value={data[name]} onChange={(e) => setData({ ...data, [name]: e.target.value })}>
          {options.map((option) => (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const renderButton = (label) => {
    return (
      <button type="submit">{label}</button>
    );
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '40px auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      border: '1px solid #ccc',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      backgroundImage: 'linear-gradient(to bottom, #f9f9f9, #fff)',     }}>
      <h1 style={{
        textAlign: 'center',
        marginBottom: '30px',
        fontSize: '24px',
        fontFamily: 'Open Sans, sans-serif',
      }}>Product Form</h1>
      <form onSubmit={doSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '30px', 
      }}>
        {renderInput("name", "Name", "text", {
          margin: '10px 0',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        })}
        {renderSelect("categoryId", "Category", categories, {
          margin: '10px 0',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        })}
        {renderInput("numberInStock", "In Stock", "number", {
          margin: '10px 0',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        })}
        {renderInput("price", "Price", "number", {
          margin: '10px 0',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        })}
        {renderInput("imageUrl", "Image URL", "text", {
          margin: '10px 0',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        })}
        {renderButton("Save", {
          width: '100%',
          height: '40px',
          backgroundColor: '#4CAF50',
          color: '#fff',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.2s ease',
          ':hover': {
            backgroundColor: '#3e8e41',
          },
        })}
      </form>
    </div>
  );
}