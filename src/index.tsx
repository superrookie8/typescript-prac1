import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider}from "@tanstack/react-query"
import App from './App';
import { auth } from './firebase';

console.log(auth);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient()
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
     <App />
    </QueryClientProvider>
  </React.StrictMode>
);


