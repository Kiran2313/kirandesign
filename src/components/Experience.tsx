import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">My Journey</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            <div className="border-l-2 border-primary/30 pl-6 space-y-2">
              <h4 className="font-semibold text-lg">B.Tech in Computer Science Engineering</h4>
              <p className="text-primary text-sm font-medium">Sri Indu College of Engineering & Technology</p>
              <p className="text-muted-foreground text-sm">Final Year – Currently in Last Semester</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold">Experience</h3>
            </div>
            <div className="border-l-2 border-primary/30 pl-6 space-y-4">
              <h4 className="font-semibold text-lg">Freelance UI/UX & Graphic Designer</h4>
              <ul className="space-y-2">
                {[
                  "Worked on multiple case studies and branding projects",
                  "Designed mobile apps, websites, posters, and packaging",
                  "Hands-on experience solving real-world design problems",
                  "Project-based growth through continuous self-learning",
                ].map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
