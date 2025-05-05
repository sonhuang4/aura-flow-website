
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SectionHeading from '@/components/ui/section-heading';

interface BookingCalendarProps {
  ghlCalendarUrl?: string;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ 
  ghlCalendarUrl = "https://example.gohighlevel.com/v2/cal/demo-calendar" 
}) => {
  const [selectedTab, setSelectedTab] = useState("consultation");
  
  const bookingOptions = [
    {
      id: "consultation",
      title: "Initial Consultation",
      duration: "30 min",
      description: "Discover how our automation and AI solutions can benefit your business."
    },
    {
      id: "demo",
      title: "Product Demo",
      duration: "45 min",
      description: "See our platform in action with a guided walkthrough of features."
    },
    {
      id: "strategy",
      title: "Strategy Session",
      duration: "60 min",
      description: "Develop a customized implementation plan for your specific needs."
    }
  ];

  return (
    <div className="py-8">
      <SectionHeading 
        title="Schedule Your Session" 
        subtitle="Choose the type of meeting that best suits your needs and select a convenient time."
        centered
      />
      
      <Card className="mt-8 overflow-hidden">
        <Tabs defaultValue="consultation" onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-3">
            {bookingOptions.map(option => (
              <TabsTrigger key={option.id} value={option.id}>
                {option.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {bookingOptions.map(option => (
            <TabsContent key={option.id} value={option.id} className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-6 md:p-8 bg-muted/50">
                  <h3 className="text-xl font-medium mb-2">{option.title}</h3>
                  <div className="text-sm text-muted-foreground mb-2">Duration: {option.duration}</div>
                  <p className="text-muted-foreground">{option.description}</p>
                  
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <div>
                        <div className="font-medium">Location</div>
                        <div className="text-sm text-muted-foreground">Virtual (Zoom)</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <div className="font-medium">Timezone</div>
                        <div className="text-sm text-muted-foreground">Detected automatically</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-span-2 ghl-calendar">
                  <div className="p-8 h-full flex flex-col justify-center items-center bg-accent/10">
                    <div className="w-full max-w-md text-center">
                      <div className="animate-pulse mb-8">
                        <div className="h-8 bg-muted rounded mb-4 w-3/4 mx-auto"></div>
                        <div className="h-4 bg-muted rounded mb-2 w-2/3 mx-auto"></div>
                        <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>
                      </div>
                      
                      <div className="text-muted-foreground">
                        <p>This is where the GoHighLevel calendar would be embedded.</p>
                        <p className="mt-2 text-sm">In a production environment, this would load the real calendar from:</p>
                        <code className="mt-2 inline-block bg-muted p-2 rounded text-xs">{ghlCalendarUrl}</code>
                      </div>
                    </div>
                  </div>
                  
                  {/* Uncomment for actual GHL calendar integration */}
                  {/* <iframe 
                    src={`${ghlCalendarUrl}?option=${selectedTab}`}
                    frameBorder="0"
                    scrolling="auto"
                    title="Booking Calendar"
                  ></iframe> */}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Card>
    </div>
  );
};

export default BookingCalendar;
