import React from 'react';
import { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - Chinese Attractions | Get in Touch',
  description: 'Contact Chinese Attractions for travel inquiries, support, or partnership opportunities. We\'re here to help plan your perfect China adventure.',
  keywords: 'contact chinese attractions, china travel support, travel inquiries, customer service',
  openGraph: {
    title: 'Contact Us - Chinese Attractions',
    description: 'Get in touch with our travel experts for your China adventure',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-chinese-50 to-gold-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have questions about your China adventure? Our travel experts are here to help you plan the perfect journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="heading-lg mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="booking">Booking Assistance</option>
                    <option value="support">Customer Support</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell us about your travel plans or how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full inline-flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="heading-lg mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">info@chineseattractions.com</p>
                    <p className="text-gray-600">support@chineseattractions.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">+86 400-123-4567 (China)</p>
                    <p className="text-gray-600">+1 (555) 123-4567 (International)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600">123 Travel Street</p>
                    <p className="text-gray-600">Beijing, China 100000</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM (CST)</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM (CST)</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Quick Response Times */}
              <div className="mt-8 p-6 bg-gradient-to-br from-chinese-50 to-gold-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-primary-600" />
                  Response Times
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Email inquiries: Within 24 hours</li>
                  <li>• Phone support: Immediate assistance</li>
                  <li>• Live chat: Available during business hours</li>
                  <li>• Emergency support: 24/7 for active bookings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">How do I book an attraction?</h3>
              <p className="text-gray-600">
                Simply browse our attractions, click on your preferred experience, and you'll be redirected to our trusted partner GetYourGuide for secure booking.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Do you offer group discounts?</h3>
              <p className="text-gray-600">
                Yes! We offer special rates for groups of 10 or more. Contact us directly for customized group packages and pricing.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">What's your cancellation policy?</h3>
              <p className="text-gray-600">
                Most of our experiences offer free cancellation up to 24 hours before the activity. Specific policies vary by attraction.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Do you provide travel insurance?</h3>
              <p className="text-gray-600">
                We recommend purchasing travel insurance separately. We can provide recommendations for trusted insurance providers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
