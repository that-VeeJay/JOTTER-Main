import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Providers from "./contexts/Providers.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 5 * (60 * 1000), gcTime: 10 * (60 * 1000) } } });

createRoot(document.getElementById("root")).render(
    <QueryClientProvider client={queryClient}>
        <Providers>
            <App />
        </Providers>
    </QueryClientProvider>
);
