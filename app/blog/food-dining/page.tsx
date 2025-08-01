import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ChefHat, Utensils, Coffee, MapPin, Star, Clock, DollarSign, ExternalLink, Flame, Leaf, Fish, Wheat } from 'lucide-react';

export const metadata: Metadata = {
  title: 'China Food & Dining Guide 2024 | Best Chinese Cuisine & Restaurants | Chinese Attractions',
  description: 'Ultimate guide to Chinese food and dining. Discover regional cuisines, must-try dishes, dining etiquette, food tours, and the best restaurants across China.',
  keywords: 'china food guide, chinese cuisine, china restaurants, beijing food, shanghai dining, chinese dishes, china food tours, chinese cooking, china street food, regional chinese food',
  openGraph: {
    title: 'China Food & Dining Guide 2024 | Best Chinese Cuisine & Restaurants',
    description: 'Your complete guide to experiencing the incredible diversity of Chinese cuisine',
    type: 'website',
  },
  alternates: {
    canonical: 'https://chineseattractions.com/food-dining',
  },
};

const regionalCuisines = [
  {
    name: 'Sichuan Cuisine',
    region: 'Southwest China',
    icon: Flame,
    color: 'bg-red-500',
    characteristics: ['Spicy', 'Numbing (má)', 'Bold flavors', 'Peppercorns'],
    signature: ['Mapo Tofu', 'Kung Pao Chicken', 'Hot Pot', 'Dan Dan Noodles'],
    cities: ['Chengdu', 'Chongqing'],
    description: 'Famous for its fiery spice and unique numbing sensation from Sichuan peppercorns.',
    mustTry: 'Authentic Sichuan Hot Pot - a social dining experience with friends'
  },
  {
    name: 'Cantonese Cuisine',
    region: 'Southern China',
    icon: Fish,
    color: 'bg-blue-500',
    characteristics: ['Fresh ingredients', 'Light flavors', 'Steaming', 'Dim sum'],
    signature: ['Dim Sum', 'Roast Duck', 'Sweet & Sour Pork', 'Wonton Noodles'],
    cities: ['Guangzhou', 'Hong Kong', 'Shenzhen'],
    description: 'Emphasizes freshness and natural flavors with minimal seasoning.',
    mustTry: 'Traditional Dim Sum brunch - small plates perfect for sharing'
  },
  {
    name: 'Beijing Cuisine',
    region: 'Northern China',
    icon: Wheat,
    color: 'bg-gold-500',
    characteristics: ['Wheat-based', 'Rich flavors', 'Imperial influence', 'Hearty portions'],
    signature: ['Peking Duck', 'Zhajiangmian', 'Mongolian Hot Pot', 'Jianbing'],
    cities: ['Beijing', 'Tianjin'],
    description: 'Imperial cuisine with rich, savory flavors and wheat-based staples.',
    mustTry: 'Peking Duck at a traditional restaurant - carved tableside with ceremony'
  },
  {
    name: 'Shanghai Cuisine',
    region: 'Eastern China',
    icon: Leaf,
    color: 'bg-green-500',
    characteristics: ['Sweet flavors', 'Soy sauce', 'Wine cooking', 'Seafood'],
    signature: ['Xiaolongbao', 'Shanghai Crab', 'Red-braised Pork', 'Scallion Noodles'],
    cities: ['Shanghai', 'Suzhou', 'Hangzhou'],
    description: 'Known for subtle sweetness and expert use of soy sauce and rice wine.',
    mustTry: 'Xiaolongbao (soup dumplings) - be careful of the hot broth inside!'
  }
];

const mustTryDishes = [
  {
    name: 'Peking Duck',
    origin: 'Beijing',
    price: '$$$',
    spice: 0,
    description: 'Crispy-skinned duck served with pancakes, scallions, and hoisin sauce',
    tips: 'Order at established restaurants like Quanjude or Bianyifang',
    dietary: ['Meat']
  },
  {
    name: 'Xiaolongbao',
    origin: 'Shanghai',
    price: '$$',
    spice: 0,
    description: 'Steamed soup dumplings filled with pork and savory broth',
    tips: 'Bite carefully and sip the soup first to avoid burns',
    dietary: ['Meat']
  },
  {
    name: 'Mapo Tofu',
    origin: 'Sichuan',
    price: '$',
    spice: 4,
    description: 'Silky tofu in spicy, numbing sauce with ground pork',
    tips: 'Perfect introduction to Sichuan cuisine\'s "má là" flavor',
    dietary: ['Spicy', 'Can be vegetarian']
  },
  {
    name: 'Dim Sum',
    origin: 'Guangdong',
    price: '$$',
    spice: 0,
    description: 'Variety of small dishes including dumplings, buns, and rolls',
    tips: 'Best enjoyed during weekend brunch with tea',
    dietary: ['Various options']
  },
  {
    name: 'Hot Pot',
    origin: 'Sichuan/Mongolia',
    price: '$$',
    spice: 3,
    description: 'Interactive dining with raw ingredients cooked in flavored broth',
    tips: 'Great for groups, choose your spice level carefully',
    dietary: ['Customizable']
  },
  {
    name: 'Kung Pao Chicken',
    origin: 'Sichuan',
    price: '$$',
    spice: 3,
    description: 'Diced chicken with peanuts, vegetables, and chili peppers',
    tips: 'Authentic version is much spicier than Western adaptations',
    dietary: ['Meat', 'Nuts']
  }
];

