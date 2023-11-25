import classes from "../styles/Modal.module.css";
import Button from "./Button";

export default function Modal() {
    return (
        <div style={{ display: "block" }} className={classes.modalcontainer}>
            <div className={classes.modal}>
                <div className="title">Your Watchlist</div>
                <ul>
                    <li>Oppenherimer</li>
                </ul>
                <div className={classes.cancel}>
                    <Button>Cancel</Button>
                </div>
            </div>
        </div>
    );
}
