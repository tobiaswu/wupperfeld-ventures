import Image from 'next/image';
import React from 'react';

const clientLogos = [
  {
    name: 'SAP',
    src: '/sap-logo.svg',
    alt: 'SAP Logo',
  },
  {
    name: 'ProcureAI',
    src: '/procureai-logo.svg',
    alt: 'ProcureAI Logo',
  },
  {
    name: 'JAN3',
    src: '/jan3-logo.svg',
    alt: 'JAN3 Logo',
  },
  {
    name: 'Canova',
    src: '/canova-logo.svg',
    alt: 'Canova Logo',
  },
  {
    name: 'Anchor',
    src: '/anchor-logo.svg',
    alt: 'Anchor Logo',
  },
];

export function ClientsLogos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
      {clientLogos.map((logo) => (
        <div
          key={logo.name}
          className="w-24 h-16 bg-steel-blue-600/20 rounded-lg flex items-center justify-center border border-steel-blue-600/30"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            className="max-h-12 max-w-[90px] object-contain"
            loading="lazy"
            draggable="false"
            width={100}
            height={100}
          />
        </div>
      ))}
    </div>
  );
} 