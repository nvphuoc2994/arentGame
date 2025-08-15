import { getExercises } from "@/services/getExercises";
import { useQuery } from "@tanstack/react-query";

export default function useGetExercises() {
    return useQuery({
        queryKey: ['exercises'],
        queryFn: () => getExercises(),
    })
}