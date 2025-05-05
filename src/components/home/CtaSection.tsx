
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="bg-primary/5 py-16 md:py-24">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6 max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to enhance your workflow?
            </h2>
            <p className="text-lg text-muted-foreground">
              Book a consultation today to discover how our AI assistants and automation workflows can transform your business operations.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="button-gradient">
                <Link to="/book">Schedule a Demo</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-lg transform -rotate-3"></div>
            <div className="relative bg-card rounded-lg shadow-lg p-6 md:p-8 transform rotate-1">
              <div className="space-y-5">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-4 text-sm font-medium">Smart Automation Dashboard</div>
                </div>
                
                <div className="space-y-3">
                  <div className="h-3 bg-muted rounded-full w-3/4"></div>
                  <div className="h-3 bg-muted rounded-full w-5/6"></div>
                  <div className="h-3 bg-muted rounded-full w-2/3"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-md">
                    <div className="h-2 bg-primary/20 rounded-full w-1/2 mb-2"></div>
                    <div className="h-6 bg-primary/10 rounded-md"></div>
                  </div>
                  <div className="bg-muted p-4 rounded-md">
                    <div className="h-2 bg-primary/20 rounded-full w-1/2 mb-2"></div>
                    <div className="h-6 bg-primary/10 rounded-md"></div>
                  </div>
                </div>
                
                <div className="border border-border rounded-md p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="text-xs font-medium">AI Assistant Activity</div>
                  </div>
                  <div className="flex items-end space-x-1 h-12">
                    <div className="w-1/12 bg-teal-200 rounded-t h-3"></div>
                    <div className="w-1/12 bg-teal-300 rounded-t h-5"></div>
                    <div className="w-1/12 bg-teal-400 rounded-t h-7"></div>
                    <div className="w-1/12 bg-teal-500 rounded-t h-4"></div>
                    <div className="w-1/12 bg-teal-600 rounded-t h-9"></div>
                    <div className="w-1/12 bg-teal-500 rounded-t h-11"></div>
                    <div className="w-1/12 bg-teal-400 rounded-t h-8"></div>
                    <div className="w-1/12 bg-teal-300 rounded-t h-6"></div>
                    <div className="w-1/12 bg-teal-400 rounded-t h-10"></div>
                    <div className="w-1/12 bg-teal-500 rounded-t h-7"></div>
                    <div className="w-1/12 bg-teal-600 rounded-t h-12"></div>
                    <div className="w-1/12 bg-teal-500 rounded-t h-9"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
