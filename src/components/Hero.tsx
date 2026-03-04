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
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 max-w-3xl"
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

            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-4 font-extrabold">
              Kethavath Kiran is a final-year B.Tech (CSE)
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

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[20px] overflow-hidden shadow-glow border-2 border-primary/20">
              <img
                src="https://i.postimg.cc/3JWxxGMZ/openart-image-1772643088105-efaf0808-1772643088162-ff764442.png"
                alt="Kethavath Kiran"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

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
