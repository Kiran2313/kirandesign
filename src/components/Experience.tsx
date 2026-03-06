import { motion } from "framer-motion";
import { GraduationCap, Briefcase, ExternalLink } from "lucide-react";

const internships = [
  {
    role: "UI/UX Designer Intern",
    company: "Gugulotre",
    location: "Hyderabad",
    period: "Oct 2025 – Nov 2025",
    link: "https://drive.google.com/file/d/1Qb-yo-Rq23fpoNSvhW32Nw2P0Z62YAQA/view?usp=drivesdk",
    points: [
      "Designed full website UI and interactive prototype for a creative agency.",
      "Created responsive layouts and reusable components for service and portfolio pages.",
      "Collaborated onsite with developers to ensure accurate UI implementation.",
    ],
  },
  {
    role: "Graphic Designer Intern",
    company: "Gugulotre",
    location: "Hyderabad",
    period: "Aug 2025 – Oct 2025",
    link: "https://drive.google.com/file/d/1ecDMECQ0OgWkTfDYbjsLMRfooeebNL7U/view?usp=drivesdk",
    points: [
      "Designed branding assets including posters, ID cards, banners, and social creatives.",
      "Strengthened brand visual identity with consistent typography and colors.",
    ],
  },
  {
    role: "UI/UX Designer Intern",
    company: "Digital Info Media Pvt. Ltd. (DIM)",
    location: "",
    period: "Sep 2025 – Nov 2025",
    link: "https://drive.google.com/file/d/1bRvFv8Hq7T4spjAeix85fw9HFIsfl29x/view?usp=drivesdk",
    points: [
      "Designed 28+ high-fidelity UI screens including Home, Services, Portfolio, Careers & Support pages.",
      "Developed complete wireframes, design system, and responsive UI components for website.",
      "Delivered developer-ready assets with clear spacing, typography, and layout guidelines.",
    ],
  },
  {
    role: "UI/UX Design Intern",
    company: "Chivera",
    location: "Remote",
    period: "Jan 2025 – Mar 2025",
    link: "https://drive.google.com/file/d/1XjFfjvcsl9TWioj7VdPfH_PutMObgDHT/view?usp=drivesdk",
    points: [
      "Designed the Chivera mobile app for storing invitation, business, and appointment cards.",
      "Created user flows, wireframes, information architecture, and high-fidelity screens.",
      "Developed minimal UI components with a cloud-based organizational card system.",
    ],
  },
];

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

        {/* Internship Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold">
            Internship <span className="text-gradient">Experience</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {internships.map((intern, i) => (
            <motion.div
              key={`${intern.company}-${intern.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:border-primary/30 hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-1">
                <h4 className="font-semibold text-lg">{intern.role}</h4>
                <a
                  href={intern.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 p-1.5 rounded-lg hover:bg-primary/10 transition-colors"
                  title="View project"
                >
                  <ExternalLink className="w-4 h-4 text-primary" />
                </a>
              </div>
              <p className="text-primary text-sm font-medium">
                {intern.company}{intern.location ? ` — ${intern.location}` : ""}
              </p>
              <p className="text-muted-foreground text-xs mb-4">{intern.period}</p>
              <ul className="space-y-2 border-l-2 border-primary/30 pl-4">
                {intern.points.map((point) => (
                  <li key={point} className="text-sm text-muted-foreground flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {point}
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

export default Experience;
