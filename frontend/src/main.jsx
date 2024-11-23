import { NextUIProvider } from "@nextui-org/react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeProvider from "./Context/ThemeProvider.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import LatestPostsProvider from "./Context/LatestPostsProvider.jsx";

createRoot(document.getElementById("root")).render(
    <NextUIProvider>
        <ThemeProvider>
            <AuthProvider>
                <LatestPostsProvider>
                    <App />
                </LatestPostsProvider>
            </AuthProvider>
        </ThemeProvider>
    </NextUIProvider>
);
