// components/StickyCTA.tsx

export default function StickyCTA() {
  return (
    <a
      href="https://calendly.com/mission42/beratung"
      className="fixed bottom-4 right-4 md:right-8 z-50 bg-gradient-to-r from-brand-orangeLight to-brand-orange text-white rounded-full px-6 py-3 shadow-xl hover:scale-105 active:scale-95 transition-transform duration-200"
    >
      <span className="hidden md:inline">🚀 Beratungsgespräch buchen</span>
      <span className="md:hidden block text-center">
        🚀 Beratungsgespräch
        <br />
        buchen
      </span>
    </a>
  );
}
