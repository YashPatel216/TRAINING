import React, { Component } from "react";
export default class ErrorBoundary extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong: {this.state.error?.message}</h2>;
    }
    return this.props.children;
  }
}