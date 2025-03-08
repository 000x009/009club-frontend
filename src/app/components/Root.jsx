import App from "./App";
import ErrorBoundary from "./ErrorBoundary";
import { APIProvider as GoogleMapAPIProvider } from "@vis.gl/react-google-maps";
import { appSettings } from "@/app/const/settings.js";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from "../../shared/api/queryClient";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { paypalOptions } from "@/app/const/paypalConfig.js";

export default function Root() {
  return (
    <ErrorBoundary>
      <GoogleMapAPIProvider apiKey={appSettings.GOOGLE_MAP_API_KEY}>
        <QueryClientProvider client={queryClient}>
          <PayPalScriptProvider options={paypalOptions}>
            <App />
          </PayPalScriptProvider>
        </QueryClientProvider>
      </GoogleMapAPIProvider>
    </ErrorBoundary>
  );
}
