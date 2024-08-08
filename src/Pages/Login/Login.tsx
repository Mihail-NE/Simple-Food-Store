import { FormEvent } from "react";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import Input from "../../components/Input/Input";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { PREFIX } from "../../Help/API";


export interface LoginForm {
    email: {
        value: string;
    };
    password: {
        value: string;
    };
}

const Login = () => {
    const sumbit = (e: FormEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & LoginForm;
        const { email, password } = target;
        console.log(email.value);
        console.log(password.value);
        sendLogin(email.value, password.value);
    };

    const sendLogin = async (email: string, password: string) => {
        const { data } = await axios.post(`${PREFIX}/auth/login`, {
            email,
            password,
        });
        console.log(data)
    };

    return (
        <div>
            <Heading>Вход</Heading>
            <form className={styles["form"]} onSubmit={sumbit}>
                <div className={styles["email"]}>
                    <label className={styles["label"]} htmlFor="email">
                        Ваш email
                    </label>
                    <Input placeholder="Email" id="email" name="email" />
                </div>

                <div className={styles["password"]}>
                    <label className={styles["label"]} htmlFor="password">
                        Ваш пароль
                    </label>
                    <Input
                        id="password"
                        placeholder="Пароль"
                        type="password"
                        name="password"
                    />

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
