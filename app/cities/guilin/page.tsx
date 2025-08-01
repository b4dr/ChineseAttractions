import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Star, Clock, Users, Camera, Calendar, ArrowRight, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Guilin Attractions & Tours | Complete Travel Guide to China\'s Natural Paradise',
  description: 'Discover the best Guilin attractions, tours, and experiences. From Li River cruises to Reed Flute Cave, explore China\'s most scenic city with our comprehensive travel guide. Book top-rated tours and activities.',
  keywords: [
    'Guilin attractions',
    'Guilin tours',
    'Guilin travel guide',
    'Li River cruise Guilin',
    'Reed Flute Cave',
    'Guilin sightseeing',
    'Guilin activities',
    'Guilin experiences',
    'China scenic tours',
    'Guilin vacation',
    'Guilin tourism',
    'Guilin landmarks',
    'Guilin natural sites',
    'Guilin day trips',
    'Guilin travel tips',
    'Guilin itinerary',
    'Guilin booking',
    'Guilin tickets',
    'Guilin guided tours',
    'Guilin private tours',
    'Elephant Trunk Hill',
    'Yangshuo Guilin',
    'Karst mountains Guilin',
    'Seven Star Park Guilin'
  ],
  openGraph: {
    title: 'Guilin Attractions & Tours | Complete Travel Guide to China\'s Natural Paradise',
    description: 'Discover the best Guilin attractions, tours, and experiences. From Li River cruises to Reed Flute Cave, explore China\'s most scenic city.',
    images: ['/guilin-og.jpg'],
    url: '/cities/guilin',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guilin Attractions & Tours | Complete Travel Guide',
    description: 'Discover the best Guilin attractions, tours, and experiences. From Li River cruises to Reed Flute Cave, explore China\'s most scenic city.',
    images: ['/guilin-og.jpg'],
  },
  alternates: {
    canonical: '/cities/guilin',
  },
}

const travelTips = [
  {
    title: 'Best Time to Visit Guilin',
    content: 'April-October offers the best weather for outdoor activities and river cruises. Spring and autumn provide ideal temperatures and clear skies for photography.',
    icon: Calendar
  },
  {
    title: 'Getting Around Guilin',
    content: 'Public buses connect major attractions efficiently. Bicycles are popular in Yangshuo, and organized tours provide convenient transportation to scenic areas.',
    icon: MapPin
  },
  {
    title: 'Language & Local Culture',
    content: 'Basic Mandarin is helpful as English is limited outside tourist areas. Local Guangxi dialect is unique, but Mandarin is widely understood.',
    icon: Users
  },
  {
    title: 'Photography Tips',
    content: 'Early morning and late afternoon provide the best lighting for karst landscape photography. Li River cruises offer spectacular sunrise and sunset views.',
    icon: Camera
  }
]

