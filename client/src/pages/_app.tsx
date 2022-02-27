import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Header from "../components/Header/Header";
import Head from "next/head";
import "./styles.scss";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Head>
          <title>Next-ecommerce</title>
          <meta name="ECommerce" content="Ecommerce using nextjs" />
        </Head>
        <Header />
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
