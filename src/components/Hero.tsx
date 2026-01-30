import { useEffect, useState } from "react";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className={`relative h-screen w-full overflow-hidden transition-colors duration-700 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 hero-bg-animation" />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-white">
        <h1 className="text-5xl font-bold tracking-wide">
          AccessNX
        </h1>
      </div>
    </section>
  );
}
