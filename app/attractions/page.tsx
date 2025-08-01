import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Star, Clock, Users, ArrowRight, Camera, Mountain, Building, Sparkles, Calendar, Globe, Award } from 'lucide-react'
import GetYourGuideWidget from '@/components/GetYourGuideWidget'

export const metadata: Metadata = {
  title: 'Top 10 Must-Visit Attractions in China 2024 | Ultimate Travel Guide',
  description: 'Discover China\'s most spectacular attractions with our comprehensive guide. From the Great Wall to the Terracotta Army, explore the top 10 must-see destinations with expert insights, travel tips, and booking information.',
  keywords: [
    'top China attractions',
    'best places to visit China',
    'China travel guide 2024',
    'Great Wall of China',
    'Terracotta Army',
    'Forbidden City Beijing',
    'China UNESCO sites',
    'Chinese landmarks',
    'China tourism',
    'must-see China destinations',
    'China sightseeing guide',
    'famous attractions China'
  ],
  openGraph: {
    title: 'Top 10 Must-Visit Attractions in China 2024 | Ultimate Travel Guide',
    description: 'Discover China\'s most spectacular attractions with our comprehensive guide. From the Great Wall to the Terracotta Army, explore the top 10 must-see destinations.',
    images: ['/china-attractions-og.jpg'],
    url: '/attractions',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 10 Must-Visit Attractions in China 2024',
    description: 'Discover China\'s most spectacular attractions with our comprehensive guide.',
    images: ['/china-attractions-og.jpg']
  },
  alternates: {
    canonical: '/attractions'
  }
}

