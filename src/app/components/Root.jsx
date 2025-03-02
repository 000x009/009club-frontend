import App from "./App";
import ErrorBoundary from "./ErrorBoundary";
import { APIProvider as GoogleMapAPIProvider } from "@vis.gl/react-google-maps";
import { appSettings } from "@/app/const/settings.js";

export default function Root() {
  return (
    <ErrorBoundary>
      <GoogleMapAPIProvider apiKey={appSettings.GOOGLE_MAP_API_KEY}>
        <App />
      </GoogleMapAPIProvider>
    </ErrorBoundary>
  );
}
