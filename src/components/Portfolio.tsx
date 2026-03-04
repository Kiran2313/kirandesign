import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const caseStudies = [
  {
    title: "Bajaj Motorcycle App",
    desc: "A mobile application concept for motorcycle users to explore models, book test rides, track service history, and manage vehicle details in one seamless experience.",
    tags: ["Mobile App", "UX Research", "UI Design"],
    image: "https://i.postimg.cc/BnTvFgXH/Bajaj-Motorcycle-App-Case-study-front-cover.jpg",
  },
  {
    title: "Tailoring Platform",
    desc: "A digital tailoring platform designed to simplify appointment booking, measurement tracking, customization, and order management.",
    tags: ["Web App", "Case Study", "UX Design"],
    image: "https://i.postimg.cc/Gh08s9Xc/Tailoring-Casestudy-4.jpg",
  },
  {
    title: "Gugulotre Redesign",
    desc: "A complete website redesign focused on improved user experience, modern UI layout, structured content, and brand consistency.",
    tags: ["Website", "Redesign", "Branding"],
    image: "https://i.postimg.cc/c1t0Ymzg/Gugulotre-Case-study-cover.jpg",
  },
];

const graphicProjects = [
  { title: "Invitation Card Design", image: "https://i.postimg.cc/P5YBrVNB/Invitation1.jpg" },
  { title: "SNAPIN Poster Design", image: "https://i.postimg.cc/wxrP5YmZ/Snapin-31.jpg" },
  { title: "Sweets Promotional Banner", image: "https://i.postimg.cc/Y24kB3fv/Sweets-banner.jpg" },
  { title: "Women's Revolution Poster", image: "https://i.postimg.cc/6Qyw6fJH/Women-s-Revolution-page-0001.jpg" },
  { title: "Gulab Jamuna Packaging Design", image: "https://i.postimg.cc/vBFjRrQr/gulab-jamuna-1.png" },
  { title: "Dipper Packaging Design", image: "https://i.postimg.cc/hjvJBdpS/1bd0a8af-f225-427a-bc06-04618f595043.png" },
  { title: "Chips Packaging Design", image: "https://i.postimg.cc/90Gw8jLD/Free-Snacks-Pouch-PSD-Mockup-03-Recovered.png" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">My Work</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Portfolio</span>
          </h2>
        </motion.div>

        {/* Case Studies */}
        <h3 className="text-2xl font-bold mb-8 text-gradient inline-block">UI/UX Case Studies</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl overflow-hidden group hover:shadow-glow transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold">{study.title}</h4>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">{study.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Graphic Design */}
        <h3 className="text-2xl font-bold mb-8 text-gradient inline-block">Graphic Design Projects</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {graphicProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-lg overflow-hidden hover:shadow-glow hover:border-primary/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-foreground text-center">{project.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
