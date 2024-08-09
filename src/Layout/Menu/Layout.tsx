import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";
import Button from "../../components/Button/Button";

import cn from "classnames";


const Layout = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("JWT");
        navigate("/auth/login");
    }
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
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            cn(styles["link"], {
                                [styles["active"]]: isActive,
                            })
                        }
                    >
                        <img
                            className={styles["menu-icon"]}
                            src="./public/menu.svg"
                        />
                        Меню
                    </NavLink>
                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                            cn(styles["link"], {
                                [styles["active"]]: isActive,
                            })
                        }
                    >
                        <img
                            className={styles["menu-icon"]}
                            src="./public/cart.svg"
                        />
                        Корзина
                    </NavLink>
                </div>

                <Button className={styles["button"]} appearence="small">
                    <img
                        className={styles["button-icon"]}
                        src="./public/log-out.svg"
                        onClick={logout}
                    />
                    Выйти
                </Button>
            </div>
            <div className={styles["content"]}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
