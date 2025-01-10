import React, { useEffect } from "react";
import { Container } from "./styles";

interface GoogleAdProps {
  adClient: string;
  adSlot: string;
  adFormat?: string;
  dataFullWidthResponsive?: string;
  style?: React.CSSProperties;
}

const GoogleAdSense: React.FC<GoogleAdProps> = ({
  adClient,
  adSlot,
  adFormat = "auto",
  dataFullWidthResponsive = "true",
  style
}) => {
  if (import.meta.env.MODE === "development") {
    return null;
  }

  useEffect(() => {
    const adContainer = document.querySelector(".adsbygoogle");

    if (adContainer && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, []);

  return (
    <Container>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={dataFullWidthResponsive}
      >
      </ins>
    </Container>
  );
};

export default GoogleAdSense;
