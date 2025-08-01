import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Star, Clock, Users, Camera, Calendar, ArrowRight, Sparkles } from 'lucide-react'
import GetYourGuideWidget from '@/components/GetYourGuideWidget'

export const metadata: Metadata = {
  title: 'Beijing Attractions & Tours | Complete Travel Guide to China\'s Capital',
  description: 'Discover the best Beijing attractions, tours, and experiences. From the Great Wall to the Forbidden City, explore China\'s capital with our comprehensive travel guide. Book top-rated tours and activities.',
  keywords: [
    'Beijing attractions',
    'Beijing tours',
    'Beijing travel guide',
    'Great Wall Beijing',
    'Forbidden City tours',
    'Beijing sightseeing',
    'Beijing activities',
    'Beijing experiences',
    'China capital tours',
    'Beijing vacation',
    'Beijing tourism',
    'Beijing landmarks',
    'Beijing cultural sites',
    'Beijing day trips',
    'Beijing travel tips',
    'Beijing itinerary',
    'Beijing booking',
    'Beijing tickets',
    'Beijing guided tours',
    'Beijing private tours'
  ],
  openGraph: {
    title: 'Beijing Attractions & Tours | Complete Travel Guide to China\'s Capital',
    description: 'Discover the best Beijing attractions, tours, and experiences. From the Great Wall to the Forbidden City, explore China\'s capital with our comprehensive travel guide.',
    images: ['/beijing-og.jpg'],
    url: '/cities/beijing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beijing Attractions & Tours | Complete Travel Guide',
    description: 'Discover the best Beijing attractions, tours, and experiences. From the Great Wall to the Forbidden City, explore China\'s capital.',
    images: ['/beijing-og.jpg'],
  },
  alternates: {
    canonical: '/cities/beijing',
  },
}

