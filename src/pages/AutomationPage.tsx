
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AutomationSection from '@/components/automation/AutomationSection';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AutomationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <SectionHeading 
            title="GoHighLevel Automation" 
            subtitle="Streamline your business operations with powerful, customizable automation workflows that save time and reduce errors."
          />
          
          <div className="mt-8 mb-16 bg-muted/30 p-6 rounded-lg border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-medium mb-4">Why Automate with GoHighLevel?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mt-0.5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Save up to 20 hours per week on routine tasks</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mt-0.5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Reduce human error in repetitive processes</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mt-0.5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Enhance customer experience with timely communications</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mt-0.5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Scale your operations without proportionally increasing staff</span>
                  </li>
                </ul>
                
                <div className="mt-6">
                  <Button asChild className="button-gradient">
                    <Link to="/book">Schedule a Demo</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-lg transform rotate-3"></div>
                <div className="relative bg-background rounded-lg shadow-lg p-6 transform -rotate-1">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium">Automation Workflow</div>
                      <div className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">Active</div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">1</div>
                        <div className="flex-1 p-3 border border-border rounded-md bg-card">
                          <div className="text-sm font-medium">Trigger: New Lead Form Submission</div>
                        </div>
                      </div>
                      
                      <div className="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-8 text-muted-foreground">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                        </svg>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">2</div>
                        <div className="flex-1 p-3 border border-border rounded-md bg-card">
                          <div className="text-sm font-medium">Action: Send Welcome Email</div>
                        </div>
                      </div>
                      
                      <div className="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-8 text-muted-foreground">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                        </svg>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">3</div>
                        <div className="flex-1 p-3 border border-border rounded-md bg-card">
                          <div className="text-sm font-medium">Delay: Wait 2 Days</div>
                        </div>
                      </div>
                      
                      <div className="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-8 text-muted-foreground">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                        </svg>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">4</div>
                        <div className="flex-1 p-3 border border-border rounded-md bg-card">
                          <div className="text-sm font-medium">Action: Send Follow-up SMS</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <AutomationSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AutomationPage;
