import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { ProductCardProps } from "./ProductCard.props";

const ProductCard = (props: ProductCardProps) => {
    return (
        <Link to={`/product/${props.id}`} className={styles["link"]}>
            <div className={styles["card"]}>
                <div
                    className={styles["head"]}
                    style={{ backgroundImage: `url(${props.image})` }}
                >
                    <div className={styles["price"]}>
                        {props.price}
                        <span className={styles["currency"]}> ₽</span>
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
                    <div className={styles["title"]}>{props.name}</div>
                    <div className={styles["description"]}>
                        {props.ingredients}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
