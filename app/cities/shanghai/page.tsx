import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Star, Clock, Users, Camera, Calendar, ArrowRight, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shanghai Attractions & Tours | Complete Travel Guide to China\'s Modern Metropolis',
  description: 'Discover the best Shanghai attractions, tours, and experiences. From The Bund to Oriental Pearl Tower, explore China\'s most dynamic city with our comprehensive travel guide. Book top-rated tours and activities.',
  keywords: [
    'Shanghai attractions',
    'Shanghai tours',
    'Shanghai travel guide',
    'The Bund Shanghai',
    'Oriental Pearl Tower',
    'Shanghai sightseeing',
    'Shanghai activities',
    'Shanghai experiences',
    'China modern city tours',
    'Shanghai vacation',
    'Shanghai tourism',
    'Shanghai landmarks',
    'Shanghai cultural sites',
    'Shanghai day trips',
    'Shanghai travel tips',
    'Shanghai itinerary',
    'Shanghai booking',
    'Shanghai tickets',
    'Shanghai guided tours',
    'Shanghai private tours',
    'Yu Garden Shanghai',
    'French Concession Shanghai',
    'Shanghai skyline',
    'Shanghai museums'
  ],
  openGraph: {
    title: 'Shanghai Attractions & Tours | Complete Travel Guide to China\'s Modern Metropolis',
    description: 'Discover the best Shanghai attractions, tours, and experiences. From The Bund to Oriental Pearl Tower, explore China\'s most dynamic city with our comprehensive travel guide.',
    images: ['/shanghai-og.jpg'],
    url: '/cities/shanghai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shanghai Attractions & Tours | Complete Travel Guide',
    description: 'Discover the best Shanghai attractions, tours, and experiences. From The Bund to Oriental Pearl Tower, explore China\'s most dynamic city.',
    images: ['/shanghai-og.jpg'],
  },
  alternates: {
    canonical: '/cities/shanghai',
  },
}

const travelTips = [
  {
    title: 'Best Time to Visit Shanghai',
    content: 'Spring (March-May) and autumn (September-November) offer the most pleasant weather with mild temperatures and comfortable humidity levels.',
    icon: Calendar
  },
  {
    title: 'Getting Around Shanghai',
    content: 'Shanghai Metro is extensive and efficient. Taxis, ride-sharing apps, and the Maglev train to the airport provide excellent transportation options.',
    icon: MapPin
  },
  {
    title: 'Language & Communication',
    content: 'English is more widely spoken than in other Chinese cities, especially in tourist areas. Translation apps and basic Mandarin phrases are helpful.',
    icon: Users
  },
  {
    title: 'Photography Spots',
    content: 'The Bund offers spectacular skyline views, especially at sunset and night. Yu Garden and French Concession provide excellent cultural photography.',
    icon: Camera
  }
]

