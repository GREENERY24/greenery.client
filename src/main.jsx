import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // 최신 패키지 확인
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // 최신 패키지 확인

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={true} /> */}
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
