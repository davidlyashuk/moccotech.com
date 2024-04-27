import React from 'react';

export default function Hamburger() {
  return (
    <div className="flex flex-col justify-start items-center gap-[6px]">
      <div className="w-5 h-[2px] bg-slate-700 rounded"></div>
      <div className="w-5 h-[2px] bg-slate-700 rounded"></div>
    </div>
  );
}
