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
  dataFullWidthResponsive = true,
  style
}) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <Container customStyle={style}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={dataFullWidthResponsive}
      />
    </Container>
  );
}

export default GoogleAdSense;