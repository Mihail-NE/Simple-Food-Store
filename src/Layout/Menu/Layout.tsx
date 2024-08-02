import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Button from "../../components/Button/Button";

const Layout = () => {
    return (
        <div className={styles["layout"]}>
            <div className={styles["sidebar"]}>
                <div className={styles["user"]}>
                    <img
                        className={styles["avatar"]}
                        src="./public/avatar.png"
                    />
                    <div className={styles["name"]}>Том Харди</div>
                    <div className={styles["email"]}>tomhardi228@gmail.com</div>
                </div>

                <div className={styles["menu"]}>
                    <Link to="/" className={styles["link"]}>
                        <img
                            className={styles["menu-icon"]}
                            src="./public/menu.svg"
                        />
                        Меню
                    </Link>
                    <Link to="/cart" className={styles["link"]}>
                        <img
                            className={styles["menu-icon"]}
                            src="./public/cart.svg"
                        />
                        Корзина
                    </Link>
                </div>

                <Button className={styles["button"]} appearence="small">
                    <img
                        className={styles["button-icon"]}
                        src="./public/log-out.svg"
                    />
                    Выйти
                </Button>

                {/* <div>
                    <Outlet />
                </div> */}
            </div>
        </div>
    );
};

export default Layout;
