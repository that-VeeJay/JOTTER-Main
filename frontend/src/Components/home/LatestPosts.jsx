import { useContext } from "react";
import { Link } from "react-router-dom";
import { Avatar, Skeleton } from "@nextui-org/react";
import MyImage from "../MyImage";
import { formatDate } from "../../lib/Helpers";
import SectionTitle from "../SectionTitle";
import CategoryChip from "../CategoryChip";
import { LatestPostsContext } from "../../contexts/LatestPostsProvider";

export default function LatestPosts() {
    const { latestPosts: posts, isLoading } = useContext(LatestPostsContext);

    return (
        <section className="space-y-3">
            <SectionTitle showArrow={true}>Latest Posts</SectionTitle>
            {isLoading ? (
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
                        <Link to={`/posts/${post.id}`}>
                            <MyImage src={post.image} alt="Latest Post" className="aspect-video md:aspect-square object-cover" />
                        </Link>
                        <div className="md:col-span-2 p-5 lg:p-8 space-y-2 lg:space-y-3">
                            <div className="flex items-center gap-3 pb-2">
                                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e2902602d" name="Mary" size="sm" />
                                <p className="font-medium">{post.user?.name}</p>
                                <span>•</span>
                                <small className="text-zinc-400 font-semibold">{formatDate(post.created_at)}</small>
                            </div>
                            <Link to={`/posts/${post.id}`}>
                                <h2 className="text-xl lg:text-2xl line-clamp-2 font-semibold hover:text-zinc-700 dark:hover:text-zinc-300">{post.title}</h2>
                            </Link>
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
