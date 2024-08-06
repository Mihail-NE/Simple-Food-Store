import styles from "./Menu.module.css";
import Search from "../../components/Search/Search";
import Heading from "./../../components/Heading/Heading";
import { data } from "../../Help/data";
import MenuList from "./MenuList/MenuList";
// import axios from "axios";
// import { PREFIX } from "../../Help/API";
// import { Product } from "../../interfaces/product.interface";
// import {  useState } from "react";
// import { AxiosError } from "axios";
// import { useEffect } from "react";

const Menu = () => {
    // const [products, setProducts] = useState<Product[]>([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState<string | undefined>();

    // const getMenu = async () => {
    //     try {
    //         setIsLoading(true);
    //         const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
    //         setProducts(data);
    //         setIsLoading(false);
    //     } catch (e) {
    //         console.error(e);
    //         if(e instanceof AxiosError) {
    //             setError(e.message);
    //         }
    //         setIsLoading(false)
    //         return
    //     }
    // };

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
                {/* {error && <p>{error}</p>}
                {!isLoading && <MenuList products={products} }
                {isLoading && <p>Загружаем продукты...</p>} */}

                <MenuList products={products}/>
            </div>
        </>
    );
};

export default Menu;
