import "./styles/App.css";
import Home from "./components/pages/Home";
import Layout from "./components/Layout";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Notfound from "./components/pages/Notfound";
import Result from "./components/pages/Result";

function App() {
    return (
        <>
            <Layout>
                <Home />
            </Layout>
            <Signup />
            <Login />
            <Notfound />
            <Result />
        </>
    );
}

export default App;
