const partners = [
  "CompTIA",
  "AWS Partner",
  "Microsoft Gold",
  "Cisco Premier",
  "SOC 2 Certified",
  "ISO 27001",
];

const TrustBar = () => {
  return (
    <section className="py-12 px-6 border-y border-border bg-card/50">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest mb-8">
          Trusted by 200+ companies · Certified & Compliant
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {partners.map((p) => (
            <span
              key={p}
              className="text-sm font-mono text-muted-foreground/70 px-4 py-2 rounded-md border border-border bg-secondary/50 hover:text-primary hover:border-primary/30 transition-colors"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
