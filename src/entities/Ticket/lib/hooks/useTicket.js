import { useQuery } from "@tanstack/react-query";
import { TicketAPI } from "../../api";

export function useTicket(id) {
    const {data, isLoading} = useQuery({
        queryKey: ['ticket', id],
        queryFn: async () => {
            const result = await TicketAPI.get(id);
            return {
                ticket: result.data
            };
        }
    });

    return { 
        data: data?.ticket, 
        isLoading
    };
}