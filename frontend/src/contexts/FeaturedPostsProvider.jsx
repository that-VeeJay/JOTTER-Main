import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";

export const FeaturedPostsContext = createContext();

export default function FeaturedPostsProvider({ children }) {
    const { data: featuredPosts, isLoading } = useQuery({
        queryKey: ["featured_posts"],
        queryFn: async () => {
            const res = await fetch(`/api/posts?type=${"featured"}&limit=${4}`);
            return res.json();
        },
    });

    return <FeaturedPostsContext.Provider value={{ featuredPosts, isLoading }}>{children}</FeaturedPostsContext.Provider>;
}