const diningTypes = [
  {
    type: 'Street Food',
    icon: MapPin,
    price: '$',
    experience: 'Authentic & Adventurous',
    examples: ['Jianbing (crepe)', 'Roujiamo (Chinese burger)', 'Stinky tofu', 'Grilled skewers'],
    tips: 'Look for busy stalls with high turnover, bring tissues',
    bestTime: 'Evening markets come alive after 6 PM'
  },
  {
    type: 'Local Restaurants',
    icon: Utensils,
    price: '$$',
    experience: 'Authentic & Social',
    examples: ['Family-run noodle shops', 'Regional specialty restaurants', 'Neighborhood favorites'],
    tips: 'Point at other tables\' food if language barrier, share dishes',
    bestTime: 'Lunch (11:30-1:30) and dinner (6-8 PM) for freshest food'
  },
  {
    type: 'Fine Dining',
    icon: Star,
    price: '$$$',
    experience: 'Refined & Elegant',
    examples: ['Michelin-starred restaurants', 'Hotel restaurants', 'Modern Chinese cuisine'],
    tips: 'Reservations essential, dress code applies',
    bestTime: 'Dinner service, some offer special tasting menus'
  },
  {
    type: 'Tea Houses',
    icon: Coffee,
    price: '$$',
    experience: 'Cultural & Relaxing',
    examples: ['Traditional tea ceremonies', 'Dim sum tea houses', 'Modern tea cafes'],
    tips: 'Learn basic tea etiquette, perfect for afternoon breaks',
    bestTime: 'Mid-afternoon (2-5 PM) for traditional tea time'
  }
];

const foodTours = [
  {
    city: 'Beijing',
    highlights: ['Peking Duck tasting', 'Hutong street food', 'Imperial cuisine', 'Local markets'],
    duration: '4-6 hours',
    price: '$80-120',
    bestFor: 'First-time visitors wanting comprehensive overview'
  },
  {
    city: 'Shanghai',
    highlights: ['Xiaolongbao workshop', 'French Concession dining', 'Night market tour', 'Cooking class'],
    duration: '3-5 hours',
    price: '$70-100',
    bestFor: 'Food lovers interested in fusion and tradition'
  },
  {
    city: 'Chengdu',
    highlights: ['Sichuan hot pot', 'Spice market visit', 'Tea house culture', 'Panda-themed dining'],
    duration: '5-7 hours',
    price: '$90-130',
    bestFor: 'Spice enthusiasts and cultural immersion'
  },
  {
    city: 'Guangzhou',
    highlights: ['Dim sum breakfast', 'Cantonese roast meats', 'Traditional markets', 'Tea ceremonies'],
    duration: '4-6 hours',
    price: '$85-115',
    bestFor: 'Authentic Cantonese cuisine experience'
  }
];

const dietaryInfo = [
  {
    diet: 'Vegetarian',
    difficulty: 'Moderate',
    tips: [
      'Buddhist restaurants offer excellent vegetarian options',
      'Learn key phrases: "我是素食主义者" (I am vegetarian)',
      'Tofu and vegetable dishes are widely available',
      'Be aware that some "vegetarian" dishes may contain meat stock'
    ],
    recommendations: ['Mapo Tofu (vegetarian version)', 'Ma Po Eggplant', 'Buddhist temple food']
  },
  {
    diet: 'Halal',
    difficulty: 'Easy',
    tips: [
      'Look for "清真" (Qīngzhēn) signs indicating halal food',
      'Muslim quarters in cities like Xi\'an have many options',
      'Xinjiang cuisine offers excellent halal choices',
      'Many noodle shops cater to Muslim dietary requirements'
    ],
    recommendations: ['Lanzhou beef noodles', 'Xinjiang lamb skewers', 'Hand-pulled noodles']
  },
  {
    diet: 'Gluten-Free',
    difficulty: 'Challenging',
    tips: [
      'Rice-based dishes are your best bet',
      'Soy sauce contains wheat - ask for alternatives',
      'Communicate clearly about wheat allergies',
      'Stick to simple rice and vegetable dishes when unsure'
    ],
    recommendations: ['Steamed rice with vegetables', 'Rice noodle soups', 'Stir-fried rice dishes']
  }
];

