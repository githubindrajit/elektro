import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/productjson/products.json") // Adjust path if needed
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Failed to fetch products:", err));
  }, []);

  return products;
};

export default useProducts;
