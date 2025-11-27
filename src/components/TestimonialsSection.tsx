import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Talent Bridge Global made my job search seamless. Within weeks, I landed a position that matched my skills perfectly. Their team is professional, supportive, and truly cares about candidates.",
    author: "Amina K.",
    role: "Marketing Coordinator",
  },
  {
    text: "Exceptional experience from start to finish. The HR consultants guided me through every step of the hiring process with clarity and professionalism.",
    author: "Alex P.",
    role: "Software Developer",
  },
  {
    text: "As an international job seeker, I was impressed by how smoothly everything went. The team helped me prepare for interviews and connected me with a great company abroad.",
    author: "Leila M.",
    role: "Project Manager",
  },
  {
    text: "Our partnership with Talent Bridge Global helped us fill key roles faster than ever. Their understanding of our business needs was impressive.",
    author: "Priya S.",
    role: "HR Director",
  },
  {
    text: "Talent Bridge Global delivered qualified, pre-screened candidates who perfectly fit our company culture. We'll definitely continue working with them.",
    author: "Carlos J.",
    role: "Operations Manager",
  },
  {
    text: "Professional, reliable, and truly global. They helped me secure a remote role that matches my goals and skill set.",
    author: "Omar S.",
    role: "Data Analyst",
  },
  {
    text: "As a registered nurse, I was amazed by how quickly Talent Bridge Global arranged my international placement. The entire relocation process — from paperwork to travel — was smooth and stress-free. I'm now working in a top hospital abroad!",
    author: "Grace N.",
    role: "Registered Nurse (UK Placement)",
  },
  {
    text: "Talent Bridge Global handled everything for my overseas nursing job — documentation, interviews, and travel coordination. They genuinely care about healthcare professionals, and I'm proud to recommend them.",
    author: "Fatima A.",
    role: "ICU Nurse (Dubai)",
  },
  {
    text: "I got connected to a construction company in Canada through Talent Bridge Global. They guided me from interview to visa documentation. Everything went smoothly, and I'm now settled with my new engineering role.",
    author: "Kenneth E.",
    role: "Civil Engineer (Canada)",
  },
  {
    text: "The process of relocating for my civil engineering job in Qatar was incredibly well-managed. Talent Bridge Global handled my contract, travel, and onboarding support professionally.",
    author: "Hassan T.",
    role: "Civil Engineer (Qatar)",
  },
  {
    text: "I never imagined getting an international role could be this straightforward. Thanks to Talent Bridge Global, I'm now working on a major infrastructure project in Germany. Their relocation assistance was top-notch.",
    author: "Emeka L.",
    role: "Civil Engineer (Germany)",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🏆 What Our Clients and Candidates Say
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto text-lg leading-relaxed">
            "We're proud to have earned the trust of professionals and businesses around the
            world. From nurses securing international placements to engineers and executives
            finding their perfect roles, Talent Bridge Global continues to connect talent with
            opportunity."
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-grow italic">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
