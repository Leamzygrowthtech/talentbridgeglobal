import { Users, Target, TrendingUp, Briefcase, UserCheck, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-about.jpg";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <HeroSection
        image={heroImage}
        title="Our Services"
        subtitle="Comprehensive recruitment and workforce solutions designed to connect talent with opportunity"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tailored Solutions for Every Need
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From permanent placements to executive search, career coaching to workforce consulting,
              we provide end-to-end solutions that drive success for professionals and organizations
              across Africa and globally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <ServiceCard
              icon={Users}
              title="Permanent Recruitment"
              description="Connect with top-tier talent for full-time positions across all seniority levels and industries."
            />
            <ServiceCard
              icon={Target}
              title="Executive Search"
              description="Specialized headhunting services for C-suite and senior leadership roles in Fortune 500 and high-growth companies."
            />
            <ServiceCard
              icon={TrendingUp}
              title="Career Coaching"
              description="One-on-one coaching to optimize resumes, LinkedIn profiles, and interview skills for global opportunities."
            />
            <ServiceCard
              icon={Briefcase}
              title="Contract Staffing"
              description="Flexible workforce solutions for project-based and temporary hiring needs with vetted professionals."
            />
            <ServiceCard
              icon={UserCheck}
              title="RPO Services"
              description="Recruitment Process Outsourcing to manage your entire hiring function with efficiency and expertise."
            />
            <ServiceCard
              icon={Building2}
              title="Workforce Consulting"
              description="Strategic planning and organizational development to optimize your talent strategy and team structure."
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Approach</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-primary">For Job Seekers</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-accent font-bold mt-1">01</span>
                    <div>
                      <p className="font-semibold mb-1">Initial Consultation</p>
                      <p className="text-sm text-muted-foreground">
                        We understand your career goals, skills, and aspirations
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent font-bold mt-1">02</span>
                    <div>
                      <p className="font-semibold mb-1">Profile Enhancement</p>
                      <p className="text-sm text-muted-foreground">
                        Optimize your resume and online presence for global standards
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent font-bold mt-1">03</span>
                    <div>
                      <p className="font-semibold mb-1">Opportunity Matching</p>
                      <p className="text-sm text-muted-foreground">
                        Connect you with verified openings that align with your profile
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent font-bold mt-1">04</span>
                    <div>
                      <p className="font-semibold mb-1">Interview Preparation</p>
                      <p className="text-sm text-muted-foreground">
                        Coaching and guidance to help you succeed at every stage
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent font-bold mt-1">05</span>
                    <div>
                      <p className="font-semibold mb-1">Placement & Beyond</p>
                      <p className="text-sm text-muted-foreground">
                        Ongoing support even after you've landed your dream role
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-primary">For Employers</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-accent font-bold mt-1">01</span>
                    <div>
                      <p className="font-semibold mb-1">Needs Assessment</p>
                      <p className="text-sm text-muted-foreground">
                        Deep dive into your hiring requirements and organizational culture
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent font-bold mt-1">02</span>
                    <div>
                      <p className="font-semibold mb-1">Talent Sourcing</p>
                      <p className="text-sm text-muted-foreground">
                        Leverage our global network to identify top candidates
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent font-bold mt-1">03</span>
                    <div>
                      <p className="font-semibold mb-1">Candidate Screening</p>
                      <p className="text-sm text-muted-foreground">
                        Rigorous vetting process to present only the best-fit professionals
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent font-bold mt-1">04</span>
                    <div>
                      <p className="font-semibold mb-1">Interview Coordination</p>
                      <p className="text-sm text-muted-foreground">
                        Seamless scheduling and candidate management throughout the process
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent font-bold mt-1">05</span>
                    <div>
                      <p className="font-semibold mb-1">Onboarding Support</p>
                      <p className="text-sm text-muted-foreground">
                        Ensure smooth transitions with post-placement follow-up
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Our expertise spans multiple sectors, connecting talent with opportunity across diverse industries
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto mb-12">
            {["Technology", "Energy & Oil", "Finance", "Healthcare", "Manufacturing", "Logistics", "Consulting", "Telecommunications", "Real Estate", "Retail"].map((industry) => (
              <div key={industry} className="bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-lg">
                <p className="font-semibold">{industry}</p>
              </div>
            ))}
          </div>
          <Button asChild size="lg" variant="secondary" className="font-semibold">
            <Link to="/contact">Discuss Your Needs</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
