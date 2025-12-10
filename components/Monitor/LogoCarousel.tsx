"use client"

import LogoLoop from '../ui/LogoLoop';

const imageLogos = [
  { src: "/BESTBUY.svg", alt: "Company 1", href: "https://company1.com" },
  { src: "/COSTCO.svg", alt: "Company 2", href: "https://company2.com" },
  { src: "/TARGET.svg", alt: "Company 3", href: "https://company3.com" },
  { src: "/WALMART.svg", alt: "Company 3", href: "https://company3.com" },
  { src: "/SAMSCLUB.svg", alt: "Company 3", href: "https://company3.com" },
  { src: "/MACYS.svg", alt: "Company 3", href: "https://company3.com" },
  { src: "/POKEMONCENTER.svg", alt: "Company 3", href: "https://company3.com" },
];

export default function LogoCarousel() {
  return (
    <div className="w-full">
      <LogoLoop
        logos={imageLogos}
        speed={40}
        direction="left"
        logoHeight={120}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="transparent"
        ariaLabel="Monitors"
      />
    </div>
  );
}