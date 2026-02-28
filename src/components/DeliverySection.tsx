import { motion } from "framer-motion";
import { Truck, Clock, ShieldCheck } from "lucide-react";

const partners = [
  { name: "Koombiyo Delivery", description: "Fast local delivery across the city" },
  { name: "Pronto Lanka", description: "Same-day express delivery service" },
];

const DeliverySection = () => {
  return (
    <section id="delivery" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-2">We deliver</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Delivery Partners</h2>
          <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
            We've partnered with trusted delivery services so your treats arrive fresh at your doorstep.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Truck, title: "Reliable Delivery", desc: "Partnered with top local couriers" },
            { icon: Clock, title: "Fresh & Fast", desc: "Baked to order, delivered quickly" },
            { icon: ShieldCheck, title: "Safe Packaging", desc: "Carefully packed so nothing crumbles" },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-xl bg-card border border-border"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary mb-4">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-3 rounded-xl bg-secondary px-6 py-4"
            >
              <Truck className="w-5 h-5 text-primary" />
              <div>
                <p className="font-body font-semibold text-foreground">{p.name}</p>
                <p className="font-body text-xs text-muted-foreground">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
