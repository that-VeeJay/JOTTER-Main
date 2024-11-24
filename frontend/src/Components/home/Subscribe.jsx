import { Card, Input, Button } from "@nextui-org/react";

export default function Subscribe() {
    return (
        <Card className="p-8 md:p-16 grid lg:grid-cols-2 text-center space-y-5">
            <div className="space-y-3 ">
                <p className="text-xs md:text-sm tracking-widest font-medium">GET THE LATEST UPDATES</p>
                <h1 className="text-md lg:text-xl xl:text-2xl font-semibold">
                    Stay updated with the latest news <br /> by <span className="text-red-500">subscribing📩</span> to our updates.
                </h1>
            </div>
            <div className="flex items-center gap-3 px-5 lg:px-16">
                <Input type="email" label="Email" className="" />
                <Button color="danger" className="h-[55px] text-white">
                    Subscribe
                </Button>
            </div>
        </Card>
    );
}
