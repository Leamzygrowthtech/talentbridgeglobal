import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import TeamMemberCard from "@/components/TeamMemberCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-about.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Adebayo Okonkwo",
      title: "Director of Talent Strategy",
      bio: "With over 15 years of experience in global talent acquisition, Adebayo leads our strategic partnerships and executive recruitment initiatives across Africa and beyond. He specializes in connecting senior leaders with transformative opportunities in Fortune 500 and emerging enterprises.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Chioma Nwosu",
      title: "Head of Employer Partnerships",
      bio: "Chioma bridges the gap between top employers and exceptional talent. Her expertise lies in workforce planning and client relationship management, helping businesses across Nigeria and West Africa scale with precision and confidence.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Kwame Mensah",
      title: "Senior Talent Acquisition Consultant",
      bio: "Kwame specializes in leadership recruitment across technology, finance, and energy sectors. His consultative approach ensures every placement creates long-term value for both clients and candidates throughout Africa and international markets.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      name: "Amara Okafor",
      title: "Director of Candidate Success & Development",
      bio: "Amara oversees the candidate journey from resume alignment to placement, ensuring professionals are well-positioned for global opportunities. Her commitment to empowerment and excellence defines our candidate experience.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      name: "Tunde Adeyemi",
      title: "Recruitment Operations Manager",
      bio: "Tunde drives operational efficiency across all recruitment projects. He manages internal systems, performance analytics, and process optimization, ensuring our workflows remain seamless and transparent.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      name: "Zainab Hassan",
      title: "Communications & Brand Experience Lead",
      bio: "Zainab shapes the way Talent Bridge Global connects with both clients and candidates. She leads our employer branding initiatives, storytelling, and digital communication strategies that reflect our values of integrity and impact.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <HeroSection
        image={heroImage}
        title="Meet the Team Behind Talent Bridge Global"
        subtitle="Our strength lies in our people. Our recruitment specialists, career strategists, and industry consultants work together to connect exceptional talent with world-class organizations across Africa and beyond."
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Talent Bridge Global, our team doesn't just fill roles—we build long-term
              partnerships that power success across industries. With deep expertise spanning
              technology, energy, finance, healthcare, and more, we're committed to shaping futures
              and inspiring growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Started with Talent Bridge Global Today!
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're seeking your next career opportunity or looking to build your team with
            exceptional talent, we're here to help.
          </p>
          <Button asChild className="btn-primary" size="lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-lg shadow-lg">
            <div className="flex items-start space-x-6 mb-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">EEO</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Equal Opportunity Employer</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Talent Bridge Global is an equal opportunity employer and welcomes applicants from
                  all backgrounds. We do not discriminate on the basis of race, color, religion,
                  gender, gender identity or expression, sexual orientation, national origin,
                  genetics, disability, age, or veteran status.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to fostering a diverse and inclusive workplace and encourage
                  candidates of all backgrounds to apply for our job opportunities. We value diversity
                  and believe that it enriches our work environment and makes our team stronger.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
