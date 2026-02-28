const WHATSAPP_URL = "https://wa.me/94750533743?text=Hi!%20I'd%20like%20to%20order%20from%20ChampX%20Cookies";

const Footer = () => {
  return (
    <footer className="bg-espresso py-12 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        <h3 className="font-display text-2xl font-bold text-cream mb-2">ChampX Cookies</h3>
        <p className="font-body text-cream/60 text-sm mb-6">Handcrafted cookies & brownies, baked with love.</p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-body font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Chat with us on WhatsApp
        </a>
        <p className="font-body text-cream/40 text-xs mt-8">
          © {new Date().getFullYear()} ChampX Cookies. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
