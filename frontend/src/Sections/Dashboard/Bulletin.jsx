import { Card } from "@nextui-org/react";

export default function Bulletin() {
    return (
        <section>
            <Card className="text-center p-8 space-y-3">
                <p className="text-xs md:text-sm tracking-widest font-medium">WELCOME TO JOTTER</p>
                <h1 className="text-md md:text-xl font-semibold">
                    Craft narratives✍️ that ignite <span className="text-red-500">inspiration</span>💡, <br /> <span className="text-red-500">knowledge</span>📕, and <span className="text-red-500">entertainment</span>🎬
                </h1>
            </Card>
        </section>
    );
}
