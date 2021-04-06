import { AuthProvider } from "@/lib/auth";

import { ThemeProvider, CSSReset } from "@chakra-ui/react";
import theme from "@/styles/theme";

// if i want to add the global styles thing its at 53:00 of react2025-firestore/chakra

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CSSReset />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
