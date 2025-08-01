import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartWishlistContext } from "../context/CartWishlistContext";
// import banner5 from '../assets/images/banner5.jpg';

const ProductsContent = () => {
  const location = useLocation();
  const { addToCart, addToWishlist } = useContext(CartWishlistContext);

  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [maxPrice, setMaxPrice] = useState(100000);

  const productArray = ["laptop", "mobile", "tv", "speaker", "camera", "watch", "appliance", "accessories"];

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
  }, [location.search]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("../data/product.json");
        const data = await res.json();

        setAllProducts(data);
        setFilteredProducts(data);

        if (data.length > 0) {
          const highestPrice = Math.max(...data.map(product => product.offer_price));
          setMaxPrice(Math.ceil(highestPrice / 100) * 100);
        }
      } catch (error) {
        console.error("Error loading product data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = allProducts.filter((product) => {
      const categoryNormalized = product.category?.trim();
      const matchCategory =
        selectedCategories.length === 0 || selectedCategories.includes(categoryNormalized);
      const matchPrice = product.offer_price <= maxPrice;
      return matchCategory && matchPrice;
    });
    setFilteredProducts(filtered);
  }, [selectedCategories, maxPrice, allProducts]);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategories((prev) =>
      e.target.checked ? [...prev, value] : prev.filter((cat) => cat !== value)
    );
  };

  const handlePriceChange = (e) => {
    setMaxPrice(Number(e.target.value));
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="inner-hero-banner">
      {/* <img className="d-block d-md-none banner-inner-mob" src={banner5} alt="banner inner" /> */}
        <div className="overlay">
          <div className="container">
            <h1>Our Products</h1>
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="product-list text-center py-5">
        <div className="container">
          <h2 className="h2">All Products</h2>
          <p className="subtitle mb-50">----------</p>

          <div className="row g-4">
            {/* Filter Sidebar */}
            <div className="col-md-2 text-start">
              <aside className="filter-section">
                <div className="mb-4">
                  <h6 className="fw-bold">Category</h6>
                  {productArray.map((cat) => (
                    <div key={cat}>
                      <input
                        type="checkbox"
                        value={cat}
                        checked={selectedCategories.includes(cat)}
                        onChange={handleCategoryChange}
                      />{" "}
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold">Filter by price</h6>
                  <div className="p-3">
                    <input
                      type="range"
                      className="form-range"
                      min="0"
                      max="100000"
                      step="50"
                      value={maxPrice}
                      onChange={handlePriceChange}
                    />
                  </div>
                  <div className="p-3 text-muted small">Max Price: ${maxPrice}</div>
                </div>
              </aside>
            </div>

            {/* Product Grid */}
            <div className="col-md-10">
              <div className="row" id="product-list">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <div className="col-12 col-sm-6 col-lg-3" key={product.id}>
                      <div className="product-card text-start">
                        <div className="position-relative prd-pic">
                          <Link to={`/product-details?id=${product.id}`}>
                            <img
                              src={product.image}
                              alt={product.product_name}
                              className="img-fluid w-100"
                            />
                          </Link>
                          <div className="wishlist-icon">
                            <i
                              className="bi bi-heart heart-icon"
                              onClick={(e) => {
                                e.stopPropagation();
                                addToWishlist(product);
                              }}
                            ></i>
                          </div>
                          <div className="bag-icon btn quick-add">
                            <i
                              className="bi bi-bag"
                              onClick={() => addToCart(product, 1)}
                            ></i>
                          </div>
                        </div>

                        <div className="product-info mt-2">
                          <div className="product-footer">
                            <Link
                              to={`/product-details?id=${product.id}`}
                              className="product-brand"
                            >
                              {product.product_name}
                            </Link>
                          </div>
                          <p className="description">{product.product_description}</p>
                          <p className="price">
                            ${product.offer_price ? product.offer_price.toFixed(2) : "0.00"}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12">
                    <p className="text-muted">
                      No products found matching your criteria.
                      {selectedCategories.length > 0 && (
                        <span> Try selecting different categories.</span>
                      )}
                      {maxPrice < Math.max(...allProducts.map(p => p.offer_price || 0)) && (
                        <span> Try increasing the price range.</span>
                      )}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsContent;
