import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Star, Clock, Users, Camera, Calendar, ArrowRight, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chengdu Attractions & Tours | Complete Travel Guide to China\'s Panda Capital',
  description: 'Discover the best Chengdu attractions, tours, and experiences. From Giant Panda Base to Sichuan cuisine, explore China\'s most livable city with our comprehensive travel guide. Book top-rated tours and activities.',
  keywords: [
    'Chengdu attractions',
    'Chengdu tours',
    'Chengdu travel guide',
    'Giant Panda Base Chengdu',
    'Sichuan cuisine Chengdu',
    'Chengdu sightseeing',
    'Chengdu activities',
    'Chengdu experiences',
    'China panda tours',
    'Chengdu vacation',
    'Chengdu tourism',
    'Chengdu landmarks',
    'Chengdu cultural sites',
    'Chengdu day trips',
    'Chengdu travel tips',
    'Chengdu itinerary',
    'Chengdu booking',
    'Chengdu tickets',
    'Chengdu guided tours',
    'Chengdu private tours',
    'Jinli Ancient Street',
    'Wuhou Shrine Chengdu',
    'Mount Emei Chengdu',
    'Leshan Buddha Chengdu',
    'Chengdu hotpot',
    'Sichuan opera Chengdu'
  ],
  openGraph: {
    title: 'Chengdu Attractions & Tours | Complete Travel Guide to China\'s Panda Capital',
    description: 'Discover the best Chengdu attractions, tours, and experiences. From Giant Panda Base to Sichuan cuisine, explore China\'s most livable city.',
    images: ['/chengdu-og.jpg'],
    url: '/cities/chengdu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chengdu Attractions & Tours | Complete Travel Guide',
    description: 'Discover the best Chengdu attractions, tours, and experiences. From Giant Panda Base to Sichuan cuisine, explore China\'s most livable city.',
    images: ['/chengdu-og.jpg'],
  },
  alternates: {
    canonical: '/cities/chengdu',
  },
}

const travelTips = [
  {
    title: 'Best Time to Visit Chengdu',
    content: 'March-June and September-November offer the most comfortable weather. Spring and autumn provide mild temperatures perfect for panda viewing and outdoor activities.',
    icon: Calendar
  },
  {
    title: 'Getting Around Chengdu',
    content: 'Chengdu Metro is efficient and covers major attractions. Taxis and ride-sharing apps are convenient. Many attractions are within walking distance in the city center.',
    icon: MapPin
  },
  {
    title: 'Language & Local Culture',
    content: 'Chengdu locals speak Mandarin with a distinctive Sichuan accent. The city is known for its laid-back lifestyle and tea culture. English is limited outside tourist areas.',
    icon: Users
  },
  {
    title: 'Food & Dining Tips',
    content: 'Try authentic Sichuan hotpot and mapo tofu. Street food is excellent but choose busy stalls. Many restaurants don\'t accept foreign cards, so carry cash.',
    icon: Camera
  }
]

