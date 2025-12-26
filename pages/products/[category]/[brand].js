import { useRouter } from "next/router";
import db from "@/data/db.json";
import { useEffect, useState } from "react";
import ProductCard from "@/components/productCard/ProductCard";

export default function ProductsByBrands() {
  const { brand } = useRouter().query;
  const [laptops, setLaptops] = useState([]);

  // when change brand in our laptops execute useEffect below
  useEffect(() => {
    setLaptops(getLaptops(brand));
  }, [brand]);

  // getLaptops func:
  const getLaptops = (brand) => {
    return db.laptops.filter((laptop) => laptop.brand === brand);
  };

  return (
    <>
      <div className="container">
        <div className="section">
          <h1>Laptop - {brand}</h1>
          <div className="row">
            {laptops.map((laptop) => (
              <div className="col" key={laptop.id}>
                <ProductCard {...laptop} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
