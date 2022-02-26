import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { createHttpLink } from "apollo-link-http";
import Header from "../components/Header/Header";
import Head from "next/head";
import "./styles.scss";
import { ApolloClient, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const httpLink = createHttpLink({
  uri: "https://crwn-clothing.com",
});

const cache = new InMemoryCache();

const client = new ApolloClient({ cache, link: httpLink });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Head>
            <title>Next-ecommerce</title>
            <meta name="ECommerce" content="Ecommerce using nextjs" />
          </Head>
          <Header />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
