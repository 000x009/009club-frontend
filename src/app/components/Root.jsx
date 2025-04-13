import App from "./App";
import ErrorBoundary from "./ErrorBoundary";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/api/queryClient.js";
import { SkeletonTheme } from "react-loading-skeleton";

export default function Root() {
  return (
    <ErrorBoundary>
      <SkeletonTheme baseColor={"#313131"} highlightColor={"#525252"}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </SkeletonTheme>
    </ErrorBoundary>
  );
}
