/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
class ErrorBoundary extends React.Component<any, { hasError: false }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    console.log("error",error)
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
export default ErrorBoundary
