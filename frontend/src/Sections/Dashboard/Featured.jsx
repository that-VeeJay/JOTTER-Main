import { useContext } from "react";
import { Avatar, Card, Skeleton } from "@nextui-org/react";
import MyImage from "../../Components/MyImage";
import { formatDate } from "../../Helpers/Helpers";
import post1 from "../../../public/posts/post1.jpg";
import CategoryChip from "../../Components/CategoryChip";
import { FeaturedPostsContext } from "../../Context/FeaturedPostsContext";

export default function Featured() {
    const { featuredPosts: posts, loading } = useContext(FeaturedPostsContext);

    return (
        <section>
            {loading ? (
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 grid-rows-1">
                    {/* Column 1 */}
                    <div className="col-span-1 xl:col-span-2">
                        <div className="grid md:grid-cols-7 relative gap-3">
                            <div className="flex items-center order-2 md:order-none">
                                <Card className="md:absolute z-20 md:col-start-1 md:col-end-4 w-full p-5 space-y-3 rounded-xl">
                                    <div className="flex gap-2 items-center">
                                        <Skeleton className="h-10 w-10 rounded-full" />
                                        <div className="space-y-2">
                                            <Skeleton className="h-3 w-24 rounded-lg" />
                                            <Skeleton className="h-3 w-4/5 rounded-lg" />
                                        </div>
                                    </div>
                                    <Skeleton className="h-10 w-full rounded-lg" />
                                    <Skeleton className="h-16 w-full rounded-lg" />
                                    <Skeleton className="h-6 w-12 rounded-full" />
                                </Card>
                            </div>
                            <div className="md:col-start-2 md:col-end-8 order-1 md:order-none">
                                <Skeleton className="aspect-[4/2.5] w-full rounded-xl" />
                            </div>
                        </div>
                    </div>

                    {/* Column 2 (Skeleton loader for posts) */}
                    <div className="flex flex-col gap-6 justify-center">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div key={index} className="grid grid-cols-7">
                                <div className="col-start-1 col-end-3">
                                    <Skeleton className="aspect-square w-full rounded-xl" />
                                </div>
                                <div className="col-start-3 col-end-8 p-2 flex flex-col gap-1 justify-center space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Skeleton className="rounded-full w-8 h-8" />
                                        <Skeleton className="h-3 w-28 rounded-full" />
                                    </div>
                                    <div className="space-y-2">
                                        <Skeleton className="h-12 w-4/5 rounded-lg" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 grid-rows-1">
                    {/* Column 1 */}
                    <div className="col-span-1 xl:col-span-2">
                        <div className="grid md:grid-cols-7 relative gap-3">
                            <div className="flex items-center order-2 md:order-none">
                                <Card className="md:absolute z-20 md:col-start-1 md:col-end-4 w-full p-5 space-y-3">
                                    <div className="flex items-center gap-3 text-sm">
                                        <Avatar size="md" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                        <div>
                                            <p className="font-medium text-medium">{posts[0]?.user.name}</p>
                                            <p className="text-xs font-medium text-gray-400">{formatDate(posts[0]?.created_at)}</p>
                                        </div>
                                    </div>
                                    <h1 className="font-semibold text-lg line-clamp-2 md:line-clamp-3 lg:line-clamp-4">{posts[0]?.title}</h1>
                                    <p className="text-sm line-clamp-3 md:line-clamp-3 text-zinc-400">{posts[0]?.body}</p>
                                    <span className="text-xs font-medium text-gray-400">
                                        <CategoryChip>{posts[0]?.category}</CategoryChip>
                                    </span>
                                </Card>
                            </div>
                            <div className="md:col-start-2 md:col-end-8 order-1 md:order-none">
                                <MyImage src={post1} loading="lazy" className="aspect-[4/2.5] object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-6 justify-center">
                        {posts.length > 1 ? (
                            posts.slice(1).map((post) => (
                                <div key={post.id} className="grid grid-cols-7">
                                    <div className="col-start-1 col-end-3">
                                        <MyImage src={post.image} loading="lazy" className="aspect-square object-cover" />
                                    </div>
                                    <div className="col-start-3 col-end-8 p-2 flex flex-col gap-1 justify-center space-y-1">
                                        <div className="flex items-center gap-2">
                                            <Avatar size="sm" src="https://i.pravatar.cc/150?u=a042581f4e2902024d" />
                                            <p className="text-sm font-medium">{post.user.name}</p>
                                            <span>•</span>
                                            <p className="text-xs font-medium text-gray-400">{formatDate(post.created_at)}</p>
                                        </div>
                                        <h3 className=" md:text-xl xl:text-medium line-clamp-2 md:line-clamp-3 lg:line-clamp-2 font-medium">{post.title}</h3>
                                        <small className="text-red-500 font-medium">{post.category}</small>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div>No posts available</div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
