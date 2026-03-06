import { Mail, Phone, Linkedin, Palette } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {currentYear} Kethavath Kiran. All Rights Reserved.
        </p>
        <div className="flex items-center gap-6 flex-wrap justify-center">
          <a href="mailto:kiran.kethavath97@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-4 h-4" /> kiran.kethavath97@gmail.com
          </a>
          <a href="tel:+919701014153" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" /> +91 9701014153
          </a>
          <a href="https://www.linkedin.com/in/kiran-nayak2313/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a href="https://www.behance.net/kirannayak9121" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Palette className="w-4 h-4" /> Behance
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
