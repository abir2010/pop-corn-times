import classes from "../../styles/Notfound.module.css";
import nImg from "../../assets/notfound.png";
import Button from "../Button";

export default function Notfound() {
    return (
        <div className={classes.notfound}>
            <img src={nImg} alt />
            <a href="movies.html">
                <Button>Back To Homepage</Button>
            </a>
        </div>
    );
}
