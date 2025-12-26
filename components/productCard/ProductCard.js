import styles from "./ProductCard.module.css";

export default function ProductCard({ image, text, price }) {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.cardHeader}>
          <img src={image} alt="product-image" />
        </div>

        <div className={styles.cardMiddle}>
          <p>{text}</p>
        </div>

        <div className={styles.cardFooter}>
          <p>{price.toLocaleString()}</p>
          <button>Add to cart</button>
        </div>
      </div>
    </>
  );
}
