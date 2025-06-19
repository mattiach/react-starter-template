import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Redux + TanStack Query
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux';
import store from "@/store/store";

// Styles
import '@/styles/css-reset.css';
import '@/styles/index.css';

import App from '@/App.tsx';

// TanStack Query Client + settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>;
  </StrictMode>,
);
