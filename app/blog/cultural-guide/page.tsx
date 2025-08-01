import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Users, Utensils, Gift, Sparkles, Calendar, BookOpen, Globe, ExternalLink, Star, Lightbulb, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'China Cultural Guide 2024 | Traditions, Etiquette & Customs | Chinese Attractions',
  description: 'Complete guide to Chinese culture, traditions, and etiquette. Learn about festivals, customs, social norms, and cultural insights for respectful travel in China.',
  keywords: 'china culture guide, chinese traditions, china etiquette, chinese customs, china festivals, chinese social norms, china cultural tips, chinese manners, china respect',
  openGraph: {
    title: 'China Cultural Guide 2024 | Traditions, Etiquette & Customs',
    description: 'Your complete guide to understanding and respecting Chinese culture during your travels',
    type: 'website',
  },
  alternates: {
    canonical: 'https://chineseattractions.com/cultural-guide',
  },
};

const culturalAspects = [
  {
    id: 'greetings',
    title: 'Greetings & Social Interactions',
    icon: Users,
    color: 'bg-primary-500',
    importance: 'high',
    content: {
      dos: [
        'Bow slightly or nod when meeting someone',
        'Use both hands when receiving business cards',
        'Address people by their title and surname',
        'Wait to be introduced before speaking',
        'Maintain respectful distance in conversations'
      ],
      donts: [
        'Don\'t hug or kiss as greeting (except close friends)',
        'Don\'t point with a single finger',
        'Don\'t touch someone\'s head',
        'Don\'t be overly familiar too quickly',
        'Don\'t ignore hierarchy and seniority'
      ],
      phrases: [
        { chinese: '你好 (Nǐ hǎo)', english: 'Hello', pronunciation: 'nee-how' },
        { chinese: '谢谢 (Xiè xiè)', english: 'Thank you', pronunciation: 'sheh-sheh' },
        { chinese: '对不起 (Duì bù qǐ)', english: 'Sorry/Excuse me', pronunciation: 'dway-boo-chee' }
      ]
    }
  },
  {
    id: 'dining',
    title: 'Dining Etiquette',
    icon: Utensils,
    color: 'bg-gold-500',
    importance: 'high',
    content: {
      dos: [
        'Wait for the host to start eating',
        'Try a bit of everything offered',
        'Use chopsticks properly',
        'Leave some food on your plate (shows abundance)',
        'Toast with both hands on your glass'
      ],
      donts: [
        'Don\'t stick chopsticks upright in rice',
        'Don\'t point with chopsticks',
        'Don\'t flip fish on your plate',
        'Don\'t finish all the food (implies not enough)',
        'Don\'t refuse food offerings repeatedly'
      ],
      tips: [
        'Lazy Susan tables rotate clockwise',
        'The host pays - don\'t fight over the bill',
        'Slurping soup is acceptable',
        'Tea cups should never be empty'
      ]
    }
  },
  {
    id: 'gifts',
    title: 'Gift Giving & Receiving',
    icon: Gift,
    color: 'bg-emerald-500',
    importance: 'medium',
    content: {
      dos: [
        'Wrap gifts in red or gold paper',
        'Give and receive with both hands',
        'Bring gifts from your home country',
        'Present gifts at the end of visits',
        'Show appreciation even for small gifts'
      ],
      donts: [
        'Don\'t give clocks (associated with death)',
        'Don\'t use white or black wrapping',
        'Don\'t give in sets of 4 (unlucky number)',
        'Don\'t open gifts immediately unless asked',
        'Don\'t give knives or sharp objects'
      ],
      goodGifts: [
        'Local specialties from your country',
        'Quality alcohol (if appropriate)',
        'Branded items from your city',
        'Books about your culture',
        'Flowers (but research meanings first)'
      ]
    }
  },
  {
    id: 'temples',
    title: 'Religious Sites & Temples',
    icon: Sparkles,
    color: 'bg-purple-500',
    importance: 'high',
    content: {
      dos: [
        'Dress modestly (cover shoulders and knees)',
        'Remove hats and sunglasses',
        'Bow before entering main halls',
        'Follow photography rules strictly',
        'Speak in whispers or remain silent'
      ],
      donts: [
        'Don\'t wear revealing clothing',
        'Don\'t point feet toward Buddha statues',
        'Don\'t touch religious artifacts',
        'Don\'t take photos of people praying',
        'Don\'t bring food or drinks inside'
      ],
      etiquette: [
        'Walk clockwise around temples',
        'Light incense respectfully',
        'Make small donations if comfortable',
        'Follow local worshippers\' lead'
      ]
    }
  }
];

