import { Recommends } from "@/components/Recommends";
import Posts from "@/components/Posts";

export default function ColumnPage() {
    return <div className="container">
        <div className="space-y-[56px] max-md:space-y-6 pt-[56px] max-md:pt-6 pb-[64px] max-md:pb-6">
            <Recommends />
            <Posts />
        </div>
    </div>;
}