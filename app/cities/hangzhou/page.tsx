import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Star, Clock, Users, Camera, Calendar, ArrowRight, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hangzhou Attractions & Tours | Complete Travel Guide to China\'s Paradise City',
  description: 'Discover the best Hangzhou attractions, tours, and experiences. From West Lake to Lingyin Temple, explore China\'s most beautiful city with our comprehensive travel guide. Book top-rated tours and activities.',
  keywords: [
    'Hangzhou attractions',
    'Hangzhou tours',
    'Hangzhou travel guide',
    'West Lake Hangzhou',
    'Lingyin Temple Hangzhou',
    'Hangzhou sightseeing',
    'Hangzhou activities',
    'Hangzhou experiences',
    'China lake tours',
    'Hangzhou vacation',
    'Hangzhou tourism',
    'Hangzhou landmarks',
    'Hangzhou cultural sites',
    'Hangzhou day trips',
    'Hangzhou travel tips',
    'Hangzhou itinerary',
    'Hangzhou booking',
    'Hangzhou tickets',
    'Hangzhou guided tours',
    'Hangzhou private tours',
    'Longjing tea Hangzhou',
    'Six Harmonies Pagoda',
    'Xixi Wetland Hangzhou',
    'Hangzhou silk museum',
    'Leifeng Pagoda Hangzhou'
  ],
  openGraph: {
    title: 'Hangzhou Attractions & Tours | Complete Travel Guide to China\'s Paradise City',
    description: 'Discover the best Hangzhou attractions, tours, and experiences. From West Lake to Lingyin Temple, explore China\'s most beautiful city.',
    images: ['/hangzhou-og.jpg'],
    url: '/cities/hangzhou',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hangzhou Attractions & Tours | Complete Travel Guide',
    description: 'Discover the best Hangzhou attractions, tours, and experiences. From West Lake to Lingyin Temple, explore China\'s most beautiful city.',
    images: ['/hangzhou-og.jpg'],
  },
  alternates: {
    canonical: '/cities/hangzhou',
  },
}

const travelTips = [
  {
    title: 'Best Time to Visit Hangzhou',
    content: 'March-May and September-November offer the most pleasant weather. Spring brings blooming flowers around West Lake, while autumn provides clear skies and comfortable temperatures.',
    icon: Calendar
  },
  {
    title: 'Getting Around Hangzhou',
    content: 'Hangzhou Metro connects major attractions efficiently. Public bikes are popular around West Lake. Walking and boat tours offer the best West Lake experiences.',
    icon: MapPin
  },
  {
    title: 'Language & Local Culture',
    content: 'Hangzhou locals speak Mandarin with a distinctive Zhejiang accent. The city is known for its refined culture and tea traditions. English is common in tourist areas.',
    icon: Users
  },
  {
    title: 'Tea Culture Experience',
    content: 'Visit Longjing tea plantations for authentic tea tasting. Many tea houses around West Lake offer traditional ceremonies. Spring is the best season for fresh tea.',
    icon: Camera
  }
]

