import { Shield, Cloud, Headphones, Server, Lock, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "24/7 threat monitoring, endpoint protection, and incident response to keep your data safe from modern attacks.",
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    desc: "Seamless migration to AWS, Azure, or GCP with zero-downtime deployment and cost-optimized architecture.",
  },
  {
    icon: Headphones,
    title: "Help Desk Support",
    desc: "Dedicated support team with <15 min average response time and 99.9% first-call resolution rate.",
  },
  {
    icon: Server,
    title: "Infrastructure Management",
    desc: "Proactive monitoring, patching, and maintenance of your servers, networks, and critical systems.",
  },
  {
    icon: Lock,
    title: "Compliance & Auditing",
    desc: "HIPAA, SOC 2, and PCI DSS compliance frameworks, audit preparation, and continuous monitoring.",
  },
  {
    icon: BarChart3,
    title: "IT Strategy Consulting",
    desc: "Technology roadmapping, budget planning, and digital transformation advisory for growing businesses.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background grid-bg">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
          What We Do
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          End-to-End IT Services
        </h2>
        <p className="text-muted-foreground max-w-xl mb-14">
          From securing your network to migrating your infrastructure — we handle
          everything so your team stays focused on growth.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card border border-border rounded-lg p-6 card-hover group"
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
