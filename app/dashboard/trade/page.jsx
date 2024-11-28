'use client'
// TradingViewWidget.jsx
import { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const existingScript = document.getElementById(
        "tradingview-screener-script"
      );
      if (!existingScript) {
        const script = document.createElement("script");
        script.id = "tradingview-screener-script"
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BINANCE:BTCUSDT",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "withdateranges": true,
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
        container.current.appendChild(script);
      }
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "90%", paddingTop: '5rem' }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 12px)", width: "100%" }}></div>

    </div>
  );
}

export default memo(TradingViewWidget);
