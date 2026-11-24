import React from 'react';
import { Metadata } from 'next';
import { Handshake, Shield, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure - Chinese Attractions',
  description: 'How Chinese Attractions earns money through affiliate partnerships and how it affects our recommendations.',
  robots: { index: true, follow: true },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="section-padding bg-paper-100">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">
              <span className="text-gradient">Affiliate Disclosure</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transparency about how this site earns money and how it affects what we recommend.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: November 25, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto prose-lg text-gray-700">

          <div className="flex items-center mb-4">
            <Handshake className="w-6 h-6 mr-3 text-jade-700" />
            <h2 className="heading-md m-0">How We Earn Money</h2>
          </div>
          <p>
            Chinese Attractions is free to read. We earn money through affiliate partnerships:
            when you click certain links on this site and make a purchase or booking with the
            partner, we may receive a commission at no extra cost to you.
          </p>

          <h2 className="heading-md mt-10">Our Partners</h2>
          <ul>
            <li><strong>GetYourGuide</strong> — tours, tickets and activities booked through our links</li>
            <li><strong>Travel eSIM providers</strong> (Saily, eSIMX) — connectivity products for China travel</li>
            <li><strong>Hotel &amp; travel loyalty programs</strong> (including Hilton and Southwest Airlines via Impact)</li>
            <li><strong>Travel insurance providers</strong> — policies purchased through partner links</li>
          </ul>
          <p>
            Partner links may appear as buttons, inline text links, embedded booking widgets, or
            dedicated recommendation boxes. Links that earn us a commission are routed through
            tracked affiliate URLs.
          </p>

          <div className="flex items-center mb-4 mt-10">
            <Shield className="w-6 h-6 mr-3 text-jade-700" />
            <h2 className="heading-md m-0">Editorial Independence</h2>
          </div>
          <p>
            Commissions never decide what we recommend. Attractions, cities and experiences are
            featured based on their own merit. Where we suggest booking a tour or product, we
            choose the option we believe is most useful to the reader — affiliate status is a
            secondary consideration. We do not accept payment for positive reviews.
          </p>

          <div className="flex items-center mb-4 mt-10">
            <ExternalLink className="w-6 h-6 mr-3 text-jade-700" />
            <h2 className="heading-md m-0">FTC Compliance</h2>
          </div>
          <p>
            This disclosure is provided in accordance with the Federal Trade Commission's
            guidelines on endorsements and testimonials (16 CFR Part 255). If you have questions
            about our partnerships, contact us via the contact page.
          </p>
        </div>
      </section>
    </div>
  );
}
