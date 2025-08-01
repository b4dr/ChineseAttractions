import React from 'react';
import { Metadata } from 'next';
import { MapPin, Users, Award, Globe, Heart, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Chinese Attractions | Your Guide to China',
  description: 'Learn about Chinese Attractions, your trusted guide to exploring the wonders of China. Discover our mission, values, and commitment to helping travelers.',
  keywords: 'about chinese attractions, china travel guide, travel company, tourism china',
  openGraph: {
    title: 'About Us - Chinese Attractions',
    description: 'Your trusted guide to exploring the wonders of China',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-chinese-50 to-gold-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">
              About <span className="text-gradient">Chinese Attractions</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are passionate about sharing the incredible beauty, rich history, and vibrant culture of China with travelers from around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded with a deep love for China's magnificent landscapes and cultural treasures, Chinese Attractions began as a small team of travel enthusiasts who wanted to make exploring China accessible to everyone.
                </p>
                <p>
                  Over the years, we've grown into a comprehensive platform that connects millions of travelers with authentic Chinese experiences, from the iconic Great Wall to hidden gems in ancient villages.
                </p>
                <p>
                  Our mission is simple: to be your trusted companion in discovering the wonders of China, providing you with insider knowledge, practical tips, and unforgettable experiences.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-chinese-500 to-gold-500 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-sm opacity-90">Attractions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-sm opacity-90">Cities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">1M+</div>
                    <div className="text-sm opacity-90">Happy Travelers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">5★</div>
                    <div className="text-sm opacity-90">Average Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Authentic Experiences
              </h3>
              <p className="text-gray-600">
                We believe in showcasing the real China, connecting you with genuine cultural experiences and local insights.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Excellence in Service
              </h3>
              <p className="text-gray-600">
                From planning to execution, we strive for excellence in every interaction and recommendation we provide.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Cultural Bridge
              </h3>
              <p className="text-gray-600">
                We serve as a bridge between cultures, fostering understanding and appreciation for China's rich heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate travel experts and China specialists dedicated to your journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Travel Experts</h3>
              <p className="text-sm text-gray-600">Local guides and travel specialists</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Insiders</h3>
              <p className="text-sm text-gray-600">Native experts sharing hidden gems</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-sm text-gray-600">Ensuring exceptional experiences</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Support</h3>
              <p className="text-sm text-gray-600">24/7 assistance for your journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-chinese-500 to-gold-500">
        <div className="container-custom">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Explore China?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join millions of travelers who have discovered the magic of China with our expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/attractions" 
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Explore Attractions
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
