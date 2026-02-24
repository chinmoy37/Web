import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HomeCTA = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-card border border-border rounded-2xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
          <div className="relative z-10">
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
              Ready to Get Started?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let's Solve Your IT Challenges —{" "}
              <span className="glow-text">Together</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
              Book a free 30-minute discovery call. We'll audit your current
              setup and show you exactly where we can save you time and money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-semibold glow-button"
              >
                Book a Discovery Call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-3.5 rounded-md font-semibold hover:border-primary/50 transition-colors duration-300"
              >
                See Our Results
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
