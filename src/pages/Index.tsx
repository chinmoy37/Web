import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <TrustBar />
    <WhyChooseUs />
    <HomeCTA />
    <Footer />
  </div>
);

export default Index;
