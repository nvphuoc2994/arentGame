import { getRecordChart } from "@/services/getRecordChart";
import { useQuery } from "@tanstack/react-query";

export default function useGetRecordChart(range) {
    const { data } = useQuery({
        queryKey: ['record-chart', range],
        queryFn: () => getRecordChart(range),
    })
    const recordTimes = data?.data?.record1?.map((item) => item.time);
    const record1 = data?.data?.record1?.map((item) => item.weight);
    const record2 = data?.data?.record2?.map((item) => item.weight);
    return { recordTimes, record1, record2 };
}