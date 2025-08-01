import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Star, Clock, Users, Camera, Calendar, ArrowRight, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Xi\'an Attractions & Tours | Complete Travel Guide to China\'s Ancient Capital',
  description: 'Discover the best Xi\'an attractions, tours, and experiences. From the Terracotta Army to the Ancient City Wall, explore China\'s most historic city with our comprehensive travel guide. Book top-rated tours and activities.',
  keywords: [
    'Xi\'an attractions',
    'Xi\'an tours',
    'Xi\'an travel guide',
    'Terracotta Army Xi\'an',
    'Ancient City Wall Xi\'an',
    'Xi\'an sightseeing',
    'Xi\'an activities',
    'Xi\'an experiences',
    'China ancient capital tours',
    'Xi\'an vacation',
    'Xi\'an tourism',
    'Xi\'an landmarks',
    'Xi\'an cultural sites',
    'Xi\'an day trips',
    'Xi\'an travel tips',
    'Xi\'an itinerary',
    'Xi\'an booking',
    'Xi\'an tickets',
    'Xi\'an guided tours',
    'Xi\'an private tours',
    'Big Wild Goose Pagoda',
    'Muslim Quarter Xi\'an',
    'Silk Road Xi\'an',
    'Tang Dynasty Xi\'an'
  ],
  openGraph: {
    title: 'Xi\'an Attractions & Tours | Complete Travel Guide to China\'s Ancient Capital',
    description: 'Discover the best Xi\'an attractions, tours, and experiences. From the Terracotta Army to the Ancient City Wall, explore China\'s most historic city.',
    images: ['/xian-og.jpg'],
    url: '/cities/xian',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xi\'an Attractions & Tours | Complete Travel Guide',
    description: 'Discover the best Xi\'an attractions, tours, and experiences. From the Terracotta Army to the Ancient City Wall, explore China\'s most historic city.',
    images: ['/xian-og.jpg'],
  },
  alternates: {
    canonical: '/cities/xian',
  },
}

const travelTips = [
  {
    title: 'Best Time to Visit Xi\'an',
    content: 'Spring (April-May) and autumn (September-October) offer ideal weather with mild temperatures and clear skies perfect for exploring outdoor attractions.',
    icon: Calendar
  },
  {
    title: 'Getting Around Xi\'an',
    content: 'Xi\'an Metro system connects major attractions efficiently. Bicycles are popular for exploring the city wall, and taxis provide convenient transportation.',
    icon: MapPin
  },
  {
    title: 'Language & Culture',
    content: 'Learn basic Mandarin phrases as English is less common than in Beijing or Shanghai. The local dialect has unique characteristics but Mandarin is understood.',
    icon: Users
  },
  {
    title: 'Photography Guidelines',
    content: 'The Terracotta Army Museum restricts flash photography. Early morning visits to the City Wall and pagodas offer the best lighting for photos.',
    icon: Camera
  }
]

