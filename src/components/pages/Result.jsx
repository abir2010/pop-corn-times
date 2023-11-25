import Illustration from "../Illustration";
import rImg from "../../assets/result.png";
import Outcome from "../Outcome";

export default function Result() {
    return (
        <div>
            <Illustration image={rImg} />
            <Outcome />
        </div>
    );
}
