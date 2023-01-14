import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MyThemeContextProvider } from "../store/myThemeContext";
import { Head } from "next/document";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MyThemeContextProvider>
        <Head>
          <title>Flashcard App For English Buffet Students in Kyoto, Japan</title>
          <meta
            name="description"
            content="Review your class vocabulary using this online App for English Buffet students."
            key="desc"
          />
          <link rel="icon" href="https://englishbuffet.net/wpadm/wp-content/themes/eb/img/common/icon.ico"></link>
        </Head>

        <Component {...pageProps} />
      </MyThemeContextProvider>
    </>
  );
}