const festivals = [
  {
    name: 'Chinese New Year (Spring Festival)',
    date: 'January/February',
    duration: '15 days',
    significance: 'Most important Chinese holiday celebrating new beginnings',
    traditions: ['Red decorations', 'Family reunions', 'Fireworks', 'Lion dances', 'Red envelopes (hongbao)'],
    travelImpact: 'Everything closes, massive travel crowds, book early',
    color: 'bg-red-500'
  },
  {
    name: 'Mid-Autumn Festival',
    date: 'September/October',
    duration: '3 days',
    significance: 'Harvest festival celebrating family unity and moon worship',
    traditions: ['Mooncakes', 'Lanterns', 'Moon viewing', 'Family gatherings'],
    travelImpact: 'Popular travel time, book accommodations early',
    color: 'bg-orange-500'
  },
  {
    name: 'Dragon Boat Festival',
    date: 'May/June',
    duration: '3 days',
    significance: 'Commemorates poet Qu Yuan, promotes health and protection',
    traditions: ['Dragon boat races', 'Zongzi (rice dumplings)', 'Realgar wine'],
    travelImpact: 'Great time to visit, special events and races',
    color: 'bg-blue-500'
  },
  {
    name: 'National Day Golden Week',
    date: 'October 1-7',
    duration: '7 days',
    significance: 'Celebrates founding of People\'s Republic of China',
    traditions: ['Flag ceremonies', 'Patriotic displays', 'Travel and tourism'],
    travelImpact: 'Extremely crowded, avoid if possible, book well ahead',
    color: 'bg-yellow-500'
  }
];

const socialNorms = [
  {
    category: 'Face & Respect',
    icon: Star,
    rules: [
      'Never cause someone to lose face in public',
      'Praise achievements and show respect for age',
      'Avoid direct confrontation or criticism',
      'Use indirect communication when disagreeing'
    ]
  },
  {
    category: 'Personal Space',
    icon: Users,
    rules: [
      'Maintain arm\'s length in conversations',
      'Don\'t touch strangers casually',
      'Respect queues (though they may be loose)',
      'Be patient with crowded public transport'
    ]
  },
  {
    category: 'Photography',
    icon: AlertCircle,
    rules: [
      'Ask permission before photographing people',
      'No photos in temples, museums (unless allowed)',
      'Avoid military or government buildings',
      'Be respectful of privacy in residential areas'
    ]
  },
  {
    category: 'Money & Bargaining',
    icon: Lightbulb,
    rules: [
      'Bargain at markets, not in stores',
      'Start at 30-50% of asking price',
      'Walk away if price too high - they may call you back',
      'Mobile payments preferred over cash'
    ]
  }
];

const philosophies = [
  {
    name: 'Confucianism',
    principles: ['Respect for elders', 'Social harmony', 'Education importance', 'Moral cultivation'],
    impact: 'Influences family relationships, work ethics, and social interactions',
    color: 'bg-blue-100 text-blue-800'
  },
  {
    name: 'Taoism',
    principles: ['Balance and harmony', 'Natural flow', 'Simplicity', 'Inner peace'],
    impact: 'Seen in traditional medicine, martial arts, and life philosophy',
    color: 'bg-green-100 text-green-800'
  },
  {
    name: 'Buddhism',
    principles: ['Compassion', 'Mindfulness', 'Non-attachment', 'Inner wisdom'],
    impact: 'Influences art, architecture, and spiritual practices',
    color: 'bg-purple-100 text-purple-800'
  }
];

