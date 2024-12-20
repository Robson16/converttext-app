import React, { useEffect } from "react";
import { Container } from "./styles";

interface GoogleAdProps {
  adClient: string;
  adSlot: string;
  adFormat?: string;
  style?: React.CSSProperties;
}

const GoogleAdSense: React.FC<GoogleAdProps> = ({ adClient, adSlot, adFormat = "auto", style }) => {
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
      />
    </Container>
  );
}

export default GoogleAdSense;