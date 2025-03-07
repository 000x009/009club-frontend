import { useInfiniteQuery } from "@tanstack/react-query";
import { TicketAPI } from "../../api";

export function useTicketList(eventId) {
    const {
        data,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isLoading,
    } = useInfiniteQuery({
        queryKey: ['tickets', eventId],
        queryFn: async ({ pageParam }) => {
            const result = await TicketAPI.list(10, 0, eventId);
            return result.data;
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            if (lastPage.ticket_tiers.length >= lastPage.total) {
                return undefined
            }
            return lastPageParam + 1;
        },
        select: (result) => ({
            items: result.pages.flatMap(page => page.ticket_tiers),
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