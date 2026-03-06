import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Linkedin, ExternalLink, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSending(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold">Contact Information</h3>
            <div className="space-y-4">
              <a href="mailto:kiran.kethavath97@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:shadow-glow transition-shadow">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm text-foreground break-all">kiran.kethavath97@gmail.com</p>
                </div>
              </a>
              <a href="tel:+919701014153" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:shadow-glow transition-shadow">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm text-foreground">+91 9701014153</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/kiran-nayak2313/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:shadow-glow transition-shadow">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="text-sm text-foreground truncate">kiran-nayak2313</p>
                </div>
              </a>
              <a href="https://www.behance.net/kirannayak9121" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:shadow-glow transition-shadow">
                  <ExternalLink className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Behance</p>
                  <p className="text-sm text-foreground truncate">kirannayak9121</p>
                </div>
              </a>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="glass rounded-xl p-10 flex flex-col items-center justify-center text-center min-h-[340px]"
              >
                <div className="w-16 h-16 rounded-full bg-violet-500 flex items-center justify-center mb-6">
                  <Send className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Message received</h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-6"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="glass rounded-xl p-8 space-y-5"
              >
                <div>
                  <label htmlFor="name" className="text-sm text-muted-foreground mb-1 block">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-muted-foreground mb-1 block">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm text-muted-foreground mb-1 block">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Your message"
                  />
                </div>
                <Button variant="hero" size="lg" type="submit" className="w-full" disabled={sending}>
                  {sending ? "Sending..." : "Send Message"}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Contact;
