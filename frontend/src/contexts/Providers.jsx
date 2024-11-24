import { NextUIProvider } from "@nextui-org/react";
import ThemeProvider from "./ThemeProvider";
import AuthProvider from "./AuthProvider";
import LatestPostsProvider from "./LatestPostsProvider";
import FeaturedPostsProvider from "./FeaturedPostsProvider";

export default function Providers({ children }) {
    return (
        <NextUIProvider>
            <ThemeProvider>
                <AuthProvider>
                    <LatestPostsProvider>
                        <FeaturedPostsProvider>{children}</FeaturedPostsProvider>
                    </LatestPostsProvider>
                </AuthProvider>
            </ThemeProvider>
        </NextUIProvider>
    );
}
