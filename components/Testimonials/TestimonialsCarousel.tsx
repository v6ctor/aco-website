"use client"

import LogoLoop from "../ui/LogoLoop"

const testimonials = [
  {
    name: "Alex M.",
    role: "Pokémon Collector",
    content: "TCG Dungeon's ACO has been a game changer! I've secured every limited release without lifting a finger. The monitors are lightning fast.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    role: "Reseller",
    content: "Best investment I've made. The early links feature alone pays for itself. I'm always ahead of the competition now.",
    rating: 5,
  },
  {
    name: "Mike T.",
    role: "Casual Collector",
    content: "I was skeptical at first, but the free trial convinced me. The Discord notifications are instant and the ACO success rate is incredible.",
    rating: 5,
  },
  {
    name: "Jessica R.",
    role: "TCG Enthusiast",
    content: "Finally, no more missing out on Target drops! The vending machine schedules are spot on. Worth every penny.",
    rating: 5,
  },
  {
    name: "David L.",
    role: "Professional Reseller",
    content: "The Gold tier is absolutely worth it. Unlimited ACO has helped me scale my business 3x in just two months.",
    rating: 5,
  },
  {
    name: "Emma W.",
    role: "Collection Builder",
    content: "Support team is amazing and the community is super helpful. This isn't just a service, it's a complete ecosystem.",
    rating: 5,
  },
]

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="relative w-[350px] rounded-2xl bg-linear-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-xl border border-zinc-800/50 p-6 shadow-xl hover:border-zinc-700/50 transition-all duration-300">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
      <p className="text-zinc-300 text-sm leading-relaxed mb-4">
        "{testimonial.content}"
      </p>
      <div className="border-t border-zinc-800/50 pt-4">
        <p className="text-white font-semibold text-sm">{testimonial.name}</p>
        <p className="text-zinc-500 text-xs">{testimonial.role}</p>
      </div>
    </div>
  )
}

const testimonials2 = [
  {
    name: "Brandon P.",
    role: "TCG Investor",
    content: "The ROI on this service is insane. I've easily made back 10x what I pay monthly. The automation saves me hours every week.",
    rating: 5,
  },
  {
    name: "Nicole H.",
    role: "Gift Shopper",
    content: "Perfect for getting gifts for my son. I never have to worry about missing Pokemon releases anymore. Setup was super easy too!",
    rating: 5,
  },
  {
    name: "Chris D.",
    role: "Store Owner",
    content: "Game changer for my retail business. The early information gives me a massive edge over competitors. Highly recommend!",
    rating: 5,
  },
  {
    name: "Amanda S.",
    role: "Collector",
    content: "Been using for 6 months now and haven't missed a single drop. The Discord notifications are instant and the support is top-tier.",
    rating: 5,
  },
  {
    name: "Tyler J.",
    role: "Casual User",
    content: "Even the Silver tier is worth it. Got my daughter's favorite set on release day without any stress. Thank you TCG Dungeon!",
    rating: 5,
  },
  {
    name: "Rachel V.",
    role: "Full-Time Flipper",
    content: "This service literally pays my bills. The ACO success rate is unmatched and the vending machine intel is gold.",
    rating: 5,
  },
]

// Convert testimonials to LogoLoop format
const testimonialsRow1 = testimonials.map((testimonial) => ({
  node: <TestimonialCard testimonial={testimonial} />,
}))

const testimonialsRow2 = testimonials2.map((testimonial) => ({
  node: <TestimonialCard testimonial={testimonial} />,
}))

export default function TestimonialsCarousel() {
  return (
    <div className="w-full space-y-4">
      <LogoLoop
        logos={testimonialsRow1}
        speed={40}
        direction="left"
        logoHeight={20}
        gap={16}
        hoverSpeed={0}
        fadeOut
        fadeOutColor="transparent"
        ariaLabel="Customer Testimonials"
      />
      <LogoLoop
        logos={testimonialsRow2}
        speed={40}
        direction="right"
        logoHeight={20}
        gap={16}
        hoverSpeed={0}
        fadeOut
        fadeOutColor="transparent"
        ariaLabel="Customer Testimonials"
      />
    </div>
  )
}
