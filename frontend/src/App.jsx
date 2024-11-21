import { lazy, Suspense, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContext } from "./Context/AppContext";

const Layout = lazy(() => import("./Pages/Layout"));
const Creators = lazy(() => import("./Pages/Creators"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));
const Community = lazy(() => import("./Pages/Community"));
const Login = lazy(() => import("./Pages/Auth/Login"));
const Register = lazy(() => import("./Pages/Auth/Register"));

const Loading = () => <div className="loading-spinner">Loading...</div>;

export default function App() {
    const { theme } = useContext(AppContext);

    return (
        <main className={`${theme} text-foreground bg-background`}>
            <BrowserRouter>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Dashboard />} />
                            <Route path="creators" element={<Creators />} />
                            <Route path="community" element={<Community />} />
                        </Route>
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </main>
    );
}
