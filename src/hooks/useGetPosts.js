import { useInfiniteQuery } from "@tanstack/react-query";
import { getPosts } from "@/services/getPosts";

export default function useGetPosts() {
    return useInfiniteQuery({
        queryKey: ['posts'],
        queryFn: ({ pageParam }) => getPosts({ pageParam }),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextPage,
    })
}

