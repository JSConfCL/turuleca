"use client";
import React, { Component } from "react";

type Props = { onError?: () => void; fallback?: React.ReactNode };
export class ErrorBoundary extends Component<
  React.PropsWithChildren<{ onError?: () => void; fallback?: React.ReactNode }>,
  { hasError: boolean }
> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props?.onError?.();
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <>{null}</>;
    }

    return this.props.children;
  }
}
