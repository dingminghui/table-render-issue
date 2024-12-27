import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type React from "react";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      // do not retry on error
      retry: false,
    },
    mutations: {
      // do not retry on error
      retry: false,
    },
  },
});

export interface ProvidersProps extends React.PropsWithChildren {}

export function Providers({ children }: ProvidersProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
