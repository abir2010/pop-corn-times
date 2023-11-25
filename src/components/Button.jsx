/* eslint-disable react/prop-types */
import classes from "../styles/Button.module.css";

export default function Button({ children, className, ...rest }) {
    return (
        <button className={`${className} ${classes.button}`} {...rest}>
            {children}
        </button>
    );
}
