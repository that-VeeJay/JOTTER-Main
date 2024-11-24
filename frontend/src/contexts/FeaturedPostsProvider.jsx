import { createContext, useEffect, useState } from "react";

export const FeaturedPostsContext = createContext();

export default function FeaturedPostsProvider({ children }) {
    const [featuredPosts, setFeaturedPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getFeaturedPosts = async () => {
        setLoading(true);

        const res = await fetch(`/api/posts?type=${"featured"}&limit=${4}`);
        const data = await res.json();
        setFeaturedPosts(data);
        setLoading(false);
    };

    useEffect(() => {
        getFeaturedPosts();
    }, []);

    return <FeaturedPostsContext.Provider value={{ featuredPosts, loading }}>{children}</FeaturedPostsContext.Provider>;
}
