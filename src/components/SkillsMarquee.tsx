import { motion } from "framer-motion";

const skills = [
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
  { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
  { name: "CorelDRAW", icon: "https://upload.wikimedia.org/wikipedia/en/7/7b/CorelDRAW_2020_icon.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
];

const SkillsMarquee = () => {
  const doubled = [...skills, ...skills];

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Tools I Use</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Design <span className="text-gradient">Tools</span>
          </h2>
        </motion.div>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee w-max">
          {doubled.map((skill, i) => (
            <div
              key={`${skill.name}-${i}`}
              className="flex flex-col items-center gap-3 mx-8 md:mx-12 group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl glass flex items-center justify-center group-hover:shadow-glow group-hover:border-primary/30 transition-all duration-300">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-9 h-9 md:w-11 md:h-11 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
