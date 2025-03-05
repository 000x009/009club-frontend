import { useQuery } from "@tanstack/react-query";
import { EventAPI } from "../../api";

export function useEvent(id) {
    const {data, isLoading} = useQuery({
        queryKey: ['event', id],
        queryFn: async () => {
            const result = await EventAPI.get(id);
            return {
                event: result.data
            };
        }
    });

    return { 
        data: data?.event, 
        isLoading
    };
}