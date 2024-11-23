import { useState, createContext, useEffect } from "react";

export const LatestPostsContext = createContext();

export default function LatestPostsProvider({ children }) {
    const [latestPosts, setLatestPosts] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getLatestPosts() {
        setLoading(true);

        const res = await fetch(`/api/posts?type=${"latest"}&limit=${4}`);
        const data = await res.json();
        setLatestPosts(data);
        setLoading(false);
    }

    function refreshLatestPosts() {
        getLatestPosts();
    }

    useEffect(() => {
        if (!latestPosts) {
            getLatestPosts();
        }
    }, [latestPosts]);

    return <LatestPostsContext.Provider value={{ latestPosts, loading, refreshLatestPosts }}>{children}</LatestPostsContext.Provider>;
}
