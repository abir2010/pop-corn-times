import Form from "./Form";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";
import Button from "./Button";

export default function SignupForm() {
    return (
        <Form>
            <TextInput
                required
                type="text"
                placeholder="Enter name"
                icon="person"
            />
            <TextInput
                required
                type="text"
                placeholder="Enter email"
                icon="alternate_email"
            />
            <TextInput
                required
                type="password"
                placeholder="Enter password"
                icon="lock"
            />
            <TextInput
                required
                type="password"
                placeholder="Confirm password"
                icon="lock_clock"
            />
            <Checkbox required text="I agree to the Terms &amp; Conditions" />
            <Button>Submit Now</Button>
            <br />
            <div className="info">
                Already have an account?
                <a href="login.html">Login</a> instead.
            </div>
        </Form>
    );
}
