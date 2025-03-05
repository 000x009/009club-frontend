import { useInfiniteQuery } from "@tanstack/react-query";
import { EventAPI } from "../../api";

export function useEventList() {
    const {
        data,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isLoading,
    } = useInfiniteQuery({
        queryKey: ['events'],
        queryFn: async ({ pageParam }) => {
            const result = await EventAPI.list(10, 0);
            return result.data;
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            if (lastPage.events.length >= lastPage.total) {
                return undefined
            }
            return lastPageParam + 1;
        },
        select: (result) => ({
            items: result.pages.flatMap(page => page.events),
            total: result.pages[0]?.total || 0
        }),
    })

    return {
        data,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isLoading,
    };
}