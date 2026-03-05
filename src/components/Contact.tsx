import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send("service_s19awc8", "template_h4l8gmf", {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }, "DoaPa3ykdD2VXS3C5");
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
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
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:shadow-glow transition-shadow">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm text-foreground">kiran.kethavath97@gmail.com</p>
                </div>
              </a>
              <a href="tel:+919701014153" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:shadow-glow transition-shadow">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm text-foreground">+91 9701014153</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/kiran-nayak2313/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:shadow-glow transition-shadow">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="text-sm text-foreground">kiran-nayak2313</p>
                </div>
              </a>
              <a href="https://www.behance.net/kirannayak9121" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:shadow-glow transition-shadow">
                  <ExternalLink className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Behance</p>
                  <p className="text-sm text-foreground">kirannayak9121</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass rounded-xl p-8 space-y-5"
          >
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Message</label>
              <textarea
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
