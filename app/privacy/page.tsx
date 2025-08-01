import React from 'react';
import { Metadata } from 'next';
import { Shield, Eye, Lock, Users, Database, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - Chinese Attractions | Your Data Protection',
  description: 'Learn how Chinese Attractions protects your privacy and handles your personal data. Read our comprehensive privacy policy and data protection practices.',
  keywords: 'privacy policy, data protection, chinese attractions privacy, user data security',
  openGraph: {
    title: 'Privacy Policy - Chinese Attractions',
    description: 'Your privacy and data protection are our top priorities',
    type: 'website',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-chinese-50 to-gold-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">
              <span className="text-gradient">Privacy Policy</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your privacy and data security are fundamental to everything we do. Learn how we protect and handle your information.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Our Privacy Principles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to protecting your privacy with these core principles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Data Protection
              </h3>
              <p className="text-gray-600">
                We use industry-standard security measures to protect your personal information from unauthorized access.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Transparency
              </h3>
              <p className="text-gray-600">
                We clearly explain what data we collect, how we use it, and give you control over your information.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Your Control
              </h3>
              <p className="text-gray-600">
                You have the right to access, update, or delete your personal data at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-8 space-y-8">
              
              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Database className="w-6 h-6 mr-3 text-primary-600" />
                  Information We Collect
                </h2>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
                    <p>When you use our services, we may collect:</p>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li>Name and contact information (email, phone number)</li>
                      <li>Travel preferences and booking history</li>
                      <li>Payment information (processed securely by our partners)</li>
                      <li>Communication records when you contact us</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Automatic Information</h3>
                    <p>We automatically collect certain information when you visit our website:</p>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li>IP address and browser information</li>
                      <li>Pages visited and time spent on our site</li>
                      <li>Device information and operating system</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-primary-600" />
                  How We Use Your Information
                </h2>
                <div className="text-gray-600 space-y-3">
                  <p>We use your information to:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Provide and improve our travel services</li>
                    <li>Process bookings and communicate about your trips</li>
                    <li>Send you relevant travel recommendations and updates</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Analyze website usage to enhance user experience</li>
                    <li>Comply with legal obligations and prevent fraud</li>
                  </ul>
                </div>
              </div>

              {/* Information Sharing */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-primary-600" />
                  Information Sharing
                </h2>
                <div className="text-gray-600 space-y-3">
                  <p>We may share your information with:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><strong>Service Providers:</strong> Trusted partners like GetYourGuide for booking services</li>
                    <li><strong>Business Partners:</strong> Hotels, tour operators, and attraction venues</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                    <li><strong>Business Transfers:</strong> In case of merger, acquisition, or asset sale</li>
                  </ul>
                  <p className="mt-3">
                    <strong>We never sell your personal information to third parties for marketing purposes.</strong>
                  </p>
                </div>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
                <div className="text-gray-600 space-y-3">
                  <p>We implement comprehensive security measures including:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure servers and regular security audits</li>
                    <li>Access controls and employee training</li>
                    <li>Regular monitoring for suspicious activities</li>
                  </ul>
                </div>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Privacy Rights</h2>
                <div className="text-gray-600 space-y-3">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Access and review your personal information</li>
                    <li>Update or correct inaccurate data</li>
                    <li>Delete your account and personal data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Request data portability</li>
                    <li>File a complaint with data protection authorities</li>
                  </ul>
                </div>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
                <div className="text-gray-600 space-y-3">
                  <p>We use cookies and similar technologies to:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and user behavior</li>
                    <li>Provide personalized content and recommendations</li>
                    <li>Enable social media features</li>
                  </ul>
                  <p className="mt-3">
                    You can control cookies through your browser settings, but some features may not work properly if cookies are disabled.
                  </p>
                </div>
              </div>

              {/* International Transfers */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Data Transfers</h2>
                <div className="text-gray-600">
                  <p>
                    Your information may be transferred to and processed in countries other than your own. 
                    We ensure appropriate safeguards are in place to protect your data in accordance with 
                    applicable privacy laws, including GDPR and other international standards.
                  </p>
                </div>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
                <div className="text-gray-600">
                  <p>
                    Our services are not intended for children under 13 years of age. We do not knowingly 
                    collect personal information from children under 13. If you believe we have collected 
                    information from a child under 13, please contact us immediately.
                  </p>
                </div>
              </div>

              {/* Updates */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Policy Updates</h2>
                <div className="text-gray-600">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any 
                    material changes by posting the new policy on our website and updating the 
                    "Last updated" date. Your continued use of our services after changes become 
                    effective constitutes acceptance of the updated policy.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="border-t pt-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <div className="text-gray-600">
                  <p className="mb-3">
                    If you have questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-1">
                    <p><strong>Email:</strong> privacy@chineseattractions.com</p>
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