export default function HangzhouPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Hangzhou",
    "description": "China's paradise city famous for West Lake, ancient temples, and traditional tea culture",
    "url": "https://chineseattractions.com/cities/hangzhou",
    "image": "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=1200&h=630&fit=crop",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "30.2741",
      "longitude": "120.1551"
    },
    "touristType": ["Cultural Tourism", "Nature Tourism", "Historical Tourism", "Tea Tourism"],
    "hasMap": "https://maps.google.com/?q=Hangzhou,China"
  }

  return (
    <div className="pt-16 md:pt-20">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-cyan-700 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="relative container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-gold-400 mr-3" />
              <span className="text-gold-400 font-medium text-lg">China's Paradise City</span>
            </div>
            
            <h1 className="heading-xl text-white mb-6 animate-fade-in-up">
              Discover Hangzhou's
              <span className="block text-gradient bg-gradient-to-r from-gold-400 to-yellow-300 bg-clip-text text-transparent">
                Legendary West Lake Beauty
              </span>
            </h1>
            
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Experience China's most poetic destination, where the legendary West Lake has inspired artists and poets for over 1,000 years. 
              From ancient temples and traditional tea gardens to silk museums and pagodas, Hangzhou offers a perfect blend of natural beauty, cultural heritage, and refined elegance that has earned it the title "Paradise on Earth."
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <a href="#tours" className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center">
                Explore Hangzhou Attractions
                <ArrowRight className="w-5 h-5 ml-2 flex-shrink-0" />
              </a>
              <Link href="/cities" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4">
                Discover More Cities
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-8 mt-12 text-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">15+</div>
                <div className="text-sm">UNESCO Sites</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">2,200+</div>
                <div className="text-sm">Years of History</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">12M+</div>
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
              Why Visit Hangzhou? The Ultimate Guide to China's Paradise City
            </h2>
            
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Hangzhou, the elegant capital of Zhejiang Province, stands as one of China's most celebrated destinations, earning the poetic designation <strong>"Paradise on Earth"</strong> through centuries of cultural refinement and natural beauty. This sophisticated city of 12 million people has captivated visitors since the Song Dynasty, when it served as China's capital and reached unprecedented heights of artistic and commercial achievement. The famous 13th-century explorer Marco Polo declared Hangzhou <strong>"the finest and most splendid city in the world,"</strong> a sentiment that resonates today as the city seamlessly blends ancient traditions with modern innovation while preserving the timeless beauty that has inspired countless poets, artists, and travelers throughout Chinese history.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">West Lake: China's Most Celebrated Scenic Wonder</h3>
              <p className="mb-6">
                <strong>West Lake (Xihu)</strong> represents the crown jewel of Hangzhou's attractions and one of China's most iconic landscapes, designated as a UNESCO World Heritage Site for its outstanding universal value as a cultural landscape that has influenced garden design throughout East Asia for over 1,000 years. This perfectly proportioned freshwater lake, covering 6.38 square kilometers, creates a harmonious composition of water, islands, bridges, temples, and gardens that embodies the Chinese aesthetic ideal of balanced natural beauty enhanced by thoughtful human intervention.
              </p>
              
              <p className="mb-6">
                The lake's <strong>Ten Scenes of West Lake</strong>, established during the Song Dynasty, represent the most celebrated viewpoints and seasonal experiences that have been immortalized in Chinese art and literature. These include <strong>"Spring Dawn at Su Causeway"</strong> with its willow-lined pathway and blooming peach trees, <strong>"Autumn Moon over Calm Lake"</strong> offering ethereal nighttime reflections, and <strong>"Leifeng Pagoda in Evening Glow"</strong> where the reconstructed five-story pagoda creates dramatic silhouettes against sunset skies. Each scene captures different aspects of the lake's beauty throughout the day and seasons, providing endless opportunities for photography and contemplation.
              </p>
              
              <p className="mb-6">
                The lake's three artificial islands - <strong>Xiaoyingzhou</strong>, <strong>Huixin Pavilion</strong>, and <strong>Ruan Gongdun</strong> - create additional layers of scenic beauty and cultural significance. Xiaoyingzhou, known as "Three Pools Mirroring the Moon," features the famous stone pagodas that create magical reflections during the Mid-Autumn Festival when candles placed inside the pagodas cast ethereal light patterns on the water's surface. Traditional boat tours provide the most comprehensive way to experience the lake's beauty, with options ranging from large passenger boats to intimate hand-paddled vessels that allow for closer interaction with the lake's wildlife and vegetation.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Ancient Temples and Spiritual Heritage</h3>
              <p className="mb-6">
                <strong>Lingyin Temple (Temple of the Soul's Retreat)</strong>, founded in 328 CE, ranks among China's most important Buddhist temples and represents over 1,600 years of continuous spiritual practice and architectural evolution. The temple complex, nestled in a forested valley west of West Lake, houses some of China's finest Buddhist art, including the magnificent <strong>Hall of the Great Hero</strong> with its 24.8-meter-high statue of Sakyamuni Buddha carved from 24 pieces of camphor wood. The temple's extensive collection of Buddhist sculptures, calligraphy, and religious artifacts provides comprehensive insights into Chinese Buddhist culture and artistic traditions.
              </p>
              
              <p className="mb-6">
                The adjacent <strong>Feilai Feng (Flying Peak)</strong> features over 300 stone carvings dating from the 10th to 14th centuries, representing one of China's most important collections of religious stone art. These intricate carvings, depicting Buddhist figures, bodhisattvas, and religious scenes, demonstrate the sophisticated artistic techniques and spiritual devotion that characterized medieval Chinese Buddhism. The <strong>Laughing Buddha</strong> carving, dating from 1000 CE, has become one of the most recognizable Buddhist images in Chinese culture and attracts millions of visitors seeking blessings and good fortune.
              </p>
              
              <p className="mb-6">
                <strong>Six Harmonies Pagoda (Liuhe Pagoda)</strong>, built in 970 CE, serves as both a masterpiece of ancient Chinese architecture and a symbol of Hangzhou's historical importance as a major port city. This 13-story octagonal pagoda, standing 60 meters tall, was originally constructed to calm the tidal bore of the Qiantang River and guide ships safely to harbor. The pagoda's interior features intricate wooden architecture and Buddhist art, while its exterior galleries provide spectacular panoramic views of the Qiantang River, modern Hangzhou skyline, and surrounding countryside. The structure demonstrates the sophisticated engineering capabilities of Song Dynasty architects and the integration of practical and spiritual purposes in Chinese architecture.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Longjing Tea Culture and Traditional Crafts</h3>
              <p className="mb-6">
                Hangzhou's <strong>Longjing (Dragon Well) tea</strong> represents one of China's most prestigious green teas and a cultural tradition that has been refined over 1,200 years of cultivation and processing expertise. The tea plantations surrounding West Lake, particularly in the villages of <strong>Meijiawu</strong> and <strong>Longjing Village</strong>, produce the highest quality tea leaves that are hand-picked and processed using traditional methods passed down through generations of tea masters. The distinctive flat, smooth appearance and delicate flavor of authentic Longjing tea result from specific growing conditions, harvesting techniques, and pan-firing methods that cannot be replicated elsewhere.
              </p>
              
              <p className="mb-6">
                Visitors can experience authentic tea culture through plantation visits, traditional tea ceremonies, and hands-on workshops where expert tea masters demonstrate the intricate process of tea production from leaf selection to final preparation. The <strong>China National Tea Museum</strong> provides comprehensive education about Chinese tea culture, featuring extensive collections of tea-related artifacts, historical documents, and interactive exhibits that explain the cultural significance of tea in Chinese society. Spring visits (March-May) offer the opportunity to witness the harvest of the most prized <strong>"pre-Qingming"</strong> tea leaves, considered the finest quality of the entire growing season.
              </p>
              
              <p className="mb-6">
                Hangzhou's silk industry, with over 4,700 years of history, represents another cornerstone of the city's cultural heritage and economic development. The <strong>China National Silk Museum</strong> showcases the world's most comprehensive collection of silk artifacts, including ancient textiles, traditional looms, and contemporary silk art that demonstrates the evolution of silk production from ancient handicraft to modern industrial process. Visitors can observe traditional silk weaving techniques, learn about sericulture (silkworm cultivation), and purchase authentic Hangzhou silk products that represent some of the finest textile craftsmanship available anywhere in the world.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Historical Districts and Cultural Preservation</h3>
              <p className="mb-6">
                <strong>Hefang Street</strong>, Hangzhou's most famous historical pedestrian street, preserves the architectural character and commercial traditions of imperial China while serving as a vibrant center for traditional crafts, local cuisine, and cultural performances. This carefully restored Qing Dynasty street features traditional shophouses, tea houses, and artisan workshops where visitors can observe traditional crafts including silk weaving, tea processing, calligraphy, and traditional medicine preparation. The street's authentic atmosphere provides immersive experiences of historical Chinese urban life while supporting local artisans and cultural preservation efforts.
              </p>
              
              <p className="mb-6">
                The <strong>Grand Canal</strong>, which terminates in Hangzhou after flowing 1,776 kilometers from Beijing, represents one of humanity's greatest engineering achievements and a UNESCO World Heritage Site that demonstrates the sophisticated hydraulic engineering capabilities of ancient Chinese civilization. The canal's Hangzhou section features well-preserved historical architecture, traditional bridges, and waterfront districts that illustrate the city's importance as the southern terminus of this crucial transportation and communication network. Boat tours along the canal provide unique perspectives on Hangzhou's urban development and the continuing role of waterways in Chinese city planning.
              </p>
              
              <p className="mb-6">
                <strong>Xixi National Wetland Park</strong>, China's first national wetland park, preserves 11.5 square kilometers of pristine wetland ecosystem within Hangzhou's urban area, demonstrating the city's commitment to environmental conservation and sustainable development. This unique urban wilderness features traditional water villages, ancient temples, and diverse wildlife habitats that provide refuge for over 200 bird species and countless other animals. The park's network of waterways, accessible by traditional boats, offers peaceful escapes from urban life while educating visitors about wetland ecology and traditional Chinese agricultural practices that have sustained these landscapes for centuries.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Culinary Traditions and Local Specialties</h3>
              <p className="mb-6">
                Hangzhou cuisine, known as <strong>Zhe cuisine</strong>, represents one of China's eight major culinary traditions, characterized by fresh ingredients, delicate flavors, and elegant presentation that reflects the city's refined cultural heritage. The cuisine emphasizes seasonal ingredients, particularly freshwater fish from West Lake, bamboo shoots from surrounding hills, and tea leaves that are incorporated into both savory and sweet dishes. <strong>West Lake Fish in Sweet and Sour Sauce</strong>, the city's most famous dish, exemplifies the cuisine's emphasis on natural flavors and artistic presentation, with the fish prepared to resemble swimming in the lake.
              </p>
              
              <p className="mb-6">
                <strong>Dongpo Pork</strong>, named after the Song Dynasty poet Su Dongpo who lived in Hangzhou, represents another iconic local dish that demonstrates the sophisticated cooking techniques and cultural associations that characterize Hangzhou cuisine. This slow-braised pork belly dish requires precise timing and temperature control to achieve the perfect balance of tender meat and rich, glossy sauce. The dish's cultural significance extends beyond its culinary merits, representing the integration of literary culture and gastronomy that has characterized Hangzhou's intellectual traditions for nearly 1,000 years.
              </p>
              
              <p className="mb-6">
                The city's tea culture extends into its dessert traditions, with <strong>Longjing tea-flavored sweets</strong> and <strong>osmanthus-flavored treats</strong> that incorporate local ingredients into traditional Chinese confectionery. Street food markets around West Lake offer numerous local specialties including <strong>xiaolongbao</strong> (soup dumplings), <strong>beggar's chicken</strong> (whole chicken wrapped in lotus leaves and clay), and various seasonal snacks that reflect the agricultural abundance of the Yangtze River Delta region. High-end restaurants throughout the city offer refined interpretations of traditional dishes alongside innovative fusion cuisine that maintains connections to local ingredients and cooking traditions.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Modern Hangzhou: Technology and Innovation</h3>
              <p className="mb-6">
                Contemporary Hangzhou has emerged as one of China's most important technology centers, home to e-commerce giant Alibaba and numerous other innovative companies that have transformed the city into a global hub for digital commerce and financial technology. This technological development has been carefully balanced with cultural preservation, creating a unique urban environment where ancient temples coexist with cutting-edge research facilities and traditional tea houses operate alongside high-tech startups. The city's success in integrating technological innovation with cultural heritage has made it a model for sustainable urban development throughout China.
              </p>
              
              <p className="mb-6">
                The <strong>Hangzhou Internet Court</strong>, the world's first internet court, demonstrates the city's pioneering role in digital governance and legal innovation. This technological leadership extends to urban planning, with smart city initiatives that use big data and artificial intelligence to optimize traffic flow, environmental monitoring, and public services while preserving the city's historical character and natural beauty. The integration of technology with traditional culture creates unique experiences for visitors, including digital guides for historical sites, virtual reality experiences of ancient Hangzhou, and mobile apps that provide real-time information about tea ceremonies, temple activities, and cultural events.
              </p>
              
              <p className="mb-6">
                Hangzhou's hosting of the 2016 G20 Summit brought international attention to the city's achievements in balancing economic development with environmental protection and cultural preservation. The summit's legacy includes improved infrastructure, enhanced international connectivity, and increased global recognition of Hangzhou as a destination that successfully combines ancient Chinese culture with modern innovation. This international profile has attracted increased tourism while maintaining the authentic character that has made Hangzhou beloved by Chinese and international visitors for over 1,000 years.
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
              Top Hangzhou Tours & Activities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book the best Hangzhou experiences with our trusted travel partner. Discover West Lake's beauty and ancient temples.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {/* Custom GetYourGuide Widget for Hangzhou */}
            <div className="gyg-widget-container shadow-xl rounded-xl overflow-hidden bg-white">
              <div className="p-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Explore Hangzhou's Paradise Beauty</h3>
                <p className="text-blue-100">From West Lake cruises to ancient temples - experience China's most poetic city</p>
              </div>
              <div 
                data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
                data-gyg-locale-code="en-US" 
                data-gyg-widget="activities" 
                data-gyg-number-of-items="6" 
                data-gyg-partner-id="UENNPLZ" 
                data-gyg-q="hangzhou"
                className="min-h-[500px] bg-gray-100 rounded-lg flex items-center justify-center"
              >
                <div className="text-center p-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading Hangzhou experiences...</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 text-center">
                <span className="text-sm text-gray-500">
                  Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/hangzhou-l2632/" className="text-primary-600 hover:underline font-medium">GetYourGuide</a> | 
                  <span className="text-emerald-600 font-medium">Free Cancellation</span> | 
                  <span className="text-blue-600 font-medium">Instant Confirmation</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="section-padding bg-gradient-to-br from-chinese-50 to-gold-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              Essential Hangzhou Travel Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make the most of your Hangzhou adventure with these insider tips and practical advice.
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
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
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
              Frequently Asked Questions About Hangzhou
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How many days do you need to see Hangzhou?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We recommend 2-3 days to experience Hangzhou's main attractions comfortably. This includes a full day exploring West Lake and its surroundings, 
                  one day visiting Lingyin Temple and tea plantations, and optional time for Xixi Wetland Park or the Grand Canal. 
                  Culture enthusiasts may prefer 4-5 days for comprehensive exploration of museums and traditional districts.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What is the best way to explore West Lake?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Walking around West Lake takes about 3-4 hours and offers the most intimate experience. Bicycle rentals are popular and efficient. 
                  Boat tours provide unique water perspectives and access to the three islands. Electric sightseeing cars are available for those preferring 
                  guided tours with less walking. Early morning and late afternoon offer the best lighting and fewer crowds.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  When is the best time to visit Longjing tea plantations?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Spring (March-May) is ideal for tea plantation visits, especially early April when the finest "pre-Qingming" tea is harvested. 
                  This period offers the freshest tea, beautiful scenery with blooming flowers, and opportunities to participate in tea picking. 
                  Autumn also provides pleasant weather and good tea quality, though spring remains the premium season for tea experiences.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do I need advance booking for Lingyin Temple?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Lingyin Temple can be visited without advance booking, but peak seasons (spring, autumn, holidays) can be very crowded. 
                  Early morning visits (8:00-9:00 AM) offer the most peaceful experience and better photo opportunities. 
                  Guided tours through GetYourGuide often include skip-the-line access and cultural explanations that enhance the visit experience.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How do I get from Hangzhou to other major cities?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Hangzhou is excellently connected by high-speed rail: 1 hour to Shanghai, 4.5 hours to Beijing, 2.5 hours to Nanjing. 
                  Hangzhou Xiaoshan International Airport offers domestic and international flights. 
                  The city serves as an ideal base for exploring the Yangtze River Delta region, with easy day trips to Suzhou, Wuzhen, and other water towns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-cyan-800 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-white mb-6">
            Ready to Explore Hangzhou?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Start planning your unforgettable Hangzhou adventure today. Book top-rated tours and activities 
            to experience the best of China's paradise city and legendary West Lake beauty.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#tours" className="btn-secondary bg-white text-blue-600 hover:bg-gray-50 text-lg px-8 py-4">
              Book Hangzhou Tours Now
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
