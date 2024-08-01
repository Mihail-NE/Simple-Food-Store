import "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";

const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <div>
            <button {...props} className={cn("button accent", className)}>
                {children}
            </button>
        </div>
    );
};

export default Button;
