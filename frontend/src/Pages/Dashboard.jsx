import MostPopular from "../Sections/MostPopular";
import Bulletin from "../Sections/Dashboard/Bulletin";
import Featured from "../Sections/Dashboard/Featured";
import Subscribe from "../Sections/Dashboard/Subscribe";
import Categories from "../Sections/Dashboard/Categories";
import LatestPosts from "../Sections/Dashboard/LatestPosts";

import FeaturedPostsProvider from "../Context/FeaturedPostsProvider";

export default function Dashboard() {
    return (
        <div className="container mx-auto min-h-screen pt-5  space-y-6 md:space-y-12">
            <Bulletin />

            <FeaturedPostsProvider>
                <Featured />
            </FeaturedPostsProvider>

            <div className="grid xl:grid-cols-3 gap-5">
                <div className="xl:col-span-2">
                    <LatestPosts />
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
