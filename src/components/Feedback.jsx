import classes from "../styles/Feedback.module.css";
import oneImg from "../assets/one.png";
import twoImg from "../assets/two.png";
import threeImg from "../assets/three.png";
import fourImg from "../assets/four.png";

export default function Feedback() {
    return (
        <div>
            <p style={{ fontSize: 30 }} className="title">
                Let us tell about
            </p>
            <p style={{ fontSize: 20 }} className="detail">
                The overall Trailer
            </p>
            <br />
            <div className={classes.options}>
                {/* <input type="checkbox" name="" id="" /> */}
                <img src={oneImg} alt />
                {/* <input type="checkbox" name="" id="" /> */}
                <img src={twoImg} alt />
                {/* <input type="checkbox" name="" id="" /> */}
                <img src={threeImg} alt />
                {/* <input type="checkbox" name="" id="" /> */}
                <img src={fourImg} alt />
            </div>
        </div>
    );
}
