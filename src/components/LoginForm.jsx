import Form from "./Form";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";
import Button from "./Button";

export default function LoginForm() {
    return (
        <Form>
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
            <Checkbox required text="I agree to the Terms &amp; Conditions" />
            <Button>Login</Button>
            <br />
            <div className="info">
                Don&apos;t have an account?
                <a href="signup.html">Signup</a> instead.
            </div>
        </Form>
    );
}
