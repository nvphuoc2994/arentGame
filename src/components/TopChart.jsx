import useGetRecordChart from "@/hooks/useGetRecordChart";
import { LineChart } from "./LineChart";

export default function TopChart() {
    const { recordTimes, record1, record2 } = useGetRecordChart();

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
        <LineChart data={bodyRecord} />
    )
}