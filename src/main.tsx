import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/App.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "./styles/theme.ts";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={client}>
      <ColorModeScript initialColorMode="dark" />
      <App />
    </QueryClientProvider>
  </ChakraProvider>
);
