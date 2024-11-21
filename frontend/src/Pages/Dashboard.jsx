import Bulletin from "../Sections/Dashboard/Bulletin";
import Featured from "../Sections/Dashboard/Featured";

export default function Dashboard() {
    return (
        <div className="container mx-auto min-h-screen pt-5 space-y-8">
            <Bulletin />
            <Featured />
        </div>
    );
}
