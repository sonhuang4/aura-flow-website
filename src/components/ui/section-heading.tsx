
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className,
}) => {
  return (
    <div className={cn(
      'max-w-3xl mb-12',
      centered ? 'mx-auto text-center' : '',
      className
    )}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl animate-fade-in">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
