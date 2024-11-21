import { Avatar, Card } from "@nextui-org/react";
import MyImage from "../../Components/MyImage";
import post1 from "../../../public/posts/post1.jpg";
import post2 from "../../../public/posts/post2.jpg";
import post3 from "../../../public/posts/post3.jpg";
import post4 from "../../../public/posts/post4.jpg";
import post5 from "../../../public/posts/post5.jpg";
import CategoryChip from "../../Components/CategoryChip";

export default function Featured() {
    return (
        <section>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 grid-rows-1 ">
                {/* Column 1 */}
                <div className="col-span-1 xl:col-span-2">
                    <div className="grid md:grid-cols-7 relative gap-3">
                        <div className="flex items-center order-2 md:order-none">
                            <Card className="md:absolute z-20 md:col-start-1 md:col-end-4 w-full p-5 space-y-3 ">
                                <div className="flex items-center gap-3 text-sm">
                                    <Avatar size="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                    <p className="font-medium text-sm">John Doe</p>
                                    <span>•</span>
                                    <p className="text-xs font-medium text-gray-400">10 mins ago</p>
                                </div>
                                <h1 className="font-semibold text-lg line-clamp-2 md:line-clamp-3 lg:line-clamp-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, voluptate.</h1>
                                <p className="text-sm line-clamp-3 md:line-clamp-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, nulla consectetur doloremque tempora doloribus perferendis? Voluptate enim praesentium numquam in qui quis voluptatibus commodi possimus, illum nesciunt! Ab unde fugit sunt inventore dolorum officia id sit. Numquam eligendi quaerat itaque reprehenderit consectetur explicabo quasi dignissimos culpa, sint tempora eaque deleniti!</p>
                                <span className="text-xs font-medium text-gray-400">
                                    <CategoryChip>Entertainment</CategoryChip>
                                </span>
                            </Card>
                        </div>
                        <div className="md:col-start-2 md:col-end-8 order-1 md:order-none">
                            <MyImage src={post1} loading="lazy" className="aspect-[4/2.5] object-cover" />
                        </div>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-6 justify-center ">
                    <div className="grid grid-cols-7">
                        <div className="col-start-1 col-end-3">
                            <MyImage src={post2} loading="lazy" className="aspect-square object-cover" />
                        </div>

                        <div className="col-start-3 col-end-8 p-2 flex flex-col gap-1 justify-center">
                            <div className="flex items-center gap-2">
                                <Avatar size="sm" src="https://i.pravatar.cc/150?u=a042581f4e2902024d" />
                                <p className="text-sm font-medium">John Doe</p>
                                <span>•</span>
                                <p className="text-xs font-medium text-gray-400">10 mins ago</p>
                            </div>
                            <h3 className="text-medium line-clamp-2 md:line-clamp-3 lg:line-clamp-2 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum quas praesentium saepe dolores dignissimos modi unde ut iste magnam, repellendus officia aliquam earum cupiditate.</h3>
                            <small className="text-red-500 font-medium">Entertainment</small>
                        </div>
                    </div>

                    <div className="grid grid-cols-7">
                        <div className="col-start-1 col-end-3">
                            <MyImage src={post3} loading="lazy" className="aspect-square object-cover" />
                        </div>

                        <div className="col-start-3 col-end-8 p-2 flex flex-col gap-1 justify-center">
                            <div className="flex items-center gap-2">
                                <Avatar size="sm" src="https://i.pravatar.cc/150?u=a042581f4es29026024d" />
                                <p className="text-sm font-medium">John Doe</p>
                                <span>•</span>
                                <p className="text-xs font-medium text-gray-400">10 mins ago</p>
                            </div>
                            <h3 className="text-medium line-clamp-2 md:line-clamp-3 lg:line-clamp-2 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum quas praesentium saepe dolores dignissimos modi unde ut iste magnam, repellendus officia aliquam earum cupiditate.</h3>
                            <small className="text-red-500 font-medium">Entertainment</small>
                        </div>
                    </div>

                    <div className="grid grid-cols-7">
                        <div className="col-start-1 col-end-3">
                            <MyImage src={post4} loading="lazy" className="aspect-square object-cover" />
                        </div>

                        <div className="col-start-3 col-end-8 p-2 flex flex-col gap-1 justify-center">
                            <div className="flex items-center gap-2">
                                <Avatar size="sm" src="https://i.pravatar.cc/150?u=a42581f4e29026024d" />
                                <p className="text-sm font-medium">John Doe</p>
                                <span>•</span>
                                <p className="text-xs font-medium text-gray-400">10 mins ago</p>
                            </div>
                            <h3 className="text-medium line-clamp-2 md:line-clamp-3 lg:line-clamp-2 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum quas praesentium saepe dolores dignissimos modi unde ut iste magnam, repellendus officia aliquam earum cupiditate.</h3>
                            <small className="text-red-500 font-medium">Entertainment</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
