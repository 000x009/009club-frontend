import { useQuery } from "@tanstack/react-query";
import { PhotoAPI } from "@/entities/Photo/api/index.js";

export function usePhoto(id) {
  const { data, isLoading } = useQuery({
    queryKey: ["photo", id],
    queryFn: async () => {
      const result = await PhotoAPI.get(id);
      const binaryString = atob(result);
      const bytes = new Uint8Array(binaryString.length);

      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const blob = new Blob([bytes], { type: "image/*" });
      const url = URL.createObjectURL(blob);

      return {
        file: url,
      };
    },
  });

  return {
    data: data?.file,
    isLoading,
  };
}
