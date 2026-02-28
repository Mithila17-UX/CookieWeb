import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "How do I place an order?",
    a: "Simply click the 'Order Now' or 'Contact via WhatsApp' button on any product. You'll be redirected to our WhatsApp chat where you can tell us what you'd like, the quantity, and your delivery details.",
  },
  {
    q: "Why aren't prices listed on the website?",
    a: "As a growing startup, our prices may vary depending on order size, customization, and seasonal ingredients. Chat with us on WhatsApp and we'll give you a quote right away!",
  },
  {
    q: "Do you take custom orders?",
    a: "Absolutely! We love custom orders — whether it's a specific flavor, special packaging for gifts, or large quantities for events. Just let us know your needs.",
  },
  {
    q: "How long does delivery take?",
    a: "Delivery times depend on your location and our delivery partners (Koombiyo Delivery, Pronto Lanka). Typically, orders arrive within 1 to 2 days for delivery.",
  },
  {
    q: "Are your products suitable for people with allergies?",
    a: "Our products contain common allergens like wheat, eggs, dairy, and nuts. Please reach out via WhatsApp if you have specific dietary concerns and we'll do our best to accommodate.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-2">Got questions?</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">FAQ</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-border bg-card px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="font-body font-semibold text-foreground text-left hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
