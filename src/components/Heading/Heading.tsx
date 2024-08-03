import styles from "./Input.module.css";
import cn from "classnames";
import { HeadingProps } from "./Heading.props.ts";

function Heading({ children, className, ...props }: HeadingProps) {
    return (
        <h1 className={cn( className, styles["h1"])} {...props}>
            {children}
        </h1>
    );
}

export default Heading;
