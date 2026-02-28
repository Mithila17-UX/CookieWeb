import { motion } from "framer-motion";
import cookieImg from "@/assets/chocolate-chip-cookies.jpg";
import brownieImg from "@/assets/brownies.jpg";

const WHATSAPP_URL = "https://wa.me/1234567890?text=Hi!%20I'd%20like%20to%20order%20from%20ChampX%20Cookies";

const products = [
  {
    name: "Chocolate Chip Cookies",
    description:
      "Our signature classic — crispy on the edges, soft and chewy in the center, loaded with premium chocolate chips. Baked fresh for every order.",
    image: cookieImg,
  },
  {
    name: "Fudgy Brownies",
    description:
      "Rich, dense, and intensely chocolatey. Made with real cocoa and dark chocolate for a decadent experience. Perfect for true chocolate lovers.",
    image: brownieImg,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-2">What we bake</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Our Treats</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-10">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="overflow-hidden aspect-square">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">{p.name}</h3>
                <p className="font-body text-muted-foreground mb-5 leading-relaxed">{p.description}</p>
                <div className="flex gap-3">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-body text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    Order Now
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 font-body text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                  >
                    Contact via WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
