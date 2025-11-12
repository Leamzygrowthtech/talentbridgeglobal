import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Target, Users, Briefcase, TrendingUp, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TeamMemberCard from "@/components/TeamMemberCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-home.jpg";
import heroAboutImage from "@/assets/hero-about.jpg";
import servicesImage from "@/assets/services-image.jpg";
import jobSeekersImage from "@/assets/job-seekers.jpg";
import employersImage from "@/assets/employers.jpg";
import teamSarah from "@/assets/team-sarah.jpg";
import teamOlivia from "@/assets/team-olivia.jpg";
import teamSophia from "@/assets/team-sophia.jpg";
import teamMichael from "@/assets/team-michael.jpg";
import fortune500 from "@/assets/partners/fortune-500.png";
import forbesGlobal from "@/assets/partners/forbes-global.png";
import ftse100 from "@/assets/partners/ftse-100.png";
import sp500 from "@/assets/partners/sp-500.png";
import dax40 from "@/assets/partners/dax-40.png";
import headhuntingIcon from "@/assets/partners/headhunting-icon.png";
import globalTalentIcon from "@/assets/partners/global-talent-icon.png";
import partnershipIcon from "@/assets/partners/partnership-icon.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll be in touch shortly.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      country: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const teamMembers = [
    {
      name: "Emma Clarke",
      title: "Managing Partner",
      bio: "With over 15 years in global talent acquisition, Emma leads our strategic partnerships and executive recruitment across multiple industries.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Jonathan Müller",
      title: "Senior Executive Recruiter",
      bio: "Jonathan bridges the gap between top employers and exceptional talent, specializing in workforce planning and client relationship management.",
      image: teamSarah,
    },
    {
      name: "Sophia Rossi",
      title: "Global Talent Consultant",
      bio: "Sophia specializes in leadership recruitment across technology, finance, and energy sectors with a consultative, value-driven approach.",
      image: teamSophia,
    },
  ];

  const fullTeamMembers = [
    ...teamMembers,
    {
      name: "Daniel Chen",
      title: "Director of Client Services",
      bio: "Daniel oversees the candidate journey from initial consultation to placement, ensuring professionals are well-positioned for global opportunities. His commitment to excellence and strategic insight defines our client experience.",
      image: teamOlivia,
    },
    {
      name: "Isabella Duarte",
      title: "Talent Acquisition Specialist",
      bio: "Isabella drives recruitment excellence across all project verticals. She manages candidate pipelines, performance analytics, and relationship development, ensuring our placements align perfectly with client needs.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    },
    {
      name: "Marcus Thompson",
      title: "Operations Director",
      bio: "Marcus ensures operational efficiency across all recruitment initiatives. He manages internal systems, process optimization, and compliance standards, ensuring our workflows remain seamless, transparent, and effective.",
      image: teamMichael,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section id="home">
        <HeroSection
        image={heroImage}
          companyName="Talent Bridge Global"
          title="Your Global Partner in Talent Acquisition and Workforce Success"
          subtitle="Whether you're seeking your next career breakthrough or the perfect hire to drive your organization forward, Talent Bridge Global connects professionals and employers worldwide."
        />
      </section>

      {/* About Us Section */}
      <section id="about" className="section-padding bg-background">
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
                  energy, technology, finance, healthcare, and logistics sectors worldwide.
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
                  To become a globally recognized recruitment partner known for shaping futures,
                  inspiring growth, and driving workforce success across industries.
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
                  industries globally.
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

      {/* Full Team Section */}
      <section id="team" className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Meet the Team Behind Talent Bridge Global</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our strength lies in our people. Our recruitment specialists, career strategists, and industry consultants work together to connect exceptional talent with world-class organizations globally.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fullTeamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="section-padding bg-secondary/30">
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

      {/* Companies We Partner With */}
      <section className="section-padding bg-[#D32F2F]">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Companies We Partner With:
          </h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {[
                { src: fortune500, alt: "Fortune 500" },
                { src: forbesGlobal, alt: "Forbes Global 2000" },
                { src: ftse100, alt: "FTSE 100" },
                { src: sp500, alt: "S&P 500" },
                { src: dax40, alt: "DAX 40" },
                { src: headhuntingIcon, alt: "Headhunting Services" },
                { src: globalTalentIcon, alt: "Global Talent Network" },
                { src: partnershipIcon, alt: "Strategic Partnerships" },
              ].map((partner, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <div className="bg-white rounded-lg p-6 h-40 flex items-center justify-center">
                    <img
                      src={partner.src}
                      alt={partner.alt}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Get in Touch Marquee */}
      <section className="overflow-hidden bg-background py-16">
        <div className="marquee-container">
          <div className="marquee-content">
            {[...Array(3)].map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="marquee-text text-4xl md:text-6xl font-bold text-primary hover:text-primary/80 transition-colors cursor-pointer"
              >
                Get in touch with Us Today!
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">Get In Touch</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're a job seeker looking for your next opportunity or an employer
                  seeking exceptional talent, we're here to help. Reach out today and let's start
                  building your success story.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Atlanta Office</h3>
                    <p className="text-sm text-muted-foreground">
                      2000 Parkwood Circle SE, Suite 320<br />
                      Atlanta, GA 30339
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Charlotte Office</h3>
                    <p className="text-sm text-muted-foreground">
                      6230 Fairview Rd, Suite 220<br />
                      Charlotte, NC 28210
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-sm text-muted-foreground">+1 (470) 555-2048</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <a
                      href="mailto:info@talentbridgeglobal.com"
                      className="text-sm text-primary hover:underline"
                    >
                      info@talentbridgeglobal.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="font-semibold mb-3 text-primary">Office Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card p-8 rounded-lg shadow-lg border-t-4 border-primary">
                <h3 className="text-2xl font-bold mb-6 text-primary">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email Address <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder="Your Company"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+1 (470) 555-0000"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Select value={formData.country} onValueChange={(value) => handleChange("country", value)}>
                        <SelectTrigger id="country">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usa">United States</SelectItem>
                          <SelectItem value="canada">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Area of Interest</Label>
                      <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Select area of interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="executive-search">Executive Search</SelectItem>
                          <SelectItem value="career-opportunity">Career Opportunity</SelectItem>
                          <SelectItem value="general-enquiry">General Enquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Your Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell us about your needs or inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full btn-primary" size="lg">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
