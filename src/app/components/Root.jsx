import App from "./App";
import ErrorBoundary from "./ErrorBoundary";
import { APIProvider as GoogleMapAPIProvider } from "@vis.gl/react-google-maps";
import { appSettings } from "@/app/const/settings.js";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from "../../shared/api/queryClient";

export default function Root() {
  return (
    <ErrorBoundary>
      <GoogleMapAPIProvider apiKey={appSettings.GOOGLE_MAP_API_KEY}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </GoogleMapAPIProvider>
    </ErrorBoundary>
  );
}