// Top 10 China Attractions Data with Specific GetYourGuide Experience IDs
const topAttractions = [
  {
    id: 1,
    name: 'The Great Wall of China',
    chineseName: '万里长城',
    location: 'Beijing',
    description: 'Walk along the most iconic fortification in human history. The Great Wall of China stretches over 13,000 miles and represents 2,000+ years of Chinese engineering mastery.',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=600&fit=crop',
    rating: 4.9,
    reviews: 125000,
    duration: 'Full Day',
    category: 'UNESCO World Heritage',
    gradient: 'from-red-600 via-orange-500 to-yellow-500',
    highlights: [
      'UNESCO World Heritage Site since 1987',
      'Mutianyu section with cable car access',
      'Breathtaking mountain panoramas',
      'Ming Dynasty architecture and watchtowers',
      'Less crowded than Badaling section'
    ],
    getYourGuideId: '189-3875', // Great Wall Mutianyu specific tour
    locationId: '189', // Beijing
    tourIds: '165345', // Real Great Wall Mutianyu tour ID
    seoArticle: {
      title: 'Great Wall of China: Complete Visitor Guide 2024',
      metaDescription: 'Visit the Great Wall of China at Mutianyu. Complete guide with tickets, tours, best times to visit, and insider tips for 2024.',
      content: 'The Great Wall of China stands as humanity\'s most ambitious architectural achievement, stretching over 13,000 miles across northern China. Built over centuries by millions of workers, this UNESCO World Heritage Site represents the pinnacle of ancient Chinese engineering and military strategy. The Mutianyu section, just 70km from Beijing, offers the perfect balance of accessibility and authenticity, featuring well-preserved Ming Dynasty fortifications, stunning mountain vistas, and modern amenities including cable car access.',
      bestTime: 'April-May and September-November for ideal weather and fewer crowds',
      tips: [
        'Book skip-the-line tickets in advance during peak season',
        'Arrive early (8-9 AM) for the best lighting and fewer tourists',
        'Wear comfortable hiking shoes with good grip',
        'Bring water and snacks - the climb can be demanding',
        'Allow 4-6 hours for a complete visit including transport'
      ]
    },
    slug: 'great-wall-china'
  },
  {
    id: 2,
    name: 'Forbidden City',
    chineseName: '紫禁城',
    location: 'Beijing',
    rating: 4.8,
    reviews: 89500,
    duration: '4-6 hours',
    category: 'Imperial Palace',
    gradient: 'from-purple-600 via-red-500 to-yellow-500',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop',
    description: 'Enter the world\'s largest palace complex where 24 emperors ruled China for nearly 500 years. The Forbidden City houses over 9,000 rooms of imperial treasures and represents the pinnacle of Chinese architecture.',
    highlights: [
      'World\'s largest palace complex with 9,999 rooms',
      'Home to Ming and Qing Dynasty emperors (1420-1912)',
      'Incredible collection of Chinese imperial art',
      'UNESCO World Heritage Site since 1987',
      'Architectural masterpiece of traditional Chinese design'
    ],
    getYourGuideId: '189-2847', // Forbidden City skip-the-line tour
    locationId: '189', // Beijing
    tourIds: '459862', // Forbidden City Beijing tour ID
    seoArticle: {
      title: 'Forbidden City Beijing: Skip-the-Line Tickets & Visitor Guide 2024',
      metaDescription: 'Visit Beijing\'s Forbidden City with skip-the-line access. Complete guide to China\'s imperial palace with tickets, tours, and insider tips.',
      content: 'The Forbidden City, known in Chinese as the Palace Museum, served as the imperial palace for 24 emperors during the Ming and Qing dynasties from 1420 to 1912. This UNESCO World Heritage Site spans 180 acres and contains over 9,000 rooms, making it the world\'s largest palace complex. Today, it houses the most comprehensive collection of Chinese imperial artifacts, including paintings, ceramics, and ancient manuscripts that showcase 5,000 years of Chinese civilization.',
      bestTime: 'Early morning (8:30 AM) or late afternoon (2-4 PM) to avoid peak crowds',
      tips: [
        'Book timed entry tickets online in advance - daily visitor limit of 80,000',
        'Allow 3-4 hours minimum for a comprehensive visit',
        'Download the official Palace Museum app for audio guides',
        'Wear comfortable walking shoes - lots of walking on stone surfaces',
        'Bring ID - required for ticket collection and entry'
      ]
    },
    slug: 'forbidden-city'
  },
  {
    id: 3,
    name: 'Terracotta Army',
    chineseName: '兵马俑',
    location: 'Xi\'an',
    rating: 4.9,
    reviews: 67800,
    duration: '3-4 hours',
    category: 'Archaeological Wonder',
    gradient: 'from-amber-600 via-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    description: 'Witness one of the greatest archaeological discoveries of the 20th century. Over 8,000 life-sized terracotta warriors guard China\'s first emperor in this UNESCO World Heritage masterpiece.',
    highlights: [
      '8,000+ individually crafted terracotta warriors',
      'UNESCO World Heritage Site since 1987',
      'Over 2,200 years old (Qin Dynasty)',
      'Each warrior has unique facial features and expressions',
      'Discovered by farmers in 1974 - accidental find'
    ],
    getYourGuideId: '303-1247', // Terracotta Army skip-the-line tour
    locationId: '303', // Xi'an
    tourIds: '730581', // Terracotta Army Xi'an tour ID
    seoArticle: {
      title: 'Terracotta Army Xi\'an: Complete Visitor Guide & Skip-the-Line Tickets 2024',
      metaDescription: 'Visit Xi\'an\'s famous Terracotta Army with skip-the-line tickets. Complete guide to China\'s greatest archaeological discovery with tours and tips.',
      content: 'The Terracotta Army, discovered in 1974 by local farmers, represents one of the most significant archaeological finds in human history. This vast underground army of over 8,000 life-sized clay warriors was created to protect China\'s first emperor, Qin Shi Huang, in the afterlife. Each warrior is individually crafted with unique facial features, hairstyles, and expressions, showcasing the incredible artistry of Qin Dynasty craftsmen over 2,200 years ago.',
      bestTime: 'Early morning (8:30-10 AM) or late afternoon (3-5 PM) for better lighting and fewer crowds',
      tips: [
        'Book skip-the-line tickets online - can save 1-2 hours during peak season',
        'Visit Pit 1 first (largest and most impressive), then Pits 2 and 3',
        'Allow 3-4 hours including the museum and bronze chariot exhibition',
        'Bring a camera - photography is allowed in most areas',
        'Combine with Xi\'an city wall or Big Wild Goose Pagoda for a full day'
      ]
    },
    slug: 'terracotta-army'
  },
  {
    id: 4,
    name: 'Li River Cruise',
    chineseName: '漓江游船',
    location: 'Guilin to Yangshuo',
    rating: 4.8,
    reviews: 45200,
    duration: '4-5 hours',
    category: 'Natural Wonder',
    gradient: 'from-green-600 via-teal-500 to-blue-500',
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=800&h=600&fit=crop',
    description: 'Sail through China\'s most stunning karst landscape on the Li River. This scenic cruise from Guilin to Yangshuo features dramatic limestone peaks and scenery depicted on the 20 RMB banknote.',
    highlights: [
      'Featured on Chinese 20 RMB banknote scenery',
      'Dramatic karst limestone mountain formations',
      'Traditional cormorant fishing demonstrations',
      'Picturesque riverside villages and bamboo groves',
      'UNESCO World Heritage landscape'
    ],
    getYourGuideId: '2635-891', // Li River cruise specific tour
    locationId: '2635', // Guilin
    tourIds: '12765', // Li River cruise Guilin tour ID
    seoArticle: {
      title: 'Li River Cruise Guilin to Yangshuo: Complete Guide & Tickets 2024',
      metaDescription: 'Experience the famous Li River cruise from Guilin to Yangshuo. Complete guide with tickets, best times, and what to expect on this scenic journey.',
      content: 'The Li River cruise from Guilin to Yangshuo ranks among China\'s most spectacular natural experiences. This 4-hour journey winds through a UNESCO World Heritage landscape of towering karst limestone peaks, emerald waters, and traditional fishing villages. The scenery is so iconic it appears on China\'s 20 RMB banknote, making this one of the most photographed landscapes in the world.',
      bestTime: 'April-October for best weather; early morning departures offer the best lighting',
      tips: [
        'Book morning cruises for better lighting and photography',
        'Bring sunscreen and a hat - limited shade on the boat',
        'Camera with extra batteries - incredible photo opportunities throughout',
        'Combine with Yangshuo cycling or bamboo rafting for a full day',
        'Weather can affect departures - check conditions in advance'
      ]
    },
    slug: 'li-river-cruise'
  },
  {
    id: 5,
    name: 'Temple of Heaven',
    chineseName: '天坛',
    location: 'Beijing',
    rating: 4.7,
    reviews: 34500,
    duration: '2-3 hours',
    category: 'Sacred Temple',
    gradient: 'from-blue-600 via-indigo-500 to-purple-500',
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=800&h=600&fit=crop',
    description: 'Visit Beijing\'s most sacred temple where emperors prayed for good harvests. This UNESCO site showcases perfect Ming Dynasty architecture with the famous Echo Wall and Circular Mound Altar.',
    highlights: [
      'UNESCO World Heritage Site since 1998',
      'Perfect example of Ming Dynasty architecture',
      'Famous Echo Wall with unique acoustics',
      'Beautiful surrounding Tiantan Park',
      'Sacred imperial prayer ceremonies site'
    ],
    getYourGuideId: '189-1456', // Temple of Heaven tour
    locationId: '189', // Beijing
    tourIds: '778450', // Temple of Heaven Beijing tour ID
    seoArticle: {
      title: 'Temple of Heaven Beijing: Complete Visitor Guide & Tickets 2024',
      metaDescription: 'Visit Beijing\'s Temple of Heaven with skip-the-line tickets. Complete guide to China\'s most sacred temple with tours, tips, and what to see.',
      content: 'The Temple of Heaven, built in 1420 during the Ming Dynasty, served as the most sacred site in imperial China where emperors performed annual ceremonies to pray for good harvests. This UNESCO World Heritage Site showcases the pinnacle of Chinese architectural design with its perfect circular structures, intricate wooden construction without nails, and symbolic representation of the relationship between heaven and earth.',
      bestTime: 'Early morning (7-9 AM) to see locals practicing tai chi and avoid crowds',
      tips: [
        'Visit early morning to see locals practicing tai chi in the park',
        'Test the Echo Wall acoustic phenomenon - whisper and hear it clearly across',
        'Climb the Circular Mound Altar for symbolic center of the universe experience',
        'Allow 2-3 hours including the surrounding Tiantan Park',
        'Combine with nearby Hongqiao Pearl Market for shopping'
      ]
    },
    slug: 'temple-of-heaven'
  },
  {
    id: 6,
    name: 'The Bund Shanghai',
    chineseName: '上海外滩',
    location: 'Shanghai',
    rating: 4.6,
    reviews: 78900,
    duration: '2-4 hours',
    category: 'Historic Waterfront',
    gradient: 'from-cyan-600 via-blue-500 to-indigo-500',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=600&fit=crop',
    description: 'Stroll along Shanghai\'s iconic waterfront promenade. The Bund showcases colonial-era architecture alongside stunning views of the futuristic Pudong skyline across the Huangpu River.',
    highlights: [
      'Iconic 1.5km waterfront promenade',
      '52 historic colonial buildings from 1920s-30s',
      'Spectacular Pudong skyline views',
      'Perfect for sunset and night photography',
      'Symbol of Shanghai\'s East-meets-West character'
    ],
    getYourGuideId: '18-2341', // Shanghai Bund walking tour
    locationId: '18', // Shanghai
    tourIds: '162617', // Shanghai Bund bike tour ID
    seoArticle: {
      title: 'The Bund Shanghai: Complete Walking Guide & Best Photo Spots 2024',
      metaDescription: 'Explore Shanghai\'s famous Bund waterfront. Complete guide with walking routes, best photo spots, and historical insights for 2024.',
      content: 'The Bund, Shanghai\'s most famous landmark, stretches 1.5 kilometers along the Huangpu River and represents the perfect fusion of East and West. This historic waterfront promenade features 52 buildings in various architectural styles from the 1920s and 1930s, when Shanghai was known as the "Paris of the East." Today, it offers unparalleled views of the ultra-modern Pudong skyline, creating one of the world\'s most dramatic urban contrasts.',
      bestTime: 'Sunset (6-8 PM) for golden hour photography, or evening (7-10 PM) for illuminated skylines',
      tips: [
        'Visit at sunset for the best photography lighting',
        'Walk the entire 1.5km promenade from Yan\'an Road to Suzhou Creek',
        'Take the Bund Sightseeing Tunnel for a unique Pudong crossing experience',
        'Best skyline views from the Bund or from Pudong side at night',
        'Combine with Yu Garden and Nanjing Road for a full Shanghai day'
      ]
    },
    slug: 'the-bund-shanghai'
  },
  {
    id: 7,
    name: 'Zhangjiajie Avatar Mountains',
    chineseName: '张家界阿凡达山',
    location: 'Hunan Province',
    rating: 4.8,
    reviews: 23400,
    duration: '6-8 hours',
    category: 'Avatar Landscape',
    gradient: 'from-emerald-600 via-green-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=800&h=600&fit=crop',
    description: 'Explore the otherworldly landscape that inspired Avatar\'s floating mountains. Zhangjiajie features thousands of towering sandstone pillars and the world\'s longest glass bridge.',
    highlights: [
      'Direct inspiration for Avatar movie floating mountains',
      '3,000+ towering quartzite sandstone pillars',
      'World\'s longest and highest glass bridge',
      'UNESCO World Heritage Site since 1992',
      'Tianzi Mountain cable car with panoramic views'
    ],
    getYourGuideId: '2636-445', // Zhangjiajie Avatar tour
    locationId: '2636', // Zhangjiajie
    tourIds: '683442', // Zhangjiajie Avatar mountain tour ID
    seoArticle: {
      title: 'Zhangjiajie Avatar Mountains: Complete Guide & Glass Bridge Tickets 2024',
      metaDescription: 'Visit Zhangjiajie Avatar Mountains and Glass Bridge. Complete guide with tickets, cable cars, and best viewpoints for 2024.',
      content: 'Zhangjiajie National Forest Park gained international fame as the inspiration for the floating Hallelujah Mountains in James Cameron\'s Avatar. This UNESCO World Heritage Site features over 3,000 towering quartzite sandstone pillars, some reaching heights of over 200 meters. The park also houses the world\'s longest and highest glass bridge, offering breathtaking views of the canyon below.',
      bestTime: 'April-June and September-November for clear skies and comfortable temperatures',
      tips: [
        'Book glass bridge tickets in advance - limited daily capacity',
        'Take the Bailong Elevator (world\'s highest outdoor lift) for spectacular views',
        'Visit Tianzi Mountain for the best Avatar-like scenery',
        'Allow 2-3 days to see all major areas comfortably',
        'Weather can change quickly - bring layers and rain gear'
      ]
    },
    slug: 'zhangjiajie-avatar-mountains'
  },
  {
    id: 8,
    name: 'Summer Palace Beijing',
    chineseName: '颐和园',
    location: 'Beijing',
    rating: 4.7,
    reviews: 56700,
    duration: '3-4 hours',
    category: 'Imperial Garden',
    gradient: 'from-pink-600 via-rose-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=800&h=600&fit=crop',
    description: 'Stroll through the magnificent Summer Palace, a masterpiece of Chinese landscape garden design. This UNESCO site features beautiful pavilions around the serene Kunming Lake.',
    highlights: [
      'Masterpiece of Chinese imperial garden design',
      'Beautiful Kunming Lake covering 75% of the park',
      'UNESCO World Heritage Site since 1998',
      'Former imperial summer retreat for Qing Dynasty',
      'Famous Marble Boat and Long Corridor'
    ],
    getYourGuideId: '189-1789', // Summer Palace tour
    locationId: '189', // Beijing
    tourIds: '778450', // Summer Palace Beijing tour ID (same as Temple of Heaven combo)
    seoArticle: {
      title: 'Summer Palace Beijing: Complete Visitor Guide & Tickets 2024',
      metaDescription: 'Visit Beijing\'s Summer Palace with skip-the-line tickets. Complete guide to China\'s most beautiful imperial garden with tours and tips.',
      content: 'The Summer Palace, built in 1750 and reconstructed in 1886, served as the imperial garden and summer retreat for the Qing Dynasty emperors. This UNESCO World Heritage Site covers 290 hectares, with Kunming Lake occupying three-quarters of the area. The palace complex showcases the pinnacle of Chinese landscape garden design, harmoniously blending natural scenery with artificial architecture.',
      bestTime: 'Spring (April-May) for blooming flowers or autumn (September-October) for colorful foliage',
      tips: [
        'Rent a boat on Kunming Lake for unique palace views',
        'Walk the famous Long Corridor (728 meters) with 14,000 paintings',
        'Visit the Marble Boat - symbol of the Qing Dynasty\'s naval power',
        'Allow 3-4 hours to see all major areas including the lake',
        'Combine with nearby Old Summer Palace ruins for historical context'
      ]
    },
    slug: 'summer-palace-beijing'
  },
  {
    id: 9,
    name: 'Chengdu Panda Base',
    chineseName: '成都大熊猫基地',
    location: 'Chengdu',
    rating: 4.9,
    reviews: 67800,
    duration: '3-4 hours',
    category: 'Wildlife Conservation',
    gradient: 'from-green-600 via-emerald-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=800&h=600&fit=crop',
    description: 'Meet China\'s beloved giant pandas at the world-renowned Chengdu Research Base. Observe these adorable creatures in naturalistic habitats and learn about conservation efforts.',
    highlights: [
      'World\'s leading giant panda research and breeding facility',
      'See pandas in spacious, naturalistic habitats',
      'Baby panda nursery with newborns and cubs',
      'Conservation education and research programs',
      'Best viewing times early morning when pandas are active'
    ],
    getYourGuideId: '2637-892', // Chengdu Panda Base tour
    locationId: '2637', // Chengdu
    tourIds: '868738', // Chengdu Panda Base tour ID
    seoArticle: {
      title: 'Chengdu Panda Base: Complete Guide & Skip-the-Line Tickets 2024',
      metaDescription: 'Visit Chengdu Giant Panda Research Base with skip-the-line tickets. Complete guide to seeing pandas, best times, and conservation programs.',
      content: 'The Chengdu Research Base of Giant Panda Breeding, established in 1987, has become the world\'s premier facility for giant panda conservation and research. Home to over 80 giant pandas, this 92-hectare facility simulates the natural habitat of wild pandas and has successfully bred over 200 pandas since its inception. The base also houses red pandas, black-necked cranes, and other endangered species.',
      bestTime: 'Early morning (8:30-10:30 AM) when pandas are most active and feeding',
      tips: [
        'Arrive early morning for most active pandas during feeding time',
        'Visit the nursery to see baby pandas and cubs',
        'Allow 3-4 hours to see all enclosures and the museum',
        'Bring camera with zoom lens - maintain distance from pandas',
        'Combine with Chengdu city tour or Sichuan cuisine experience'
      ]
    },
    slug: 'chengdu-panda-base'
  },
  {
    id: 10,
    name: 'West Lake Hangzhou',
    chineseName: '杭州西湖',
    location: 'Hangzhou',
    rating: 4.6,
    reviews: 45600,
    duration: '4-6 hours',
    category: 'Scenic Lake',
    gradient: 'from-teal-600 via-cyan-500 to-blue-500',
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=800&h=600&fit=crop',
    description: 'Experience the poetic beauty of West Lake, one of China\'s most celebrated natural attractions. This UNESCO site has inspired poets and artists for over 1,000 years.',
    highlights: [
      'UNESCO World Heritage Cultural Landscape since 2011',
      'Inspiration for Chinese poetry and art for over 1,000 years',
      'Famous "Ten Scenes of West Lake" viewpoints',
      'Beautiful traditional pagodas and temples',
      'Scenic boat cruises and lakeside walking paths'
    ],
    getYourGuideId: '2632-567', // West Lake Hangzhou tour
    locationId: '2632', // Hangzhou
    tourIds: '383323', // West Lake Hangzhou private tour ID
    seoArticle: {
      title: 'West Lake Hangzhou: Complete Guide & Best Viewpoints 2024',
      metaDescription: 'Visit Hangzhou\'s famous West Lake UNESCO site. Complete guide with boat cruises, best viewpoints, and the Ten Scenes for 2024.',
      content: 'West Lake in Hangzhou has been celebrated as one of China\'s most beautiful natural landscapes for over 1,000 years. This UNESCO World Heritage Cultural Landscape covers 6.38 square kilometers and has inspired countless poets, artists, and scholars throughout Chinese history. The lake is famous for its "Ten Scenes," each offering unique beauty throughout the seasons.',
      bestTime: 'Spring (March-May) for blooming flowers or autumn (September-November) for clear skies',
      tips: [
        'Take a boat cruise to see the lake from different perspectives',
        'Visit all "Ten Scenes of West Lake" for complete experience',
        'Walk or bike around the lake - full circuit is about 15km',
        'Visit Leifeng Pagoda for panoramic lake views',
        'Combine with Lingyin Temple and tea plantation visits'
      ]
    },
    slug: 'west-lake-hangzhou'
  }
]



