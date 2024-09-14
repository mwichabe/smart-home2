import React, { useState, useEffect } from "react";
import { getProducts } from "../services/fakeProductService";
import ListGroup from "./common/listGroup";
import { getCategories } from "../services/fakeCategoryService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import Search from "./common/search";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectCategory] = useState("All Categories");
  const [pageSize, setPageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [purchasedProduct, setPurchasedProduct] = useState(null);
  const [userName, setUserName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState('');
  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setName(storedUserName);
    }
  }, []);

  useEffect(() => {
    const products = getProducts();
    const categories = [{ _id: "", name: "All Categories" }, ...getCategories()];
    setProducts(products);
    setCategories(categories);
    setPageSize(6);
  }, []);

  const handleDelete = (product) => {
    const productsBeforeDelete = [...products];
    try {
      const products = productsBeforeDelete.filter((p) => p !== product);

      setProducts(products);
      setSearchQuery("");
    } catch (err) {
      console.error(err);

      setProducts(productsBeforeDelete);
    }
  };

  const handleSelectCat = (category) => {
    setSelectCategory(category);
    setCurrentPage(1);
    setSearchQuery("");
  };

  const handlePageChanges = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
    setSelectCategory("All Categories");
  };

  let filtered = products;
  searchQuery
    ? (filtered = products.filter((p) =>
      p.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    ))
    : (filtered =
      selectedCategory && selectedCategory._id
        ? products.filter((p) => p.category._id === selectedCategory._id)
        : products);

  const productsAfterPagination = paginate(filtered, currentPage, pageSize);

  const handleBuy = (product) => {
    console.log('handleBuy called with product:', product);
    setPurchasedProduct(product);
    console.log('purchasedProduct updated to:', purchasedProduct);
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Purchase successful!`);
    console.log(`Product: ${purchasedProduct.name}`);
    console.log(`User Name: ${userName}`);
    console.log(`User Address: ${userAddress}`);
    console.log(`Credit Card: ${creditCard}`);
  
    alert("Order placed successfully!");
    setShowForm(false);
  };

  return (
    <div className="row my-5">
      <div className="col-3 mx-5">
        {
          <ListGroup
            categories={categories}
            onSelect={handleSelectCat}
            selectedCategory={selectedCategory}
          />
        }
      </div>
      <div className="col">
        <h3>
          Welcome, Store Manager {name}!
        </h3>
        <h2 className="my-5">
          There are {filtered.length}{" "}
          {selectedCategory.name === "All Categories" ? "" : selectedCategory.name}{" "}
          products available in the database.
        </h2>

        <Search onChange={handleSearch} value={searchQuery} />

        <div className="row">
          {productsAfterPagination.map((p) => (
            <div key={p._id} className="col-lg-4 col-md-12">
              <div className="card mb-4">
                <img
                  className="card-img-top"
                  src={p.imageUrl}
                  alt="Product"
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">${p.price}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      In stock: {p.numberInStock}
                    </small>
                  </p>
                  <button
                    className="btn btn-sm btn-danger float-right"
                    onClick={() => handleDelete(p)}
                  >
                    Delete
                  </button>
                  <Link
                    className="btn btn-sm mx-2 btn-secondary float-right"
                    to={`/products/${p._id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-success float-right"
                    onClick={() => {
                      console.log('Buy button clicked!');
                      handleBuy(p);
                    }}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {showForm && (
          <div className="row" style={{ marginTop: 20, marginBottom: 20 }}>
            <div className="col" style={{ maxWidth: 400, margin: 'auto' }}>
              <h2 style={{ textAlign: 'center' }}>Purchase Form</h2>
              <form onSubmit={handleSubmit} style={{ padding: 20, border: '1px solid #ccc', borderRadius: 10, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <div className="form-group" style={{ marginBottom: 20 }}>
                  <label style={{ fontWeight: 'bold' }}>Product Name:</label>
                  <p style={{ fontSize: 18 }}>{purchasedProduct.name}</p>
                </div>
                <div className="form-group" style={{ marginBottom: 20 }}>
                  <label style={{ fontWeight: 'bold' }}>User Name:</label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                    style={{ width: '100%', height: 40, padding: 10, fontSize: 18, border: '1px solid #ccc' }}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 20 }}>
                  <label style={{ fontWeight: 'bold' }}>User Address:</label>
                  <input
                    type="text"
                    value={userAddress}
                    onChange={(event) => setUserAddress(event.target.value)}
                    style={{ width: '100%', height: 40, padding: 10, fontSize: 18, border: '1px solid #ccc' }}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 20 }}>
                  <label style={{ fontWeight: 'bold' }}>Credit Card:</label>
                  <input
                    type="text"
                    value={creditCard}
                    onChange={(event) => setCreditCard(event.target.value)}
                    style={{ width: '100%', height: 40, padding: 10, fontSize: 18, border: '1px solid #ccc' }}
                  />
                </div>
                <button type="submit" onClick={handleSubmit}
                className="btn btn-primary" style={{ marginRight: 10, padding: 10, fontSize: 18 }}>
                  Purchase
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowForm(false)}
                  style={{ padding: 10, fontSize: 18 }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
        <Pagination
          itemsCount={filtered.length}
          onPageChange={handlePageChanges}
          pageSize={pageSize}
          currentPage={currentPage}
        />
        <Link to="/products/new" className="btn btn-secondary btn-block">
          Add New
        </Link>
      </div>
    </div>
  );
};

export default Products;