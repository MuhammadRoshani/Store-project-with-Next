import ProductCard from "@/components/productCard/ProductCard";
import db from "@/data/db.json";
export default function Home() {
  // we receive our data from simulator database db.json
  return (
    <>
      <div className="container">
        <div className="section">
          {/* laptops: */}
          <h1>Laptop</h1>
          <div className="row">
            {/* we use slice method for just show 4 items in main page. */}
            {db.laptops.slice(0, 4).map((laptop) => (
              <div key={laptop.id} className="col">
                <ProductCard {...laptop} />
              </div>
            ))}
          </div>

          {/* mobiles: */}
          <h1>Mobiles</h1>
          <div className="row">
            {db.mobiles.slice(0, 4).map((mobile) => (
              <div key={mobile.id} className="col">
                <ProductCard {...mobile} />
              </div>
            ))}
          </div>

          {/* tablets */}
          <h1>Tablets</h1>
          <div className="row">
            {db.tablets.slice(0, 4).map((tablet) => (
              <div key={tablet.id} className="col">
                <ProductCard {...tablet} />
              </div>
            ))}
          </div>

          {/* cameras */}
          <h1>Cameras</h1>
          <div className="row">
            {db.cameras.slice(0, 4).map((camera) => (
              <div key={camera.id} className="col">
                <ProductCard {...camera} />
              </div>
            ))}
          </div>

          {/* consoles */}
          <h1>Consoles</h1>
          <div className="row">
            {db.consoles.slice(0, 4).map((console) => (
              <div key={console.id} className="col">
                <ProductCard {...console} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
