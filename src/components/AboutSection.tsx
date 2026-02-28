import { motion } from "framer-motion";
import gallery2 from "@/assets/gallery-2.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-cream">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src={gallery2}
              alt="Our baking process"
              className="w-full h-80 md:h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-2">Our story</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">About Us</h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                ChampX Cookies started as a passion project born from a love of baking and sharing joy through food. What began in a small kitchen has grown into a beloved local treat brand.
              </p>
              <p>
                We use only premium ingredients — real butter, high-quality chocolate, and farm-fresh eggs — because we believe great cookies start with great ingredients. Every batch is baked fresh to order, ensuring you get the most delicious experience possible.
              </p>
              <p>
                Whether you're treating yourself, surprising a friend, or celebrating a special occasion, ChampX Cookies is here to make the moment sweeter.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
