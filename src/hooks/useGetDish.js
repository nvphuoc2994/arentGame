import { useInfiniteQuery, useQuery, useQueryClient } from "@tanstack/react-query";
import { getDish } from "../services/getDish";

export default function useGetDish(type) {
    return useInfiniteQuery({
        queryKey: ['dish', type],
        queryFn: ({ pageParam }) => getDish({ type, pageParam }),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextPage,
    })
}
