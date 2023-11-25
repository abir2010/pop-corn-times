import Illustration from "../Illustration";
import SignupForm from "../SignupForm";
import sImg from "../../assets/signup.png";

export default function Signup() {
    return (
        <div className="column">
            <Illustration image={sImg} />
            <SignupForm />
        </div>
    );
}