export default function FoodDiningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-chinese-50 to-gold-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">
              China <span className="text-gradient">Food & Dining</span> Guide
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Embark on a culinary journey through China's incredible regional cuisines. From street food adventures 
              to fine dining experiences, discover the flavors that define Chinese culture.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <ChefHat className="w-4 h-4 mr-1 text-red-500" />
                8 Major Cuisines
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1 text-primary-500" />
                Regional Specialties
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 text-gold-500" />
                Expert Recommendations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Cuisines */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Regional Chinese Cuisines</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              China's vast territory has created distinct regional cooking styles, each with unique flavors and techniques
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {regionalCuisines.map(cuisine => (
              <div key={cuisine.name} className="bg-white rounded-2xl shadow-sm p-8 border-l-4 border-primary-500">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${cuisine.color} rounded-xl flex items-center justify-center mr-4`}>
                    <cuisine.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{cuisine.name}</h3>
                    <p className="text-gray-600">{cuisine.region}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">{cuisine.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Characteristics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cuisine.characteristics.map((char, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {char}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Major Cities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cuisine.cities.map((city, index) => (
                        <span key={index} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Signature Dishes:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    {cuisine.signature.map((dish, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-gold-500 rounded-full mr-2"></span>
                        {dish}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gold-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gold-800 mb-2">🍽️ Must Try:</h4>
                  <p className="text-gold-700 text-sm">{cuisine.mustTry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Must-Try Dishes */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Must-Try Chinese Dishes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential dishes every visitor to China should experience at least once
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mustTryDishes.map((dish, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{dish.name}</h3>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">{dish.price}</span>
                    {dish.spice > 0 && (
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Flame 
                            key={i} 
                            className={`w-3 h-3 ${i < dish.spice ? 'text-red-500' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="text-sm text-primary-600 mb-2">Origin: {dish.origin}</div>
                <p className="text-gray-600 text-sm mb-4">{dish.description}</p>
                
                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <div className="font-medium text-blue-800 text-sm mb-1">💡 Pro Tip:</div>
                  <div className="text-blue-700 text-sm">{dish.tips}</div>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {dish.dietary.map((diet, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {diet}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Types */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Types of Dining Experiences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From street stalls to Michelin stars, choose your Chinese dining adventure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {diningTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                    <type.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{type.type}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="mr-3">{type.price}</span>
                      <span>{type.experience}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Popular Options:</h4>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((example, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <span className="font-medium text-yellow-800">Tips: </span>
                    <span className="text-yellow-700">{type.tips}</span>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg">
                    <span className="font-medium text-green-800">Best Time: </span>
                    <span className="text-green-700">{type.bestTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Tours */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Food Tours by City</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join expert-led food tours to discover hidden gems and local favorites
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {foodTours.map((tour, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{tour.city} Food Tour</h3>
                  <div className="text-right text-sm text-gray-600">
                    <div>{tour.duration}</div>
                    <div className="font-medium text-primary-600">{tour.price}</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Tour Highlights:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {tour.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <span className="font-medium text-blue-800">Perfect For: </span>
                  <span className="text-blue-700 text-sm">{tour.bestFor}</span>
                </div>
                
                <a 
                  href={`https://www.getyourguide.com/activity/${tour.city.toLowerCase() === 'beijing' ? 'beijing-l186/beijing-private-custom-tour-with-a-local-guide-t469001' : tour.city.toLowerCase() === 'shanghai' ? 'shanghai-l178/shanghai-evening-walking-food-tour-t260112' : tour.city.toLowerCase() === 'chengdu' ? 'shanghai-l178/tea-tour-wet-market-visit-and-home-cooking-class-t41916' : 'shanghai-l178/shanghai-3-hour-authentic-downtown-local-food-tasting-t68420'}/?partner_id=UENNPLZ&utm_medium=online_publisher&utm_source=chineseattractions&placement=content-middle&cmp=food-tours`}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
                >
                  Book {tour.city} Food Tour
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dietary Requirements */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Dietary Requirements & Restrictions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate Chinese cuisine with special dietary needs and preferences
            </p>
          </div>
          
          <div className="space-y-8">
            {dietaryInfo.map((diet, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{diet.diet} Dining</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    diet.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                    diet.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {diet.difficulty}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Essential Tips:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {diet.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Recommended Dishes:</h4>
                    <div className="space-y-2">
                      {diet.recommendations.map((dish, idx) => (
                        <div key={idx} className="bg-gray-50 p-3 rounded-lg text-sm text-gray-700">
                          {dish}
                        </div>
                      ))}
                    </div>
                  </div>
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
              Ready for Your Culinary Adventure?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book authentic food experiences and cooking classes with local experts. Taste the real flavors of China!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/attractions" 
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                Explore Food Destinations
              </Link>
              <a 
                href="https://www.getyourguide.com/activity/shanghai-l178/shanghai-evening-walking-food-tour-t260112/?partner_id=UENNPLZ&utm_medium=online_publisher&utm_source=chineseattractions&placement=content-end&cmp=food-dining"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                Book Food Tours & Classes
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
            <p className="text-sm mt-4 opacity-75">
              ✓ Local Expert Guides ✓ Authentic Experiences ✓ Small Group Tours
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
