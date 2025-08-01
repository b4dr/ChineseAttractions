import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowRight, MapPin, Camera, Heart, Star, ExternalLink, Lightbulb, Users, ChefHat } from 'lucide-react';

export const metadata: Metadata = {
  title: 'China Travel Blog 2024 | Expert Tips & Hidden Gems | Chinese Attractions',
  description: 'Discover China through our expert travel blog. Get insider tips, hidden gems, cultural insights, and the best attractions across Beijing, Shanghai, Xi\'an, and more.',
  keywords: 'china travel blog, china travel tips, beijing travel guide, shanghai attractions, xi\'an tourism, china hidden gems, chinese culture, travel advice china, china itinerary, best places china',
  openGraph: {
    title: 'China Travel Blog 2024 | Expert Tips & Hidden Gems',
    description: 'Your ultimate guide to exploring China with insider tips and expert advice',
    type: 'website',
  },
  alternates: {
    canonical: 'https://chineseattractions.com/blog',
  },
};

const blogPosts = [
  {
    id: 1,
    title: '10 Hidden Gems in Beijing You Must Visit in 2024',
    excerpt: 'Discover secret courtyards, underground markets, and local favorites that most tourists never see. Our insider guide reveals Beijing\'s best-kept secrets.',
    image: '/images/blog/beijing-hidden-gems.jpg',
    author: 'Li Wei',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Hidden Gems',
    slug: 'beijing-hidden-gems-2024',
    tags: ['Beijing', 'Hidden Gems', 'Local Culture', 'Insider Tips'],
    featured: true,
  },
  {
    id: 2,
    title: 'The Ultimate Shanghai Food Tour: 15 Must-Try Dishes',
    excerpt: 'From xiaolongbao to street food delicacies, explore Shanghai\'s incredible culinary scene with our comprehensive food guide and restaurant recommendations.',
    image: '/images/blog/shanghai-food-tour.jpg',
    author: 'Chen Ming',
    date: '2024-01-12',
    readTime: '12 min read',
    category: 'Food & Culture',
    slug: 'shanghai-food-tour-guide',
    tags: ['Shanghai', 'Food', 'Restaurants', 'Street Food'],
    featured: true,
  },
  {
    id: 3,
    title: 'Xi\'an Beyond the Terracotta Army: 7 Amazing Attractions',
    excerpt: 'While the Terracotta Army is incredible, Xi\'an offers so much more. Discover ancient city walls, vibrant Muslim quarters, and stunning pagodas.',
    image: '/images/blog/xian-attractions.jpg',
    author: 'Wang Mei',
    date: '2024-01-10',
    readTime: '10 min read',
    category: 'City Guides',
    slug: 'xian-attractions-beyond-terracotta-army',
    tags: ['Xi\'an', 'History', 'Culture', 'Attractions'],
    featured: true,
  },
];

const categories = [
  { name: 'Hidden Gems', count: 12, color: 'bg-primary-500' },
  { name: 'Food & Culture', count: 18, color: 'bg-gold-500' },
  { name: 'City Guides', count: 15, color: 'bg-emerald-500' },
  { name: 'Photography', count: 8, color: 'bg-purple-500' },
  { name: 'Wildlife', count: 6, color: 'bg-blue-500' },
  { name: 'Adventure', count: 10, color: 'bg-red-500' },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-chinese-50 to-gold-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">
              China <span className="text-gradient">Travel Blog</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Discover the real China through our expert travel stories, insider tips, and comprehensive guides. 
              From hidden gems to cultural insights, we share everything you need for an unforgettable journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1 text-primary-500" />
                50+ Cities Covered
              </div>
              <div className="flex items-center">
                <Camera className="w-4 h-4 mr-1 text-gold-500" />
                Expert Photography Tips
              </div>
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-1 text-red-500" />
                Local Insider Knowledge
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <h2 className="heading-lg">Featured Stories</h2>
            <div className="text-sm text-gray-500">
              Updated weekly with fresh content
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={post.id} className={`card-attraction ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                <div className="relative">
                  <div className={`${index === 0 ? 'h-64 lg:h-80' : 'h-48'} bg-gradient-to-br from-primary-400 to-gold-400 flex items-center justify-center`}>
                    <Camera className="w-16 h-16 text-white opacity-50" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  {index === 0 && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                    <span className="mx-2">•</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                  
                  <h3 className={`font-bold text-gray-900 mb-3 ${index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
                    {post.title}
                  </h3>
                  
                  <p className={`text-gray-600 mb-4 ${index === 0 ? 'text-lg' : ''}`}>
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Read Full Story
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Guides */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Essential Travel Guides</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete guides to help you plan the perfect China adventure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              href="/blog/travel-tips"
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 border-l-4 border-chinese-500"
            >
              <div className="w-12 h-12 bg-chinese-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-chinese-200 transition-colors">
                <Lightbulb className="w-6 h-6 text-chinese-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Travel Tips</h3>
              <p className="text-gray-600 text-sm mb-3">Expert advice for safe and enjoyable travel in China</p>
              <div className="flex items-center text-chinese-600 font-medium text-sm">
                Read Guide
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <Link 
              href="/blog/best-time-to-visit"
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 border-l-4 border-gold-500"
            >
              <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold-200 transition-colors">
                <Calendar className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Best Time to Visit</h3>
              <p className="text-gray-600 text-sm mb-3">Weather guide and seasonal recommendations</p>
              <div className="flex items-center text-gold-600 font-medium text-sm">
                Read Guide
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <Link 
              href="/blog/cultural-guide"
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 border-l-4 border-emerald-500"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cultural Guide</h3>
              <p className="text-gray-600 text-sm mb-3">Traditions, etiquette, and cultural insights</p>
              <div className="flex items-center text-emerald-600 font-medium text-sm">
                Read Guide
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <Link 
              href="/blog/food-dining"
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 border-l-4 border-purple-500"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <ChefHat className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Food & Dining</h3>
              <p className="text-gray-600 text-sm mb-3">Regional cuisines and dining experiences</p>
              <div className="flex items-center text-purple-600 font-medium text-sm">
                Read Guide
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Explore by Category</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find exactly what you're looking for with our organized travel content
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map(category => (
              <Link 
                key={category.name}
                href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-center"
              >
                <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} articles</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter & Affiliate CTA */}
      <section className="section-padding bg-gradient-to-br from-chinese-500 to-gold-500">
        <div className="container-custom">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Never Miss a China Travel Update
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get exclusive travel tips, hidden gems, and special deals delivered to your inbox weekly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-6 py-3 rounded-lg text-gray-900 flex-1 max-w-md"
              />
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Subscribe Now
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/attractions" 
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                Explore Top Attractions
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a 
                href="https://widget.getyourguide.com/default/city.frame?aid=3875&partner_id=UENNPLZ&cmp=blog" 
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                Book Your Adventure
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
