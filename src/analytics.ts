import ReactGA from "react-ga";

export function trackPageView() {
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    return;
  }
  // @ts-ignore
  if (!window.GA_INITIALIZED) {
    ReactGA.initialize("UA-154925075-1");

    console.log("Initialized");

    // @ts-ignore
    window.GA_INITIALIZED = true;
  }
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}
