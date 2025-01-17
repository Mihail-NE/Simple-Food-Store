import ProductCard from "../../../components/ProductCarD/ProductCard";
import { MenuListProps } from "./MenuList.props";
import styles from "./MenuList.module.css";

const MenuList = ({ products }: MenuListProps) => {
    return (
        <div className={styles.wrapper}>
            {products.map((p) => (
                <ProductCard
                    id={p.id}
                    name={p.name}
                    ingredients={p.ingredients.join(", ")}
                    rating={p.rating}
                    price={p.price}
                    image={p.image}
                />
            ))}
        </div>
    );
};

export default MenuList;
