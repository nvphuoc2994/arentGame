import Diary from "@/components/Diary";
import { Exercises } from "@/components/Exercises";
import RecordChart from "@/components/RecordChart";
import Records from "@/components/Records";

export default function RecordPage() {
    return <div className="container">
        <div className="space-y-[56px] max-md:space-y-6 pt-[56px] max-md:pt-6 pb-[64px] max-md:pb-6">
            <Records />
            <RecordChart />
            <Exercises />
            <Diary />
        </div>
    </div>;
}