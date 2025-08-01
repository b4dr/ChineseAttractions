import React from 'react';
import { Metadata } from 'next';
import { FileText, Scale, AlertCircle, CheckCircle, XCircle, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service - Chinese Attractions | Legal Terms',
  description: 'Read the Terms of Service for Chinese Attractions. Understand your rights and responsibilities when using our travel platform and booking services.',
  keywords: 'terms of service, legal terms, chinese attractions terms, user agreement, booking terms',
  openGraph: {
    title: 'Terms of Service - Chinese Attractions',
    description: 'Legal terms and conditions for using our travel services',
    type: 'website',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-chinese-50 to-gold-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">
              <span className="text-gradient">Terms of Service</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              These terms govern your use of Chinese Attractions and our travel booking services. Please read them carefully.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Key Points</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important highlights from our terms of service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Free Cancellation</h3>
              <p className="text-sm text-gray-600">Most bookings can be cancelled free of charge</p>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Instant Confirmation</h3>
              <p className="text-sm text-gray-600">Immediate booking confirmation for most activities</p>
            </div>
            
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Age Requirements</h3>
              <p className="text-sm text-gray-600">Must be 18+ to book or have guardian consent</p>
            </div>
            
            <div className="text-center p-6 bg-red-50 rounded-xl">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <XCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Prohibited Use</h3>
              <p className="text-sm text-gray-600">No commercial resale or fraudulent activities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-8 space-y-8">
              
              {/* Acceptance of Terms */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-primary-600" />
                  Acceptance of Terms
                </h2>
                <div className="text-gray-600 space-y-3">
                  <p>
                    By accessing and using Chinese Attractions ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                  <p>
                    These Terms of Service ("Terms") govern your use of our website, mobile applications, and all related services (collectively, the "Service").
                  </p>
                </div>
              </div>

              {/* Service Description */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Description</h2>
                <div className="text-gray-600 space-y-3">
                  <p>Chinese Attractions provides:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Information about tourist attractions and activities in China</li>
                    <li>Booking services through trusted third-party partners</li>
                    <li>Travel recommendations and guides</li>
                    <li>Customer support for your travel needs</li>
                  </ul>
                  <p>
                    We act as an intermediary between you and service providers. Actual services are provided by our partners, including but not limited to GetYourGuide.
                  </p>
                </div>
              </div>

              {/* User Responsibilities */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Responsibilities</h2>
                <div className="text-gray-600 space-y-3">
                  <p>As a user of our Service, you agree to:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Provide accurate and complete information when making bookings</li>
                    <li>Be responsible for all activities under your account</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Respect the terms and conditions of our service providers</li>
                    <li>Not use the Service for any illegal or unauthorized purpose</li>
                    <li>Not interfere with or disrupt the Service or servers</li>
                  </ul>
                </div>
              </div>

              {/* Booking and Payment */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Booking and Payment</h2>
                <div className="text-gray-600 space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Booking Process</h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>All bookings are subject to availability and confirmation</li>
                      <li>Prices are displayed in the currency specified at the time of booking</li>
                      <li>You must be at least 18 years old to make a booking</li>
                      <li>Bookings are confirmed when payment is successfully processed</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Payment Terms</h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Payment is processed by our secure third-party partners</li>
                      <li>All prices include applicable taxes unless otherwise stated</li>
                      <li>Additional fees may apply for certain payment methods</li>
                      <li>Currency conversion rates are determined by payment processors</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cancellation and Refunds */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cancellation and Refunds</h2>
                <div className="text-gray-600 space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Cancellation Policy</h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Cancellation terms vary by service provider and activity</li>
                      <li>Most activities offer free cancellation up to 24 hours before</li>
                      <li>Some activities may have stricter cancellation policies</li>
                      <li>Cancellation must be made through the original booking platform</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Refund Process</h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Refunds are processed according to the service provider's terms</li>
                      <li>Processing time typically ranges from 3-10 business days</li>
                      <li>Refunds are issued to the original payment method</li>
                      <li>Service fees may be non-refundable</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Liability and Disclaimers */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Scale className="w-6 h-6 mr-3 text-primary-600" />
                  Liability and Disclaimers
                </h2>
                <div className="text-gray-600 space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Limitation of Liability</h3>
                    <p>
                      Chinese Attractions acts as an intermediary and is not responsible for the actual provision of travel services. Our liability is limited to the booking service we provide. We are not liable for:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li>Actions or omissions of third-party service providers</li>
                      <li>Changes in weather, natural disasters, or force majeure events</li>
                      <li>Personal injury, property damage, or other losses during activities</li>
                      <li>Indirect, incidental, or consequential damages</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Service Availability</h3>
                    <p>
                      We strive to maintain service availability but cannot guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue any part of our Service with or without notice.
                    </p>
                  </div>
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
                <div className="text-gray-600 space-y-3">
                  <p>
                    All content on Chinese Attractions, including text, graphics, logos, images, and software, is the property of Chinese Attractions or its licensors and is protected by copyright and other intellectual property laws.
                  </p>
                  <p>You may not:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Reproduce, distribute, or create derivative works from our content</li>
                    <li>Use our trademarks or logos without written permission</li>
                    <li>Reverse engineer or attempt to extract source code</li>
                    <li>Remove or alter any copyright or proprietary notices</li>
                  </ul>
                </div>
              </div>

              {/* Privacy */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy</h2>
                <div className="text-gray-600">
                  <p>
                    Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices regarding the collection and use of your personal information.
                  </p>
                </div>
              </div>

              {/* Prohibited Uses */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prohibited Uses</h2>
                <div className="text-gray-600">
                  <p>You may not use our Service:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                    <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                    <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    <li>To submit false or misleading information</li>
                    <li>To upload or transmit viruses or any other type of malicious code</li>
                    <li>To collect or track the personal information of others</li>
                    <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                    <li>For any obscene or immoral purpose</li>
                    <li>To interfere with or circumvent the security features of the Service</li>
                  </ul>
                </div>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
                <div className="text-gray-600 space-y-3">
                  <p>
                    We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including but not limited to a breach of the Terms.
                  </p>
                  <p>
                    If you wish to terminate your account, you may simply discontinue using the Service.
                  </p>
                </div>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
                <div className="text-gray-600">
                  <p>
                    These Terms shall be interpreted and governed by the laws of the People's Republic of China, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Beijing, China.
                  </p>
                </div>
              </div>

              {/* Changes to Terms */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
                <div className="text-gray-600">
                  <p>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                  </p>
                  <p className="mt-3">
                    By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t pt-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                <div className="text-gray-600">
                  <p className="mb-3">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-1">
                    <p><strong>Email:</strong> legal@chineseattractions.com</p>
                    <p><strong>Address:</strong> 123 Travel Street, Beijing, China 100000</p>
                    <p><strong>Phone:</strong> +86 400-123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
