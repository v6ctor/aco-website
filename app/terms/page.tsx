export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-zinc-400">Last updated: December 9, 2024</p>
        </div>

        {/* Content */}
        <div className="w-full space-y-8 text-zinc-300">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Agreement to Terms</h2>
            <p className="leading-relaxed">
              By accessing or using TCG Dungeon's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Service Description</h2>
            <p className="leading-relaxed">
              TCG Dungeon provides automated checkout (ACO) services, retail monitoring, early product information, and release guides for Pokémon Trading Card Game products and related collectibles. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Automated checkout services for registered retailers</li>
              <li>Real-time Discord notifications for product restocks</li>
              <li>Early access to product links and information</li>
              <li>TPCi vending machine restock schedules</li>
              <li>Community support and release guides</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Account Registration</h2>
            <p className="leading-relaxed">
              To use our services, you must:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Be at least 18 years old or have parental consent</li>
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your Discord account</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Payment and Billing</h2>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-zinc-200">Subscription Plans</h3>
              <p className="leading-relaxed">
                TCG Dungeon offers multiple subscription tiers (Silver, Gold) with different features and pricing. All subscriptions are billed monthly through our payment processor (Whop).
              </p>
            </div>
            <div className="space-y-3 pt-4">
              <h3 className="text-lg font-medium text-zinc-200">Free Trials</h3>
              <p className="leading-relaxed">
                Free trials are available for new members. You may cancel before the trial ends to avoid being charged. If not canceled, you will automatically be charged for the subscription.
              </p>
            </div>
            <div className="space-y-3 pt-4">
              <h3 className="text-lg font-medium text-zinc-200">ACO Fees</h3>
              <p className="leading-relaxed">
                Gold Tier includes unlimited ACO. Silver Tier operates on a "Pay After Success" model where you only pay for successful checkouts. All ACO fees are clearly communicated before service execution.
              </p>
            </div>
            <div className="space-y-3 pt-4">
              <h3 className="text-lg font-medium text-zinc-200">Refunds</h3>
              <p className="leading-relaxed">
                Subscription fees are generally non-refundable. However, we may issue refunds at our discretion for service failures or extenuating circumstances. Contact support for refund requests.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Service Usage and Limitations</h2>
            <p className="leading-relaxed">
              You agree to use our services only for lawful purposes. You must not:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Violate any retailer's terms of service</li>
              <li>Share your account credentials with others</li>
              <li>Attempt to circumvent service limitations or restrictions</li>
              <li>Use our services for fraudulent or illegal activities</li>
              <li>Reverse engineer, decompile, or hack our services</li>
              <li>Resell our services without authorization</li>
              <li>Abuse our support channels or harass staff/members</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">ACO Service Disclaimer</h2>
            <p className="leading-relaxed">
              Our automated checkout service is provided on a "best effort" basis. We do not guarantee:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Successful checkout for every product drop</li>
              <li>100% uptime or availability of our monitoring services</li>
              <li>That retailers will not cancel or modify orders placed through ACO</li>
              <li>Protection against retailer account bans or restrictions</li>
            </ul>
            <p className="leading-relaxed pt-3">
              Product availability, retailer policies, and checkout success rates are beyond our control. We will make reasonable efforts to optimize success rates but cannot be held liable for unsuccessful checkouts.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">User-Provided Information</h2>
            <p className="leading-relaxed">
              You are responsible for the accuracy of all information provided to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Shipping addresses</li>
              <li>Payment information</li>
              <li>Email addresses</li>
              <li>Retailer account credentials (if applicable)</li>
            </ul>
            <p className="leading-relaxed pt-3">
              TCG Dungeon is not responsible for failed checkouts, shipping errors, or other issues resulting from inaccurate information provided by users.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Intellectual Property</h2>
            <p className="leading-relaxed">
              All content, features, and functionality of TCG Dungeon services are owned by us or our licensors and are protected by copyright, trademark, and other intellectual property laws. You may not:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Copy, modify, or distribute our software or content</li>
              <li>Use our branding without permission</li>
              <li>Create derivative works based on our services</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Termination</h2>
            <p className="leading-relaxed">
              We reserve the right to terminate or suspend your access to our services at any time, without notice, for:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Violation of these Terms of Service</li>
              <li>Fraudulent or illegal activity</li>
              <li>Abuse of our services or community</li>
              <li>Chargebacks or payment disputes</li>
            </ul>
            <p className="leading-relaxed pt-3">
              You may cancel your subscription at any time through your Whop dashboard or by contacting support.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the maximum extent permitted by law, TCG Dungeon shall not be liable for:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Any indirect, incidental, special, or consequential damages</li>
              <li>Loss of profits, revenue, or data</li>
              <li>Service interruptions or failures</li>
              <li>Unsuccessful ACO attempts or missed product drops</li>
              <li>Retailer account issues or order cancellations</li>
              <li>Actions taken by third-party retailers</li>
            </ul>
            <p className="leading-relaxed pt-3">
              Our total liability shall not exceed the amount you paid for our services in the past three months.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Indemnification</h2>
            <p className="leading-relaxed">
              You agree to indemnify and hold harmless TCG Dungeon, its officers, employees, and affiliates from any claims, damages, or expenses arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Your use of our services</li>
              <li>Violation of these Terms of Service</li>
              <li>Violation of any third-party rights</li>
              <li>Your interactions with retailers or other users</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Third-Party Services</h2>
            <p className="leading-relaxed">
              Our services integrate with third-party platforms (Discord, Whop, various retailers). We are not responsible for the availability, accuracy, or policies of these third parties. Your use of third-party services is subject to their respective terms and conditions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes constitutes acceptance of the modified terms. We will notify members of significant changes through Discord announcements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Dispute Resolution</h2>
            <p className="leading-relaxed">
              Any disputes arising from these terms or our services shall be resolved through:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Good faith negotiations between parties</li>
              <li>Mediation if negotiations fail</li>
              <li>Binding arbitration as a last resort</li>
            </ul>
            <p className="leading-relaxed pt-3">
              You agree to waive any right to participate in class action lawsuits against TCG Dungeon.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Governing Law</h2>
            <p className="leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law provisions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Severability</h2>
            <p className="leading-relaxed">
              If any provision of these Terms of Service is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Contact Information</h2>
            <p className="leading-relaxed">
              For questions about these Terms of Service, please contact us:
            </p>
            <ul className="list-none space-y-2 pl-4">
              <li>Discord: Join our server at <a href="https://discord.gg/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">discord.gg/tcgdungeon</a></li>
              <li>Support: Create a ticket in our #support channel</li>
            </ul>
          </section>

          <section className="space-y-4 pt-6 border-t border-zinc-800/50">
            <p className="text-sm text-zinc-400 leading-relaxed">
              By using TCG Dungeon's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
            </p>
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
