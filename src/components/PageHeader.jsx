import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHeader({ title, subtitle, bgImage, breadcrumb }) {
  return (
    <div className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden bg-ink">
      {/* Background Image */}
      <img
        src={bgImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
      />
      {/* 45% Ink Overlay */}
      <div className="absolute inset-0 bg-ink/45" />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1240px] mx-auto h-full px-6 md:px-16 flex flex-col justify-end pb-16">
        {/* Breadcrumb */}
        <div className="text-white/70 text-sm font-medium mb-3 flex items-center gap-2">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">{breadcrumb}</span>
        </div>

        {/* H1 */}
        <h1 className="text-white text-4xl md:text-6xl font-serif max-w-3xl leading-tight mb-4">
          {title}
        </h1>

        {/* Short Line */}
        <p className="text-white/90 text-lg md:text-xl font-normal max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
