import styles from "./Menu.module.css";
import Search from "../../components/Search/Search";
import Heading from "./../../components/Heading/Heading";
import ProductCard from "../../components/ProductCarD/ProductCard";
import { data } from "../../Help/data";
// import axios from "axios";
// import { PREFIX } from "../../Help/API";
// import { Product } from "../../interfaces/product.interface";
import {  useState } from "react";
// import { useEffect } from "react";

const Menu = () => {
    // const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const getMenu = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
            setProducts(data);
            setIsLoading(false);
        } catch (e) {
            console.error();
            setIsLoading(false)
        }
    };

    // const getMenu = async () => {
    //     try {
    //         const res = await fetch(`${PREFIX}/products`);
    //         if (!res.ok) {
    //             return
    //         }
    //         const data = (await res.json()) as Product[];
    //         setProducts(data);
    //     } catch (error) {
    //         console.error();
    //         return;
    //     }
    // };

    // useEffect(() => {
    //     getMenu();
    // }, []);

    const products = data;

    return (
        <>
            <div className={styles["head"]}>
                <Heading>Меню</Heading>
                <Search placeholder="Введите название блюда" />
                cnl
            </div>
            <div>
                {!isLoading && products.map((p) => (
                    <ProductCard
                        id={p.id}
                        name={p.name}
                        ingredients={p.ingredients.join(", ")}
                        rating={p.rating}
                        price={p.price}
                        image={p.image}
                    />
                ))}
                {isLoading && <p>Загружаем продукты...</p>}
            </div>
        </>
    );
};

export default Menu;
