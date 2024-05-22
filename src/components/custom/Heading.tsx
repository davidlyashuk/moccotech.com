import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  type?: string;
}

export default function Heading({ children, type = 'h1' }: HeadingProps) {
  if (type === 'h6')
    return <h6 className="text-lg font-heading text-slate-800">{children}</h6>;
  if (type === 'h5')
    return <h5 className="text-lg font-heading text-slate-800">{children}</h5>;
  if (type === 'h4')
    return <h4 className="text-xl font-heading text-slate-800">{children}</h4>;
  if (type === 'h3')
    return (
      <h3 className="text-xl font-heading font-medium text-slate-800">
        {children}
      </h3>
    );
  if (type === 'h2')
    return (
      <h2 className="text-2xl font-heading font-medium text-slate-800">
        {children}
      </h2>
    );
  if (type === 'h1')
    return (
      <h1 className="text-2xl lg:text-3xl font-heading font-medium text-slate-800">
        {children}
      </h1>
    );
}