export default function ShanghaiPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Shanghai",
    "description": "China's most modern metropolis featuring stunning skyline, historic Bund, and vibrant international culture",
    "url": "https://chineseattractions.com/cities/shanghai",
    "image": "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&h=630&fit=crop",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "31.2304",
      "longitude": "121.4737"
    },
    "touristType": ["Urban Tourism", "Modern Architecture", "Cultural Tourism", "Shopping Tourism"],
    "hasMap": "https://maps.google.com/?q=Shanghai,China"
  }

  return (
    <div className="pt-16 md:pt-20">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="relative container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-gold-400 mr-3" />
              <span className="text-gold-400 font-medium text-lg">China's Global Metropolis</span>
            </div>
            
            <h1 className="heading-xl text-white mb-6 animate-fade-in-up">
              Discover Shanghai's
              <span className="block text-gradient bg-gradient-to-r from-gold-400 to-yellow-300 bg-clip-text text-transparent">
                Modern Marvels & Rich Heritage
              </span>
            </h1>
            
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Experience China's most cosmopolitan city, where futuristic skyscrapers rise alongside historic neighborhoods. 
              From the iconic Bund waterfront to the bustling French Concession, Shanghai offers an unparalleled blend of East and West.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <a href="#tours" className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center">
                Explore Shanghai Attractions
                <ArrowRight className="w-5 h-5 ml-2 flex-shrink-0" />
              </a>
              <Link href="/cities" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4">
                Discover More Cities
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-8 mt-12 text-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">38+</div>
                <div className="text-sm">Top Attractions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">180+</div>
                <div className="text-sm">Years of History</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">24M+</div>
                <div className="text-sm">Annual Visitors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-center mb-8">
              Why Visit Shanghai? The Ultimate Guide to China's Modern Metropolis
            </h2>
            
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Shanghai, China's largest city and global financial hub, stands as the perfect embodiment of modern China's rapid transformation and international ambitions. This magnificent metropolis of over 24 million inhabitants seamlessly blends cutting-edge architecture with rich historical heritage, creating an urban experience unlike anywhere else on Earth. From the iconic skyline of <strong>Pudong</strong> to the colonial elegance of <strong>The Bund</strong>, Shanghai offers visitors an extraordinary journey through time, culture, and innovation.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Shanghai's Remarkable Transformation</h3>
              <p className="mb-6">
                Once a modest fishing village, Shanghai has evolved into one of the world's most important cities in just over a century. The city's name, meaning "upon the sea," reflects its strategic position at the mouth of the Yangtze River. Shanghai's transformation began in the 1840s when it became a major trading port, attracting international businesses and creating the unique blend of Eastern and Western influences that defines the city today. The <strong>French Concession</strong>, <strong>International Settlement</strong>, and traditional Chinese areas each contribute distinct architectural and cultural elements to Shanghai's rich urban tapestry.
              </p>
              
              <p className="mb-6">
                Today's Shanghai serves as China's economic powerhouse, hosting the world's busiest container port and serving as the headquarters for numerous multinational corporations. The city's <strong>Lujiazui Financial District</strong> in Pudong showcases some of the world's most impressive skyscrapers, including the <strong>Shanghai Tower</strong> (the world's second-tallest building), the <strong>Jin Mao Tower</strong>, and the distinctive <strong>Oriental Pearl Tower</strong>. This stunning skyline has become an iconic symbol of China's economic miracle and modernization.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">The Bund: Shanghai's Crown Jewel</h3>
              <p className="mb-6">
                The <strong>Bund (Waitan)</strong> represents Shanghai's most famous attraction and serves as the city's historic waterfront promenade. This 1.5-kilometer stretch along the Huangpu River features 52 buildings representing various architectural styles from the early 20th century, including Art Deco, Gothic Revival, Romanesque, and Neoclassical designs. These magnificent structures, once home to banks, trading houses, and consulates from around the world, now house luxury hotels, restaurants, and cultural institutions. The Bund offers spectacular views of the futuristic Pudong skyline across the river, creating one of the world's most dramatic urban contrasts.
              </p>
              
              <p className="mb-6">
                Walking along the Bund, especially during sunset and evening hours, provides visitors with an unforgettable experience. The promenade comes alive with locals practicing tai chi, couples taking romantic strolls, and photographers capturing the stunning skyline. The area's historic buildings are beautifully illuminated at night, while the Pudong skyscrapers across the river create a dazzling light show that reflects off the Huangpu River's waters.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Shanghai's Cultural Diversity and International Flair</h3>
              <p className="mb-6">
                Shanghai's international character sets it apart from other Chinese cities. The <strong>French Concession</strong> area retains its European charm with tree-lined streets, boutique shops, art galleries, and sidewalk cafes that wouldn't look out of place in Paris. This neighborhood offers excellent shopping, dining, and nightlife options, making it a favorite among both locals and international visitors. The area's <strong>Tianzifang</strong> and <strong>Xintiandi</strong> districts have been transformed into trendy entertainment and shopping complexes while preserving their historic <strong>shikumen</strong> (stone gate) architecture.
              </p>
              
              <p className="mb-6">
                The city's cultural scene rivals that of any major international metropolis. Shanghai hosts world-class museums, including the <strong>Shanghai Museum</strong> with its exceptional collection of Chinese art and artifacts, and the <strong>China Art Museum</strong>, housed in the former China Pavilion from the 2010 World Expo. The city's performing arts venues, such as the <strong>Shanghai Grand Theatre</strong> and <strong>Shanghai Concert Hall</strong>, regularly host international productions, classical concerts, and traditional Chinese performances.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Shanghai's Culinary Excellence</h3>
              <p className="mb-6">
                Shanghai's culinary scene represents one of China's most sophisticated and diverse food cultures. <strong>Shanghainese cuisine</strong> is characterized by its sweet and savory flavors, featuring dishes like <strong>xiaolongbao</strong> (soup dumplings), <strong>shengjianbao</strong> (pan-fried pork buns), and <strong>hongshaorou</strong> (red-braised pork). The city's numerous food markets, including <strong>Yuyuan Bazaar</strong> and local wet markets, offer authentic street food experiences alongside traditional restaurants that have been serving families for generations.
              </p>
              
              <p className="mb-6">
                Beyond traditional Chinese cuisine, Shanghai's international dining scene is unparalleled in China. The city hosts numerous Michelin-starred restaurants, innovative fusion establishments, and authentic international cuisines from around the world. Areas like <strong>Xintiandi</strong>, the <strong>French Concession</strong>, and <strong>Lujiazui</strong> offer everything from high-end fine dining to casual international fare, reflecting the city's cosmopolitan character and diverse population.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Shopping Paradise and Modern Lifestyle</h3>
              <p className="mb-6">
                Shanghai stands as one of Asia's premier shopping destinations, offering everything from luxury international brands to unique local products. <strong>Nanjing Road</strong>, one of the world's busiest shopping streets, stretches for 5.5 kilometers and features department stores, boutiques, and specialty shops. The pedestrian section of Nanjing Road East provides an exciting shopping experience with its neon signs, street performers, and constant energy.
              </p>
              
              <p className="mb-6">
                For luxury shopping, areas like <strong>Huaihai Road</strong>, <strong>Xintiandi</strong>, and the <strong>IFC Mall</strong> in Lujiazui offer high-end international brands and designer boutiques. Traditional markets like <strong>Yuyuan Bazaar</strong> and <strong>Dongtai Road Antique Market</strong> provide opportunities to discover unique Chinese handicrafts, antiques, and souvenirs. The city's numerous shopping malls, including some of the world's largest, offer climate-controlled comfort and international dining options alongside extensive retail choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GetYourGuide Activities Widget */}
      <section id="tours" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              Top Shanghai Tours & Activities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book the best Shanghai experiences with our trusted travel partner. Discover the city's modern marvels and historic treasures.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {/* Custom GetYourGuide Widget for Shanghai */}
            <div className="gyg-widget-container shadow-xl rounded-xl overflow-hidden bg-white">
              <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Discover Shanghai's Best Experiences</h3>
                <p className="text-blue-100">From The Bund to Yu Garden - explore Shanghai's top attractions and hidden gems</p>
              </div>
              <div 
                data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
                data-gyg-locale-code="en-US" 
                data-gyg-widget="activities" 
                data-gyg-number-of-items="6" 
                data-gyg-partner-id="UENNPLZ" 
                data-gyg-q="shanghai"
                className="min-h-[500px] bg-gray-100 rounded-lg flex items-center justify-center"
              >
                <div className="text-center p-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading Shanghai experiences...</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 text-center">
                <span className="text-sm text-gray-500">
                  Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/shanghai-l18/" className="text-primary-600 hover:underline font-medium">GetYourGuide</a> | 
                  <span className="text-emerald-600 font-medium">Free Cancellation</span> | 
                  <span className="text-blue-600 font-medium">Instant Confirmation</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-gold-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              Essential Shanghai Travel Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make the most of your Shanghai adventure with these insider tips and practical advice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelTips.map((tip, index) => {
              const Icon = tip.icon
              return (
                <div 
                  key={tip.title}
                  className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tip.content}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-center mb-12">
              Frequently Asked Questions About Shanghai
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How many days do you need to see Shanghai?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We recommend 3-4 days to see Shanghai's main attractions comfortably. This allows time for The Bund and Pudong skyline (1 day), 
                  Yu Garden and Old City exploration (half day), French Concession and shopping districts (1 day), plus museums and cultural sites (1 day). 
                  For a more comprehensive experience including day trips, 5-7 days is ideal.
                </p>
              </div>
              
              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What is the best time to visit Shanghai?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The best times to visit Shanghai are spring (March-May) and autumn (September-November). These seasons offer mild temperatures, 
                  comfortable humidity levels, and clear skies perfect for sightseeing. Summer can be hot and humid with occasional typhoons, 
                  while winter is cool but generally pleasant for indoor attractions and cultural experiences.
                </p>
              </div>
              
              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do I need to book Shanghai attraction tickets in advance?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  While many Shanghai attractions don't require advance booking, it's recommended for popular sites like the Shanghai Tower observation deck, 
                  Yu Garden during peak seasons, and special exhibitions at major museums. Booking through GetYourGuide ensures guaranteed entry, 
                  often with skip-the-line access and competitive pricing.
                </p>
              </div>
              
              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Is English widely spoken in Shanghai?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Shanghai has the highest level of English proficiency among Chinese cities. Many locals in tourist areas, hotels, restaurants, 
                  and shopping districts speak English. The city's international character means English signage is common, and most major attractions 
                  offer English-language information and guided tours.
                </p>
              </div>
              
              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What are the must-try foods in Shanghai?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Essential Shanghai dishes include xiaolongbao (soup dumplings), shengjianbao (pan-fried pork buns), hongshaorou (red-braised pork), 
                  and scallion oil noodles. Visit Din Tai Fung for premium dumplings, explore Yu Garden's food court for street food, 
                  or try local restaurants in the French Concession for authentic Shanghainese cuisine.
                </p>
              </div>
              
              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How do I get from Shanghai airports to the city center?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  From Pudong Airport (PVG): Take the Maglev train (8 minutes to Longyang Road), then metro to city center. 
                  Alternatively, use Metro Line 2 directly (45-60 minutes) or taxi (45-90 minutes depending on traffic). 
                  From Hongqiao Airport (SHA): Metro Lines 2 and 10 connect directly to the city center (30-45 minutes).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-white mb-6">
            Ready to Explore Shanghai?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Start planning your unforgettable Shanghai adventure today. Book top-rated tours and activities 
            to experience the best of China's most dynamic and cosmopolitan city.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#tours" className="btn-secondary bg-white text-primary-600 hover:bg-gray-50 text-lg px-8 py-4">
              Book Shanghai Tours Now
            </a>
            <Link href="/cities" className="btn-outline border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              Explore More Cities
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
