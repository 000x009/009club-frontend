import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { PaymentAPI } from "@/entities/Payment/api/index";

export function useCaptureOrder() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    
    const captureOrderMutation = useMutation({
        mutationKey: ['payment', 'capture-order'],
        mutationFn: async (orderId) => await PaymentAPI.capture(orderId),
        onSuccess: () => {
            navigate("/success");
        }
    })

    const handleCaptureOrder = async (orderId) => {
        queryClient.cancelQueries({
            queryKey: ['payment', 'capture-order']
        })
        await captureOrderMutation.mutateAsync(orderId)
    }
    const isLoading = captureOrderMutation.isPending

    return {
        handleCaptureOrder,
        isLoading
    }
}