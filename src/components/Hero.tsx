import { ArrowRight, ShieldCheck, Clock, Headphones } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: ShieldCheck, label: "Uptime SLA", value: "99.9%" },
  { icon: Clock, label: "Avg Response", value: "<15 min" },
  { icon: Headphones, label: "Clients Served", value: "200+" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4 animate-glow-pulse">
            Managed IT Services
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            We manage your IT{" "}
            <span className="glow-text">so you can manage your business.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            RadionCore is a premier software firm dedicated to driving
            digital transformation through high-performance, scalable
            solutions. We bridge the gap between complex business
            challenges and intuitive technology, empowering
            organizations to thrive in an increasingly digital economy.
            With a focus on precision and innovation, we specialize in
            developing robust infrastructures that streamline
            operations and enhance security. Our commitment to
            excellence ensures that every line of code we write adds
            measurable value to your enterprise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-semibold glow-button"
            >
              Schedule a Discovery Call
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#cases"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-3.5 rounded-md font-semibold hover:border-primary/50 transition-colors duration-300"
            >
              View Case Studies
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-md">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
