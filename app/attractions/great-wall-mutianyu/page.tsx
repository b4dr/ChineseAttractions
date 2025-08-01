import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Star, Clock, Users, ArrowRight, Calendar, Shield, Camera, Mountain, Car, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Great Wall of China - Mutianyu Section Tour | Book Now | ChineseAttractions.com',
  description: 'Experience the most spectacular section of the Great Wall at Mutianyu. Book your guided tour with cable car access, English-speaking guide, and small group experience. UNESCO World Heritage Site.',
  keywords: 'Great Wall China, Mutianyu Great Wall, Great Wall tour, Beijing attractions, China UNESCO sites, Great Wall cable car, Beijing day trips',
  openGraph: {
    title: 'Great Wall of China - Mutianyu Section Tour | Book Now',
    description: 'Experience the most spectacular section of the Great Wall at Mutianyu. Book your guided tour with cable car access and English-speaking guide.',
    type: 'website',
    url: 'https://chineseattractions.com/attractions/great-wall-mutianyu',
  },
  alternates: {
    canonical: 'https://chineseattractions.com/attractions/great-wall-mutianyu',
  },
}

const attractionDetails = {
  name: 'Great Wall of China - Mutianyu Section',
  chineseName: '慕田峪长城',
  city: 'Beijing',
  rating: 4.9,
  reviews: 15420,
  duration: '8 hours',
  price: 'From $45',
  category: 'Historical Sites',
  gradient: 'from-red-500 via-orange-500 to-yellow-500',
  highlights: [
    'UNESCO World Heritage Site',
    'Cable Car Included',
    'English-Speaking Guide',
    'Small Groups (Max 15)',
    'Hotel Pickup & Drop-off',
    'Professional Photography',
    'Traditional Chinese Lunch',
    'Skip-the-Line Access'
  ],
  description: 'Experience the most spectacular and well-preserved section of the Great Wall of China at Mutianyu. This UNESCO World Heritage Site offers breathtaking mountain views and is less crowded than other sections, making it perfect for photography and peaceful exploration.',
  longDescription: `The Mutianyu section of the Great Wall is widely considered the most beautiful and well-preserved part of this ancient wonder. Built during the Ming Dynasty (1368-1644), this section stretches for 2.25 kilometers and features 22 watchtowers, each offering unique perspectives of the surrounding mountains and valleys.

What makes Mutianyu special is its stunning natural setting. Surrounded by lush forests and rolling hills, the wall winds dramatically across mountain ridges, creating some of the most iconic and photographable views of the Great Wall. The section is also less touristy than Badaling, allowing for a more authentic and peaceful experience.

Your journey begins with a scenic drive through the Chinese countryside, where you'll see traditional villages and beautiful landscapes. Upon arrival, you'll take a cable car up to the wall (included in the tour), saving your energy for exploring this magnificent structure.

Once on the wall, you'll have plenty of time to walk along the ancient stones, climb the watchtowers, and take in the incredible panoramic views. Your English-speaking guide will share fascinating stories about the wall's construction, its historical significance, and the lives of the soldiers who once guarded this frontier.`
}

const tourIncludes = [
  { icon: Car, text: 'Hotel pickup and drop-off in Beijing' },
  { icon: Mountain, text: 'Cable car tickets (round trip)' },
  { icon: Globe, text: 'Professional English-speaking guide' },
  { icon: Camera, text: 'Professional photography assistance' },
  { icon: Users, text: 'Small group experience (max 15 people)' },
  { icon: Calendar, text: 'Traditional Chinese lunch included' }
]

const itinerary = [
  { time: '8:00 AM', activity: 'Hotel pickup in Beijing', description: 'Comfortable air-conditioned vehicle pickup from your hotel' },
  { time: '9:30 AM', activity: 'Scenic drive to Mutianyu', description: 'Enjoy countryside views and learn about Chinese culture' },
  { time: '10:30 AM', activity: 'Arrive at Mutianyu Great Wall', description: 'Take cable car to the wall and begin exploration' },
  { time: '11:00 AM - 1:00 PM', activity: 'Explore the Great Wall', description: 'Walk along the wall, climb watchtowers, and take photos' },
  { time: '1:00 PM - 2:00 PM', activity: 'Traditional Chinese lunch', description: 'Enjoy authentic local cuisine at a nearby restaurant' },
  { time: '2:00 PM - 3:30 PM', activity: 'More Great Wall exploration', description: 'Continue exploring different sections and viewpoints' },
  { time: '4:00 PM', activity: 'Return journey to Beijing', description: 'Relax on the comfortable drive back to the city' },
  { time: '5:30 PM', activity: 'Hotel drop-off', description: 'Return to your Beijing hotel with unforgettable memories' }
]

