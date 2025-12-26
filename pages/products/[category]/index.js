import styles from "@/styles/ProductsByCategory.module.css";
import { useRouter } from "next/router";
import db from "@/data/db.json";
import { useEffect, useState } from "react";
import ProductCard from "@/components/productCard/ProductCard";

export default function ProductsByCategory() {
  //Dynamic routes : by useRouter() we pull out, our values from query property.
  const { category } = useRouter().query;
  const [products, setProducts] = useState(db[category]);
  const [searchKey, setSearchKey] = useState("");

  // we use useEffect for update our value of products state (products)
  useEffect(() => {
    setProducts(db[category]);
    setSearchKey("");
  }, [category]);

  // (searchKey)
  useEffect(() => {
    // for prevent error of can not read undefined we use conditional why undefined because initial value of searchKey is null if searchKey exists in this time we use map method.
    if (searchKey) {
      const searchProducts = db[category].filter((product) =>
        product.text.includes(searchKey)
      );
      setProducts(searchProducts);
    } else {
      setProducts(db[category]);
    }
  }, [searchKey]);

  return (
    <>
      <div className="container">
        {/* input section: */}
        <div className={`${styles.searchContainer} section`}>
          <input
            type="text"
            placeholder="What are you looking for?"
            className={styles.search}
            onChange={(e) => setSearchKey(e.target.value)}
            value={searchKey}
          />
        </div>

        {/* product section: */}
        <div className="section">
          <h1> {category} products</h1>
          {/* we define row and col classes in globals.css */}
          <div className="row">
            {products?.map((product) => (
              <div className="col" key={product.id}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
