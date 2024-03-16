
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import { StarknetProvider } from "./StarknetProvider";

createRoot(document.getElementById("root")).render(
    <StarknetProvider>
        <App />
    </StarknetProvider>
);