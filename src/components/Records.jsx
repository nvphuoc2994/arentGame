import { RECORDS } from "@/constants";
import { RecordBox } from "./RecordBox";

export default function Records() {
    return <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-md:gap-6">
        {RECORDS.map((record) => (
            <RecordBox key={record.id} {...record} />
        ))}
    </div>;
}