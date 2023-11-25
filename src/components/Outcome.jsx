import classes from "../styles/Outcome.module.css";
import oneImg from "../assets/one.png";
import Button from "./Button";

export default function Outcome() {
    return (
        <div className={classes.result}>
            <div>
                <img src={oneImg} alt />
            </div>
            <div>
                <p className="title">You Liked the Trailer pretty much</p>
                <p className="detail">
                    So I suggest you to add this movie to your watchlist...
                </p>
                <br />
                <div className={classes.watchlist}>
                    <Button>Add To Watchlist</Button>
                </div>
            </div>
        </div>
    );
}
