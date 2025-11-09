import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Users, Briefcase, TrendingUp } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TeamMemberCard from "@/components/TeamMemberCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-home.jpg";
import jobSeekersImage from "@/assets/job-seekers.jpg";
import employersImage from "@/assets/employers.jpg";

const Index = () => {
  const teamMembers = [
    {
      name: "Adebayo Okonkwo",
      title: "Director of Talent Strategy",
      bio: "With over 15 years in global talent acquisition, Adebayo leads our strategic partnerships and executive recruitment across Africa and beyond.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Chioma Nwosu",
      title: "Head of Employer Partnerships",
      bio: "Chioma bridges the gap between top employers and exceptional talent, specializing in workforce planning and client relationship management.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Kwame Mensah",
      title: "Senior Talent Acquisition Consultant",
      bio: "Kwame specializes in leadership recruitment across technology, finance, and energy sectors with a consultative, value-driven approach.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection
        image={heroImage}
        title="Your Global Partner in Talent Acquisition and Workforce Success"
        subtitle="Whether you're seeking your next career breakthrough or the perfect hire to drive your organization forward, Talent Bridge Global connects professionals and employers across Africa and the world."
      />

      {/* About Us Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About Us</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Talent Bridge Global, we believe the right people can transform organizations, and
              the right opportunities can transform lives.
            </p>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  We are a global recruitment and workforce solutions firm helping employers
                  attract, assess, and hire exceptional talent while guiding professionals toward
                  meaningful career advancement.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  Our partnerships extend to Fortune 500 companies and leading enterprises across
                  energy, technology, finance, healthcare, and logistics sectors throughout Africa
                  and globally.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  We leverage trusted networks to help candidates access verified job openings,
                  ensuring every opportunity we present is both credible and current.
                </p>
              </div>
            </div>
            <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-secondary/50 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3 text-primary">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower professionals and organizations by connecting talent to opportunity,
                  with integrity, excellence, and global reach.
                </p>
              </div>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3 text-primary">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become Africa's leading recruitment partner recognized for shaping futures,
                  inspiring growth, and driving workforce success globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What We Do</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* For Job Seekers */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <img
                src={jobSeekersImage}
                alt="Job seekers collaboration"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">For Job Seekers</h3>
                <blockquote className="text-lg italic text-primary mb-6 border-l-4 border-primary pl-4">
                  "Step into global opportunities, where ambition meets possibility."
                </blockquote>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  At Talent Bridge Global, we connect passionate professionals with leading
                  companies, including Fortune 500 and world-class organizations across multiple
                  industries in Africa and beyond.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">
                      Get noticed by top international and regional recruiters
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">
                      Optimize your resume and LinkedIn profile for global standards
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">
                      Access exclusive job openings that aren't publicly advertised
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">
                      Receive personalized support from our career specialists
                    </span>
                  </li>
                </ul>
                <p className="text-muted-foreground italic">
                  "Your dream career isn't far — let's take the next step together."
                </p>
              </div>
            </div>

            {/* For Employers */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <img
                src={employersImage}
                alt="Employer partnerships"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">For Employers</h3>
                <blockquote className="text-lg italic text-primary mb-6 border-l-4 border-primary pl-4">
                  "Partner with us to hire, build, and retain world-class talent."
                </blockquote>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We understand that great companies are built by great people. That's why we
                  partner with Fortune 500 leaders, high-growth startups, and multinational
                  organizations to deliver top-tier recruitment and workforce solutions.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">
                      Permanent and contract staffing solutions
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">
                      Executive and senior-level search
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">Employer branding support</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">
                      Recruitment process outsourcing (RPO)
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">
                      Workforce planning and consulting
                    </span>
                  </li>
                </ul>
                <p className="text-muted-foreground italic">
                  "Let's help you find your next great hire."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Meet the Team</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our strength lies in our people. Meet some of the recruitment specialists and career
            strategists driving success.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
          <div className="text-center">
            <Button asChild className="btn-primary">
              <Link to="/team">View Full Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comprehensive recruitment and workforce solutions tailored to your needs
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={Users}
              title="Recruitment"
              description="End-to-end talent acquisition services connecting top candidates with leading organizations."
            />
            <ServiceCard
              icon={Target}
              title="Executive Search"
              description="Specialized headhunting for senior leadership and C-suite positions across industries."
            />
            <ServiceCard
              icon={TrendingUp}
              title="Career Coaching"
              description="Personalized coaching to elevate your career trajectory and professional development."
            />
            <ServiceCard
              icon={Briefcase}
              title="Workforce Consulting"
              description="Strategic workforce planning and organizational development solutions."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Career or Organization?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's connect and explore how we can help you achieve your goals.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
