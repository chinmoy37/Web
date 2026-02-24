import { Shield, Zap, Users, BarChart3 } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Proactive Security",
    description:
      "We don't wait for breaches — our 24/7 threat monitoring catches issues before they impact your business.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Support",
    description:
      "Average response time under 15 minutes. Your team never waits when something breaks.",
  },
  {
    icon: Users,
    title: "Dedicated Account Team",
    description:
      "No call centers. You get a named engineer who knows your stack inside and out.",
  },
  {
    icon: BarChart3,
    title: "Measurable ROI",
    description:
      "Our clients see an average 35% reduction in IT costs within the first year of partnership.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-secondary/30 grid-bg">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
          Why RadianCore
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Built for Businesses That Can't Afford Downtime
        </h2>
        <p className="text-muted-foreground max-w-xl mb-14">
          We combine enterprise-grade tools with a hands-on approach that larger
          MSPs simply can't match.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-card border border-border rounded-lg p-6 card-hover group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <r.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {r.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
