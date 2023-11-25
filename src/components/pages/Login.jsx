import Illustration from "../Illustration";
import LoginForm from "../LoginForm";
import lImg from "../../assets/login.png";

export default function Login() {
    return (
        <div className="column">
            <Illustration image={lImg} />
            <LoginForm />
        </div>
    );
}
