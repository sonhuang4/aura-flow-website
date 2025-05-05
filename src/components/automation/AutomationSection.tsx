
import React from 'react';
import AutomationCard from './AutomationCard';
import SectionHeading from '@/components/ui/section-heading';

const automations = [
  {
    title: "Lead Nurturing",
    description: "Automatically follow up with new leads through personalized email sequences and SMS reminders based on their interactions.",
    hookUrl: "https://example.gohighlevel.com/webhook/lead-nurture",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: "Appointment Reminders",
    description: "Send automated reminders via email and SMS at strategic intervals before scheduled appointments to reduce no-shows.",
    hookUrl: "https://example.gohighlevel.com/webhook/appointment-reminder",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: "Customer Feedback",
    description: "Collect and analyze feedback after service delivery through automated surveys, and route responses based on sentiment.",
    hookUrl: "https://example.gohighlevel.com/webhook/feedback-collection",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
];

const AutomationSection = () => {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <SectionHeading 
          title="GoHighLevel Automations" 
          subtitle="Streamline your operations with powerful workflow automations that handle routine tasks, freeing your team to focus on what matters."
          centered
        />
        
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
          {automations.map((automation, index) => (
            <AutomationCard 
              key={index}
              title={automation.title}
              description={automation.description}
              hookUrl={automation.hookUrl}
              icon={automation.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
