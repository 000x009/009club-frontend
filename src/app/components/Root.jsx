import App from "./App";
import ErrorBoundary from "./ErrorBoundary";

export default function Root() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}
