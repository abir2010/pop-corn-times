import classes from "../styles/Details.module.css";
import Feedback from "./Feedback";
import MovieDetails from "./MovieDetails";
import Video from "./Video";

export default function Details() {
    return (
        <div className={classes.details}>
            {/* video */}
            <Video />
            <div className={classes.information}>
                {/* movie details */}
                {/* <MovieDetails /> */}
                <Feedback />
            </div>
        </div>
    );
}
