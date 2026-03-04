import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "UI/UX Design",
    skills: [
      "User Research", "Persona Creation", "Wireframing", "Prototyping",
      "User Flow Design", "Mobile App UI", "Website UI", "Case Study Documentation",
      "Design Systems", "Usability Principles",
    ],
  },
  {
    title: "Graphic Design",
    skills: [
      "Poster Design", "Banner Design", "Packaging Design", "Branding & Visual Identity",
      "Typography", "Layout & Composition", "Social Media Creatives",
    ],
  },
  {
    title: "Technical Skills",
    skills: [
      "Front-End Design Understanding", "Responsive Layout Concepts",
      "Basic Web Development", "Strong CS Foundation",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">What I Know</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            My <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.15 }}
              className="glass rounded-xl p-6 hover:shadow-glow transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gradient mb-6">{cat.title}</h3>
              <div className="space-y-3">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.1 + si * 0.05 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
