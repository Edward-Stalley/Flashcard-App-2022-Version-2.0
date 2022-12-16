import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MyThemeContextProvider } from "../store/myThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyThemeContextProvider>
      <Component {...pageProps} />
    </MyThemeContextProvider>
  );
}
