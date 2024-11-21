import { Card, Avatar } from "@nextui-org/react";
import MyImage from "../../Components/MyImage";
import SectionTitle from "../../Components/SectionTitle";
import CategoryChip from "../../Components/CategoryChip";

import post5 from "../../../public/posts/post5.jpg";
import post6 from "../../../public/posts/post6.jpg";
import post7 from "../../../public/posts/post7.jpg";
import post8 from "../../../public/posts/post8.jpg";

export default function LatestPosts() {
    return (
        <section className="space-y-3">
            <SectionTitle showArrow={true}>Latest Posts</SectionTitle>
            <div className="grid md:grid-cols-3 ">
                <MyImage src={post5} className="aspect-video md:aspect-square object-cover" />
                <div className="md:col-span-2 p-5 lg:p-8 space-y-2 lg:space-y-3">
                    <div className="flex items-center gap-3">
                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e2902602d" name="Mary" size="sm" />
                        <p className="font-medium">Mary Jane</p>
                        <span>•</span>
                        <small className="text-zinc-400 font-semibold">10 mins ago</small>
                    </div>
                    <h2 className="text-xl lg:text-2xl line-clamp-2 font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod animi vel cumque ut mollitia, sint ratione voluptatum rerum aut illo.</h2>
                    <p className="text-sm lg:text-medium line-clamp-3 text-zinc-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, eaque sed! At laboriosam ratione repellendus cumque, similique sit rerum, molestiae unde, deleniti expedita laudantium tempora quisquam fugiat incidunt quo libero accusamus eveniet asperiores voluptas magnam. Doloribus amet placeat veniam id ratione earum sed omnis, cumque exercitationem distinctio sit, voluptates beatae.</p>
                    <CategoryChip>Travel</CategoryChip>
                </div>
            </div>

            <div className="grid md:grid-cols-3 ">
                <MyImage src={post6} className="aspect-video md:aspect-square object-cover" />
                <div className="md:col-span-2 p-5 lg:p-8 space-y-2 lg:space-y-3">
                    <div className="flex items-center gap-3">
                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29062602d" name="Mary" size="sm" />
                        <p className="font-medium">Mary Jane</p>
                        <span>•</span>
                        <small className="text-zinc-400 font-semibold">10 mins ago</small>
                    </div>
                    <h2 className="text-xl lg:text-2xl line-clamp-2 font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod animi vel cumque ut mollitia, sint ratione voluptatum rerum aut illo.</h2>
                    <p className="text-sm lg:text-medium line-clamp-3 text-zinc-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, eaque sed! At laboriosam ratione repellendus cumque, similique sit rerum, molestiae unde, deleniti expedita laudantium tempora quisquam fugiat incidunt quo libero accusamus eveniet asperiores voluptas magnam. Doloribus amet placeat veniam id ratione earum sed omnis, cumque exercitationem distinctio sit, voluptates beatae.</p>
                    <CategoryChip>Travel</CategoryChip>
                </div>
            </div>

            <div className="grid md:grid-cols-3 ">
                <MyImage src={post7} className="aspect-video md:aspect-square object-cover" />
                <div className="md:col-span-2 p-5 lg:p-8 space-y-2 lg:space-y-3">
                    <div className="flex items-center gap-3">
                        <Avatar src="https://i.pravatar.cc/150?u=a0425814e2902602d" name="Mary" size="sm" />
                        <p className="font-medium">Mary Jane</p>
                        <span>•</span>
                        <small className="text-zinc-400 font-semibold">10 mins ago</small>
                    </div>
                    <h2 className="text-xl lg:text-2xl line-clamp-2 font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod animi vel cumque ut mollitia, sint ratione voluptatum rerum aut illo.</h2>
                    <p className="text-sm lg:text-medium line-clamp-3 text-zinc-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, eaque sed! At laboriosam ratione repellendus cumque, similique sit rerum, molestiae unde, deleniti expedita laudantium tempora quisquam fugiat incidunt quo libero accusamus eveniet asperiores voluptas magnam. Doloribus amet placeat veniam id ratione earum sed omnis, cumque exercitationem distinctio sit, voluptates beatae.</p>
                    <CategoryChip>Travel</CategoryChip>
                </div>
            </div>

            <div className="grid md:grid-cols-3 ">
                <MyImage src={post8} className="aspect-video md:aspect-square object-cover" />
                <div className="md:col-span-2 p-5 lg:p-8 space-y-2 lg:space-y-3">
                    <div className="flex items-center gap-3">
                        <Avatar src="https://i.pravatar.cc/150?u=a0425781f4e2902602d" name="Mary" size="sm" />
                        <p className="font-medium">Mary Jane</p>
                        <span>•</span>
                        <small className="text-zinc-400 font-semibold">10 mins ago</small>
                    </div>
                    <h2 className="text-xl lg:text-2xl line-clamp-2 font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod animi vel cumque ut mollitia, sint ratione voluptatum rerum aut illo.</h2>
                    <p className="text-sm lg:text-medium line-clamp-3 text-zinc-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, eaque sed! At laboriosam ratione repellendus cumque, similique sit rerum, molestiae unde, deleniti expedita laudantium tempora quisquam fugiat incidunt quo libero accusamus eveniet asperiores voluptas magnam. Doloribus amet placeat veniam id ratione earum sed omnis, cumque exercitationem distinctio sit, voluptates beatae.</p>
                    <CategoryChip>Travel</CategoryChip>
                </div>
            </div>
        </section>
    );
}
