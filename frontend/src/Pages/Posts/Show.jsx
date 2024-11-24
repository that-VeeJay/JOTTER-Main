import { useCallback, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MyImage from "../../Components/MyImage";
import { formatDate } from "../../Helpers/Helpers";
import { Avatar, Divider, Spinner } from "@nextui-org/react";
import CategoryChip from "../../Components/CategoryChip";
import SectionTitle from "../../Components/SectionTitle";

export default function Show() {
    const { id } = useParams();

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    const getPost = useCallback(async () => {
        try {
            const res = await fetch(`/api/posts/${id}`);
            if (!res.ok) throw new Error(`Failed to fetch post: ${res.statusText}`);
            const data = await res.json();
            setPost(data);
        } catch (error) {
            console.error("Error fetching post:", error);
            setPost(null);
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        getPost();
        window.scrollTo(0, 0);
    }, [getPost]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner color="default" size="xl" />
            </div>
        );
    }

    if (!post) {
        return (
            <>
                <div className="text-center pt-12">
                    <p className="font-semibold text-2xl ">No post found</p>
                    <Link to="/" className="text-zinc-400">
                        Go back
                    </Link>
                </div>
            </>
        );
    }

    return (
        <div className="container mx-auto max-h-screen pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:mb-12">
                <MyImage src={post?.image} className="aspect-[4/2.5] w-full object-cover" />
                <div className="p-6 space-y-4 xl:space-y-6 flex flex-col justify-center">
                    <CategoryChip children={post?.category} />
                    <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">{post?.title}</h1>
                    <div className="flex gap-5 items-center">
                        <div className="flex items-center gap-3">
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" name={post?.user.name} />
                            <p>{post?.user.name}</p>
                        </div>
                        <span>•</span>
                        <p>{formatDate(post?.created_at)}</p>
                    </div>
                </div>
            </div>

            <Divider className="my-4 lg:hidden" />

            <div className="grid grid-cols-3 mt-10">
                <div className="col-span-3 lg:col-span-2 lg:mr-8 xl:mr-12">
                    <p className="text-justify text-lg lg:text-xl">{post?.body}</p>
                </div>
                <div className="hidden lg:block">
                    <SectionTitle showArrow={false} subtitle="Discover">
                        Related Posts
                    </SectionTitle>
                </div>
            </div>
        </div>
    );
}
