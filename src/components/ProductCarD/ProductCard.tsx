import styles from './ProductCard.module.css'
import { ProductCardProps } from './ProductCard.props'

const ProductCard = (props: ProductCardProps) => {
  return (
    <div className={styles["card"]}>
        <div className={styles["head"]}>
            <div className={styles["price"]}>
                {props.price}
            </div>
            <button className={styles["add-to-cart"]}>
              <img src="./public/add-to-card.svg" />
            </button>
            <div className={styles["range"]}>
                {props.rating}
                <img src="./public/star.svg" />
            </div>
        </div>

        <div className={styles["footer"]}>
            <div className={styles["title"]}>
                {props.title}
            </div>
            <div className={styles["discription"]}>
                {props.discription}
            </div>
        </div>
    </div>
  )
}

export default ProductCard