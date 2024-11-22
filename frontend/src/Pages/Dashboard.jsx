import { useEffect, useState } from "react";
import MostPopular from "../Sections/MostPopular";
import Bulletin from "../Sections/Dashboard/Bulletin";
import Featured from "../Sections/Dashboard/Featured";
import Subscribe from "../Sections/Dashboard/Subscribe";
import Categories from "../Sections/Dashboard/Categories";
import LatestPosts from "../Sections/Dashboard/LatestPosts";

export default function Dashboard() {
    const [latestPosts, setLatestPosts] = useState(null);
    const [featuredPosts, setFeaturedPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const latestResponse = await fetch(`/api/posts?type=${"latest"}&limit=${4}`);
                const latestData = await latestResponse.json();
                setLatestPosts(latestData);

                const featuredResponse = await fetch(`/api/posts?type=${"featured"}&limit=${4}`);
                const featuredData = await featuredResponse.json();
                setFeaturedPosts(featuredData);

                setLoading(false);
            } catch (error) {
                console.error("Error fetching featured/latest posts:", error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="container mx-auto min-h-screen pt-5  space-y-6 md:space-y-12">
            <Bulletin />
            <Featured posts={featuredPosts} loading={loading} />

            <div className="grid xl:grid-cols-3 gap-5">
                <div className="xl:col-span-2">
                    <LatestPosts posts={latestPosts} loading={loading} />
                </div>
                <div className="xl:col-span-1">
                    <MostPopular />
                    <Categories />
                </div>
            </div>

            <Subscribe />

            <br />
        </div>
    );
}
