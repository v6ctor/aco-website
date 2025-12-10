import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="flex flex-col relative justify-center items-center min-h-screen transition-colors duration-300 bg-zinc-950 overflow-hidden">
      {/* Subtle Gradient Orbs Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <nav className="fixed z-50 top-6 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6">
        <div className="backdrop-blur-xl rounded-full px-6 lg:px-8 bg-zinc-900/50 border border-zinc-800/50">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="shrink-0">
              <img
                src={"/tcgvectorai_2.png"}
                className="h-24 w-auto object-contain object-left opacity-90"
                alt="Logo"
              />
            </a>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="/#features"
                className="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300 relative group"
              >
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="/#testimonials"
                className="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300 relative group"
              >
                Testimonials
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="/#pricing"
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
          </div>
        </div>
      </nav>

      <main className="flex flex-col gap-12 w-full max-w-4xl px-4 md:px-8 justify-center items-start transition-colors duration-300 pt-32 pb-20 relative z-10">
        {/* Header */}
        <div className="w-full text-center space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
            Contact Us
          </h1>
          <p className="text-lg text-zinc-400">
            Have questions? We're here to help. Reach out through Discord for the fastest response.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="w-full grid md:grid-cols-2 gap-6">
          {/* Discord Support */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[102%] hover:border-zinc-700/50">
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-indigo-500/10 w-fit">
                <svg className="w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-white">Discord Support</h2>
                <p className="text-zinc-400 leading-relaxed">
                  Join our Discord server for instant support, community help, and real-time updates. Our #support channel is monitored 24/7.
                </p>
              </div>
              <a
                href="https://discord.gg/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button className="w-full h-12 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white border-0 transition-all duration-300">
                  Join Discord Server
                </Button>
              </a>
            </div>
          </div>

          {/* Support Ticket */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[102%] hover:border-zinc-700/50">
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-emerald-500/10 w-fit">
                <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-white">Support Ticket</h2>
                <p className="text-zinc-400 leading-relaxed">
                  Already a member? Create a support ticket in our #support channel for personalized assistance with your account, ACO, or billing.
                </p>
              </div>
              <a
                href="https://discord.gg/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button className="w-full h-12 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 transition-all duration-300">
                  Open Support Ticket
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full space-y-6 pt-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-400">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-4">
            {/* FAQ Item */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-sm border border-zinc-800/50">
              <h3 className="text-lg font-semibold text-white mb-2">How do I get started with ACO?</h3>
              <p className="text-zinc-400 leading-relaxed">
                Join our Discord server, choose your subscription tier, and fill out the Google Form with your shipping and payment details. Our team will guide you through the setup process.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-sm border border-zinc-800/50">
              <h3 className="text-lg font-semibold text-white mb-2">What retailers do you support?</h3>
              <p className="text-zinc-400 leading-relaxed">
                We support Target, Walmart, Best Buy, Costco, Sam's Club, Macy's, Pokémon Center, and more. Visit our Features section for the complete list.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-sm border border-zinc-800/50">
              <h3 className="text-lg font-semibold text-white mb-2">How do I cancel my subscription?</h3>
              <p className="text-zinc-400 leading-relaxed">
                You can cancel your subscription anytime through your Whop dashboard or by creating a support ticket in our Discord #support channel.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-sm border border-zinc-800/50">
              <h3 className="text-lg font-semibold text-white mb-2">Do you offer refunds?</h3>
              <p className="text-zinc-400 leading-relaxed">
                We handle refund requests on a case-by-case basis. Contact our support team through Discord to discuss your specific situation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-sm border border-zinc-800/50">
              <h3 className="text-lg font-semibold text-white mb-2">Is my payment information secure?</h3>
              <p className="text-zinc-400 leading-relaxed">
                Yes, all payment information is encrypted using industry-standard SSL/TLS protocols and stored securely. We take your privacy and security seriously.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="w-full text-center space-y-6 pt-8">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Still have questions?
            </h3>
            <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
              Our community and support team are ready to help. Join Discord to get instant answers and connect with other TCG collectors.
            </p>
            <a
              href="https://discord.gg/EFV9kGC3n4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="h-12 px-8 rounded-full bg-white hover:bg-zinc-100 text-zinc-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Join Our Community
              </Button>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-16 border-t border-zinc-800/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-zinc-500">
              © 2024 TCG Dungeon. All rights reserved.
            </p>
            <div className="flex gap-8">
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
