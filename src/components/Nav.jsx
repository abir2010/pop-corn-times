import classes from "../styles/Nav.module.css";
import brandImg from "../assets/brand.png";
import Modal from "./Modal";

export default function Nav() {
    return (
        <div>
            <div className={classes.nav}>
                {/* brand */}
                <div className={classes.brand}>
                    <a href="movies.html">
                        <img src={brandImg} alt />
                    </a>
                </div>
                {/* navigation */}
                <div className={classes.container}>
                    <ul>
                        <li>
                            <a href="#">
                                <span className="material-icons-outlined">
                                    interests
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="signup.html">Sign up</a>
                        </li>
                        <li>
                            <a href="login.html">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* modal */}
            <Modal />
        </div>
    );
}