export default function ChengduPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Chengdu",
    "description": "China's panda capital and culinary paradise, famous for giant pandas, Sichuan cuisine, and laid-back lifestyle",
    "url": "https://chineseattractions.com/cities/chengdu",
    "image": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=630&fit=crop",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "30.5728",
      "longitude": "104.0668"
    },
    "touristType": ["Cultural Tourism", "Wildlife Tourism", "Culinary Tourism", "Urban Tourism"],
    "hasMap": "https://maps.google.com/?q=Chengdu,China"
  }

  return (
    <div className="pt-16 md:pt-20">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-red-700 to-pink-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="relative container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-gold-400 mr-3" />
              <span className="text-gold-400 font-medium text-lg">China's Panda Capital</span>
            </div>
            
            <h1 className="heading-xl text-white mb-6 animate-fade-in-up">
              Discover Chengdu's
              <span className="block text-gradient bg-gradient-to-r from-gold-400 to-yellow-300 bg-clip-text text-transparent">
                Pandas & Culinary Delights
              </span>
            </h1>
            
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Experience China's most livable city, where adorable giant pandas meet world-renowned Sichuan cuisine and ancient culture blends with modern comfort. 
              From the famous Giant Panda Research Base to spicy hotpot and traditional tea houses, Chengdu offers an authentic taste of southwestern China's charm and hospitality.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <a href="#tours" className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center">
                Explore Chengdu Attractions
                <ArrowRight className="w-5 h-5 ml-2 flex-shrink-0" />
              </a>
              <Link href="/cities" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4">
                Discover More Cities
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-8 mt-12 text-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">20+</div>
                <div className="text-sm">Major Attractions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">2,300+</div>
                <div className="text-sm">Years of History</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">16M+</div>
                <div className="text-sm">Population</div>
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
              Why Visit Chengdu? The Ultimate Guide to China's Panda Capital
            </h2>
            
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Chengdu, the vibrant capital of Sichuan Province, stands as one of China's most beloved destinations, seamlessly blending ancient traditions with modern sophistication. This remarkable city of over 16 million people has earned international recognition as <strong>China's most livable city</strong> and the undisputed <strong>panda capital of the world</strong>. Beyond its famous furry residents, Chengdu captivates visitors with its legendary culinary scene, rich cultural heritage, and the famously relaxed lifestyle that has made it a model for urban development across China. The city's unique combination of natural beauty, historical significance, and contemporary amenities creates an irresistible destination that appeals to every type of traveler.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Giant Panda Research Base: The World's Premier Panda Experience</h3>
              <p className="mb-6">
                The <strong>Chengdu Research Base of Giant Panda Breeding</strong> represents the crown jewel of Chengdu's attractions and the world's most important facility for giant panda conservation and research. This 247-acre sanctuary, located just 10 kilometers from downtown Chengdu, houses over 80 giant pandas in naturalistic habitats that closely mimic their wild environment. The facility's groundbreaking research has contributed significantly to panda conservation efforts worldwide, with successful breeding programs that have helped increase the global panda population from critically endangered to vulnerable status.
              </p>
              
              <p className="mb-6">
                Visitors to the Panda Base experience these magnificent creatures in their most active and natural state, particularly during early morning hours when pandas are most playful and engaged in feeding activities. The facility features multiple viewing areas, including the <strong>Adult Panda Enclosures</strong>, <strong>Sub-adult Panda Villa</strong>, and the incredibly popular <strong>Nursery House</strong> where visitors can observe baby pandas in their early development stages. The <strong>Panda Museum</strong> provides comprehensive education about panda biology, conservation efforts, and the facility's research achievements, making the visit both entertaining and educational.
              </p>
              
              <p className="mb-6">
                The Base's commitment to conservation extends beyond pandas to include other endangered species native to the region, such as red pandas, black-necked cranes, and various rare birds. The facility's beautiful botanical gardens showcase over 200 species of bamboo and other plants essential to panda survival, creating a comprehensive ecosystem that supports both wildlife conservation and visitor education. Professional guides and interactive exhibits help visitors understand the complex challenges facing panda conservation and the remarkable success stories that have emerged from decades of dedicated research.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Sichuan Cuisine: The Spicy Heart of Chinese Gastronomy</h3>
              <p className="mb-6">
                Chengdu's culinary reputation extends far beyond China's borders, with <strong>Sichuan cuisine</strong> recognized as one of the world's great regional cooking traditions. The city's food culture centers around the distinctive use of <strong>Sichuan peppercorns (huajiao)</strong>, which create the unique "má là" (numbing and spicy) flavor profile that defines authentic Sichuan cooking. This sophisticated culinary tradition balances heat, numbness, sweetness, sourness, and umami in ways that create complex, layered flavors impossible to replicate elsewhere.
              </p>
              
              <p className="mb-6">
                <strong>Sichuan hotpot</strong> represents the pinnacle of Chengdu's dining experience, with the city boasting over 40,000 hotpot restaurants ranging from street-side stalls to luxury establishments. The traditional hotpot experience involves cooking fresh ingredients in a bubbling, spiced broth while socializing with friends and family in a convivial atmosphere that embodies Chengdu's laid-back social culture. Beyond hotpot, the city offers countless other Sichuan specialties including <strong>mapo tofu</strong>, <strong>kung pao chicken</strong>, <strong>dan dan noodles</strong>, and <strong>twice-cooked pork</strong>, each representing centuries of culinary refinement.
              </p>
              
              <p className="mb-6">
                The city's food scene extends from high-end restaurants to vibrant street food markets where visitors can experience authentic flavors at incredibly affordable prices. <strong>Jinli Ancient Street</strong> and <strong>Kuanzhai Alley</strong> offer concentrated food experiences with dozens of vendors selling traditional snacks, while local neighborhoods provide opportunities to dine alongside Chengdu residents in family-run establishments that have perfected their recipes over generations. Food tours and cooking classes allow visitors to learn about ingredient selection, preparation techniques, and the cultural significance of various dishes in Sichuan society.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Historical and Cultural Treasures</h3>
              <p className="mb-6">
                Chengdu's 2,300-year history as a major Chinese city has left an incredible legacy of historical sites, cultural institutions, and architectural treasures that provide deep insights into southwestern China's development. The <strong>Wuhou Shrine</strong>, dedicated to Zhuge Liang (the famous strategist from the Three Kingdoms period), represents one of China's most important historical sites, featuring beautiful traditional architecture, ancient cypress trees, and extensive collections of artifacts from the Three Kingdoms era. The adjacent <strong>Jinli Ancient Street</strong> recreates the atmosphere of ancient Chengdu with traditional architecture, artisan workshops, and cultural performances.
              </p>
              
              <p className="mb-6">
                <strong>Du Fu Thatched Cottage</strong> preserves the former residence of China's most celebrated poet, Du Fu, who lived in Chengdu during the Tang Dynasty and wrote some of his most famous works while residing in the city. The site features beautiful gardens, traditional architecture, and extensive exhibits about Chinese poetry and literature. The <strong>Sichuan Museum</strong> houses one of China's most comprehensive collections of regional artifacts, including ancient bronzes, ceramics, calligraphy, and ethnographic materials that illustrate the rich cultural heritage of southwestern China.
              </p>
              
              <p className="mb-6">
                The city's commitment to preserving traditional culture while embracing modernity is evident in areas like <strong>Kuanzhai Alley (Wide and Narrow Alleys)</strong>, where Qing Dynasty architecture has been carefully restored to house contemporary restaurants, cafes, and boutiques. This successful urban renewal project demonstrates Chengdu's approach to development that honors historical heritage while meeting modern needs. Traditional tea houses throughout the city continue to serve as important social centers where locals gather to play mahjong, discuss current events, and maintain the social traditions that define Chengdu's famous relaxed lifestyle.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Sichuan Opera and Traditional Performing Arts</h3>
              <p className="mb-6">
                <strong>Sichuan Opera</strong> represents one of China's most distinctive regional opera traditions, featuring the world-famous <strong>face-changing (bianlian)</strong> technique where performers instantaneously change elaborate masks through secret methods passed down through generations of artists. Chengdu offers numerous venues where visitors can experience authentic Sichuan Opera performances, including the historic <strong>Shufeng Yayun Teahouse</strong> and various cultural centers that present both traditional and contemporary interpretations of this ancient art form.
              </p>
              
              <p className="mb-6">
                The opera tradition encompasses not only face-changing but also fire-breathing, puppet shows, acrobatics, and musical performances that create a comprehensive entertainment experience deeply rooted in Sichuan culture. Many performances take place in traditional teahouse settings where audiences can enjoy local snacks and tea while experiencing the intimate atmosphere that has characterized Chinese opera for centuries. The art form's combination of music, drama, acrobatics, and visual spectacle provides visitors with insights into Chinese storytelling traditions and the sophisticated artistic culture that has flourished in Chengdu for over 300 years.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Day Trips and Nearby Attractions</h3>
              <p className="mb-6">
                Chengdu's strategic location in the Sichuan Basin provides easy access to some of China's most spectacular natural and cultural attractions, making it an ideal base for exploring southwestern China's diverse landscapes and heritage sites. <strong>Mount Emei</strong>, one of China's Four Sacred Buddhist Mountains, lies just 150 kilometers from Chengdu and offers incredible hiking opportunities, ancient temples, and the chance to see wild monkeys in their natural habitat. The mountain's <strong>Golden Summit</strong> provides breathtaking sunrise views and houses the impressive <strong>Golden Buddha statue</strong>, one of the world's largest Buddhist statues.
              </p>
              
              <p className="mb-6">
                The <strong>Leshan Giant Buddha</strong>, a UNESCO World Heritage Site, represents the world's largest stone Buddha statue, carved into a cliff face during the Tang Dynasty over 1,200 years ago. This 71-meter tall masterpiece demonstrates the incredible artistic and engineering capabilities of ancient Chinese craftsmen and provides spectacular photo opportunities from both land and water viewpoints. The site combines natural beauty with religious significance and historical importance, making it one of China's most impressive cultural attractions.
              </p>
              
              <p className="mb-6">
                <strong>Jiuzhaigou Valley</strong>, though requiring a longer journey from Chengdu, offers some of the world's most spectacular natural scenery with its colorful lakes, waterfalls, and snow-capped peaks. This UNESCO World Heritage Site features pristine alpine landscapes that change dramatically with the seasons, from spring wildflowers to autumn foliage that creates mirror-like reflections in the valley's famous multi-colored lakes. <strong>Huanglong</strong>, another nearby UNESCO site, features terraced limestone pools filled with mineral-rich water that creates stunning natural formations in a high-altitude setting.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Modern Chengdu: Innovation and Urban Development</h3>
              <p className="mb-6">
                Contemporary Chengdu represents one of China's most successful examples of balanced urban development, combining rapid economic growth with environmental sustainability and quality of life improvements that have earned international recognition. The city's modern districts feature cutting-edge architecture, efficient public transportation, and extensive green spaces that maintain the livability that has made Chengdu famous throughout China. The <strong>Chengdu IFS</strong> and <strong>Taikoo Li</strong> shopping districts showcase international luxury brands alongside local designers in architecturally stunning environments that blend modern design with traditional Sichuan aesthetics.
              </p>
              
              <p className="mb-6">
                The city's commitment to innovation is evident in its thriving technology sector, which has attracted major international companies and startups that contribute to Chengdu's reputation as a major center for software development, gaming, and digital media. This economic diversification has created a cosmopolitan atmosphere that attracts young professionals from across China and internationally, contributing to the city's dynamic cultural scene and entrepreneurial energy. The balance between traditional culture and modern innovation creates a unique urban environment that appeals to both business travelers and tourists seeking authentic Chinese experiences.
              </p>
              
              <p className="mb-6">
                Chengdu's extensive park system, including the massive <strong>Huanhuaxi Park</strong> and numerous smaller green spaces throughout the city, demonstrates the municipal government's commitment to environmental quality and resident wellbeing. The city's bike-sharing programs, electric bus fleet, and pedestrian-friendly urban design reflect progressive approaches to sustainable transportation that serve as models for other Chinese cities. This combination of environmental consciousness, cultural preservation, and economic development has established Chengdu as a leading example of successful urban planning in contemporary China.
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
              Top Chengdu Tours & Activities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book the best Chengdu experiences with our trusted travel partner. Discover giant pandas and authentic Sichuan culture.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {/* Custom GetYourGuide Widget for Chengdu */}
            <div className="gyg-widget-container shadow-xl rounded-xl overflow-hidden bg-white">
              <div className="p-6 bg-gradient-to-r from-orange-600 to-red-600 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Explore Chengdu's Pandas & Culture</h3>
                <p className="text-orange-100">From Giant Panda Base to Sichuan cuisine - experience China's most livable city</p>
              </div>
              <div 
                data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
                data-gyg-locale-code="en-US" 
                data-gyg-widget="activities" 
                data-gyg-number-of-items="6" 
                data-gyg-partner-id="UENNPLZ" 
                data-gyg-q="chengdu"
                className="min-h-[500px] bg-gray-100 rounded-lg flex items-center justify-center"
              >
                <div className="text-center p-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading Chengdu experiences...</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 text-center">
                <span className="text-sm text-gray-500">
                  Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/chengdu-l394/" className="text-primary-600 hover:underline font-medium">GetYourGuide</a> | 
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
              Essential Chengdu Travel Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make the most of your Chengdu adventure with these insider tips and practical advice.
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
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
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
              Frequently Asked Questions About Chengdu
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How many days do you need to see Chengdu?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We recommend 3-4 days to experience Chengdu's main attractions comfortably. This includes a full day at the Giant Panda Base, 
                  one day exploring historical sites (Wuhou Shrine, Jinli Street, Du Fu Cottage), one day for food experiences and Sichuan Opera, 
                  and optional day trips to Mount Emei or Leshan Buddha. Food enthusiasts may prefer 5-6 days for comprehensive culinary exploration.
                </p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What is the best time to visit the Giant Panda Base?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Early morning (8:00-10:00 AM) is the best time to visit as pandas are most active during feeding time. 
                  They tend to sleep during hot afternoons. Cooler months (October-April) generally offer better panda viewing opportunities. 
                  Weekdays are less crowded than weekends, providing better photo opportunities and viewing experiences.
                </p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Is Chengdu food really that spicy?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Sichuan cuisine is famous for being spicy, but many dishes offer different spice levels. Restaurants can adjust spiciness for international visitors. 
                  The unique "má là" (numbing and spicy) flavor comes from Sichuan peppercorns, which create a tingling sensation. 
                  Many non-spicy Sichuan dishes are also available, and the city offers diverse international cuisine options.
                </p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How do I get from Chengdu to Mount Emei and Leshan Buddha?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  High-speed trains connect Chengdu to Mount Emei (1 hour) and buses run regularly to Leshan (2 hours). 
                  Many visitors take organized day tours that include transportation, guides, and entrance tickets. 
                  Private car services are also available for more flexibility. Both destinations can be visited in a single long day trip, 
                  though overnight stays allow for more relaxed exploration.
                </p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do I need to book Sichuan Opera tickets in advance?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Popular venues like Shufeng Yayun Teahouse often sell out, especially during peak tourist seasons and weekends. 
                  Advance booking is recommended for guaranteed seats and better seating options. Many hotels can help arrange tickets, 
                  and online booking through GetYourGuide ensures authentic performances with English explanations of the cultural significance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-orange-600 to-red-800 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-white mb-6">
            Ready to Explore Chengdu?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Start planning your unforgettable Chengdu adventure today. Book top-rated tours and activities 
            to experience the best of China's panda capital and culinary paradise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#tours" className="btn-secondary bg-white text-orange-600 hover:bg-gray-50 text-lg px-8 py-4">
              Book Chengdu Tours Now
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
