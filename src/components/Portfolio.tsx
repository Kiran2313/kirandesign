import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const caseStudies = [
  {
    title: "Bajaj Motorcycle App",
    desc: "A mobile application concept for motorcycle users to explore models, book test rides, track service history, and manage vehicle details in one seamless experience.",
    tags: ["Mobile App", "UX Research", "UI Design"],
    image: "https://i.postimg.cc/BnTvFgXH/Bajaj-Motorcycle-App-Case-study-front-cover.jpg",
    fullImage: "https://i.postimg.cc/ZYvTkS62/Bajaj-Motorcycle-App-Case-study.jpg",
  },
  {
    title: "Tailoring Platform",
    desc: "A digital tailoring platform designed to simplify appointment booking, measurement tracking, customization, and order management.",
    tags: ["Web App", "Case Study", "UX Design"],
    image: "https://i.postimg.cc/Gh08s9Xc/Tailoring-Casestudy-4.jpg",
    fullImage: "https://i.postimg.cc/2642vyP2/Tailoring-Casestudy.jpg",
  },
  {
    title: "Gugulotre Redesign",
    desc: "A complete website redesign focused on improved user experience, modern UI layout, structured content, and brand consistency.",
    tags: ["Website", "Redesign", "Branding"],
    image: "https://i.postimg.cc/c1t0Ymzg/Gugulotre-Case-study-cover.jpg",
    fullImage: "https://i.postimg.cc/PfYBzrWq/Gugulotre-Case-study.jpg",
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
  const [selectedStudy, setSelectedStudy] = useState<typeof caseStudies[0] | null>(null);
  const [selectedGraphic, setSelectedGraphic] = useState<typeof graphicProjects[0] | null>(null);

  return (
    <section id="portfolio" className="py-20 md:py-24">
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
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedStudy(study)}
              className="relative rounded-xl overflow-hidden group cursor-pointer h-72 hover:shadow-glow transition-all duration-300"
            >
              <img
                src={study.image}
                alt={study.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/60 group-hover:bg-background/75 transition-colors duration-300" />
              <div className="relative z-10 flex flex-col justify-end h-full p-6">
                <h4 className="text-lg font-bold mb-2 group-hover:-translate-y-1 transition-transform duration-300">
                  {study.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{study.desc}</p>
                <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
              onClick={() => setSelectedGraphic(project)}
              className="glass rounded-lg overflow-hidden hover:shadow-glow hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-foreground text-center">{project.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Full View Modal */}
      <AnimatePresence>
        {selectedStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedStudy(null)}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 md:p-6 bg-background/80 backdrop-blur-md border-b border-border">
              <h3 className="text-lg font-bold">{selectedStudy.title}</h3>
              <button
                onClick={() => setSelectedStudy(null)}
                className="p-2 rounded-full glass hover:bg-primary/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="max-w-5xl mx-auto p-4 md:p-8" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedStudy.fullImage}
                alt={selectedStudy.title}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Graphic Fullscreen Modal */}
      <AnimatePresence>
        {selectedGraphic && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedGraphic(null)}
          >
            <button
              onClick={() => setSelectedGraphic(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full glass hover:bg-primary/10 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <div
              className="max-w-4xl max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedGraphic.image}
                alt={selectedGraphic.title}
                className="w-full h-auto object-contain"
              />
              <p className="text-center text-sm text-muted-foreground mt-4">{selectedGraphic.title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
