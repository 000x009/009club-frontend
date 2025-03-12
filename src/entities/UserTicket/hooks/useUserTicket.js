import { useQuery } from "@tanstack/react-query";
import { UserTicketAPI } from "../api";

export function useUserTicket(id) {
    const {data, isLoading} = useQuery({
        queryKey: ['user-ticket', id],
        queryFn: async () => {
            const result = await UserTicketAPI.get(id);
            return {
                userTicket: result.data
            };
        }
    });

    return { 
        data: data?.userTicket, 
        isLoading
    };
}