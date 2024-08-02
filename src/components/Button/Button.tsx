import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";

const Button = ({
    children,
    className,
    appearence = "small",
    ...props
}: ButtonProps) => {
    return (
        <div>
            <button
                {...props}
                className={cn(styles["button"], styles["accent"], className, {
                    [styles["small"]]: appearence === "small",
                    [styles["big"]]: appearence === "big",
                })}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;