const faqs = [
  {
    question: 'How difficult is the walk on the Great Wall?',
    answer: 'The Mutianyu section has both easy and challenging parts. The cable car takes you up, so you can choose how much walking you want to do. There are some steep sections, but most visitors of average fitness can enjoy the experience.'
  },
  {
    question: 'What should I wear and bring?',
    answer: 'Wear comfortable walking shoes with good grip, dress in layers, and bring a hat and sunscreen. We recommend bringing water and a camera. In winter, dress warmly as it can be very cold and windy on the wall.'
  },
  {
    question: 'Is the tour suitable for children and elderly?',
    answer: 'Yes, the cable car makes it accessible for most ages. However, there are some uneven surfaces and steps on the wall itself. Children should be supervised at all times, and elderly visitors should consider their mobility level.'
  },
  {
    question: 'What happens if it rains?',
    answer: 'The tour operates in most weather conditions. If there\'s heavy rain or dangerous weather, we\'ll contact you about rescheduling. Light rain can actually create beautiful misty views of the wall!'
  },
  {
    question: 'Can I book for just one person?',
    answer: 'Absolutely! We welcome solo travelers. You\'ll join a small group of other travelers, which is a great way to meet people and share the experience.'
  }
]

export default function GreatWallMutianyuPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br ${attractionDetails.gradient} text-white overflow-hidden`}>
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="relative container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-white/80 mb-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/attractions" className="hover:text-white">Attractions</Link>
              <span>/</span>
              <span className="text-white">Great Wall - Mutianyu</span>
            </nav>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-gold-400 mr-2" />
                  <span className="text-gold-400 font-medium">{attractionDetails.city}</span>
                  <span className="mx-2 text-white/60">•</span>
                  <span className="text-white/80">{attractionDetails.category}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {attractionDetails.name}
                </h1>
                
                <p className="text-2xl text-white/90 font-serif mb-6">
                  {attractionDetails.chineseName}
                </p>
                
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span className="font-semibold text-white">{attractionDetails.rating}</span>
                    <span className="text-white/80 ml-1">({attractionDetails.reviews.toLocaleString()} reviews)</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <Clock className="w-5 h-5 mr-1" />
                    <span>{attractionDetails.duration}</span>
                  </div>
                </div>
                
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  {attractionDetails.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="text-center sm:text-left">
                    <div className="text-3xl font-bold text-gold-400">{attractionDetails.price}</div>
                    <div className="text-white/80">per person</div>
                  </div>
                  <button className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center">
                    Book Now - Instant Confirmation
                    <ArrowRight className="w-5 h-5 ml-2 flex-shrink-0" />
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className={`h-96 bg-gradient-to-br ${attractionDetails.gradient} rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                  {/* Decorative Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-8 left-8 w-16 h-16 border-2 border-white/30 rounded-full"></div>
                    <div className="absolute top-12 right-12 w-12 h-12 border-2 border-white/20 rounded-full"></div>
                    <div className="absolute bottom-8 left-12 w-8 h-8 border-2 border-white/25 rounded-full"></div>
                    <div className="absolute bottom-12 right-8 w-20 h-20 border-2 border-white/15 rounded-full"></div>
                  </div>
                  
                  {/* Chinese Characters */}
                  <div className="text-center z-10">
                    <h2 className="text-6xl md:text-7xl font-bold text-white font-serif tracking-wide">
                      长城
                    </h2>
                    <p className="text-xl text-white/90 font-light tracking-widest mt-4">
                      GREAT WALL
                    </p>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">What's Included</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {tourIncludes.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              )
            })}
          </div>
          
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tour Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {attractionDetails.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-center mb-12">About This Experience</h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              {attractionDetails.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Daily Itinerary</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {itinerary.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-20 text-right mr-6">
                    <div className="text-lg font-bold text-primary-600">{item.time}</div>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-primary-500 rounded-full mt-2 mr-6"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.activity}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GetYourGuide Widget Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              Book Your Great Wall Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Secure your spot with instant confirmation and free cancellation up to 24 hours before
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="gyg-widget-container shadow-xl rounded-xl overflow-hidden bg-white">
              <div className="p-6 bg-gradient-to-r from-red-500 to-orange-500 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Great Wall of China Tours</h3>
                <p className="text-red-100">Choose from multiple Great Wall experiences and book instantly</p>
              </div>
              <div 
                data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
                data-gyg-locale-code="en-US" 
                data-gyg-widget="activities" 
                data-gyg-number-of-items="6" 
                data-gyg-partner-id="UENNPLZ"
                data-gyg-q="Great Wall China Beijing"
                data-gyg-currency="USD"
                className="min-h-[500px]"
              ></div>
              <div className="p-4 bg-gray-50 text-center">
                <span className="text-sm text-gray-500">
                  Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/beijing-l30/great-wall-of-china-tc1/" className="text-primary-600 hover:underline font-medium">GetYourGuide</a> | 
                  <span className="text-emerald-600 font-medium">Free Cancellation</span> | 
                  <span className="text-blue-600 font-medium">Instant Confirmation</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Attractions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">You Might Also Like</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/attractions/forbidden-city" className="group">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 h-48 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold font-serif mb-2">紫禁城</h3>
                  <p className="text-lg">Forbidden City</p>
                </div>
              </div>
            </Link>
            
            <Link href="/attractions/temple-of-heaven" className="group">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 h-48 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold font-serif mb-2">天坛</h3>
                  <p className="text-lg">Temple of Heaven</p>
                </div>
              </div>
            </Link>
            
            <Link href="/attractions/summer-palace" className="group">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-6 h-48 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold font-serif mb-2">颐和园</h3>
                  <p className="text-lg">Summer Palace</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
