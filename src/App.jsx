import "./styles/App.css";
import Home from "./components/pages/Home";
import Layout from "./components/Layout";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";

function App() {
    return (
        <>
            <Layout>
                <Home />
            </Layout>
            <Signup />
            <Login />
        </>
    );
}

export default App;
