import ReactGA from "react-ga4";

const initGA = () => {
  const trackingId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;

  if (trackingId) {
    ReactGA.initialize(trackingId);
  }
};

export const trackPageView = (path: string) => {
  ReactGA.send({hitType: "pageview", page: path});
};

export const trackEvent = (
  category: string,
  action: string,
  label?: string
) => {
  ReactGA.event({category, action, label});
};

export default initGA;
