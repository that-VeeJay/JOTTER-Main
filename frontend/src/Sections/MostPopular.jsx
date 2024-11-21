import SectionTitle from "../Components/SectionTitle";
import CategoryChip from "../Components/CategoryChip";

export default function MostPopular() {
    return (
        <section className="mb-12">
            <SectionTitle subtitle="What's new">Most Popular</SectionTitle>

            <div className="space-y-5">
                <div className="flex flex-col gap-2 p-3">
                    <CategoryChip>Food</CategoryChip>
                    <h1 className="line-clamp-2 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum tempore autem ullam aliquid. Dolores, necessitatibus!</h1>
                    <div className="flex items-center gap-3">
                        <p className="font-semibold text-sm">John Doe</p>
                        <span>•</span>
                        <small className="font-medium text-zinc-400">November 10, 2001</small>
                    </div>
                </div>

                <div className="flex flex-col gap-2 p-3">
                    <CategoryChip>Food</CategoryChip>
                    <h1 className="line-clamp-2 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum tempore autem ullam aliquid. Dolores, necessitatibus!</h1>
                    <div className="flex items-center gap-3">
                        <p className="font-semibold text-sm">John Doe</p>
                        <span>•</span>
                        <small className="font-medium text-zinc-400">November 10, 2001</small>
                    </div>
                </div>

                <div className="flex flex-col gap-2 p-3">
                    <CategoryChip>Food</CategoryChip>
                    <h1 className="line-clamp-2 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum tempore autem ullam aliquid. Dolores, necessitatibus!</h1>
                    <div className="flex items-center gap-3">
                        <p className="font-semibold text-sm">John Doe</p>
                        <span>•</span>
                        <small className="font-medium text-zinc-400">November 10, 2001</small>
                    </div>
                </div>
            </div>
        </section>
    );
}
