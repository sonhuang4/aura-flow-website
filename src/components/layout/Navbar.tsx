
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Automation', href: '/automation' },
    { name: 'AI Assistant', href: '/assistant' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary font-serif">AuraFlow</span>
        </Link>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link 
              key={link.name}
              to={link.href}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="button-gradient">
            <Link to="/book">Book Now</Link>
          </Button>
        </div>
        
        {/* Mobile navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="sm:max-w-sm">
              <div className="flex items-center justify-between mt-6">
                <span className="text-lg font-bold text-primary font-serif">AuraFlow</span>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex flex-col mt-6 space-y-4">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="px-4 py-2 text-foreground/80 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button asChild className="button-gradient mt-4 w-full">
                  <Link to="/book" onClick={() => setIsOpen(false)}>Book Now</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
