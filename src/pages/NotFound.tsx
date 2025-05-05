
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! We can't find the page you're looking for.
          </p>
          <div className="max-w-xs mx-auto">
            <Button asChild className="w-full button-gradient">
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
