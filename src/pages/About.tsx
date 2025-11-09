import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-about.jpg";
import servicesImage from "@/assets/services-image.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <HeroSection
        image={heroImage}
        title="About | Connect Globally, Hire Today"
        subtitle="Bridging talent and opportunity across Africa and beyond"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Talent Bridge Global, we believe the right people can transform organizations,
                and the right opportunities can transform lives. We are more than a recruitment
                agency; we are a bridge between ambition and achievement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Founded on the belief that talent knows no boundaries, Talent Bridge Global partners
                with businesses and professionals worldwide to unlock human potential. We work
                closely with organizations to identify, attract, and engage exceptional individuals —
                those capable of driving innovation, growth, and long-term success.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team combines deep industry insight with global reach, supporting clients and
                candidates across key sectors including technology, energy, finance, healthcare,
                logistics, and manufacturing. Whether it's connecting a startup with its first
                technical leader or supporting a Fortune 500 company with executive-level
                recruitment, we tailor every search with precision, integrity, and purpose.
              </p>
            </div>
            <div className="relative">
              <img
                src={servicesImage}
                alt="Professional collaboration"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 rounded-lg shadow-xl max-w-xs">
                <p className="font-bold text-2xl mb-2">15+</p>
                <p className="text-sm">Years of Excellence in Talent Acquisition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Talent Bridge Global?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-bold text-xl mb-3">Global Reach</h3>
                <p className="text-muted-foreground">
                  Access to opportunities across Africa and international markets with established
                  Fortune 500 partnerships.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-bold text-xl mb-3">Industry Expertise</h3>
                <p className="text-muted-foreground">
                  Specialized knowledge across technology, energy, finance, healthcare, and more.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-bold text-xl mb-3">Proven Results</h3>
                <p className="text-muted-foreground">
                  Track record of successful placements and long-term partnerships with leading
                  organizations.
                </p>
              </div>
            </div>

            <div className="bg-card p-8 md:p-12 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are committed to fostering diversity, equity, and inclusion in every partnership.
                We believe that diverse teams drive innovation and that every individual deserves
                access to meaningful career opportunities regardless of background.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our approach is built on transparency, ethical practices, and a genuine desire to see
                both our candidates and clients succeed. We don't just fill positions—we build
                lasting relationships that create value for years to come.
              </p>
              <Button asChild className="btn-primary" size="lg">
                <Link to="/contact">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