export default function AttractionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-gold-400 mr-3" />
              <span className="text-gold-400 font-medium text-lg">Ultimate China Travel Guide</span>
            </div>
            
            <h1 className="heading-xl text-white mb-8 animate-fade-in-up">
              Top 10 Must-Visit
              <span className="block text-gradient bg-gradient-to-r from-gold-400 to-yellow-300 bg-clip-text text-transparent">
                Attractions in China
              </span>
            </h1>
            
            <p className="text-xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Discover China's most spectacular destinations with our expertly curated guide. From ancient wonders to modern marvels, 
              explore the attractions that define this incredible country.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <a href="#attractions" className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center">
                Explore Top Attractions
                <ArrowRight className="w-5 h-5 ml-2 flex-shrink-0" />
              </a>
              <Link href="/cities" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4">
                Browse by City
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-8 mt-12 text-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">10</div>
                <div className="text-sm">Top Attractions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">UNESCO</div>
                <div className="text-sm">World Heritage Sites</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">5000+</div>
                <div className="text-sm">Years of History</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Article Introduction */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why These Are China's Most Essential Attractions</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                China's vast landscape encompasses some of the world's most extraordinary attractions, from ancient architectural marvels 
                that have stood for millennia to natural wonders that inspired legends. Our carefully selected top 10 attractions represent 
                the very best of China's cultural heritage, natural beauty, and historical significance.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Each destination on this list offers unique experiences that showcase different aspects of Chinese civilization. Whether you're 
                drawn to the engineering marvel of the Great Wall, the artistic treasures of the Forbidden City, or the serene beauty of 
                West Lake, these attractions provide unforgettable glimpses into China's rich tapestry of history and culture.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We've included detailed information about each attraction, including the best times to visit, what to expect, and how to 
                make the most of your experience. Many of these sites are UNESCO World Heritage locations, recognized for their outstanding 
                universal value to humanity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top 10 Attractions Grid - City Style */}
      <section id="attractions" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">China's Top 10 Must-Visit Attractions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the most iconic and breathtaking destinations that showcase China's incredible diversity and rich heritage.
            </p>
          </div>

          {/* Grid Layout like Cities */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {topAttractions.map((attraction, index) => (
              <Link 
                key={attraction.id}
                href={`#attraction-${attraction.id}`}
                className="group block animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`relative overflow-hidden rounded-xl aspect-square bg-gradient-to-br ${attraction.gradient} flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                  {/* Decorative Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-2 left-2 w-4 h-4 border border-white/30 rounded-full"></div>
                    <div className="absolute top-3 right-3 w-3 h-3 border border-white/20 rounded-full"></div>
                    <div className="absolute bottom-2 left-3 w-2 h-2 border border-white/25 rounded-full"></div>
                    <div className="absolute bottom-2 right-2 w-5 h-5 border border-white/15 rounded-full"></div>
                  </div>
                  
                  {/* Attraction Number */}
                  <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  
                  {/* Attraction Names */}
                  <div className="text-center z-10 px-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 font-serif tracking-wide">
                      {attraction.chineseName}
                    </h3>
                    <p className="text-xs sm:text-sm text-white font-light tracking-widest opacity-90">
                      {attraction.name.toUpperCase()}
                    </p>
                    <p className="text-xs text-white/80 mt-1">{attraction.category}</p>
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                    <div className="flex items-center text-white text-xs">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      <span className="font-semibold">{attraction.rating}</span>
                    </div>
                  </div>
                  
                  {/* Subtle Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Attraction Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {topAttractions.map((attraction, index) => (
              <div key={attraction.id} id={`attraction-${attraction.id}`} className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content Side */}
                  <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                    <div className="flex items-center mb-4">
                      <span className={`bg-gradient-to-r ${attraction.gradient} text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mr-4`}>
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">{attraction.name}</h3>
                        <p className="text-xl text-gray-600">{attraction.chineseName}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6 mb-6 text-sm">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{attraction.location}</span>
                      </div>
                      <div className="flex items-center text-yellow-600">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        <span className="font-semibold">{attraction.rating}</span>
                        <span className="text-gray-500 ml-1">({attraction.reviews.toLocaleString()} reviews)</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{attraction.duration}</span>
                      </div>
                    </div>
                    
                    {/* SEO Article Content */}
                    <div className="prose prose-lg max-w-none mb-8">
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {attraction.seoArticle.content}
                      </p>
                      
                      <div className="bg-blue-50 rounded-lg p-6 mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                          Best Time to Visit
                        </h4>
                        <p className="text-gray-700">{attraction.seoArticle.bestTime}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                        <ul className="space-y-2">
                          {attraction.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center text-gray-700">
                              <div className={`w-2 h-2 bg-gradient-to-r ${attraction.gradient} rounded-full mr-3 flex-shrink-0`}></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Globe className="w-5 h-5 mr-2 text-green-600" />
                          Insider Tips
                        </h4>
                        <ul className="space-y-2">
                          {attraction.seoArticle.tips.map((tip, idx) => (
                            <li key={idx} className="flex items-start text-gray-700">
                              <span className="text-green-600 mr-2 mt-1">•</span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Link 
                        href={`/attractions/${attraction.slug}`}
                        className={`btn-primary bg-gradient-to-r ${attraction.gradient} hover:opacity-90 inline-flex items-center`}
                      >
                        Detailed Guide
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
                        {attraction.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Widget Side */}
                  <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'} bg-gradient-to-br ${attraction.gradient.replace('from-', 'from-').replace('via-', 'via-').replace('to-', 'to-')}/10 rounded-2xl p-8`}>
                    <GetYourGuideWidget 
                      locationId={attraction.locationId}
                      widgetType="activities"
                      title={`Book ${attraction.name} Experience`}
                      description={`Discover amazing tours and activities for ${attraction.name}`}
                      className="w-full"
                      tourIds={attraction.tourIds}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Your Visit Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Planning Your China Adventure</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Best Time to Visit</h3>
                <p className="text-gray-700 mb-4">
                  Spring (April-May) and autumn (September-November) offer the most comfortable weather for sightseeing. 
                  Summer can be hot and crowded, while winter provides fewer crowds but colder temperatures.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Spring: Mild weather, blooming flowers</li>
                  <li>• Summer: Peak season, hot weather</li>
                  <li>• Autumn: Perfect temperatures, clear skies</li>
                  <li>• Winter: Fewer crowds, cold but clear</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Travel Tips</h3>
                <p className="text-gray-700 mb-4">
                  Most attractions require advance booking, especially during peak seasons. Consider purchasing skip-the-line 
                  tickets to maximize your time at each destination.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Book tickets in advance online</li>
                  <li>• Arrive early to avoid crowds</li>
                  <li>• Bring comfortable walking shoes</li>
                  <li>• Download offline maps and translation apps</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Explore China?</h3>
              <p className="text-gray-700 mb-6">
                Start planning your journey to these incredible attractions. Each destination offers unique experiences 
                that will create memories to last a lifetime.
              </p>
              <Link href="/cities" className="btn-primary inline-flex items-center justify-center">
                Browse Destinations by City
                <ArrowRight className="w-5 h-5 ml-2 flex-shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
