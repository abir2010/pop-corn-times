import classes from "../styles/Movie.module.css";

export default function Movie() {
    return (
        <a href="details.html" className={classes.movie}>
            <img src="https://i.ibb.co/Yh5F2HX/strays.jpg" alt />
            <div className={classes.description}>
                <div className={classes.rating}>
                    <span className="material-icons-outlined"> movie</span>
                    <p className="title">Strays</p>
                    <span className="material-icons-outlined"> 4k </span>
                </div>
                <div className="detail">
                    description of the movie goes here. Stray is a movie about
                    two dogs
                </div>
                <div className={classes.status}>
                    <span className="material-icons-outlined"> done_all </span>
                    <div className={classes.reaction}>
                        <span className="detail">Reaction : </span>
                        <span className="material-icons-outlined">
                            sentiment_satisfied
                        </span>
                    </div>
                </div>
            </div>
        </a>
    );
}
