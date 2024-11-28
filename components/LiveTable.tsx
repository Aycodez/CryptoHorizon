"use client";
import React, { useEffect } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const TradingViewScreener = () => {
  useEffect(() => {
    const existingScript = document.getElementById(
      "tradingview-screener-script"
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "tradingview-screener-script";
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        width: "100%",
        height: "100%",
        defaultColumn: "overview",
        screener_type: "crypto_mkt",
        displayCurrency: "USD",
        colorTheme: "dark",
        locale: "en",
      });

      document.getElementById("tradingview-screener")?.appendChild(script);
    }
  }, []);

  return (
    <MaxWidthWrapper className="h-screen mt-10">
      <h1 className="text-[2.6rem] lg:text-5xl font-semibold !leading-tight lg:w-3/5 tracking-wider">
        <span className="text-primcolor">Today&apos;s</span> Cryptocurrency
        Prices
      </h1>
      <p className="italic text-sm font-serif">
        Real-Time Market Rates at your fingertips
      </p>
      <div className="p-4 lg:p-10 my-10 bg-back dark:bg-medium mx-auto h-[70%] rounded-md max-w-[1200px]">
        <div className="tradingview-widget-container h-full">
          <div
            id="tradingview-screener"
            className="tradingview-widget-container__widget h-full"
          ></div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default TradingViewScreener;
