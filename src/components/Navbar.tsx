"use client";

import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-4 text-foreground">
          <img src="/logo.png" alt="RadianCore Logo" className="h-14 w-14 object-contain" />
          <span className="text-3xl font-bold tracking-tight font-display">
            RadianCore
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors duration-200 ${pathname === l.href
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
                }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold glow-button"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-6 space-y-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block transition-colors ${pathname === l.href
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
                }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold text-center glow-button"
          >
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
