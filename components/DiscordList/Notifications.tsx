"use client"

import { cn } from "@/lib/utils"
import { AnimatedList } from "@/components/ui/animated-list"

interface Item {
  name: string
  description: string
  icon: string
  color: string
  time: string
  productImage?: string
}

let notifications = [
  {
    name: "Successful Checkout!",
    description: "Pokémon Trading Card Game: Scarlet & Violet — Destined Rivals Booster Bundle",
    time: "15m ago",
    icon: "/Discord-Symbol-Black.svg",
    color: "#5865F2",
    productImage: "/GUEST_3a795297-b431-4aeb-80fb-327192381e7f.avif",
  },
  {
    name: "Successful Checkout!",
    description: "Pokémon TCG: Mega Charizard X ex Ultra-Premium Collection",
    time: "10m ago",
    icon: "/Discord-Symbol-Black.svg",
    color: "#5865F2",
    productImage: "/P10448_10-10065-109_01.jpg",
  },
  {
    name: "Successful Checkout!",
    description: "Pokémon Trading Card Game: Scarlet & Violet — Prismatic Evolutions Premium Figure Collection",
    time: "5m ago",
    icon: "/Discord-Symbol-Black.svg",
    color: "#5865F2",
    productImage: "/GUEST_e9d48ed2-8fb7-474d-9461-05f5a19eb3b2.avif",
  },
  {
    name: "Successful Checkout!",
    description: "Pokémon TCG: Mega Evolution-Ascended Heroes Pokémon Center Elite Trainer Box",
    time: "2m ago",
    icon: "/Discord-Symbol-Black.svg",
    color: "#5865F2",
    productImage: "/P11425_10-10315-108_01.jpg",
  },
]

notifications = Array.from({ length: 10 }, () => notifications).flat()

const Notification = ({ name, description, icon, color, time, productImage }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[500px] cursor-pointer overflow-hidden rounded-2xl p-4" ,
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // glassmorphic dark card
        "bg-transparent backdrop-blur-md [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] border border-white/10"
      )}
    >
      <div className="flex flex-row items-center gap-4">
        <div className="bg-yellow-500 w-1 min-h-[60px] rounded-full self-stretch" />

        <div
          className="flex size-12 shrink-0 items-center justify-center rounded-xl"
          style={{
            backgroundColor: color,
          }}
        >
          <img
            src={icon}
            alt="Discord"
            className="size-6 brightness-0 invert"
          />
        </div>

        <div className="flex flex-col overflow-hidden flex-1 gap-1">
          <figcaption className="flex flex-row items-center whitespace-pre text-white">
            <span className="text-sm sm:text-base font-semibold">{name}</span>
            <span className="mx-2 text-white/40">·</span>
            <span className="text-xs text-white/50">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-white/70 line-clamp-2">
            {description}
          </p>
        </div>

        {productImage && (
          <div className="shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-white/5 border border-white/10">
            <img
              src={productImage}
              alt={description}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/100x100/5865F2/white?text=PKM";
              }}
            />
          </div>
        )}
      </div>
    </figure>
  )
}

export function DiscordAnimatedList({
  className,
}: {
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
    </div>
  )
}
