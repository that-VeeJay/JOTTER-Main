import { lazy, Suspense, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContext } from "./Context/AppContext";
import Layout from "./Pages/Layout";
import { Spinner } from "@nextui-org/react";

const Creators = lazy(() => import("./Pages/Creators"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));
const Community = lazy(() => import("./Pages/Community"));
const Login = lazy(() => import("./Pages/Auth/Login"));
const Register = lazy(() => import("./Pages/Auth/Register"));
const CreatePost = lazy(() => import("./Pages/Posts/CreatePost"));

const Loading = () => (
    <div className="container mx-auto text-center min-h-screen mt-12">
        <Spinner color="default" />
    </div>
);

const withSuspense = (Component) => {
    return (
        <Suspense fallback={<Loading />}>
            <Component />
        </Suspense>
    );
};

export default function App() {
    const { theme } = useContext(AppContext);

    return (
        <main className={`${theme} text-foreground bg-background`}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={withSuspense(Dashboard)} />
                        <Route path="creators" element={withSuspense(Creators)} />
                        <Route path="community" element={withSuspense(Community)} />
                        <Route path="create-post" element={withSuspense(CreatePost)} />
                    </Route>
                    <Route path="/register" element={withSuspense(Register)} />
                    <Route path="/login" element={withSuspense(Login)} />
                </Routes>
            </BrowserRouter>
        </main>
    );
}
