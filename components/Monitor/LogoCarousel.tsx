"use client"

import { Marquee } from '../ui/marquee';
import Image from 'next/image';

const imageLogos = [
  { src: "/BESTBUY.svg", alt: "Best Buy" },
  { src: "/COSTCO.svg", alt: "Costco" },
  { src: "/TARGET.svg", alt: "Target" },
  { src: "/WALMART.svg", alt: "Walmart" },
  { src: "/SAMSCLUB.svg", alt: "Sam's Club" },
  { src: "/MACYS.svg", alt: "Macy's" },
  { src: "/POKEMONCENTER.svg", alt: "Pokémon Center" },
];

export default function LogoCarousel() {
  return (
    <Marquee pauseOnHover className="[--duration:40s]">
      {imageLogos.map((logo, index) => (
        <div
          key={index}
          className="flex items-center justify-center transition-transform duration-300 hover:scale-110"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={120}
            className="h-[80px] md:h-[120px] w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      ))}
    </Marquee>
  );
}