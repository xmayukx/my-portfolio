import "../styles/globals.css";
import "../styles/Burger.css";
import React from "react"
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'


function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
