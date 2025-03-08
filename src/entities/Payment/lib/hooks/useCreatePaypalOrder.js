import { useMutation, useQueryClient } from "@tanstack/react-query";

import { PaymentAPI } from "@/entities/Payment/api/index";

export function useCreatePaypalOrder() {
    const queryClient = useQueryClient();
    
    const createOrderMutation = useMutation({
        mutationKey: ['payment', 'create-order'],
        mutationFn: async (orderId) => await PaymentAPI.create(orderId),
    })

    const handleCreateOrder = async (orderId) => {
        queryClient.cancelQueries({
            queryKey: ['payment', 'create-order']
        })
        const response = await createOrderMutation.mutateAsync(orderId)

        return response.data.payment_system_id
    }
    const isLoading = createOrderMutation.isPending

    return {
        handleCreateOrder,
        isLoading
    }
}