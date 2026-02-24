import Navbar from "@/components/Navbar";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";

const CaseStudiesPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-20">
      <CaseStudies />
    </div>
    <Footer />
  </div>
);

export default CaseStudiesPage;
