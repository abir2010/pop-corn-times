import classes from "../styles/Movies.module.css";
import Movie from "./Movie";

export default function Movies() {
    return (
        <div className={classes.movies}>
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
        </div>
    );
}
