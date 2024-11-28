import Features from "@/pages/Home/Features";
import HeroPage from "@/pages/Home/HeroPage";
import HowItWorks from "@/pages/Home/HowItWorks";
import InvestmentPlans from "@/pages/Home/InvestmentPlans";
import TradingViewScreener from "@/components/LiveTable";
import TradingViewTickerTape from "@/components/Ticker";
import FAQ from "@/pages/Home/FAQ";
import Testimonials from "@/pages/Home/Testimonials";
import ContactUs from "@/pages/Home/ContactUs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <TradingViewTickerTape />
      <Features />
      <TradingViewScreener />
      <HowItWorks />
      <InvestmentPlans />
      <FAQ />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}