export default function XianPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Xi'an",
    "description": "China's ancient capital featuring the world-famous Terracotta Army, Ancient City Wall, and rich Silk Road heritage",
    "url": "https://chineseattractions.com/cities/xian",
    "image": "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&h=630&fit=crop",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "34.3416",
      "longitude": "108.9398"
    },
    "touristType": ["Historical Tourism", "Archaeological Tourism", "Cultural Tourism", "Silk Road Tourism"],
    "hasMap": "https://maps.google.com/?q=Xi'an,China"
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
              <span className="text-gold-400 font-medium text-lg">Ancient Silk Road Capital</span>
            </div>
            
            <h1 className="heading-xl text-white mb-6 animate-fade-in-up">
              Explore Xi'an's
              <span className="block text-gradient bg-gradient-to-r from-gold-400 to-yellow-300 bg-clip-text text-transparent">
                Ancient Wonders & Terracotta Warriors
              </span>
            </h1>
            
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Journey through 3,000 years of Chinese history in Xi'an, home to the world-famous Terracotta Army and starting point of the ancient Silk Road. 
              Discover imperial palaces, ancient city walls, and archaeological treasures that tell the story of China's golden age.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <a href="#tours" className="btn-primary text-lg px-8 py-4">
                Explore Xi'an Attractions
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <Link href="/cities" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4">
                Discover More Cities
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-8 mt-12 text-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">22+</div>
                <div className="text-sm">Historic Attractions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">3,000+</div>
                <div className="text-sm">Years of History</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">8M+</div>
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
              Why Visit Xi'an? The Ultimate Guide to China's Ancient Capital
            </h2>
            
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Xi'an, the ancient capital of China and one of the world's most historically significant cities, stands as a living testament to over 3,000 years of Chinese civilization. This extraordinary city served as the capital for 13 dynasties, including the powerful Tang Dynasty, making it one of the most important political, economic, and cultural centers in ancient China. Home to the world-renowned <strong>Terracotta Army</strong>, the magnificent <strong>Ancient City Wall</strong>, and the starting point of the legendary <strong>Silk Road</strong>, Xi'an offers visitors an unparalleled journey through China's golden age of imperial grandeur and cultural achievement.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Xi'an's Imperial Legacy and Historical Significance</h3>
              <p className="mb-6">
                As the ancient capital known as <strong>Chang'an</strong> (meaning "Perpetual Peace"), Xi'an was once the largest city in the world, with over one million inhabitants during the Tang Dynasty (618-907 AD). The city's strategic location at the eastern terminus of the Silk Road made it a crucial hub for international trade, cultural exchange, and diplomatic relations between East and West. Merchants, scholars, and travelers from across Asia, the Middle East, and Europe converged in Xi'an, creating a cosmopolitan atmosphere that influenced art, religion, cuisine, and technology throughout the ancient world.
              </p>
              
              <p className="mb-6">
                The city's most famous attraction, the <strong>Terracotta Army</strong>, represents one of the greatest archaeological discoveries of the 20th century. This vast underground army of over 8,000 life-sized terracotta soldiers, horses, and chariots was created to guard the tomb of China's first emperor, <strong>Qin Shi Huang</strong>, who unified China in 221 BC. Each warrior is individually crafted with unique facial features, expressions, and details, showcasing the incredible artistry and craftsmanship of ancient Chinese artisans. The site continues to yield new discoveries, with ongoing excavations revealing additional pits and artifacts that provide invaluable insights into ancient Chinese military organization, burial practices, and artistic techniques.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">The Ancient City Wall: A Marvel of Medieval Engineering</h3>
              <p className="mb-6">
                Xi'an's <strong>Ancient City Wall</strong> stands as one of the best-preserved medieval fortification systems in the world, representing a masterpiece of ancient Chinese military architecture. Built during the Ming Dynasty (1370-1378 AD) on the foundation of the original Tang Dynasty walls, this massive rectangular fortification stretches 13.7 kilometers in circumference, with an average height of 12 meters and width of 15-18 meters at the top. The wall features 98 ramparts, 5,984 crenellations, and four main gates corresponding to the cardinal directions, each protected by elaborate gate towers and defensive structures.
              </p>
              
              <p className="mb-6">
                Walking or cycling along the wall provides visitors with spectacular panoramic views of both the ancient city within and the modern metropolis beyond. The wall's wide top surface, originally designed to accommodate horse-drawn carriages and troops, now serves as a unique elevated pathway that offers a fascinating perspective on Xi'an's urban development and the contrast between historical preservation and modern growth. Evening visits are particularly magical, as the wall and surrounding areas are beautifully illuminated, creating a romantic atmosphere that highlights the structure's architectural grandeur.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Buddhist Heritage and Spiritual Landmarks</h3>
              <p className="mb-6">
                Xi'an played a crucial role in the introduction and development of Buddhism in China, serving as the destination for the famous monk <strong>Xuanzang's</strong> journey to India in the 7th century. The <strong>Big Wild Goose Pagoda (Dayan Ta)</strong>, built in 652 AD, was constructed to house the Buddhist scriptures and artifacts that Xuanzang brought back from his 17-year pilgrimage. This seven-story pagoda, standing 64 meters tall, represents one of China's most important Buddhist monuments and offers visitors insights into the religious and cultural exchanges that shaped Chinese civilization.
              </p>
              
              <p className="mb-6">
                The <strong>Small Wild Goose Pagoda</strong>, built in 707 AD, complements its larger counterpart and houses an impressive collection of Buddhist artifacts and historical documents. Both pagodas are surrounded by beautiful temple complexes featuring traditional Chinese architecture, peaceful gardens, and cultural exhibitions that provide comprehensive insights into Buddhist philosophy, art, and practices. The surrounding <strong>Daci'en Temple</strong> and <strong>Jianfu Temple</strong> continue to serve as active places of worship while welcoming visitors interested in Chinese Buddhist culture and history.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Cultural Diversity and the Muslim Quarter</h3>
              <p className="mb-6">
                Xi'an's position as a Silk Road terminus created a unique multicultural environment that persists today, most notably in the vibrant <strong>Muslim Quarter (Huimin Jie)</strong>. This historic neighborhood, home to the city's <strong>Hui Muslim community</strong> for over 1,000 years, offers visitors an authentic glimpse into the cultural fusion that characterized ancient Chang'an. The area's narrow streets are lined with traditional Islamic architecture, including the magnificent <strong>Great Mosque of Xi'an</strong>, one of China's oldest and most important Islamic religious sites.
              </p>
              
              <p className="mb-6">
                The Muslim Quarter serves as Xi'an's culinary heart, famous for its distinctive <strong>Xi'an cuisine</strong> that blends Chinese cooking techniques with Central Asian and Middle Eastern influences. Signature dishes include <strong>roujiamo</strong> (Chinese hamburger), <strong>biangbiang noodles</strong> (hand-pulled wide noodles), <strong>yangrou paomo</strong> (lamb soup with bread), and various grilled meats and spices that reflect the area's Silk Road heritage. The bustling night markets, street food vendors, and traditional restaurants create an atmospheric dining experience that transports visitors back to the cosmopolitan trading days of ancient Chang'an.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Archaeological Wonders and Museums</h3>
              <p className="mb-6">
                Beyond the famous Terracotta Army, Xi'an boasts numerous archaeological sites and world-class museums that showcase the city's rich historical legacy. The <strong>Shaanxi History Museum</strong>, often called "China's treasure house," houses over 370,000 artifacts spanning Chinese history from prehistoric times to the Qing Dynasty. The museum's Tang Dynasty collection is particularly impressive, featuring exquisite gold and silver artifacts, colorful ceramics, and precious artworks that illustrate the cosmopolitan culture of ancient Chang'an.
              </p>
              
              <p className="mb-6">
                The <strong>Xi'an Museum</strong> and <strong>Forest of Stone Steles Museum</strong> provide additional insights into the city's cultural and artistic achievements. The Forest of Stone Steles, established in 1087 AD, contains the world's largest collection of ancient stone tablets and inscriptions, including important historical documents, calligraphy masterpieces, and religious texts that preserve invaluable information about Chinese literature, philosophy, and governance throughout the centuries.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Modern Xi'an: Balancing Heritage and Progress</h3>
              <p className="mb-6">
                Today's Xi'an successfully balances its ancient heritage with modern development, serving as the capital of Shaanxi Province and a major center for education, technology, and tourism in western China. The city hosts numerous universities and research institutions, making it an important academic center, while its growing technology sector has earned it recognition as one of China's emerging innovation hubs. Despite rapid modernization, Xi'an has maintained its historical character through careful urban planning and heritage preservation efforts.
              </p>
              
              <p className="mb-6">
                The city's efficient transportation system, including a modern metro network and high-speed rail connections, makes it easily accessible for visitors while facilitating exploration of its numerous attractions. Xi'an's commitment to cultural preservation is evident in the restoration and maintenance of historical sites, the promotion of traditional crafts and performances, and the integration of cultural elements into modern urban design. This thoughtful approach ensures that visitors can experience both the grandeur of ancient China and the vitality of contemporary Chinese culture in a single destination.
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
              Top Xi'an Tours & Activities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book the best Xi'an experiences with our trusted travel partner. Discover the Terracotta Army and ancient wonders of China's historic capital.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {/* Custom GetYourGuide Widget for Xi'an */}
            <div className="gyg-widget-container shadow-xl rounded-xl overflow-hidden bg-white">
              <div className="p-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Discover Xi'an's Ancient Treasures</h3>
                <p className="text-amber-100">From the Terracotta Army to the Ancient City Wall - explore China's most historic city</p>
              </div>
              <div 
                data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
                data-gyg-locale-code="en-US" 
                data-gyg-widget="activities" 
                data-gyg-number-of-items="6" 
                data-gyg-partner-id="UENNPLZ" 
                data-gyg-q="xian"
                className="min-h-[500px] bg-gray-100 rounded-lg flex items-center justify-center"
              >
                <div className="text-center p-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading Xi'an experiences...</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 text-center">
                <span className="text-sm text-gray-500">
                  Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/xian-l303/" className="text-primary-600 hover:underline font-medium">GetYourGuide</a> | 
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
              Essential Xi'an Travel Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make the most of your Xi'an adventure with these insider tips and practical advice.
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
              Frequently Asked Questions About Xi'an
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How many days do you need to see Xi'an?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We recommend 2-3 days to see Xi'an's main attractions comfortably. This allows a full day for the Terracotta Army and Qin Shi Huang Mausoleum, 
                  one day for the Ancient City Wall, Big Wild Goose Pagoda, and Muslim Quarter, plus additional time for museums and cultural sites. 
                  History enthusiasts may prefer 4-5 days for a more comprehensive exploration.
                </p>
              </div>
              
              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What is the best time to visit Xi'an?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The best times to visit Xi'an are spring (April-May) and autumn (September-October). These seasons offer mild temperatures, 
                  clear skies, and comfortable weather for outdoor sightseeing. Summer can be hot and humid, while winter is cold but offers 
                  fewer crowds and beautiful snow-covered scenes at historical sites.
                </p>
              </div>
              
              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do I need to book Terracotta Army tickets in advance?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, advance booking is highly recommended for the Terracotta Army Museum, especially during peak seasons and holidays. 
                  The site has daily visitor limits and can sell out quickly. Booking through GetYourGuide ensures guaranteed entry, 
                  often with skip-the-line access and knowledgeable guides who provide valuable historical context.
                </p>
              </div>
              
              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What are the must-try foods in Xi'an?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Essential Xi'an dishes include roujiamo (Chinese hamburger), biangbiang noodles, yangrou paomo (lamb soup with bread), 
                  and liangpi (cold noodles). The Muslim Quarter offers the best street food experience, while traditional restaurants 
                  serve authentic Shaanxi cuisine. Don't miss trying persimmon cakes and various grilled meats with cumin spices.
                </p>
              </div>
              
              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How do I get from Xi'an airport to the city center?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Xi'an Xianyang International Airport is about 47km from the city center. Airport shuttle buses run regularly to various city locations (45-60 minutes). 
                  The Airport Express metro line connects to the city metro system (about 1 hour total). Taxis and ride-sharing services are also available, 
                  taking 45-90 minutes depending on traffic.
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
            Ready to Explore Xi'an?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Start planning your unforgettable Xi'an adventure today. Book top-rated tours and activities 
            to experience the best of China's ancient capital and archaeological wonders.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#tours" className="btn-secondary bg-white text-primary-600 hover:bg-gray-50 text-lg px-8 py-4">
              Book Xi'an Tours Now
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
