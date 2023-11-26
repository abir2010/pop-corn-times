import Button from "./Button";

export default function MovieDetails() {
    return (
        <div>
            <p>
                Title : <span className="title">Oppenheimer</span>
            </p>
            <br />
            <p>
                Directed by :<span className="title">Christopher Nolan</span>
            </p>
            <br />
            <p>
                Release Date :<span className="detail">21 September, 2023</span>
            </p>
            <br />
            <p>
                Description : <br />
                <br />
                <span className="detail">
                    Written and directed by Christopher Nolan, Oppenheimer is an
                    IMAX®-shot epic thriller that thrusts audiences into the
                    pulse-pounding paradox of the enigmatic man who must risk
                    destroying the world in order to save it. The film stars
                    Cillian Murphy as J. Robert Oppenheimer and Emily Blunt as
                    his wife, biologist and botanist Katherine “Kitty”
                    Oppenheimer. Oscar® winner Matt Damon portrays General
                    Leslie Groves Jr., director of the Manhattan Project, and
                    Robert Downey, Jr. plays Lewis Strauss, a founding
                    commissioner of the U.S. Atomic Energy Commission ...
                </span>
            </p>
            <br />
            <p>
                Finished Watching ?<br />
                <br />
                <span className="detail">
                    Tell us about your expectation of this upcoming movie ...
                </span>
            </p>
            <br />
            <a href="login.html">
                <Button>Feedback</Button>
            </a>
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}
