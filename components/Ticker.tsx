"use client";
import React, { useEffect } from "react";

const TradingViewTickerTape = () => {
  useEffect(() => {
    // Check if the script already exists
    const existingScript = document.getElementById(
      "tradingview-ticker-tape-script"
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "tradingview-ticker-tape-script";
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbols: [
          { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
          { proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
          { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
          { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
          { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
        ],
        showSymbolLogo: true,
        isTransparent: true,
        displayMode: "adaptive",
        colorTheme: "light",
        locale: "en",
      });

      document.getElementById("tradingview-widget")?.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container mt-5 lg:mt-24 mb-5">
      <div
        id="tradingview-widget"
        className="tradingview-widget-container__widget"
      ></div>
    </div>
  );
};

export default TradingViewTickerTape;
