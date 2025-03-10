import { useQuery } from "@tanstack/react-query";
import { OrderAPI } from "@/entities/Cart/api/order";

export function useOrder(id) {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["order", id],
    queryFn: async () => {
      const result = await OrderAPI.get(id);
      return {
        order: result.data,
      };
    },
  });

  return {
    data: data?.order,
    isLoading,
    isFetching,
  };
}
