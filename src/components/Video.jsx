import classes from "../styles/Video.module.css";

export default function Video() {
    return (
        <div className={classes.trailor}>
            {/* <img src="./images/brand.png" alt="" /> */}
            <iframe
                className={classes.youtube}
                src="https://www.youtube.com/embed/uYPbbksJxIg"
            ></iframe>
            <p className="detail" />
        </div>
    );
}
