import { FormEvent } from "react";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import Input from "../../components/Input/Input";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
    const sumbit = (e: FormEvent) => {
      e.preventDefault()
      console.log(e);
    }



    return (
        <div onSubmit={sumbit}>
            <Heading>Вход</Heading>
            <form className={styles["form"]}>
                <div className={styles["email"]}>
                    <label className={styles["label"]} htmlFor="email">
                        Ваш email
                    </label>
                    <Input placeholder="Email" id="email" />
                </div>

                <div className={styles["password"]}>
                    <label className={styles["label"]} htmlFor="password">
                        Ваш пароль
                    </label>
                    <Input id="password" placeholder="Пароль" type="password" />
                </div>

                <div className={styles["links"]}>
                    <Button className={styles["button"]}>Войти</Button>
                    <p className={styles["title"]}>Нет аккаунта?</p>
                    <Link to="/auth/register" className={styles["register"]}>
                        Зарегестрироваться
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
