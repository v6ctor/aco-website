"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button";
import { DatabaseZap, Link, PackageCheck, LibraryBig, ArrowRight } from "lucide-react"
import  LogoCarousel from "@/components/Monitor/LogoCarousel"
import { DiscordAnimatedList } from "@/components/DiscordList/Notifications"
import { MonitorNotification } from "@/components/Monitor/MonitorNotification"
import { WorkflowSteps } from "@/components/Workflow/WorkflowSteps"
import TestimonialsCarousel from "@/components/Testimonials/TestimonialsCarousel"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      Icon: PackageCheck,
      name: "Reliable & unlimited ACO",
      description: "Send checkouts straight to your email without ever moving a finger.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -top-20 -right-20 opacity-60" />,
      className: "col-span-3 lg:col-span-1 h-60",
      gradient: "from-slate-700/10 to-slate-800/10",
      iconColor: "text-slate-300 dark:text-slate-400",
      iconBg: "bg-slate-700/10 dark:bg-slate-700/20",
      border: "border-yellow-600/50 dark:border-slate-700/20",
    },
    {
      Icon: DatabaseZap,
      name: "Blazing-fast monitors",
      description: "Forget Twitter pings. Get notifications for 30+ retailers with 99.9% uptime.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -top-20 -right-20 opacity-60" />,
      className: "col-span-3 lg:col-span-1 h-60",
      gradient: "from-slate-700/10 to-slate-800/10",
      iconColor: "text-slate-300 dark:text-slate-400",
      iconBg: "bg-slate-700/10 dark:bg-slate-700/20",
      border: "border-slate-600/50 dark:border-slate-700/20",
    },
    {
      Icon: Link,
      name: "Early-links & information",
      description: "Access to Target, Walmart, Bestbuy, and Macy's early information.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -top-20 -right-20 opacity-60" />,
      className: "col-span-3 lg:col-span-1 h-60",
      gradient: "from-slate-700/10 to-slate-800/10",
      iconColor: "text-slate-300 dark:text-slate-400",
      iconBg: "bg-slate-700/10 dark:bg-slate-700/20",
      border: "border-slate-600/50 dark:border-slate-700/20",
    },
    {
      Icon: LibraryBig,
      name: "Release guides & support",
      description: "Stay ahead with release details, guides, and support before launch",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -top-20 -right-20 opacity-60" />,
      className: "col-span-3 lg:col-span-1 h-60",
      gradient: "from-slate-700/10 to-slate-800/10",
      iconColor: "text-slate-300 dark:text-slate-400",
      iconBg: "bg-slate-700/10 dark:bg-slate-700/20",
      border: "border-slate-600/50 dark:border-slate-700/20",
    }
  ];

  return (
    <div className="flex flex-col relative justify-center items-center min-h-screen transition-colors duration-300 bg-zinc-950 overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>
      <nav className="fixed z-50 top-6 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6">
        <div className="backdrop-blur-xl rounded-full px-6 lg:px-8 bg-zinc-900/50 border border-zinc-800/50">
          <div className="flex justify-between items-center h-16">
            <div className="shrink-0">
              <img
                src={"/tcgvectorai_2.png"}
                className="h-24 w-auto object-contain object-left opacity-90"
                alt="Logo"
              />
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300 relative group"
              >
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300 relative group"
              >
                Testimonials
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300 relative group"
              >
                Pricing
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            <div className="hidden md:flex items-center">
              <a
                href="https://discord.gg/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-zinc-100 text-zinc-900 rounded-full font-medium text-sm transition-all duration-300">
                <img
                  src="/Discord-Symbol-Black.svg"
                  alt=""
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                />
                <span>Dashboard</span>
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-zinc-800/50 rounded-full transition-all duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-5 w-5 text-zinc-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg
                  className="h-5 w-5 text-zinc-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 backdrop-blur-xl rounded-2xl px-6 py-4 bg-zinc-900/50 border border-zinc-800/50">
            <div className="flex flex-col gap-4">
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300 py-2"
              >
                Features
              </a>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300 py-2"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300 py-2"
              >
                Pricing
              </a>
              <a
                href="https://discord.gg/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white hover:bg-zinc-100 text-zinc-900 rounded-full font-medium text-sm transition-all duration-300 mt-2"
              >
                <img
                  src="/Discord-Symbol-Black.svg"
                  alt=""
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                />
                <span>Dashboard</span>
              </a>
            </div>
          </div>
        )}
      </nav>
      <main className="flex flex-col gap-6 sm:gap-8 w-full max-w-5xl px-3 sm:px-4 md:px-8 justify-center items-center transition-colors duration-300 pt-24 sm:pt-32 pb-16 sm:pb-20 relative z-10">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center py-8 sm:py-12 md:py-20">
            <div className="flex flex-col gap-6 sm:gap-8 justify-center items-center lg:items-start order-1 lg:order-1 min-w-0">
              <div className="space-y-4 sm:space-y-6 text-center lg:text-left w-full text-pretty">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] break-words">
                  <span className="text-white">Sold out? </span>
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                      Not for you
                    </span>
                    <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-yellow-400/0 via-yellow-400/80 to-yellow-400/0 rounded-full"></span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed break-words mx-auto lg:mx-0">
                  Wake up to order confirmations. Our bots checkout for you automatically and send success notifications straight to your Discord DMs.
                </p>
              </div>
              <DiscordAnimatedList className="w-full bg-transparent" />
            </div>

            <div className="flex flex-col gap-6 sm:gap-10 justify-center items-center lg:items-start order-2 lg:order-2 min-w-0">
              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4 text-center lg:text-left text-balance">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight text-white leading-tight">
                    Join 1,000+ members inside
                  </h2>
                  <p className="text-sm sm:text-base md:text-md text-zinc-400 leading-relaxed">
                    Stop missing out on limited releases. Our automated checkout service runs 24/7 across <span className="font-bold text-white">Target, Walmart, Best Buy, Pokémon Center, and more</span>, so you never have to worry about sold-out drops again. <br/><br/>
                    ACO not for you? We have <span className="font-bold text-white">lightning-fast monitors, early information, and expert guides</span> to keep you ahead of the game.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 py-3 sm:py-4">
                  <div className="text-center space-y-1">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">5★ Community</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-zinc-400">Rated by 30+ members</div>
                  </div>
                  <div className="text-center space-y-1">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">$0 due today</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-zinc-400">No strings attached</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center space-y-3 sm:space-y-4 w-full">
                <a
                  href="https://discord.gg/EFV9kGC3n4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button
                    size="lg"
                    className="w-full text-xs sm:text-sm h-12 sm:h-14 rounded-full font-semibold bg-white hover:bg-zinc-100 text-zinc-900 shadow-lg hover:shadow-xl transition-[transform,background-color,box-shadow] duration-300 hover:scale-[101%] cursor-pointer"
                  >
                    Join Discord
                    <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
                  </Button>
                </a>
                <a
                  href="#pricing"
                  className="block w-full"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full text-xs sm:text-sm h-12 sm:h-14 rounded-full font-semibold bg-transparent hover:bg-zinc-900 text-white border-zinc-700 hover:border-zinc-600 transition-all duration-300 cursor-pointer"
                  >
                    View Pricing Plans
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-block">
          <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-zinc-900/30 backdrop-blur-sm text-zinc-400 text-[10px] sm:text-xs font-medium tracking-widest uppercase border border-zinc-800/50">
            OVERVIEW
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-3 sm:pt-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-linear-to-br ${feature.gradient} backdrop-blur-sm transition-all duration-300 hover:scale-[101%] border ${feature.border} shadow-xl hover:shadow-2xl overflow-hidden`}
              >
                <div className="absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 space-y-3 sm:space-y-4">
                  <div className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl ${feature.iconBg} w-fit shadow-lg`}>
                    <feature.Icon className={`h-4 sm:h-5 w-4 sm:w-5 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-base sm:text-lg font-light text-white">{feature.name}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {feature.description}
                  </p>
                  <a
                    href={feature.href}
                    className={`inline-flex items-center text-xs sm:text-sm font-medium ${feature.iconColor} hover:opacity-80 transition-all duration-300 group/link`}
                  >
                    {feature.cta}
                    <ArrowRight className="ml-1.5 sm:ml-2 h-3 sm:h-4 w-3 sm:w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        <section
          id="features"
          className="flex flex-col gap-16 pt-18 justify-center items-center w-full"
        >
          <div className="text-center space-y-8 mx-auto w-full">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-zinc-900/30 backdrop-blur-sm text-zinc-400 text-xs font-medium tracking-widest uppercase border border-zinc-800/50">
                FEATURES
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light text-white tracking-tight px-3 sm:px-4">
              Supported Site Monitors & ACO
            </h2>
            <p className="text-base sm:text-sm md:text-lg text-zinc-400 mx-auto leading-relaxed text-wrap">
              Never miss a restock with instant notifications and automated checkouts. We specialize in these retailers to maximize your success.
            </p>
            <div className="w-full overflow-hidden">
              <LogoCarousel />
            </div>
            <WorkflowSteps
              steps={[
                {
                  number: 1,
                  title: "Simple Setup",
                  description: "Fill out a secure Google Form with your email, payment info, and shipping address details once. Your information is encrypted and stored safely.",
                  color: "green-500",
                  iconBg: "bg-green-500/10",
                  hoverBorder: "border-green-500/30",
                  icon: (
                    <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  number: 2,
                  title: "Lightning-Fast ACO",
                  description: "Our bots monitor retailers 24/7 and checkout in seconds when products drop. We target high-profit items but also take requests.",
                  color: "blue-500",
                  iconBg: "bg-blue-500/10",
                  hoverBorder: "border-blue-500/30",
                  icon: (
                    <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
                {
                  number: 3,
                  title: "Instant Confirmation",
                  description: "After our bots checkout, you'll receive Discord DM notifications with your order confirmation. No more refreshing pages or checking emails, you'll know you secured your item within seconds of the drop.",
                  color: "purple-500",
                  iconBg: "bg-purple-500/10",
                  hoverBorder: "border-purple-500/30",
                  icon: (
                    <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  ),
                },
              ]}
            />
          </div>

          <div className="space-y-14 pt-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
                Real-time Discord Alerts
              </h2>
              <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Get instant notifications with detailed product information, stock levels, and quick purchase links
              </p>
            </div>
            <div className="flex flex-col gap-4 overflow-x-auto md:overflow-visible">
              <MonitorNotification
                productImage="\GUEST_e4b750a2-a6c6-4a5f-a485-259bb3da3245.avif"
                productName="Pokémon Trading Card Game: Scarlet & Violet—Prismatic Evolutions Elite Trainer Box"
                tcin="93954435"
              />
              <MonitorNotification
                productImage="\GUEST_c56277db-f6cd-43b1-89d3-818e3e0a020a.avif"
                productName="Pokémon Trading Card Game: Crown Zenith Booster Bundle Box"
                tcin="94091405"

              />
            </div>
          </div>

          <div className="text-center space-y-6 pt-8">
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
              Accurate TPCi Vending Machine <br className="hidden md:block" />
              Restock Schedules
            </h2>
            <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Know exactly when machines restock and secure products before anyone else
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto w-full">
            <div className="relative group overflow-hidden rounded-2xl bg-linear-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-xl border border-zinc-800/50 shadow-2xl hover:shadow-xl hover:border-zinc-700/50 transition-all duration-300 hover:scale-[101%]">
              <img
                src="/IMG_2868.jpg"
                alt="TPCi Vending Machine"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative group overflow-hidden rounded-2xl bg-linear-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-xl border border-zinc-800/50 shadow-2xl hover:shadow-xl hover:border-zinc-700/50 transition-all duration-300 hover:scale-[101%]">
              <img
                src="/IMG_2867.jpg"
                alt="TPCi Vending Machine Schedule"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="flex flex-col gap-16 w-full pt-18 justify-center items-center"
        >
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-zinc-900/30 backdrop-blur-sm text-zinc-400 text-xs font-medium tracking-widest uppercase border border-zinc-800/50">
                TESTIMONIALS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight">
              Aren't convinced yet? See what our members are saying
            </h2>
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
              Find these reviews and more at <span className="font-bold">whop.com/tcgdungeon</span>
            </p>
          </div>

          <div className="w-full">
            <TestimonialsCarousel />
          </div>
        </section>

        <section
          id="pricing"
          className="flex flex-col gap-16 w-full pt-18 justify-center items-center"
        >
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-zinc-900/30 backdrop-blur-sm text-zinc-400 text-xs font-medium tracking-widest uppercase border border-zinc-800/50">
                PRICING
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight">
              Choose Your Plan
            </h2>
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
              Start free or upgrade for priority access and exclusive features
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
            <div className="relative group p-8 rounded-3xl bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[102%] hover:border-zinc-700/50 flex flex-col">
              <div className="space-y-6 flex-grow">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-zinc-300">Silver Tier</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">$10</span>
                    <span className="text-zinc-400">/month</span>
                  </div>
                  <p className="text-sm text-zinc-400">Never miss a Pokémon drop again</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                    <span className="text-xs font-medium text-green-400">7-day free trial</span>
                  </div>
                </div>

                <ul className="space-y-4 py-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-zinc-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-300">24/7 99% uptime retail monitors for Target, Walmart, Pokemon Center and more</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-zinc-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-300">Early information including images, links, PIDs, TCINs, and WIDs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-zinc-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-300">"Pay After Success" ACO</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-zinc-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-300">Expert release & bot help support</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://whop.com/tcg-dungeon/tcg-dungeon-silver-tier/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-6"
              >
                <Button className="w-full h-12 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 transition-all duration-300">
                  Start Free Trial
                </Button>
              </a>
            </div>
            <div className="relative group p-8 rounded-3xl bg-gradient-to-br from-yellow-500/10 to-amber-500/10 backdrop-blur-sm border border-yellow-500/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[102%] hover:border-yellow-500/50 flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-zinc-900 text-xs font-bold uppercase tracking-wider shadow-lg">
                  Most Popular
                </span>
              </div>

              <div className="space-y-6 flex-grow">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-yellow-400">Gold Tier</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">$75</span>
                    <span className="text-zinc-400">/month</span>
                  </div>
                  <p className="text-sm text-zinc-300">Scale your TCG business with unlimited automation</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                    <span className="text-xs font-medium text-yellow-400">3-day free trial</span>
                  </div>
                </div>

                <ul className="space-y-4 py-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white font-medium">Everything in Silver Tier</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white font-medium">Unlimited ACO</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white font-medium">Account setup and jigging support</span>
                  </li>

                </ul>
              </div>

              <a
                href="https://whop.com/tcg-dungeon/tcg-dungeon-gold-tier/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-6"
              >
                <Button className="w-full h-12 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-zinc-900 font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Free Trial
                </Button>
              </a>
            </div>
          </div>

          <div className="text-center space-y-4 pt-8">
            <p className="text-sm text-zinc-500">
              Coming from a different group? Join our server and make a support ticket in #support. We'll price match them for the first month!
            </p>
          </div>
        </section>
      </main>

      <footer className="w-full py-16 border-t border-zinc-800/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-zinc-500">
              © 2024 TCG Dungeon. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-8 justify-center md:justify-start">
              <a href="/privacy" className="text-sm text-zinc-500 hover:text-white transition-all duration-300">
                Privacy
              </a>
              <a href="/terms" className="text-sm text-zinc-500 hover:text-white transition-all duration-300">
                Terms
              </a>
              <a href="/contact" className="text-sm text-zinc-500 hover:text-white transition-all duration-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}