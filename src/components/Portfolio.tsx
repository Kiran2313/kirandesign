import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const caseStudies = [
{
  title: "Bajaj Motorcycle App",
  desc: "A mobile application concept for motorcycle users to explore models, book test rides, track service history, and manage vehicle details.",
  tags: ["Mobile App", "UX Research", "UI Design"]
},
{
  title: "Tailoring Platform",
  desc: "A digital tailoring platform to simplify appointment booking, measurement tracking, order customization, and delivery management.",
  tags: ["Web App", "Case Study", "UX Design"]
},
{
  title: "Gugulotre Redesign",
  desc: "A complete website redesign focusing on improved user experience, brand consistency, modern UI layout, and structured information flow.",
  tags: ["Website", "Redesign", "Branding"]
}];


const graphicProjects = [
"KGN Software Poster",
"SNAPIN Poster",
"Sweets Banner",
"Computer Course Banner",
"Gulab Jamuna Packet Design",
"Dipper Package Design",
"Chips Package Design"];


const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">My Work</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Portfolio</span>
          </h2>
        </motion.div>

        {/* Case Studies */}
        <h3 className="text-2xl font-bold mb-8 text-gradient inline-block">UI/UX Case Studies</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {caseStudies.map((study, i) =>
          <motion.div
            key={study.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl overflow-hidden group hover:shadow-glow transition-all duration-300">
            
              <div className="h-48 bg-gradient-glow flex items-center justify-center">
                <span className="text-4xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                  0{i + 1}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold">{study.title}</h4>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">{study.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) =>
                <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                )}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Graphic Design */}
        <h3 className="text-2xl font-bold mb-8 text-gradient inline-block">Graphic Design Projects</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {graphicProjects.map((project, i) =>
          <motion.div
            key={project}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass rounded-lg p-5 text-center hover:shadow-glow hover:border-primary/30 transition-all duration-300 group cursor-pointer">
            
              <div className="w-12 h-12 rounded-lg bg-gradient-primary mx-auto mb-3 opacity-60 group-hover:opacity-100 transition-opacity border-primary-foreground" />
              <p className="text-sm font-medium text-foreground">{project}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default Portfolio;