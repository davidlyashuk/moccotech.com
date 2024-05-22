import React, { ReactNode } from 'react';

export default function BlogSidebar({ children }: { children: ReactNode }) {
  return (
    <aside className="w-full md:w-1/4 relative">
      <div className="sticky top-20 flex flex-col gap-3">{children}</div>
    </aside>
  );
}
