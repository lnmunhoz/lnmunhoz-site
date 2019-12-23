import Document, { Html, Head, Main, NextScript } from "next/document";
import ReactGA from "react-ga";

function trackPageView() {
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    return;
  }
  // @ts-ignore
  if (!window.GA_INITIALIZED) {
    ReactGA.initialize("UA-154925075-1");
    // @ts-ignore
    window.GA_INITIALIZED = true;
  }
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  componentDidMount() {
    // https://github.com/koodiklinikka/koodiklinikka.fi/commit/e27c50601d728b3b20320ffcc021a81657d8d4d6#diff-664264179f734c3055eba103c71ad479
    trackPageView();
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
