import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "./googleAnalytics";

const RouteTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return null;
};

export default RouteTracker;
