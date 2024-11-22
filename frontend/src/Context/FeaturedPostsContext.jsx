import { createContext, useEffect, useState } from "react";

export const FeaturedPostsContext = createContext();

export default function FeaturedPostsProvider({ children }) {
    const [featuredPosts, setFeaturedPosts] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getFeaturedPosts() {
        setLoading(true);

        const res = await fetch(`/api/posts?type=${"featured"}&limit=${4}`);
        const data = await res.json();
        setFeaturedPosts(data);
        setLoading(false);
    }

    useEffect(() => {
        if (!featuredPosts) {
            getFeaturedPosts();
        }
    }, [featuredPosts]);

    return <FeaturedPostsContext.Provider value={{ featuredPosts, loading }}>{children}</FeaturedPostsContext.Provider>;
}
