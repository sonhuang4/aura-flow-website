
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface AutomationCardProps {
  title: string;
  description: string;
  hookUrl: string;
  icon: React.ReactNode;
}

const AutomationCard: React.FC<AutomationCardProps> = ({
  title,
  description,
  hookUrl,
  icon,
}) => {
  const { toast } = useToast();

  const triggerAutomation = () => {
    // In a real implementation, this would trigger the GHL automation webhook
    console.log(`Triggering automation webhook: ${hookUrl}`);
    
    toast({
      title: "Automation Triggered",
      description: `${title} workflow has been initiated.`,
    });
  };

  return (
    <Card className="card-hover">
      <CardHeader className="space-y-1">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 text-primary">
            {icon}
          </div>
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full" 
          onClick={triggerAutomation}
        >
          Trigger Workflow
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AutomationCard;
