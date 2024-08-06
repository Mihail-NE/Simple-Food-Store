import ProductCard from "../../../components/ProductCarD/ProductCard";
import { MenuListProps } from "./MenuList.props";

const MenuList = ({ products }: MenuListProps) => {
    return products.map((p) => (
        <ProductCard
            id={p.id}
            name={p.name}
            ingredients={p.ingredients.join(", ")}
            rating={p.rating}
            price={p.price}
            image={p.image}
        />
    ));
};

export default MenuList;
