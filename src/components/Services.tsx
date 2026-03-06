import { motion } from "framer-motion";
import { Globe, Smartphone, PenTool } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "UI/UX Design",
    items: ["Mobile App Design", "Web Application Design", "Wireframing & Prototyping", "UX Case Study Development", "Interface Redesign"],
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    items: ["Marketing Posters", "Promotional Banners", "Packaging Design", "Brand Visual Assets"],
  },
  {
    icon: Globe,
    title: "Web UI Design",
    items: ["Modern Website Layouts", "Responsive Design Systems", "Clean UI Architecture"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">What I Offer</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            My <span className="text-gradient">Services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-xl p-8 group hover:shadow-glow hover:border-primary/30 transition-all duration-300"
            >
              <service.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
