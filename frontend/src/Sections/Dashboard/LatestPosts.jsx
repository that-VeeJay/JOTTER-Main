import { Avatar } from "@nextui-org/react";
import MyImage from "../../Components/MyImage";
import SectionTitle from "../../Components/SectionTitle";
import CategoryChip from "../../Components/CategoryChip";
import { formatDate } from "../../Helpers/Helpers";

export default function LatestPosts({ posts }) {
    const safePosts = posts || [];

    return (
        <section className="space-y-3">
            <SectionTitle showArrow={true}>Latest Posts</SectionTitle>
            {safePosts.length > 0 ? (
                safePosts.map((post) => (
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
