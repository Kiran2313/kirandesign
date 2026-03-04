import { motion } from "framer-motion";
import { Target, Lightbulb, Eye, Users } from "lucide-react";

const focuses = [
{ icon: Target, label: "Clear Information Architecture" },
{ icon: Users, label: "Seamless User Flows" },
{ icon: Eye, label: "Modern & Minimal Visual Systems" },
{ icon: Lightbulb, label: "Accessibility & Usability" }];


const passions = [
"UI/UX Design",
"User Research & Problem Solving",
"Branding & Packaging Design",
"Digital Product Design"];


const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">About Me</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            I'm <span className="text-gradient">Kethavath Kiran</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6">
            
            <p className="text-muted-foreground leading-relaxed">A highly motivated and creative designer with a strong foundation in computer science and user-centered design principles. Skilled in transforming ideas into engaging digital products and compelling visual designs. Experienced in UI/UX case studies, mobile app design, branding, posters, and packaging design. Focused on usability, aesthetics, and problem-solving.

            </p>

            <div>
              <h3 className="text-lg font-semibold mb-3">Passionate About</h3>
              <div className="flex flex-wrap gap-2">
                {passions.map((p) =>
                <span key={p} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                    {p}
                  </span>
                )}
              </div>
            </div>

            <div className="p-5 rounded-lg bg-gradient-glow border border-primary/20">
              <p className="text-sm font-medium text-primary mb-1">Career Goal</p>
              <p className="text-foreground">
                To become a professional Product/UI/UX Designer who builds impactful, scalable digital experiences.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            
            <h3 className="text-lg font-semibold mb-4">My Focus Areas</h3>
            <div className="grid grid-cols-2 gap-4">
              {focuses.map(({ icon: Icon, label }, i) =>
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.4 }}
                className="p-5 rounded-lg glass hover:shadow-glow transition-shadow duration-300 group">
                
                  <Icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-foreground">{label}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default About;