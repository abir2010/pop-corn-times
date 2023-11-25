import classes from "../styles/Form.module.css";

// eslint-disable-next-line react/prop-types
export default function Form({children}) {
    return (
        <form className={`signup ${classes.form}`} action="#">
            {children}
        </form>
    );
}
