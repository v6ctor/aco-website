export default function PrivacyPage() {
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
                href="https://discord.gg/EFV9kGC3n4"
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
            Privacy Policy
          </h1>
          <p className="text-zinc-400">Last updated: December 9, 2024</p>
        </div>

        {/* Content */}
        <div className="w-full space-y-8 text-zinc-300">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Introduction</h2>
            <p className="leading-relaxed">
              TCG Dungeon ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our automated checkout (ACO) services and monitoring tools.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Information We Collect</h2>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-zinc-200">Personal Information</h3>
              <p className="leading-relaxed">
                We collect information that you provide directly to us through our Google Forms and Discord integration, including:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Email address</li>
                <li>Shipping address and billing information</li>
                <li>Payment information (encrypted and securely stored)</li>
                <li>Discord username and user ID</li>
                <li>Order history and preferences</li>
              </ul>
            </div>

            <div className="space-y-3 pt-4">
              <h3 className="text-lg font-medium text-zinc-200">Automatically Collected Information</h3>
              <p className="leading-relaxed">
                When you use our services, we may automatically collect:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Usage data and service interaction logs</li>
                <li>Device information and IP address</li>
                <li>Browser type and version</li>
                <li>Time zone settings and location data</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">How We Use Your Information</h2>
            <p className="leading-relaxed">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Process automated checkouts on your behalf</li>
              <li>Send Discord notifications about product restocks and successful orders</li>
              <li>Provide customer support and respond to your inquiries</li>
              <li>Improve our monitoring services and ACO success rates</li>
              <li>Prevent fraudulent activity and ensure service security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Data Security</h2>
            <p className="leading-relaxed">
              We implement industry-standard security measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>All payment information is encrypted using SSL/TLS protocols</li>
              <li>Personal data is stored on secure servers with restricted access</li>
              <li>We use encryption for data transmission and storage</li>
              <li>Regular security audits and monitoring</li>
            </ul>
            <p className="leading-relaxed pt-3 text-zinc-400 text-sm">
              While we strive to protect your personal information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Information Sharing</h2>
            <p className="leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><span className="font-medium text-zinc-200">Retailers:</span> To complete purchases on your behalf (Target, Walmart, Best Buy, Pokémon Center, etc.)</li>
              <li><span className="font-medium text-zinc-200">Service Providers:</span> Trusted third-party services that help us operate our business (payment processors, hosting providers)</li>
              <li><span className="font-medium text-zinc-200">Legal Requirements:</span> When required by law or to protect our rights and safety</li>
              <li><span className="font-medium text-zinc-200">Business Transfers:</span> In the event of a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Data Retention</h2>
            <p className="leading-relaxed">
              We retain your personal information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time by contacting us through our Discord support.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Your Rights</h2>
            <p className="leading-relaxed">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Access and review your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>
            <p className="leading-relaxed pt-3">
              To exercise these rights, please contact us through our Discord server support channel.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Cookies and Tracking</h2>
            <p className="leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience, analyze service usage, and deliver personalized content. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Third-Party Links</h2>
            <p className="leading-relaxed">
              Our service may contain links to third-party websites and services (retailers, Discord, etc.). We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Children's Privacy</h2>
            <p className="leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Changes to This Privacy Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Changes are effective immediately upon posting.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <ul className="list-none space-y-2 pl-4">
              <li>Discord: Join our server at <a href="https://discord.gg/EFV9kGC3n4" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">https://discord.gg/EFV9kGC3n4</a></li>
              <li>Support: Create a ticket in our #support channel</li>
            </ul>
          </section>
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
              <a href="/#pricing" className="text-sm text-zinc-500 hover:text-white transition-all duration-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