const beijingAttractions = [
  {
    id: 'great-wall',
    name: 'Great Wall of China',
    description: 'The most magnificent fortification in human history, stretching over 13,000 miles across northern China. Built over centuries by millions of workers, this UNESCO World Heritage Site represents the pinnacle of ancient Chinese engineering and military strategy. The sections near Beijing, including Badaling, Mutianyu, and Jinshanling, offer visitors breathtaking views of the wall snaking across mountainous terrain.',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=600&fit=crop',
    rating: 4.8,
    reviews: 15432,
    duration: '8-10 hours',
    price: 'From $45',
    highlights: ['UNESCO World Heritage Site', 'Ancient Wonder of the World', 'Breathtaking Mountain Views', 'Historical Significance', 'Multiple Sections Available', 'Cable Car Access'],
    category: 'Historical',
    detailedInfo: 'The Great Wall near Beijing offers several sections for exploration. Badaling is the most popular and accessible, featuring restored walkways and modern amenities. Mutianyu provides a less crowded experience with stunning autumn foliage, while Jinshanling offers the most authentic and challenging hiking experience for adventurous travelers.'
  },
  {
    id: 'forbidden-city',
    name: 'Forbidden City (Palace Museum)',
    description: 'The world\'s largest palace complex and former imperial residence, featuring 9,999 rooms across 180 acres. This architectural masterpiece served as home to 24 emperors during the Ming and Qing dynasties for nearly 500 years. The palace houses over 1.8 million artifacts, including priceless artworks, imperial treasures, and ancient manuscripts that showcase the pinnacle of Chinese craftsmanship and culture.',
    image: 'https://images.unsplash.com/photo-1537819191377-d3305ffddce4?w=800&h=600&fit=crop',
    rating: 4.7,
    reviews: 12876,
    duration: '4-6 hours',
    price: 'From $35',
    highlights: ['World\'s Largest Palace Complex', '9,999 Rooms', 'Imperial Throne Room', 'Treasure Gallery', 'Ancient Architecture', 'UNESCO World Heritage'],
    category: 'Cultural',
    detailedInfo: 'The Forbidden City requires advance booking and offers different ticket types including access to special exhibitions. The Hall of Supreme Harmony, Imperial Garden, and Clock Exhibition Hall are must-see highlights. Audio guides are available in multiple languages.'
  },
  {
    id: 'temple-of-heaven',
    name: 'Temple of Heaven (Tiantan Park)',
    description: 'A magnificent sacred complex where Chinese emperors performed annual ceremonies to pray for good harvests and divine favor. Built in 1420, this UNESCO World Heritage Site represents the pinnacle of Chinese religious architecture with its iconic circular Hall of Prayer for Good Harvests. The temple complex covers 267 hectares and showcases perfect harmony between heaven and earth through its symbolic design.',
    image: 'https://images.unsplash.com/photo-1570193628474-b1dd0b6c5b1e?w=800&h=600&fit=crop',
    rating: 4.6,
    reviews: 8934,
    duration: '3-4 hours',
    price: 'From $25',
    highlights: ['Hall of Prayer for Good Harvests', 'Echo Wall', 'Imperial Vault of Heaven', 'Circular Mound Altar', 'Ancient Cypress Trees', 'Morning Tai Chi'],
    category: 'Religious',
    detailedInfo: 'Visit early morning to witness locals practicing Tai Chi, calligraphy, and traditional music. The Echo Wall demonstrates ancient acoustic engineering, and the complex offers insight into Chinese cosmology and imperial rituals.'
  },
  {
    id: 'summer-palace',
    name: 'Summer Palace (Yiheyuan)',
    description: 'China\'s most exquisite imperial garden, covering 290 hectares with Kunming Lake occupying three-quarters of the area. This UNESCO World Heritage Site served as a royal retreat for the Qing Dynasty emperors, featuring over 3,000 ancient structures including pavilions, towers, bridges, and corridors. The famous Long Corridor stretches 728 meters and contains over 14,000 paintings depicting Chinese history and mythology.',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop',
    rating: 4.5,
    reviews: 7654,
    duration: '4-5 hours',
    price: 'From $30',
    highlights: ['Kunming Lake', 'Long Corridor', 'Marble Boat', 'Tower of Buddhist Incense', 'Seventeen-Arch Bridge', 'Imperial Gardens'],
    category: 'Gardens',
    detailedInfo: 'Best visited during spring for blooming flowers or autumn for colorful foliage. Boat rides on Kunming Lake offer unique perspectives of the palace. The site requires significant walking, so comfortable shoes are essential.'
  },
  {
    id: 'tiananmen-square',
    name: 'Tiananmen Square',
    description: 'The world\'s largest public square, covering 44 hectares in the heart of Beijing. This iconic plaza can accommodate up to one million people and serves as China\'s political and cultural center. Surrounded by significant buildings including the Forbidden City, Great Hall of the People, National Museum of China, and Chairman Mao Memorial Hall, the square has witnessed many pivotal moments in Chinese history.',
    image: 'https://images.unsplash.com/photo-1570193628474-b1dd0b6c5b1e?w=800&h=600&fit=crop',
    rating: 4.4,
    reviews: 9876,
    duration: '2-3 hours',
    price: 'Free',
    highlights: ['World\'s Largest Public Square', 'Monument to People\'s Heroes', 'Chairman Mao Memorial Hall', 'Flag-raising Ceremony', 'Great Hall of the People', 'National Museum Access'],
    category: 'Historical',
    detailedInfo: 'Security is strict with bag checks required. The daily flag-raising ceremony at sunrise attracts thousands of visitors. Combined visits with the Forbidden City and National Museum are highly recommended.'
  },
  {
    id: 'hutongs',
    name: 'Beijing Hutongs & Courtyard Houses',
    description: 'Ancient narrow alleyways that form the historic heart of Beijing, representing over 700 years of traditional urban planning. These labyrinthine streets connect traditional courtyard houses (siheyuan) where generations of Beijing families have lived. Popular hutong areas include Nanluoguxiang, Shichahai, and Dongcheng, offering authentic glimpses into local life, traditional architecture, and centuries-old customs.',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=600&fit=crop',
    rating: 4.3,
    reviews: 5432,
    duration: '3-4 hours',
    price: 'From $20',
    highlights: ['Traditional Siheyuan Architecture', 'Rickshaw Tours', 'Local Street Food', 'Artisan Workshops', 'Tea Houses', 'Cultural Immersion'],
    category: 'Cultural',
    detailedInfo: 'Hutong tours by rickshaw offer comfortable exploration with knowledgeable local guides. Many hutongs feature converted courtyard houses now serving as boutique hotels, restaurants, and cultural centers. Evening visits provide the best atmosphere with local life in full swing.'
  }
]

const travelTips = [
  {
    title: 'Best Time to Visit Beijing',
    content: 'Spring (April-May) and autumn (September-October) offer the most pleasant weather with mild temperatures and clear skies.',
    icon: Calendar
  },
  {
    title: 'Getting Around Beijing',
    content: 'The Beijing Subway is efficient and affordable. Taxis and ride-sharing apps like Didi are also convenient options.',
    icon: MapPin
  },
  {
    title: 'Language Tips',
    content: 'Download translation apps and learn basic Mandarin phrases. Many signs have English translations in tourist areas.',
    icon: Users
  },
  {
    title: 'Photography Guidelines',
    content: 'Photography is restricted in some areas of the Forbidden City and other historical sites. Always check local rules.',
    icon: Camera
  }
]

