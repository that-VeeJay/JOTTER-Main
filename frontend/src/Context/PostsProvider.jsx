import LatestPostsProvider from "./LatestPostsContext";
import FeaturedPostsProvider from "./FeaturedPostsContext";

export function PostsProvider({ children }) {
    return (
        <LatestPostsProvider>
            <FeaturedPostsProvider>{children}</FeaturedPostsProvider>
        </LatestPostsProvider>
    );
}
