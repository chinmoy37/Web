import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    client: "Meridian Healthcare",
    industry: "Healthcare",
    title: "How we cut server costs by 38% and achieved HIPAA compliance",
    result: "$420K annual savings",
    tags: ["Cloud Migration", "Compliance"],
  },
  {
    client: "Greenfield Logistics",
    industry: "Logistics",
    title: "Zero-downtime migration of 12 legacy systems to AWS in 90 days",
    result: "99.99% uptime",
    tags: ["Infrastructure", "AWS"],
  },
  {
    client: "Atlas Financial Group",
    industry: "Finance",
    title: "Stopped a ransomware attack in progress and rebuilt security posture",
    result: "0 data breaches since",
    tags: ["Cybersecurity", "Incident Response"],
  },
];

const CaseStudies = () => {
  return (
    <section id="cases" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
          Case Studies
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Real Results for Real Businesses
        </h2>
        <p className="text-muted-foreground max-w-xl mb-14">
          Don't just take our word for it — see how we've helped companies like
          yours solve critical IT challenges.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.client}
              className="bg-background border border-border rounded-lg p-6 card-hover group flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-primary uppercase tracking-wider">
                  {c.industry}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-base font-semibold mb-3 text-foreground leading-snug flex-1">
                {c.title}
              </h3>
              <div className="mb-4">
                <p className="text-2xl font-bold text-primary">{c.result}</p>
                <p className="text-xs text-muted-foreground">{c.client}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
