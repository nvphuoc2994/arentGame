import { getAchievement } from "@/services/getAchievement";
import { useQuery } from "@tanstack/react-query";

export default function useGetAchievement() {
    return useQuery({
        queryKey: ['achievement'],
        queryFn: () => getAchievement(),
    })
}