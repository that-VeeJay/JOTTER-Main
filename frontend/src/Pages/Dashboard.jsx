import MostPopular from "../components/home/MostPopular";
import Bulletin from "../components/home/Bulletin";
import Featured from "../components/home/Featured";
import Subscribe from "../components/home/Subscribe";
import Categories from "../components/home/Categories";
import LatestPosts from "../components/home/LatestPosts";

export default function Dashboard() {
    return (
        <div className="container mx-auto min-h-screen pt-5  space-y-6 md:space-y-12">
            <Bulletin />
            <Featured />

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
        </div>
    );
}
