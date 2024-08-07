import { Outlet } from "react-router-dom";
import styles from "./AuthLayuot.module.css";

const AuthLayout = () => {
    return (
        <div className={styles["layout"]}>
            <div className={styles["logo"]}>
                <img className={styles["icon"]} src="./public/logo.svg" />
            </div>
            <div className={styles["content"]}>
                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;