export default function GuilinPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Guilin",
    "description": "China's most scenic city featuring stunning karst landscapes, Li River cruises, and breathtaking natural beauty",
    "url": "https://chineseattractions.com/cities/guilin",
    "image": "https://images.unsplash.com/photo-1519640760746-95d1211ebed6?w=1200&h=630&fit=crop",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.2736",
      "longitude": "110.2900"
    },
    "touristType": ["Nature Tourism", "Scenic Tourism", "Adventure Tourism", "Photography Tourism"],
    "hasMap": "https://maps.google.com/?q=Guilin,China"
  }

  return (
    <div className="pt-16 md:pt-20">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-green-700 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="relative container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-gold-400 mr-3" />
              <span className="text-gold-400 font-medium text-lg">China's Natural Paradise</span>
            </div>
            
            <h1 className="heading-xl text-white mb-6 animate-fade-in-up">
              Discover Guilin's
              <span className="block text-gradient bg-gradient-to-r from-gold-400 to-yellow-300 bg-clip-text text-transparent">
                Breathtaking Karst Landscapes
              </span>
            </h1>
            
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Experience China's most scenic destination, where dramatic limestone peaks rise from emerald rivers and ancient villages nestle among rice terraces. 
              From the legendary Li River cruise to mystical caves and traditional fishing villages, Guilin offers nature's most spectacular artistry.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <a href="#tours" className="btn-primary text-lg px-8 py-4">
                Explore Guilin Attractions
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <Link href="/cities" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4">
                Discover More Cities
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-8 mt-12 text-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">18+</div>
                <div className="text-sm">Scenic Attractions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">2,000+</div>
                <div className="text-sm">Years of History</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">5M+</div>
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
              Why Visit Guilin? The Ultimate Guide to China's Most Scenic City
            </h2>
            
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Guilin, renowned throughout China and the world for its extraordinary natural beauty, stands as the crown jewel of scenic destinations in the Middle Kingdom. This enchanting city in Guangxi Province has inspired poets, artists, and travelers for over 2,000 years with its otherworldly landscape of towering limestone karst peaks, crystal-clear rivers, and mystical caves. The famous Chinese saying <strong>"Guilin's scenery is the best under heaven"</strong> perfectly captures the city's legendary status as nature's masterpiece, where dramatic geological formations create a landscape so beautiful it seems almost surreal.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">The Li River: China's Most Beautiful Waterway</h3>
              <p className="mb-6">
                The <strong>Li River (Lijiang)</strong> represents the heart and soul of Guilin's natural splendor, winding gracefully through a landscape of towering karst peaks that rise like ancient sentinels from the emerald waters. This 83-kilometer stretch of river from Guilin to Yangshuo offers what many consider the most spectacular river cruise in the world, with every bend revealing new vistas of limestone pinnacles, bamboo groves, traditional fishing villages, and rice paddies that have remained virtually unchanged for centuries.
              </p>
              
              <p className="mb-6">
                The Li River cruise experience varies dramatically with the seasons and time of day, each offering its own unique magic. Morning cruises often feature mystical mist rising from the water, creating an ethereal atmosphere as the karst peaks emerge like islands floating in clouds. The famous <strong>20 Yuan banknote scene</strong>, featuring the iconic karst landscape near Xingping, represents just one of countless photogenic moments along this legendary waterway. Traditional bamboo rafts with cormorant fishermen add cultural authenticity to the natural spectacle, providing glimpses into fishing techniques that have been practiced for over 1,000 years.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Karst Geology: Nature's Sculptural Masterpiece</h3>
              <p className="mb-6">
                Guilin's extraordinary landscape results from millions of years of geological processes that created one of the world's most spectacular examples of <strong>tower karst topography</strong>. The region's limestone bedrock, formed from ancient sea beds, has been sculpted by water erosion over 300 million years, creating the dramatic vertical peaks, underground rivers, and extensive cave systems that define the area's character. This unique geological formation, known as <strong>fenglin</strong> (peak forest), creates a landscape unlike anywhere else on Earth.
              </p>
              
              <p className="mb-6">
                The karst landscape extends far beyond the famous river views, encompassing thousands of limestone peaks, underground caverns, and natural bridges throughout the region. <strong>Reed Flute Cave</strong>, known as the "Palace of Natural Arts," showcases the underground beauty of Guilin's karst formations with spectacular stalactites and stalagmites illuminated by colorful lighting that highlights the cave's natural sculptures. <strong>Seven Star Cave</strong> and <strong>Crown Cave</strong> offer additional opportunities to explore the region's subterranean wonders, each featuring unique geological formations and underground chambers that demonstrate the incredible power of water to shape stone over geological time.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Yangshuo: The Perfect Complement to Guilin</h3>
              <p className="mb-6">
                <strong>Yangshuo</strong>, located 65 kilometers downstream from Guilin, serves as the perfect complement to the main city, offering a more intimate and immersive experience of the karst landscape. This charming county town, surrounded by some of the most dramatic karst peaks in the region, has evolved into an international destination that attracts rock climbers, cyclists, and nature enthusiasts from around the world. The town's <strong>West Street (Xi Jie)</strong> creates a unique fusion of traditional Chinese architecture with international cafes, restaurants, and shops that cater to global travelers.
              </p>
              
              <p className="mb-6">
                The countryside around Yangshuo offers countless opportunities for outdoor adventures and cultural experiences. <strong>Moon Hill</strong>, a natural limestone arch that creates a perfect moon-shaped opening, provides spectacular panoramic views of the surrounding karst landscape and serves as a popular destination for hiking and rock climbing. The area's extensive network of cycling paths winds through traditional villages, rice paddies, and bamboo groves, offering visitors the chance to experience rural Chinese life while surrounded by some of the world's most beautiful scenery.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Cultural Heritage and Traditional Life</h3>
              <p className="mb-6">
                Beyond its natural wonders, Guilin and the surrounding region preserve rich cultural traditions that have been shaped by the unique landscape and the diverse ethnic groups that call this area home. The region is home to several ethnic minorities, including the <strong>Zhuang</strong>, <strong>Yao</strong>, and <strong>Dong</strong> peoples, each contributing distinct cultural elements including traditional architecture, festivals, handicrafts, and culinary traditions that add depth to the visitor experience.
              </p>
              
              <p className="mb-6">
                Traditional <strong>cormorant fishing</strong> represents one of Guilin's most iconic cultural practices, where skilled fishermen use trained cormorants to catch fish in the Li River's clear waters. This ancient technique, practiced for over 1,300 years, creates one of the most photogenic and culturally significant experiences available to visitors. Evening demonstrations on bamboo rafts, illuminated by traditional lanterns, provide magical opportunities to witness this disappearing art form while enjoying the serene beauty of the river at sunset.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Guilin's Urban Attractions and Modern Amenities</h3>
              <p className="mb-6">
                While Guilin's natural attractions dominate most itineraries, the city itself offers numerous cultural and historical sites that provide context for the region's development and significance. <strong>Elephant Trunk Hill (Xiangbishan)</strong>, Guilin's most famous landmark, creates the iconic silhouette that appears on countless postcards and promotional materials. This natural rock formation, resembling an elephant drinking from the Li River, has become the unofficial symbol of Guilin and offers beautiful views from multiple vantage points throughout the city.
              </p>
              
              <p className="mb-6">
                <strong>Seven Star Park</strong>, Guilin's largest urban park, combines natural karst formations with traditional Chinese garden design, creating a peaceful retreat within the city that showcases both the region's geological wonders and cultural aesthetics. The park features caves, pavilions, bridges, and walking paths that provide excellent opportunities for photography and relaxation. <strong>Fubo Hill</strong> and <strong>Diecai Hill</strong> offer additional urban hiking opportunities with panoramic views of the city and surrounding karst landscape.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Seasonal Beauty and Photography Opportunities</h3>
              <p className="mb-6">
                Guilin's beauty transforms dramatically with the changing seasons, each offering unique photographic opportunities and experiences. Spring brings blooming flowers and fresh green foliage that creates vibrant contrasts with the gray limestone peaks. Summer offers lush vegetation and dramatic weather patterns that can create spectacular cloud formations and lighting effects. Autumn provides clear skies and comfortable temperatures ideal for outdoor activities, while winter's occasional mist and frost create ethereal atmospheric conditions that enhance the landscape's mystical quality.
              </p>
              
              <p className="mb-6">
                The region's rice terraces, particularly beautiful during planting season (April-May) when they're filled with water that reflects the sky and surrounding peaks, and harvest time (September-October) when they turn golden, provide additional seasonal highlights. The interplay of light and shadow on the karst peaks changes throughout the day, with sunrise and sunset offering the most dramatic lighting conditions for photography. Professional photographers and casual visitors alike find endless inspiration in Guilin's ever-changing natural theater.
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
              Top Guilin Tours & Activities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book the best Guilin experiences with our trusted travel partner. Discover stunning karst landscapes and scenic river cruises.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {/* Custom GetYourGuide Widget for Guilin */}
            <div className="gyg-widget-container shadow-xl rounded-xl overflow-hidden bg-white">
              <div className="p-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Explore Guilin's Natural Wonders</h3>
                <p className="text-emerald-100">From Li River cruises to karst caves - experience China's most scenic destination</p>
              </div>
              <div 
                data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
                data-gyg-locale-code="en-US" 
                data-gyg-widget="activities" 
                data-gyg-number-of-items="6" 
                data-gyg-partner-id="UENNPLZ" 
                data-gyg-q="guilin"
                className="min-h-[500px] bg-gray-100 rounded-lg flex items-center justify-center"
              >
                <div className="text-center p-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading Guilin experiences...</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 text-center">
                <span className="text-sm text-gray-500">
                  Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/guilin-l224/" className="text-primary-600 hover:underline font-medium">GetYourGuide</a> | 
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
              Essential Guilin Travel Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make the most of your Guilin adventure with these insider tips and practical advice.
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
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
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
              Frequently Asked Questions About Guilin
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-emerald-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How many days do you need to see Guilin?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We recommend 3-4 days to experience Guilin's main attractions comfortably. This includes a full day Li River cruise to Yangshuo, 
                  one day exploring Guilin city attractions (Elephant Trunk Hill, Reed Flute Cave, Seven Star Park), and 1-2 days in Yangshuo 
                  for cycling, hiking, and cultural experiences. Nature enthusiasts may prefer 5-7 days for more comprehensive exploration.
                </p>
              </div>
              
              <div className="border-l-4 border-emerald-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What is the best time to visit Guilin?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The best times to visit Guilin are April-May and September-October. These periods offer mild temperatures, clear skies, 
                  and ideal conditions for river cruises and outdoor activities. Summer (June-August) can be hot and humid with occasional rain, 
                  while winter (December-February) is cooler but still pleasant for sightseeing with fewer crowds.
                </p>
              </div>
              
              <div className="border-l-4 border-emerald-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do I need to book Li River cruise tickets in advance?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, advance booking is recommended for Li River cruises, especially during peak seasons (April-May, September-October) and holidays. 
                  Popular cruise times can sell out quickly. Booking through GetYourGuide ensures guaranteed seats and often includes 
                  transportation, meals, and professional guides who provide valuable insights about the scenery and local culture.
                </p>
              </div>
              
              <div className="border-l-4 border-emerald-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What should I bring for a Li River cruise?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Essential items include sunscreen, hat, comfortable clothing, camera with extra batteries, and light jacket for air conditioning. 
                  Bring cash for souvenirs and snacks. Waterproof bag for electronics is recommended. Most cruises provide lunch, 
                  but bringing water and snacks is advisable for longer trips.
                </p>
              </div>
              
              <div className="border-l-4 border-emerald-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How do I get from Guilin to Yangshuo?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The most scenic route is the Li River cruise (4-5 hours), which is the main attraction itself. Alternatively, 
                  buses run regularly between Guilin and Yangshuo (1.5 hours), and private cars/taxis are available (1 hour). 
                  Many visitors take the cruise one way and return by bus to experience both transportation methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-emerald-600 to-teal-800 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-white mb-6">
            Ready to Explore Guilin?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Start planning your unforgettable Guilin adventure today. Book top-rated tours and activities 
            to experience the best of China's most scenic destination and natural wonders.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#tours" className="btn-secondary bg-white text-emerald-600 hover:bg-gray-50 text-lg px-8 py-4">
              Book Guilin Tours Now
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
