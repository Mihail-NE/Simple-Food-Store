import styles from "./Menu.module.css";
import Search from "../../components/Search/Search";
import Heading from "./../../components/Heading/Heading";
import ProductCard from "../../components/ProductCarD/ProductCard";

const Menu = () => {
    return (
        <>
            <div className={styles["head"]}>
                <Heading>Меню</Heading>
                <Search placeholder="Введите название блюда" />
            </div>
            <div>
                <ProductCard
                    id={1}
                    title="Маргарита"
                    discription="Томаты, сыр моцарелла,оливковое масло, пряный базилик"
                    rating={4.5}
                    price={100}
                    image="./public/margarita.png"
                />
                <ProductCard
                    id={1}
                    title="Маргарита"
                    discription="Томаты, сыр моцарелла,оливковое масло, пряный базилик"
                    rating={4.5}
                    price={100}
                    image="./public/margarita.png"
                />
                <ProductCard
                    id={1}
                    title="Маргарита"
                    discription="Томаты, сыр моцарелла,оливковое масло, пряный базилик"
                    rating={4.5}
                    price={100}
                    image="./public/margarita.png"
                />
            </div>
        </>
    );
};

export default Menu;
