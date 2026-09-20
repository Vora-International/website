import fs from 'fs';
import path from 'path';

const publicDir = './public';
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Logo SVG (Dark Ink & Deep Green)
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 64" fill="none">
  <g transform="translate(0, 8)">
    <circle cx="24" cy="24" r="22" fill="#145C43" />
    <path d="M24 8 C18 16 14 22 14 27 A10 10 0 0 0 34 27 C34 22 30 16 24 8 Z" fill="#22B573" />
    <path d="M24 14 C20 20 17 24 17 27 A7 7 0 0 0 31 27 C31 24 28 20 24 14 Z" fill="#FFFFFF" opacity="0.9" />
  </g>
  <text x="60" y="32" font-family="'Playfair Display', 'Instrument Serif', Georgia, serif" font-size="24" font-weight="600" fill="#0E1A16" letter-spacing="1">VORA</text>
  <text x="60" y="48" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#5C6661" letter-spacing="2.5">INTERNATIONAL</text>
</svg>`;

// 2. Logo White SVG (For dark heroes)
const logoWhiteSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 64" fill="none">
  <g transform="translate(0, 8)">
    <circle cx="24" cy="24" r="22" fill="#145C43" />
    <path d="M24 8 C18 16 14 22 14 27 A10 10 0 0 0 34 27 C34 22 30 16 24 8 Z" fill="#22B573" />
    <path d="M24 14 C20 20 17 24 17 27 A7 7 0 0 0 31 27 C31 24 28 20 24 14 Z" fill="#FFFFFF" />
  </g>
  <text x="60" y="32" font-family="'Playfair Display', 'Instrument Serif', Georgia, serif" font-size="24" font-weight="600" fill="#FFFFFF" letter-spacing="1">VORA</text>
  <text x="60" y="48" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#E3E1D9" letter-spacing="2.5">INTERNATIONAL</text>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'logo.svg'), logoSvg);
fs.writeFileSync(path.join(publicDir, 'logo-white.svg'), logoWhiteSvg);

// Helper for generating visual SVG images
function makeImage(title, subtitle, bg1, bg2, accentColor = "#145C43", iconType = "water") {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bg1}" />
        <stop offset="100%" stop-color="${bg2}" />
      </linearGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" stroke-opacity="0.05" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="1200" height="800" fill="url(#grad)" />
    <rect width="1200" height="800" fill="url(#grid)" />
    
    <!-- Abstract shapes -->
    <circle cx="950" cy="200" r="350" fill="${accentColor}" opacity="0.15" />
    <circle cx="100" cy="700" r="250" fill="#22B573" opacity="0.1" />
    
    <!-- Decorative graphic lines -->
    <path d="M0,600 Q300,500 600,650 T1200,550" fill="none" stroke="${accentColor}" stroke-width="2" opacity="0.3" />
    <path d="M0,640 Q300,540 600,690 T1200,590" fill="none" stroke="#22B573" stroke-width="1.5" opacity="0.2" />

    <!-- Content Center / Overlay -->
    <g transform="translate(100, 480)">
      <rect x="-20" y="-80" width="750" height="240" rx="8" fill="#0E1A16" fill-opacity="0.75" />
      <text x="20" y="-20" font-family="'Playfair Display', Georgia, serif" font-size="44" font-weight="600" fill="#FFFFFF">${title}</text>
      <text x="20" y="30" font-family="Inter, sans-serif" font-size="20" font-weight="400" fill="#E3E1D9">${subtitle}</text>
      <text x="20" y="80" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#22B573" letter-spacing="2">VORA INTERNATIONAL LIMITED • NAIROBI, KENYA</text>
    </g>
  </svg>`;
}

