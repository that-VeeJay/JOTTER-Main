import { useQuery } from "@tanstack/react-query";
import { useState, createContext, useEffect } from "react";

export const LatestPostsContext = createContext();

export default function LatestPostsProvider({ children }) {
    const { data: latestPosts, isLoading } = useQuery({
        queryKey: ["latest_posts"],
        queryFn: async () => {
            const res = await fetch(`/api/posts?type=${"latest"}&limit=${4}`);
            return res.json();
        },
    });

    return <LatestPostsContext.Provider value={{ latestPosts, isLoading }}>{children}</LatestPostsContext.Provider>;
}
