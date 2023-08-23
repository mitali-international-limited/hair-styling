import Layout from "../components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "@/service/store";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isCheckoutPage = router.pathname === "/checkout";
  console.log("isCheckoutPage", isCheckoutPage);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout showHeaderFooter={!isCheckoutPage}>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
