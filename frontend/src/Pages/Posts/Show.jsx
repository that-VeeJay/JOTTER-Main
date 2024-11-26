import { Link, useParams } from "react-router-dom";
import { Avatar, Divider, Spinner } from "@nextui-org/react";
import MyImage from "@components/MyImage";
import { formatDate } from "@lib/Helpers";
import CategoryChip from "@components/CategoryChip";
import SectionTitle from "@components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { fetchSinglePost } from "@services/postService";

export default function Show() {
    const { id } = useParams();

    const {
        data: post,
        isLoading,
        isSuccess,
        isError,
    } = useQuery({
        queryKey: ["show_single_post", id],
        queryFn: async () => fetchSinglePost(id),
    });

    if (isSuccess) {
        window.scrollTo(0, 0);
    }

    return (
        <>
            {isLoading ? (
                <div className="flex justify-center items-center mt-24">
                    <Spinner color="default" size="xl" />
                </div>
            ) : isError || !post ? (
                <div className="flex justify-center items-center mt-24">
                    <div className="flex flex-col items-center">
                        <h2 className="text-xl font-semibold">No post available</h2>
                        <Link to="/" className="text-gray-400">
                            Go back
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="container mx-auto max-h-screen pt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:mb-12">
                        <MyImage src={post.image} className="aspect-[4/2.5] w-full object-cover" />
                        <div className="p-6 space-y-4 xl:space-y-6 flex flex-col justify-center">
                            <CategoryChip>{post.category}</CategoryChip>
                            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">{post.title}</h1>
                            <div className="flex gap-5 items-center">
                                <div className="flex items-center gap-3">
                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" name={post.user.name} />
                                    <p>{post.user.name}</p>
                                </div>
                                <span>•</span>
                                <p>{formatDate(post.created_at)}</p>
                            </div>
                        </div>
                    </div>

                    <Divider className="my-4 lg:hidden" />

                    <div className="grid grid-cols-3 mt-10">
                        <div className="col-span-3 lg:col-span-2 lg:mr-8 xl:mr-12">
                            <p className="text-justify text-lg lg:text-xl">{post.body}</p>
                        </div>
                        <aside className="hidden lg:block">
                            <SectionTitle showArrow={false} subtitle="Discover">
                                Related Posts
                            </SectionTitle>
                        </aside>
                    </div>
                </div>
            )}
        </>
    );
}
