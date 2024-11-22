import { Avatar, Skeleton } from "@nextui-org/react";
import MyImage from "../../Components/MyImage";
import SectionTitle from "../../Components/SectionTitle";
import CategoryChip from "../../Components/CategoryChip";
import { formatDate } from "../../Helpers/Helpers";
import { useContext } from "react";
import { LatestPostsContext } from "../../Context/LatestPostsContext";

export default function LatestPosts() {
    const { latestPosts: posts, loading } = useContext(LatestPostsContext);

    return (
        <section className="space-y-3">
            <SectionTitle showArrow={true}>Latest Posts</SectionTitle>
            {loading ? (
                Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="grid md:grid-cols-3 gap-3">
                        <Skeleton className="aspect-video md:aspect-square w-full rounded-xl" />
                        <div className="md:col-span-2 p-5 lg:p-8 space-y-3">
                            <div className="flex items-center gap-3">
                                <Skeleton className="rounded-full w-8 h-8" />
                                <Skeleton className="h-5 w-24 rounded-full" />
                            </div>
                            <Skeleton className="h-16 w-full rounded-lg" />
                            <Skeleton className="h-8 w-4/5 rounded-lg" />
                            <Skeleton className="h-6 w-12 rounded-full" />
                        </div>
                    </div>
                ))
            ) : posts ? (
                posts.map((post) => (
                    <div key={post.id} className="grid md:grid-cols-3 ">
                        <MyImage src={post.image} className="aspect-video md:aspect-square object-cover" />
                        <div className="md:col-span-2 p-5 lg:p-8 space-y-2 lg:space-y-3">
                            <div className="flex items-center gap-3">
                                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e2902602d" name="Mary" size="sm" />
                                <p className="font-medium">{post.user.name}</p>
                                <span>•</span>
                                <small className="text-zinc-400 font-semibold">{formatDate(post.created_at)}</small>
                            </div>
                            <h2 className="text-xl lg:text-2xl line-clamp-2 font-semibold">{post.title}</h2>
                            <p className="text-sm lg:text-medium line-clamp-3 text-zinc-400">{post.body}</p>
                            <CategoryChip>{post.category}</CategoryChip>
                        </div>
                    </div>
                ))
            ) : (
                <div>No posts available</div>
            )}
        </section>
    );
}
