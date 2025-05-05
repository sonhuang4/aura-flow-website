
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

interface AssistantConfig {
  id: string;
  name: string;
  avatar: string;
  greeting: string;
  expertise: string[];
}

interface AiAssistantChatProps {
  assistants: AssistantConfig[];
}

const AiAssistantChat: React.FC<AiAssistantChatProps> = ({ assistants }) => {
  const [activeAssistant, setActiveAssistant] = useState<string>(assistants[0]?.id || '');
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ [key: string]: Message[] }>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat history for each assistant
  useEffect(() => {
    const initialHistory: { [key: string]: Message[] } = {};
    
    assistants.forEach(assistant => {
      initialHistory[assistant.id] = [
        {
          id: 1,
          content: assistant.greeting,
          sender: 'assistant',
          timestamp: new Date()
        }
      ];
    });
    
    setChatHistory(initialHistory);
  }, [assistants]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message to chat
    const userMessage: Message = {
      id: chatHistory[activeAssistant].length + 1,
      content: message,
      sender: 'user',
      timestamp: new Date()
    };
    
    setChatHistory(prev => ({
      ...prev,
      [activeAssistant]: [...prev[activeAssistant], userMessage]
    }));
    
    setMessage('');
    
    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      const currentAssistant = assistants.find(a => a.id === activeAssistant);
      
      const responseOptions = [
        `I'd be happy to help with that! As ${currentAssistant?.name}, I can provide insights on ${currentAssistant?.expertise.join(', ')}.`,
        `That's a great question. Based on my expertise in ${currentAssistant?.expertise[0]}, I would suggest...`,
        `I understand what you're asking. Let me provide some guidance on this topic.`,
        `Thanks for your question. I'm analyzing the best approach for your specific needs.`,
        `I appreciate you reaching out. Here's how I'd approach this situation...`
      ];
      
      const aiResponse: Message = {
        id: chatHistory[activeAssistant].length + 2,
        content: responseOptions[Math.floor(Math.random() * responseOptions.length)],
        sender: 'assistant',
        timestamp: new Date()
      };
      
      setChatHistory(prev => ({
        ...prev,
        [activeAssistant]: [...prev[activeAssistant], aiResponse]
      }));
    }, 1000);
  };

  const getAssistantById = (id: string) => {
    return assistants.find(assistant => assistant.id === id);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <Tabs defaultValue={activeAssistant} onValueChange={setActiveAssistant}>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>AI Assistants</CardTitle>
            <TabsList>
              {assistants.map(assistant => (
                <TabsTrigger key={assistant.id} value={assistant.id}>
                  {assistant.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </CardHeader>
        
        <CardContent>
          {assistants.map(assistant => (
            <TabsContent key={assistant.id} value={assistant.id} className="m-0">
              <div className="bg-muted/30 p-3 rounded-md mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {assistant.avatar}
                  </div>
                  <div>
                    <div className="font-medium">{assistant.name}</div>
                    <div className="text-xs text-muted-foreground">
                      Expert in: {assistant.expertise.join(', ')}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="ai-assistant-container border rounded-md p-4 mb-4">
                {chatHistory[assistant.id]?.map((msg, index) => (
                  <div 
                    key={index}
                    className={`mb-4 ${
                      msg.sender === 'user' ? 'text-right' : 'text-left'
                    }`}
                  >
                    <div 
                      className={`inline-block max-w-[80%] rounded-lg px-4 py-2 ${
                        msg.sender === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted'
                      }`}
                    >
                      {msg.content}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </TabsContent>
          ))}
        </CardContent>
        
        <CardFooter>
          <form onSubmit={handleSendMessage} className="w-full flex space-x-2">
            <Input
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder={`Ask ${getAssistantById(activeAssistant)?.name} a question...`}
              className="flex-1"
            />
            <Button type="submit" disabled={!message.trim()}>
              Send
            </Button>
          </form>
        </CardFooter>
      </Tabs>
    </Card>
  );
};

export default AiAssistantChat;
