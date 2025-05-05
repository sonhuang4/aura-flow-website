
import React from 'react';
import AiAssistantChat from './AiAssistantChat';
import SectionHeading from '@/components/ui/section-heading';

const assistants = [
  {
    id: 'business-advisor',
    name: 'Business Advisor',
    avatar: '💼',
    greeting: "Hello! I'm your Business Automation Advisor. I can help you identify workflow inefficiencies and recommend automation solutions tailored to your business needs. What challenges are you facing today?",
    expertise: ['Workflow Optimization', 'Process Automation', 'Business Efficiency']
  },
  {
    id: 'tech-support',
    name: 'Tech Support',
    avatar: '🔧',
    greeting: "Hi there! I'm your Technical Support Assistant. I'm here to help you troubleshoot any issues with your automations or AI integrations. How can I assist you today?",
    expertise: ['Technical Troubleshooting', 'Integration Support', 'System Setup']
  }
];

const AssistantSection = () => {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <SectionHeading 
          title="AI Assistants at Your Service" 
          subtitle="Our intelligent assistants are always ready to help with specialized knowledge and personalized support."
          centered
        />
        
        <div className="mt-12">
          <AiAssistantChat assistants={assistants} />
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                💼
              </div>
              <h3 className="text-lg font-medium">Business Advisor</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mt-0.5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Workflow efficiency analysis and recommendations</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mt-0.5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>ROI estimation for automation implementation</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mt-0.5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Industry-specific best practices for process optimization</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                🔧
              </div>
              <h3 className="text-lg font-medium">Tech Support</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mt-0.5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Troubleshooting integration issues and error messages</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mt-0.5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Step-by-step setup and configuration guidance</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mt-0.5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>System diagnostics and performance optimization</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssistantSection;
