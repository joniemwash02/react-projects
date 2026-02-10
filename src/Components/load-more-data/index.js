import { useEffect, useState } from "react";
import "./style.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${count * 10}`
      );

      const results = await response.json();

      if (results?.products?.length) {
        setProducts((prevData) => [...prevData, ...results.products]);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  return (
    <div className="load-more-container">
      {loading && <div>Loading data please wait...</div>}

      <div className="product-container">
        {products.length ? (
          products.map((item) => (
            <div key={item.id} className="product">
              <img src={item.thumbnail} alt={item.title} />
              <p>{item.title}</p>
              <span className="price">KSh {item.price}</span>
              <span className="discount">
  -{Math.round(item.discountPercentage)}%
</span>

            </div>
          ))
        ) : (
          !loading && <div>No data found</div>
        )}
      </div>

      <div className="button-container">
        <button onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
      </div>
    </div>
  );
}
