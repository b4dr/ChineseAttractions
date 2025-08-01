import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowRight, MapPin, Camera, Heart, Star, ExternalLink, Lightbulb, Users, ChefHat, BookOpen, Compass, Award, TrendingUp, Eye, Share2, Bookmark, Filter, Search, Globe, Mountain, Building2, Utensils, TreePine, Sparkles } from 'lucide-react';
import GetYourGuideWidget from '@/components/GetYourGuideWidget';

export const metadata: Metadata = {
  title: 'China Travel Blog 2025 | Expert Guides & Insider Stories | Chinese Attractions',
  description: 'Discover China through our premium travel magazine. Expert guides, insider stories, cultural deep-dives, and exclusive experiences across China\'s most incredible destinations.',
  keywords: 'china travel blog 2025, china travel magazine, beijing insider guide, shanghai travel stories, xi\'an cultural guide, china travel experts, chinese attractions blog, china itinerary planning, best china destinations, china travel inspiration',
  openGraph: {
    title: 'China Travel Blog 2025 | Expert Guides & Insider Stories',
    description: 'Your premium travel magazine for exploring China with expert insights and insider stories',
    type: 'website',
    images: ['/blog-og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'China Travel Blog 2025 | Expert Guides & Insider Stories',
    description: 'Your premium travel magazine for exploring China',
    images: ['/blog-og-image.jpg'],
  },
  alternates: {
    canonical: 'https://chineseattractions.com/blog',
  },
};

// Featured Articles with links to actual site pages
const featuredArticles = [
  {
    id: 1,
    title: 'The Great Wall of China: Complete Insider\'s Guide 2025',
    excerpt: 'From Mutianyu to Jinshanling, discover the best sections of the Great Wall with our expert tips, hidden viewpoints, and exclusive tour recommendations.',
    image: '/images/blog/great-wall-guide.jpg',
    author: 'Dr. Zhang Wei',
    authorTitle: 'Cultural Heritage Expert',
    date: '2025-01-20',
    readTime: '15 min read',
    category: 'Ultimate Guides',
    slug: '/attractions/great-wall-china',
    tags: ['Great Wall', 'UNESCO', 'History', 'Photography'],
    featured: true,
    views: '125K',
    rating: 4.9,
    bookingLink: true,
  },
  {
    id: 2,
    title: 'Beijing\'s Imperial Treasures: Forbidden City Deep Dive',
    excerpt: 'Uncover the secrets of China\'s most magnificent palace complex. Our comprehensive guide reveals hidden courtyards, imperial stories, and photography spots.',
    image: '/images/blog/forbidden-city-guide.jpg',
    author: 'Prof. Li Ming',
    authorTitle: 'Imperial History Specialist',
    date: '2025-01-18',
    readTime: '18 min read',
    category: 'Cultural Deep-Dives',
    slug: '/attractions/forbidden-city',
    tags: ['Beijing', 'Imperial Palace', 'Architecture', 'Culture'],
    featured: true,
    views: '98K',
    rating: 4.8,
    bookingLink: true,
  },
  {
    id: 3,
    title: 'Xi\'an\'s Terracotta Warriors: Archaeological Marvel Unveiled',
    excerpt: 'Journey into one of the world\'s greatest archaeological discoveries. Learn about Emperor Qin\'s eternal army and the ongoing excavations.',
    image: '/images/blog/terracotta-army-guide.jpg',
    author: 'Dr. Wang Mei',
    authorTitle: 'Archaeology Professor',
    date: '2025-01-16',
    readTime: '14 min read',
    category: 'Archaeological Wonders',
    slug: '/attractions/terracotta-army',
    tags: ['Xi\'an', 'Archaeology', 'Emperor Qin', 'UNESCO'],
    featured: true,
    views: '87K',
    rating: 4.9,
    bookingLink: true,
  },
];

// Travel Guide Articles
const travelGuides = [
  {
    id: 4,
    title: 'Essential China Travel Tips: Insider Secrets for 2025',
    excerpt: 'Master the art of traveling in China with our comprehensive guide covering visas, cultural etiquette, transportation, and money-saving tips.',
    image: '/images/blog/china-travel-tips.jpg',
    author: 'Sarah Chen',
    authorTitle: 'Travel Expert',
    date: '2025-01-14',
    readTime: '12 min read',
    category: 'Travel Planning',
    slug: '/blog/travel-tips',
    tags: ['Travel Tips', 'Planning', 'Culture', 'Budget'],
    views: '156K',
    rating: 4.7,
  },
  {
    id: 5,
    title: 'Best Time to Visit China: Seasonal Guide & Weather Insights',
    excerpt: 'Discover the perfect time to visit China\'s diverse regions. From cherry blossoms to autumn colors, plan your trip for optimal weather and experiences.',
    image: '/images/blog/china-seasons.jpg',
    author: 'Michael Zhang',
    authorTitle: 'Climate Specialist',
    date: '2025-01-12',
    readTime: '10 min read',
    category: 'Travel Planning',
    slug: '/blog/best-time-to-visit',
    tags: ['Weather', 'Seasons', 'Planning', 'Climate'],
    views: '134K',
    rating: 4.6,
  },
  {
    id: 6,
    title: 'Chinese Culture Guide: Traditions, Etiquette & Local Customs',
    excerpt: 'Navigate Chinese culture with confidence. Learn about traditions, social etiquette, gift-giving customs, and how to show respect.',
    image: '/images/blog/chinese-culture.jpg',
    author: 'Prof. Liu Hua',
    authorTitle: 'Cultural Anthropologist',
    date: '2025-01-10',
    readTime: '16 min read',
    category: 'Cultural Insights',
    slug: '/blog/cultural-guide',
    tags: ['Culture', 'Traditions', 'Etiquette', 'Customs'],
    views: '112K',
    rating: 4.8,
  },
  {
    id: 7,
    title: 'China Food & Dining Guide: Regional Cuisines Explored',
    excerpt: 'Embark on a culinary journey across China\'s eight great cuisines. From Peking duck to Sichuan hotpot, discover authentic flavors and dining etiquette.',
    image: '/images/blog/chinese-cuisine.jpg',
    author: 'Chef Wang Lei',
    authorTitle: 'Culinary Expert',
    date: '2025-01-08',
    readTime: '20 min read',
    category: 'Food & Culture',
    slug: '/blog/food-dining',
    tags: ['Food', 'Cuisine', 'Restaurants', 'Culture'],
    views: '189K',
    rating: 4.9,
  },
];

// City Spotlight Articles
const citySpotlights = [
  {
    id: 8,
    title: 'Beijing Complete City Guide: Imperial Capital Explored',
    excerpt: 'Discover Beijing\'s perfect blend of ancient traditions and modern innovation. From imperial palaces to contemporary art districts.',
    image: '/images/blog/beijing-city-guide.jpg',
    author: 'Emma Liu',
    date: '2025-01-06',
    readTime: '14 min read',
    category: 'City Guides',
    slug: '/cities/beijing',
    tags: ['Beijing', 'Imperial', 'Modern', 'Culture'],
    views: '203K',
  },
  {
    id: 9,
    title: 'Shanghai: Where East Meets West in Perfect Harmony',
    excerpt: 'Experience Shanghai\'s dynamic energy, from the historic Bund to futuristic Pudong. Art, cuisine, nightlife, and business converge.',
    image: '/images/blog/shanghai-city-guide.jpg',
    author: 'David Wang',
    date: '2025-01-04',
    readTime: '12 min read',
    category: 'City Guides',
    slug: '/cities/shanghai',
    tags: ['Shanghai', 'Modern', 'Business', 'Culture'],
    views: '178K',
  },
  {
    id: 10,
    title: 'Chengdu: Pandas, Spice, and Authentic Chinese Life',
    excerpt: 'Explore Chengdu\'s laid-back charm, from giant panda encounters to fiery Sichuan cuisine and traditional teahouse culture.',
    image: '/images/blog/chengdu-city-guide.jpg',
    author: 'Lisa Zhang',
    date: '2025-01-02',
    readTime: '11 min read',
    category: 'City Guides',
    slug: '/cities/chengdu',
    tags: ['Chengdu', 'Pandas', 'Food', 'Culture'],
    views: '145K',
  },
];

// Easy Blog Management System - Add new articles here for SEO freshness
// Instructions: Simply add new articles to any of the arrays above following the same structure
// For quick SEO updates, add seasonal or trending articles with recent dates
// Example new article template:
/*
{
  id: [next_available_id],
  title: '[SEO Optimized Title with Current Year]',
  excerpt: '[Compelling 1-2 sentence description]',
  image: '/images/blog/[image-name].jpg',
  author: '[Expert Name]',
  authorTitle: '[Expert Title]', // Optional for travel guides
  date: '[YYYY-MM-DD]', // Use current date for freshness
  readTime: '[X min read]',
  category: '[Category matching existing ones]',
  slug: '[/blog/url-slug or /attractions/slug or /cities/slug]',
  tags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
  views: '[XXK]', // Realistic view count
  rating: X.X, // Optional rating out of 5
  featured: true, // Optional for featured articles
  bookingLink: true, // Optional for attraction articles
},
*/

// Categories with sophisticated design
const categories = [
  { 
    name: 'Ultimate Guides', 
    count: 8, 
    color: 'bg-gradient-to-br from-chinese-500 to-chinese-600', 
    icon: BookOpen,
    description: 'Comprehensive attraction guides'
  },
  { 
    name: 'Cultural Deep-Dives', 
    count: 12, 
    color: 'bg-gradient-to-br from-gold-500 to-gold-600', 
    icon: Globe,
    description: 'Rich cultural insights'
  },
  { 
    name: 'Travel Planning', 
    count: 15, 
    color: 'bg-gradient-to-br from-blue-500 to-blue-600', 
    icon: Compass,
    description: 'Essential planning tips'
  },
  { 
    name: 'City Guides', 
    count: 18, 
    color: 'bg-gradient-to-br from-emerald-500 to-emerald-600', 
    icon: Building2,
    description: 'Complete city explorations'
  },
  { 
    name: 'Food & Culture', 
    count: 22, 
    color: 'bg-gradient-to-br from-orange-500 to-orange-600', 
    icon: Utensils,
    description: 'Culinary adventures'
  },
  { 
    name: 'Archaeological Wonders', 
    count: 6, 
    color: 'bg-gradient-to-br from-purple-500 to-purple-600', 
    icon: Mountain,
    description: 'Ancient discoveries'
  },
];

// Stats for the hero section
const blogStats = [
  { label: 'Expert Articles', value: '150+', icon: BookOpen },
  { label: 'Cities Covered', value: '25+', icon: MapPin },
  { label: 'Monthly Readers', value: '500K+', icon: Users },
  { label: 'Expert Rating', value: '4.9/5', icon: Star },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Premium Hero Section */}
      <section className="relative bg-gradient-to-br from-chinese-500 via-chinese-600 to-gold-500 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('/pattern-chinese.svg')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-gold-200 mr-3" />
                <span className="text-gold-200 font-medium text-lg">Premium Travel Magazine</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in-up">
                China Travel <span className="text-gradient bg-gradient-to-r from-gold-200 to-yellow-200 bg-clip-text text-transparent">Stories</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Discover China through expert insights, insider stories, and comprehensive guides. 
                Your premium source for authentic Chinese travel experiences.
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              {blogStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                    <IconComponent className="w-8 h-8 text-gold-200 mx-auto mb-3" />
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gold-200 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles - Magazine Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most comprehensive guides to China's incredible destinations and experiences
              </p>
            </div>
            
            {/* Hero Article */}
            <div className="mb-16">
              <article className="group">
                <Link href={featuredArticles[0].slug} className="block">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-chinese-100 to-gold-100">
                      <div className="aspect-[4/3] flex items-center justify-center">
                        <Camera className="w-16 h-16 text-chinese-400" />
                      </div>
                      <div className="absolute top-6 left-6">
                        <span className="bg-chinese-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          {featuredArticles[0].category}
                        </span>
                      </div>
                      <div className="absolute top-6 right-6">
                        <div className="flex items-center space-x-2">
                          <div className="bg-white/90 backdrop-blur-sm text-chinese-600 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {featuredArticles[0].views}
                          </div>
                          <div className="bg-gold-500 text-white p-2 rounded-full">
                            <Star className="w-4 h-4 fill-current" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 group-hover:text-chinese-600 transition-colors">
                        {featuredArticles[0].title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        {featuredArticles[0].excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            <div>
                              <div className="font-medium text-gray-900">{featuredArticles[0].author}</div>
                              <div className="text-xs">{featuredArticles[0].authorTitle}</div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {featuredArticles[0].date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {featuredArticles[0].readTime}
                          </div>
                        </div>
                        <div className="flex items-center text-gold-500">
                          <Star className="w-4 h-4 mr-1 fill-current" />
                          <span className="font-semibold">{featuredArticles[0].rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {featuredArticles[0].tags.map((tag: string) => (
                          <span key={tag} className="bg-chinese-50 text-chinese-600 px-3 py-1 rounded-full text-sm font-medium">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <span className="bg-chinese-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center group-hover:bg-chinese-600 transition-colors">
                          Read Full Guide
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </span>
                        {featuredArticles[0].bookingLink && (
                          <span className="bg-gold-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center hover:bg-gold-600 transition-colors">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Book Experience
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            </div>
            
            {/* Secondary Featured Articles */}
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.slice(1, 3).map((article) => (
                <article key={article.id} className="group">
                  <Link href={article.slug} className="block">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-chinese-100 to-gold-100 mb-6">
                      <div className="aspect-video flex items-center justify-center">
                        <Camera className="w-12 h-12 text-chinese-400" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-chinese-600 px-3 py-1 rounded-full text-sm font-semibold">
                          {article.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center space-x-2">
                          <div className="bg-white/90 backdrop-blur-sm text-chinese-600 px-2 py-1 rounded-full text-xs flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {article.views}
                          </div>
                          <div className="bg-gold-500 text-white p-1.5 rounded-full">
                            <Star className="w-3 h-3 fill-current" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-chinese-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          {article.author}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      <div className="flex items-center text-gold-500">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        <span className="font-semibold text-xs">{article.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.slice(0, 3).map((tag: string) => (
                        <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
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
