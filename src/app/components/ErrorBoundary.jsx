import { Component } from "react";

class ErrorBoundary extends Component {
    state = {};

    static getDerivedStateFromError(error) {
        return { error };
    }

    componentDidCatch(error) {
        this.setState({ error });
    }

    render() {
        const {
            state: { error },
            props: { fallback: Fallback, children },
        } = this;

        return "error" in this.state ? (
            typeof Fallback === "function" ? (
                <Fallback error={error} />
            ) : (
                Fallback
            )
        ) : (
            children
        );
    }
}

export default ErrorBoundary;
