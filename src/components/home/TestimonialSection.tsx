
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeading from '@/components/ui/section-heading';

const testimonials = [
  {
    content: "The AI assistants have completely transformed how we handle customer inquiries. We're able to provide instant responses 24/7, which has significantly improved our customer satisfaction rates.",
    author: "Sarah Johnson",
    role: "Customer Service Manager",
    company: "TechSolutions Inc."
  },
  {
    content: "Implementing the GHL automation workflows has saved us countless hours of manual work. Our team can now focus on strategic initiatives rather than repetitive tasks.",
    author: "Michael Chen",
    role: "Operations Director",
    company: "Innovate Partners"
  },
  {
    content: "The booking system is incredibly intuitive. Our clients love how easy it is to schedule appointments, and we love the reduction in no-shows thanks to the automated reminders.",
    author: "Emily Rodriguez",
    role: "Scheduling Coordinator",
    company: "Wellness Clinic"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <SectionHeading 
          title="What Our Clients Say" 
          subtitle="Discover how our solutions have helped businesses like yours streamline operations and enhance customer experiences."
          centered
        />
        
        <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 inline-block text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="flex-1 text-lg italic text-foreground mb-6">
                  "{testimonial.content}"
                </blockquote>
                
                <footer className="mt-auto">
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-medium">
                          {testimonial.author.split(' ').map(name => name[0]).join('')}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