export default function BeijingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Beijing",
    "description": "China's capital city featuring the Great Wall, Forbidden City, and rich cultural heritage",
    "url": "https://chineseattractions.com/cities/beijing",
    "image": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&h=630&fit=crop",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.9042",
      "longitude": "116.4074"
    },
    "touristType": ["Cultural Tourism", "Historical Tourism", "Adventure Tourism"],
    "hasMap": "https://maps.google.com/?q=Beijing,China",
    "containsPlace": beijingAttractions.map(attraction => ({
      "@type": "TouristAttraction",
      "name": attraction.name,
      "description": attraction.description,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": attraction.rating,
        "reviewCount": attraction.reviews
      }
    }))
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
              <span className="text-gold-400 font-medium text-lg">China's Imperial Capital</span>
            </div>
            
            <h1 className="heading-xl text-white mb-6 animate-fade-in-up">
              Discover Beijing's
              <span className="block text-gradient bg-gradient-to-r from-gold-400 to-yellow-300 bg-clip-text text-transparent">
                Ancient Wonders & Modern Marvels
              </span>
            </h1>
            
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Explore China's magnificent capital city, home to the Great Wall, Forbidden City, and over 3,000 years of history. 
              Discover the perfect blend of ancient traditions and modern innovation in Beijing.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <a href="#attractions" className="btn-primary text-lg px-8 py-4">
                Explore Beijing Attractions
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="#tours" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4">
                Book Tours & Activities
              </a>
            </div>
            
            <div className="flex items-center justify-center space-x-8 mt-12 text-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">45+</div>
                <div className="text-sm">Top Attractions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">3,000+</div>
                <div className="text-sm">Years of History</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">21M+</div>
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
              Why Visit Beijing? The Ultimate Guide to China's Imperial Capital
            </h2>
            
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Beijing, China's magnificent capital and the political heart of the world's most populous nation, stands as one of Earth's most extraordinary destinations. This ancient metropolis seamlessly weaves together over 3,000 years of imperial Chinese history with breathtaking modern innovation, creating an unparalleled travel experience. Home to some of humanity's greatest architectural marvels, including the legendary <strong>Great Wall of China</strong>, the awe-inspiring <strong>Forbidden City</strong>, and the sacred <strong>Temple of Heaven</strong>, Beijing offers visitors an incomparable journey through the very soul of Chinese civilization.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Beijing's Rich Historical Heritage</h3>
              <p className="mb-6">
                As the capital of China for over 800 years, Beijing has served as the seat of power for the Yuan, Ming, and Qing dynasties. The city's name, meaning "Northern Capital," reflects its strategic importance in Chinese history. From the moment you set foot in this magnificent metropolis of over 21 million inhabitants, you'll be mesmerized by its incredible juxtapositions: ancient <strong>hutongs</strong> (traditional narrow alleyways) weaving between towering glass skyscrapers, while street food vendors serve recipes passed down through countless generations mere steps from Michelin-starred restaurants.
              </p>
              
              <p className="mb-6">
                Beijing's extraordinary cultural significance is recognized globally, with the city boasting an impressive <strong>seven UNESCO World Heritage Sites</strong> within its boundaries and immediate vicinity. These include the Forbidden City (Palace Museum), the Great Wall of China, the Temple of Heaven, the Summer Palace, the Ming Tombs, Peking Man Site at Zhoukoudian, and the Grand Canal. This remarkable concentration of world heritage sites makes Beijing an absolute treasure trove for history enthusiasts, archaeology lovers, and culture seekers from around the globe.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Modern Beijing: Where Tradition Meets Innovation</h3>
              <p className="mb-6">
                Today's Beijing masterfully balances its ancient heritage with cutting-edge modernity. The city has transformed into a global powerhouse while carefully preserving its historical essence. Visitors can explore the architectural grandeur of the <strong>Forbidden City</strong> in the morning, enjoy a traditional Peking duck lunch in a centuries-old restaurant, and witness the futuristic skyline from the CCTV Tower in the evening. This unique blend of old and new creates an atmosphere unlike anywhere else on Earth.
              </p>
              
              <p className="mb-6">
                The city's commitment to preserving its cultural identity while embracing progress is evident everywhere. Traditional <strong>courtyard houses (siheyuan)</strong> have been carefully restored alongside modern developments, creating neighborhoods where ancient Chinese architecture coexists harmoniously with contemporary design. Beijing's extensive subway system, one of the world's largest, efficiently connects historical sites with modern districts, making it incredibly easy for visitors to experience both sides of this remarkable city.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Beijing's Culinary Excellence</h3>
              <p className="mb-6">
                Beijing's culinary scene is legendary, offering everything from authentic street food to imperial cuisine. The city is the birthplace of <strong>Peking Duck</strong>, one of China's most famous dishes, with restaurants like Quanjude serving this delicacy for over 150 years. Beyond duck, Beijing cuisine features hearty northern Chinese flavors, including <strong>jianbing</strong> (savory crepes), <strong>zhajiangmian</strong> (noodles with fermented bean sauce), and countless varieties of dumplings. The city's food markets, particularly <strong>Wangfujing Snack Street</strong> and <strong>Donghuamen Night Market</strong>, offer adventurous eaters the chance to sample exotic delicacies alongside traditional favorites.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Cultural Experiences and Arts</h3>
              <p className="mb-6">
                Beijing serves as China's cultural capital, home to world-class museums, traditional opera houses, and contemporary art galleries. The <strong>National Museum of China</strong>, one of the world's largest museums, houses over 1.4 million artifacts spanning Chinese history from prehistoric times to the present. The city's thriving arts scene includes the famous <strong>798 Art District</strong>, a former industrial complex transformed into a contemporary art hub featuring galleries, studios, and cultural spaces that showcase both Chinese and international artists.
              </p>
              
              <p className="mb-6">
                Traditional Chinese performing arts flourish in Beijing, with <strong>Peking Opera</strong> being the most famous. Visitors can experience authentic performances at venues like the <strong>Liyuan Theatre</strong> or the <strong>National Centre for the Performing Arts</strong>, often called "The Giant Egg" for its distinctive architecture. The city also hosts numerous festivals throughout the year, celebrating everything from traditional Chinese culture to international film and music.
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
              Top Beijing Tours & Activities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book the best Beijing experiences with our trusted travel partner. Skip the lines and enjoy expert-guided tours.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {/* Custom GetYourGuide Widget as provided by user */}
            <div className="gyg-widget-container shadow-lg rounded-lg overflow-hidden">
              <div 
                data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
                data-gyg-locale-code="en-US" 
                data-gyg-widget="activities" 
                data-gyg-number-of-items="6" 
                data-gyg-partner-id="UENNPLZ" 
                data-gyg-q="pekin"
                className="min-h-[500px] bg-gray-100 rounded-lg flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading Beijing experiences...</p>
                </div>
              </div>
              <span className="text-sm text-gray-500 block text-center mt-2">
                Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/pekin-l186/" className="text-primary-600 hover:underline">GetYourGuide</a>
              </span>
            </div>
          </div>
        </div>
      </section>



      {/* Travel Tips */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-gold-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              Essential Beijing Travel Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make the most of your Beijing adventure with these insider tips and practical advice.
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
              Frequently Asked Questions About Beijing
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How many days do you need to see Beijing?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We recommend at least 4-5 days to see Beijing's main attractions comfortably. This allows time for the Great Wall (full day), 
                  Forbidden City and Tiananmen Square (full day), Temple of Heaven and Summer Palace (1 day), plus time for hutong exploration 
                  and local experiences. For a more relaxed pace with additional sites, 7-10 days is ideal.
                </p>
              </div>
              
              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What is the best time to visit Beijing?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The best times to visit Beijing are spring (April-May) and autumn (September-October). During these months, you'll enjoy 
                  mild temperatures, clear skies, and comfortable weather for sightseeing. Summer can be hot and humid, while winter is cold 
                  but offers fewer crowds and beautiful snow-covered scenes at attractions like the Great Wall.
                </p>
              </div>
              
              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do I need to book Beijing attraction tickets in advance?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, advance booking is highly recommended, especially for popular attractions like the Forbidden City and Great Wall tours. 
                  Many sites have daily visitor limits and can sell out, particularly during peak seasons and holidays. Booking through 
                  GetYourGuide ensures guaranteed entry and often includes skip-the-line access.
                </p>
              </div>
              
              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Is Beijing safe for tourists?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Beijing is generally very safe for tourists. The city has low crime rates and excellent security, especially in tourist areas. 
                  Standard travel precautions apply: keep valuables secure, be aware of your surroundings, and use official transportation. 
                  The biggest challenges are usually language barriers and air quality, both of which can be managed with proper preparation.
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
            Ready to Explore Beijing?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Start planning your unforgettable Beijing adventure today. Book top-rated tours and activities 
            to make the most of your visit to China's magnificent capital.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#tours" className="btn-secondary bg-white text-primary-600 hover:bg-gray-50 text-lg px-8 py-4">
              Book Beijing Tours Now
            </a>
            <Link href="/attractions" className="btn-outline border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              Explore More Attractions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
