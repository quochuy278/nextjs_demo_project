import { Provider } from "next-auth/client";
import Layout from "../components/Layout/Layout";
import { AuthContextProvider } from "../store/auth-context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <AuthContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </Provider>
  );
}

export default MyApp;
