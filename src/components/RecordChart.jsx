import { BUTTON_RANGES, RECORDS_ID } from "@/constants";
import { LineChart } from "./LineChart";
import { useState } from "react";
import useGetRecordChart from "@/hooks/useGetRecordChart";
import clsx from "clsx";

export default function RecordChart() {
    const [range, setRange] = useState('12-months');
    const { recordTimes, record1, record2 } = useGetRecordChart(range);

    const bodyRecord = {
        labels: recordTimes,
        datasets: [
            {
                label: 'record1',
                data: record1,
                borderColor: '#FFCC21',
                backgroundColor: '#FFCC21',
            },
            {
                label: 'record2',
                data: record2,
                borderColor: '#8FE9D0',
                backgroundColor: '#8FE9D0',
            },
        ],
    };

    return (
        <div id={RECORDS_ID.body} className="bg-dark-500 py-4 px-6 text-white">
            <h3 className="flex gap-5 mb-1">
                <span className="w-24 h-9 text-[15px] leading-5 uppercase">Body record</span>
                <span className="text-[22px]">2021.05.21</span>
            </h3>
            <div className="h-52">
                <LineChart data={bodyRecord} />
            </div>
            <div className="flex items-center gap-4 mt-2">
                {BUTTON_RANGES.map((rangeBtn) => (
                    <button
                        key={rangeBtn.value}
                        className={clsx(`w-[56px] h-6 rounded-[16px] cursor-pointer`, rangeBtn.value === range ? 'bg-primary-300 text-white' : 'bg-white text-primary-300')}
                        onClick={() => setRange(rangeBtn.value)}
                    >
                        {rangeBtn.label}
                    </button>
                ))}
            </div>
        </div>
    )
}