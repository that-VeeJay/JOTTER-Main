import Bulletin from "../Sections/Dashboard/Bulletin";
import Featured from "../Sections/Dashboard/Featured";
import LatestPosts from "../Sections/Dashboard/LatestPosts";
import MostPopular from "../Sections/MostPopular";
import Categories from "../Sections/Dashboard/Categories";
import Subscribe from "../Sections/Dashboard/Subscribe";
import { useEffect, useState } from "react";

export default function Dashboard() {
    const [latestPosts, setLatestPosts] = useState(null);
    const [featuredPosts, setFeaturedPosts] = useState(null);

    useEffect(() => {
        fetch(`/api/posts?type=${"latest"}&limit=${4}`)
            .then((res) => res.json())
            .then((data) => setLatestPosts(data));

        fetch(`/api/posts?type=${"featured"}&limit=${4}`)
            .then((res) => res.json())
            .then((data) => setFeaturedPosts(data));
    }, []);

    return (
        <div className="container mx-auto min-h-screen pt-5  space-y-6 md:space-y-12">
            <Bulletin />
            <Featured posts={featuredPosts} />

            <div className="grid xl:grid-cols-3 gap-5">
                <div className="xl:col-span-2">
                    <LatestPosts posts={latestPosts} />
                </div>
                <div className="xl:col-span-1">
                    <MostPopular />
                    <Categories />
                </div>
            </div>

            <Subscribe />

            <br />
            <br />
            <br />
        </div>
    );
}
