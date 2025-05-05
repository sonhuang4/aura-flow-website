
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-gradient pt-32 pb-16 md:py-24 lg:py-32">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div className="max-w-xl animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Smart Workflows with <span className="text-primary">AI & Automation</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Transform your business processes with seamless GoHighLevel automation and intelligent AI assistants. Boost productivity, enhance customer experiences, and focus on what matters most.
            </p>
            <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="button-gradient">
                <Link to="/book">Book a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
          <div className="relative lg:max-w-lg">
            <div className="relative animate-float">
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 opacity-30 blur"></div>
              <div className="relative rounded-lg bg-white p-6 shadow-xl">
                <div className="space-y-4">
                  <div className="h-2 w-1/3 bg-teal-100 rounded"></div>
                  <div className="h-2 w-1/2 bg-blue-100 rounded"></div>
                  <div className="h-8 w-3/4 bg-muted rounded"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-16 bg-accent/50 rounded flex items-center justify-center text-accent-foreground font-medium">AI Assistant</div>
                    <div className="h-16 bg-primary/10 rounded flex items-center justify-center text-primary font-medium">Automation</div>
                  </div>
                  <div className="h-2 w-2/3 bg-sand-100 rounded"></div>
                  <div className="h-2 w-1/4 bg-teal-100 rounded"></div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary rounded-full opacity-30 blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
