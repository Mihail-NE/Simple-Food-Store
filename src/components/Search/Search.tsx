import { forwardRef } from "react";
import styles from "./Search.module.css";
import cn from "classnames";
import { SearchProps } from "./Search.props";

const Search = forwardRef<HTMLInputElement, SearchProps>(function Search(
    { className, ...props },
    ref
) {
    return (
        <div className={styles["input-container"]}>
            <input
                ref={ref}
                className={cn(styles["input"], className, )}
                {...props}
            />
            <img className={styles["search-icon"]} src="./public/search.svg" />
        </div>
    );
});

export default Search;
