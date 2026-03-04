const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2025 Kethavath Kiran. All Rights Reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/kiran-nayak2313/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a href="https://www.behance.net/kirannayak9121" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Behance
          </a>
          <a href="mailto:kiran.kethavath97@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