// Generate Image Assets
const assets = [
  { name: 'hero-main.jpg', title: 'Complete WASH Infrastructure', subtitle: 'Certified water, sanitation and hygiene solutions across Kenya', bg1: '#0E1A16', bg2: '#145C43' },
  { name: 'water.jpg', title: 'Certified Water Solutions', subtitle: 'Drinking water, purification systems and high-capacity storage', bg1: '#0E241E', bg2: '#145C43' },
  { name: 'sanitation.jpg', title: 'Institutional Sanitation Facilities', subtitle: 'Sanitary disposal, washroom supplies and deep disinfection', bg1: '#145C43', bg2: '#0E1A16' },
  { name: 'hygiene.jpg', title: 'Touchless Hygiene Stations', subtitle: 'Hand sanitiser stations, soap dispensers and menstrual products', bg1: '#0E1A16', bg2: '#196B50' },
  { name: 'installation.jpg', title: 'Installation & Technical Servicing', subtitle: 'Commissioning, maintenance and scheduled WASH checks', bg1: '#145C43', bg2: '#22B573' },
  { name: 'delivery.jpg', title: 'Scheduled Fixed-Day Resupply', subtitle: 'Reliable logistics delivering essential supplies across Kenya', bg1: '#0E1A16', bg2: '#145C43' },

  // Sectors
  { name: 'sector-schools.jpg', title: 'Primary & Secondary Schools', subtitle: 'Safe water and hygiene facilities for Kenya youth', bg1: '#0E241E', bg2: '#145C43' },
  { name: 'sector-health.jpg', title: 'Hospitals & Medical Clinics', subtitle: 'Medical-grade sanitation and infection control', bg1: '#145C43', bg2: '#0E1A16' },
  { name: 'sector-churches.jpg', title: 'Churches & Community Hubs', subtitle: 'High-capacity hygiene stations for large gatherings', bg1: '#0E1A16', bg2: '#196B50' },
  { name: 'sector-offices.jpg', title: 'Corporate Workplaces', subtitle: 'Premium executive washrooms and drinking water', bg1: '#196B50', bg2: '#0E1A16' },
  { name: 'sector-hotels.jpg', title: 'Hotels & Hospitality', subtitle: 'Uncompromised guest hygiene and water quality', bg1: '#0E241E', bg2: '#145C43' },
  { name: 'sector-food.jpg', title: 'Food & Beverage Outlets', subtitle: 'Food safety compliant sanitisation infrastructure', bg1: '#145C43', bg2: '#22B573' },

  // Headers
  { name: 'header-solutions.jpg', title: 'WASH Solutions for Kenya', subtitle: 'Water, sanitation and hygiene from one trusted partner', bg1: '#0E1A16', bg2: '#145C43' },
  { name: 'header-how-it-works.jpg', title: 'Our Process & Standards', subtitle: 'From initial WASH check to scheduled maintenance', bg1: '#145C43', bg2: '#0E1A16' },
  { name: 'header-foundation.jpg', title: 'Vora Foundation', subtitle: 'WASH education and menstrual health empowerment', bg1: '#0E241E', bg2: '#196B50' },
  { name: 'header-about.jpg', title: 'About Vora International', subtitle: 'Founded in Nairobi around public health excellence', bg1: '#196B50', bg2: '#0E1A16' },
  { name: 'header-partners.jpg', title: 'Partnerships & Investment', subtitle: 'Building sustainable WASH impact across East Africa', bg1: '#0E1A16', bg2: '#145C43' },
  { name: 'header-contact.jpg', title: 'Request a WASH Check', subtitle: 'Book your institutional assessment today', bg1: '#145C43', bg2: '#0E241E' },
];

assets.forEach(a => {
  fs.writeFileSync(path.join(publicDir, a.name), makeImage(a.title, a.subtitle, a.bg1, a.bg2));
});

// Team Portraits (team-1.jpg to team-5.jpg)
const teamMembers = [
  { name: 'team-1.jpg', title: 'Managing Director', nameText: 'Dr. Kennedy Ochieng' },
  { name: 'team-2.jpg', title: 'Finance and HR Lead', nameText: 'Aminat Wanjiku' },
  { name: 'team-3.jpg', title: 'Operations Lead', nameText: 'Samuel Kiprop' },
  { name: 'team-4.jpg', title: 'Marketing Lead', nameText: 'Grace Muthoni' },
  { name: 'team-5.jpg', title: 'Design & Brand Lead', nameText: 'David Mutua' }
];

teamMembers.forEach(t => {
  const teamSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
    <rect width="600" height="800" fill="#14221D" />
    <circle cx="300" cy="320" r="160" fill="#145C43" />
    <path d="M300,180 A120,120 0 1 0 300,420 A120,120 0 1 0 300,180 Z" fill="#22B573" opacity="0.3" />
    <!-- Silhouette Graphic -->
    <circle cx="300" cy="280" r="80" fill="#E3E1D9" opacity="0.9" />
    <path d="M160,540 C160,420 440,420 440,540 L440,640 L160,640 Z" fill="#E3E1D9" opacity="0.9" />
    <rect x="40" y="660" width="520" height="100" rx="4" fill="#0E1A16" />
    <text x="70" y="710" font-family="'Playfair Display', Georgia, serif" font-size="28" font-weight="600" fill="#FFFFFF">${t.nameText}</text>
    <text x="70" y="740" font-family="Inter, sans-serif" font-size="16" font-weight="500" fill="#22B573">${t.title}</text>
  </svg>`;
  fs.writeFileSync(path.join(publicDir, t.name), teamSvg);
});

console.log('All image assets created successfully in /public!');