export default function CulturalGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-chinese-50 to-gold-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">
              China <span className="text-gradient">Cultural Guide</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Discover the rich traditions, customs, and etiquette of Chinese culture. Travel with confidence 
              and respect while experiencing authentic China like never before.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-1 text-red-500" />
                5000+ Years of Culture
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-1 text-primary-500" />
                56 Ethnic Groups
              </div>
              <div className="flex items-center">
                <BookOpen className="w-4 h-4 mr-1 text-emerald-500" />
                Essential Etiquette
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Aspects */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Essential Cultural Knowledge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master these key cultural aspects to show respect and enhance your China experience
            </p>
          </div>
          
          <div className="space-y-12">
            {culturalAspects.map(aspect => (
              <div key={aspect.id} className="bg-white rounded-2xl shadow-sm p-8 border-l-4 border-primary-500">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${aspect.color} rounded-xl flex items-center justify-center mr-4`}>
                    <aspect.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{aspect.title}</h3>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      aspect.importance === 'high' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {aspect.importance === 'high' ? 'Essential' : 'Important'}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-4 flex items-center">
                      ✅ Do's
                    </h4>
                    <ul className="space-y-2">
                      {aspect.content.dos.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-red-700 mb-4 flex items-center">
                      ❌ Don'ts
                    </h4>
                    <ul className="space-y-2">
                      {aspect.content.donts.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {aspect.content.phrases && (
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4">Essential Phrases:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {aspect.content.phrases.map((phrase, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                          <div className="text-lg font-bold text-gray-900 mb-1">{phrase.chinese}</div>
                          <div className="text-sm text-gray-600 mb-1">{phrase.english}</div>
                          <div className="text-xs text-primary-600 italic">{phrase.pronunciation}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {aspect.content.tips && (
                  <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">💡 Pro Tips:</h4>
                    <ul className="space-y-1 text-sm text-blue-800">
                      {aspect.content.tips.map((tip, index) => (
                        <li key={index}>• {tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festivals */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Major Chinese Festivals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding these celebrations will enrich your cultural experience and help with travel planning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {festivals.map((festival, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-4 h-4 ${festival.color} rounded-full mr-3`}></div>
                  <h3 className="text-xl font-bold text-gray-900">{festival.name}</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Date:</span>
                      <p className="text-gray-600">{festival.date}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Duration:</span>
                      <p className="text-gray-600">{festival.duration}</p>
                    </div>
                  </div>
                  
                  <div>
                    <span className="font-medium text-gray-700">Significance:</span>
                    <p className="text-gray-600 text-sm mt-1">{festival.significance}</p>
                  </div>
                  
                  <div>
                    <span className="font-medium text-gray-700">Traditions:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {festival.traditions.map((tradition, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {tradition}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <span className="font-medium text-yellow-800">Travel Impact:</span>
                    <p className="text-yellow-700 text-sm mt-1">{festival.travelImpact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Norms */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Social Norms & Etiquette</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate Chinese society with confidence by understanding these important social guidelines
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {socialNorms.map((norm, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                    <norm.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{norm.category}</h3>
                </div>
                <ul className="space-y-2">
                  {norm.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Chinese Philosophy & Worldview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding these philosophical foundations helps explain Chinese culture and behavior
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophies.map((philosophy, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{philosophy.name}</h3>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">Core Principles:</h4>
                  <div className="space-y-2">
                    {philosophy.principles.map((principle, idx) => (
                      <span key={idx} className={`inline-block px-3 py-1 rounded-full text-sm mr-2 mb-2 ${philosophy.color}`}>
                        {principle}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2">Cultural Impact:</h4>
                  <p className="text-sm text-gray-600">{philosophy.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-chinese-500 to-gold-500">
        <div className="container-custom">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience Authentic China?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Now that you understand Chinese culture, explore the country's most incredible attractions and experiences with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/attractions" 
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                Discover Cultural Sites
              </Link>
              <a 
                href="https://www.getyourguide.com/activity/shanghai-l178/shanghai-full-day-itinerary-with-jing-an-temple-the-bund-t1001082/?partner_id=UENNPLZ&utm_medium=online_publisher&utm_source=chineseattractions&placement=content-end&cmp=culture"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                Book Cultural Tours
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
            <p className="text-sm mt-4 opacity-75">
              ✓ Expert Local Guides ✓ Cultural Immersion ✓ Respectful Experiences
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
