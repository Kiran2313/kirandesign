import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-6 pt-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="text-primary font-medium mb-4 tracking-wider uppercase text-sm"
          >
            UI/UX Designer & Graphic Designer
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            Designing Meaningful{" "}
            <span className="text-gradient">Experiences.</span>
            <br />
            Crafting Impactful{" "}
            <span className="text-gradient">Visuals.</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-4">
            B.Tech CSE Final Year
          </p>

          <p className="text-muted-foreground md:text-lg max-w-2xl mb-8 leading-relaxed">
            Passionate and detail-oriented UI/UX and Graphic Designer with a strong computer science background.
            Specializing in user-centered digital experiences, intuitive interfaces, and visually compelling brand designs.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#portfolio">View My Work</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 right-10 w-20 h-20 border border-primary/30 rounded-lg"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-accent/20 rounded-full animate-float"
      />
    </section>
  );
};

export default Hero;
