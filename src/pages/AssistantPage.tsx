
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AssistantSection from '@/components/assistant/AssistantSection';
import SectionHeading from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';

const AssistantPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <SectionHeading 
            title="AI Assistants" 
            subtitle="Our intelligent assistants combine natural language processing with domain expertise to provide personalized support and guidance."
          />
          
          <div className="mt-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="md:col-span-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-4">How Our AI Assistants Work</h3>
                  <p className="text-muted-foreground mb-4">
                    Our AI assistants are designed to understand natural language, learn from interactions, and provide relevant, contextual responses to your questions and needs.
                  </p>
                  
                  <div className="space-y-4 mt-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-medium">Natural Conversation</h4>
                        <p className="text-sm text-muted-foreground">
                          Simply type your questions or requests in everyday language. No need for special commands or formatting.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-3 flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-medium">Expert Knowledge</h4>
                        <p className="text-sm text-muted-foreground">
                          Each assistant is trained on specific domains to provide accurate, relevant information and guidance.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-sand-100 text-sand-800 flex items-center justify-center mr-3 flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-medium">Continuous Learning</h4>
                        <p className="text-sm text-muted-foreground">
                          Our AI improves with each interaction, becoming more helpful and personalized over time.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 flex-shrink-0">4</div>
                      <div>
                        <h4 className="font-medium">24/7 Availability</h4>
                        <p className="text-sm text-muted-foreground">
                          Get assistance anytime, day or night, without waiting for human support hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-4">Benefits</h3>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mt-0.5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Instant responses to common questions</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mt-0.5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Consistent quality in every interaction</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mt-0.5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Reduced wait times for support</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mt-0.5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Personalized guidance and recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mt-0.5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Scalable support that grows with your business</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mt-0.5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Multilingual capabilities for global reach</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <AssistantSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AssistantPage;
