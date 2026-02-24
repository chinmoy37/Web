import { Award, Target, Eye } from "lucide-react";

const team = [
  { name: "Sarah Chen", role: "CEO & Founder", image: "https://i.pravatar.cc/150?u=sarah.chen" },
  { name: "Marcus Rivera", role: "CTO", image: "https://i.pravatar.cc/150?u=marcus.rivera" },
  { name: "Priya Kapoor", role: "Head of Security", image: "https://i.pravatar.cc/150?u=priya.kapoor" },
  { name: "David Okonkwo", role: "VP of Engineering", image: "https://i.pravatar.cc/150?u=david.okonkwo" },
];

const certs = ["CompTIA Security+", "AWS Solutions Architect", "Cisco CCNA", "SOC 2 Type II", "ISO 27001"];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background grid-bg">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
          About Us
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          The People Behind the Tech
        </h2>
        <p className="text-muted-foreground max-w-xl mb-14">
          We're a team of engineers, security analysts, and IT strategists who
          believe technology should empower — never frustrate.
        </p>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-card border border-border rounded-lg p-8 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To deliver reliable, secure, and scalable IT solutions that empower
              businesses to focus on what they do best. We eliminate tech headaches
              so our clients can drive growth with confidence.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-8 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Eye className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To be the global benchmark for
              digital excellence, empowering
              businesses through cuttingedge software that simplifies
              complexity and fosters
              sustainable growth in an
              evolving digital landscape.
            </p>
          </div>
        </div>


        {/* Team grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {team.map((m) => (
            <div
              key={m.name}
              className="bg-card border border-border rounded-lg p-6 text-center card-hover"
            >
              <div className="w-16 h-16 mx-auto rounded-full overflow-hidden bg-primary/10 flex items-center justify-center mb-4">
                <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-foreground">{m.name}</h3>
              <p className="text-sm text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-card border border-border rounded-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">
              Certifications & Compliance
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {certs.map((c) => (
              <span
                key={c}
                className="text-sm px-4 py-2 rounded-md bg-secondary border border-border text-secondary-foreground font-mono"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
            SSL secured · All data encrypted in transit and at rest
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
