import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-foreground">
          <Shield className="h-5 w-5 text-primary" />
          <span className="font-bold font-display">
            Apex<span className="text-primary">IT</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} ApexIT. All rights reserved.
        </p>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
          All systems operational
        </div>
      </div>
    </footer>
  );
};

export default Footer;
