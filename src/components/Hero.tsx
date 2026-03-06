import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import resumePdf from "@/assets/Kethavath_Kiran_UIUX_Designer_Resume (1).pdf";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden section-wrap">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-6 pt-24 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
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
              className="text-primary font-semibold mb-4 tracking-[0.22em] uppercase text-xs md:text-sm"
            >
              UI/UX Designer & Graphic Designer
            </motion.p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-5 text-balance">
              Designing Meaningful{" "}
              <span className="text-gradient">Experiences.</span>
              <br />
              Crafting Impactful{" "}
              <span className="text-gradient">Visuals.</span>
            </h1>

            <p className="text-muted-foreground text-base md:text-xl max-w-2xl mb-4 font-semibold">
              Kethavath Kiran is a final-year B.Tech (CSE)
            </p>

            <p className="text-muted-foreground md:text-lg max-w-2xl mb-8 leading-relaxed">
              Passionate and detail-oriented UI/UX and Graphic Designer with a strong computer science background.
              Specializing in user-centered digital experiences, intuitive interfaces, and visually compelling brand designs.
            </p>

            <div className="mb-8 flex flex-wrap gap-2.5">
              <span className="rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Figma
              </span>
              <span className="rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                UX Research
              </span>
              <span className="rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Branding
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#portfolio">View My Work</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild className="gap-2">
                <a href={resumePdf} download="Kethavath_Kiran_UIUX_Designer_Resume.pdf">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-shrink-0 relative"
          >
            <div className="absolute -inset-4 rounded-[28px] bg-gradient-primary opacity-25 blur-2xl" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[20px] overflow-hidden shadow-glow border-2 border-primary/20">
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
        className="absolute top-1/4 right-10 w-20 h-20 border border-primary/30 rounded-lg hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-accent/20 rounded-full animate-float hidden md:block"
      />
    </section>
  );
};

export default Hero;
