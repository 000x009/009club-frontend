import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

import { OrderAPI } from "@/entities/Cart/api/order";

export function useCreateOrder() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    
    const createOrderMutation = useMutation({
        mutationKey: ['order', 'create'],
        mutationFn: async (data) => await OrderAPI.create(data),
        onSuccess: (data) => {
            navigate(`/event/${data.data.event_id}/checkout/${data.data.id}`);
        }
    })

    const handleCreateOrder = async (data) => {
        queryClient.cancelQueries({
            queryKey: ['order', 'create']
        })
        createOrderMutation.mutate(data)
    }
    const isLoading = createOrderMutation.isPending

    return {
        handleCreateOrder,
        isLoading
    }
}