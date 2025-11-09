import { ReactNode } from "react";

interface HeroSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  companyName?: string;
  children?: ReactNode;
}

const HeroSection = ({ image, title, subtitle, companyName, children }: HeroSectionProps) => {
  return (
    <section className="hero-section">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        {companyName && (
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in tracking-tight">
            {companyName}
          </h2>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default HeroSection;
