import React from "react";
import { ThemeProvider } from "next-themes";

export default function Root({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            forcedTheme="light"
        >
            {children}
        </ThemeProvider>
    );
}