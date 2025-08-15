import { useInfiniteQuery } from "@tanstack/react-query";
import { getDiary } from "@/services/getDiary";

export default function useGetDiary() {
    return useInfiniteQuery({
        queryKey: ['diary'],
        queryFn: ({ pageParam }) => getDiary({ pageParam }),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextPage,
    })
}
