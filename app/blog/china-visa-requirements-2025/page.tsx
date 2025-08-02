import Link from 'next/link'
import { FileText, Clock, MapPin, AlertCircle, CheckCircle, Users, Calendar, ArrowRight, Shield, Plane } from 'lucide-react'
import GetYourGuideWidget from '@/components/GetYourGuideWidget'
import SchemaMarkup from '@/components/SchemaMarkup'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'China Visa Requirements 2025 - Complete Guide & Application Process | Chinese Attractions',
  description: 'China visa 2025 guide: Requirements, application process, fees, processing time. Get your China tourist visa approved fast! Updated January 2025.',
  keywords: [
    'China visa 2025',
    'China visa requirements',
    'China tourist visa',
    'China visa application',
    'China visa fees 2025',
    'China visa processing time',
    'China visa documents',
    'China visa online',
    'China visa for Americans',
    'China visa for Europeans',
    'China visa guide 2025',
    'China travel visa'
  ],
  openGraph: {
    title: 'China Visa Requirements 2025 - Complete Guide & Application Process',
    description: 'China visa 2025 guide: Requirements, application process, fees, processing time. Get your China tourist visa approved fast!',
    images: ['/china-visa-2025-og.jpg'],
    url: '/blog/china-visa-requirements-2025',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'China Visa Requirements 2025 - Complete Guide & Application Process',
    description: 'China visa 2025 guide: Requirements, application process, fees, processing time. Get your China tourist visa approved fast!',
    images: ['/china-visa-2025-og.jpg']
  },
  alternates: {
    canonical: '/blog/china-visa-requirements-2025'
  }
}

const visaTypes = [
  {
    type: 'L Visa (Tourist)',
    duration: '30-90 days',
    entries: 'Single/Double/Multiple',
    fee: '$140-200',
    processing: '4-7 business days',
    description: 'Most common visa for tourists and leisure travelers',
    requirements: ['Passport', 'Application form', 'Photo', 'Itinerary', 'Hotel bookings']
  },
  {
    type: 'M Visa (Business)',
    duration: '30-90 days',
    entries: 'Single/Double/Multiple',
    fee: '$140-200',
    processing: '4-7 business days',
    description: 'For business meetings, conferences, and commercial activities',
    requirements: ['Passport', 'Application form', 'Photo', 'Invitation letter', 'Business license']
  },
  {
    type: 'F Visa (Exchange)',
    duration: '30-180 days',
    entries: 'Single/Double/Multiple',
    fee: '$140-200',
    processing: '4-7 business days',
    description: 'For cultural exchanges, study tours, and short-term studies',
    requirements: ['Passport', 'Application form', 'Photo', 'Invitation letter', 'Study plan']
  }
]

const countryRequirements = [
  {
    country: 'United States',
    processing: '4-7 business days',
    fee: '$140',
    notes: 'Interview may be required for first-time applicants',
    consulates: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'San Francisco']
  },
  {
    country: 'United Kingdom',
    processing: '4-7 business days',
    fee: '£151',
    notes: 'Biometric data collection required',
    consulates: ['London', 'Manchester', 'Edinburgh']
  },
  {
    country: 'Canada',
    processing: '4-7 business days',
    fee: 'CAD $200',
    notes: 'Online application available',
    consulates: ['Toronto', 'Vancouver', 'Calgary']
  },
  {
    country: 'Australia',
    processing: '4-7 business days',
    fee: 'AUD $180',
    notes: 'Express service available (2-3 days)',
    consulates: ['Sydney', 'Melbourne', 'Perth']
  }
]

const documents = [
  {
    icon: FileText,
    title: 'Passport',
    description: 'Valid for at least 6 months with 2 blank pages',
    required: true,
    tips: 'Make copies of all pages'
  },
  {
    icon: FileText,
    title: 'Application Form',
    description: 'Completed and signed visa application form',
    required: true,
    tips: 'Fill out online or print and complete by hand'
  },
  {
    icon: FileText,
    title: 'Passport Photo',
    description: 'Recent color photo (48mm x 33mm)',
    required: true,
    tips: 'White background, no glasses, neutral expression'
  },
  {
    icon: Plane,
    title: 'Flight Itinerary',
    description: 'Round-trip flight reservation',
    required: true,
    tips: 'Don\'t buy tickets until visa is approved'
  },
  {
    icon: MapPin,
    title: 'Hotel Bookings',
    description: 'Accommodation confirmation for entire stay',
    required: true,
    tips: 'Book refundable hotels until visa confirmed'
  },
  {
    icon: Shield,
    title: 'Travel Insurance',
    description: 'Coverage for medical emergencies',
    required: false,
    tips: 'Recommended but not mandatory'
  }
]

const timeline = [
  {
    step: 1,
    title: 'Prepare Documents',
    duration: '1-2 days',
    description: 'Gather all required documents and complete application form',
    tips: ['Double-check passport validity', 'Book refundable accommodations', 'Get professional passport photos']
  },
  {
    step: 2,
    title: 'Submit Application',
    duration: '1 day',
    description: 'Submit application at Chinese consulate or visa center',
    tips: ['Make appointment online', 'Arrive early', 'Bring all original documents']
  },
  {
    step: 3,
    title: 'Processing',
    duration: '4-7 business days',
    description: 'Consulate processes your visa application',
    tips: ['Track application status online', 'Don\'t make final travel plans yet', 'Be patient']
  },
  {
    step: 4,
    title: 'Collection',
    duration: '1 day',
    description: 'Collect your passport with visa',
    tips: ['Check visa details carefully', 'Make copies of visa', 'Book final travel arrangements']
  }
]

export default function ChinaVisa2025Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-red-600 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <FileText className="w-8 h-8 mr-3 text-blue-200" />
              <span className="text-blue-200 font-semibold text-lg">Updated January 2025</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              China Visa Requirements
              <span className="block text-blue-200">2025 Complete Guide</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Everything you need to know to get your China visa approved quickly and easily
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#visa-types" className="btn-primary bg-white text-blue-600 hover:bg-blue-50">
                Check Visa Types
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="#requirements" className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors border-2 border-yellow-400">
                View Requirements
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                China Visa Quick Facts 2025
              </h2>
              <p className="text-xl text-gray-600">
                Essential information at a glance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-gradient-to-br from-blue-50 to-red-50 p-6 rounded-2xl">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Processing Time</h3>
                <p className="text-gray-600">4-7 business days</p>
                <p className="text-sm text-blue-600 mt-2">Express: 2-3 days</p>
              </div>
              
              <div className="text-center bg-gradient-to-br from-red-50 to-blue-50 p-6 rounded-2xl">
                <FileText className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visa Fee</h3>
                <p className="text-gray-600">$140-200 USD</p>
                <p className="text-sm text-red-600 mt-2">Varies by nationality</p>
              </div>
              
              <div className="text-center bg-gradient-to-br from-blue-50 to-red-50 p-6 rounded-2xl">
                <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Validity</h3>
                <p className="text-gray-600">30-90 days</p>
                <p className="text-sm text-blue-600 mt-2">Single/Multiple entry</p>
              </div>
              
              <div className="text-center bg-gradient-to-br from-red-50 to-blue-50 p-6 rounded-2xl">
                <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Success Rate</h3>
                <p className="text-gray-600">95%+ approval</p>
                <p className="text-sm text-red-600 mt-2">With complete docs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Types */}
      <section id="visa-types" className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Types of China Visas 2025
              </h2>
              <p className="text-xl text-gray-600">
                Choose the right visa type for your travel purpose
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {visaTypes.map((visa, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{visa.type}</h3>
                    <p className="text-gray-600">{visa.description}</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium text-gray-900">{visa.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Entries:</span>
                      <span className="font-medium text-gray-900">{visa.entries}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fee:</span>
                      <span className="font-medium text-gray-900">{visa.fee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Processing:</span>
                      <span className="font-medium text-gray-900">{visa.processing}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Required Documents:</h4>
                    <ul className="space-y-2">
                      {visa.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section id="requirements" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Required Documents Checklist
              </h2>
              <p className="text-xl text-gray-600">
                Make sure you have everything before applying
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {documents.map((doc, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
                      <doc.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{doc.title}</h3>
                        {doc.required && (
                          <span className="ml-2 px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full">Required</span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3">{doc.description}</p>
                      <p className="text-sm text-blue-600 font-medium">💡 {doc.tips}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Application Timeline
              </h2>
              <p className="text-xl text-gray-600">
                Step-by-step process from application to approval
              </p>
            </div>

            <div className="space-y-8">
              {timeline.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6 flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="space-y-2">
                      {step.tips.map((tip, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {tip}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Country-Specific Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Country-Specific Requirements
              </h2>
              <p className="text-xl text-gray-600">
                Requirements vary by nationality
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {countryRequirements.map((country, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{country.country}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Processing Time:</span>
                      <span className="font-medium text-gray-900">{country.processing}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Visa Fee:</span>
                      <span className="font-medium text-gray-900">{country.fee}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-blue-600 font-medium mb-2">Special Notes:</p>
                    <p className="text-gray-600">{country.notes}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Consulates:</p>
                    <div className="flex flex-wrap gap-2">
                      {country.consulates.map((consulate, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">
                          {consulate}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Book Tours Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Plan Your China Adventure
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Once you get your visa, book amazing tours and experiences in China!
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <GetYourGuideWidget 
                locationId="189"
                widgetType="activities"
                title="Beijing Tours & Experiences"
                description="Book amazing tours and activities in Beijing - China's capital"
                className="w-full"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/attractions/great-wall-china" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-bold mb-2">Great Wall Tours</h3>
                <p className="text-sm text-blue-100">Skip-the-line access</p>
              </Link>
              <Link href="/attractions/forbidden-city" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                <Users className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-bold mb-2">Beijing Highlights</h3>
                <p className="text-sm text-blue-100">Expert local guides</p>
              </Link>
              <Link href="/cities/shanghai" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                <Plane className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-bold mb-2">Multi-City Tours</h3>
                <p className="text-sm text-blue-100">Beijing to Shanghai</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup for SEO */}
      <SchemaMarkup 
        type="article"
        data={{
          title: "China Visa Requirements 2025 - Complete Guide & Application Process",
          description: "China visa 2025 guide: Requirements, application process, fees, processing time. Get your China tourist visa approved fast! Updated January 2025.",
          image: "/china-visa-2025-og.jpg",
          author: "Visa Expert Team",
          authorTitle: "China Travel Visa Specialists",
          datePublished: "2025-01-20",
          dateModified: "2025-01-20",
          url: "/blog/china-visa-requirements-2025",
          category: "Travel Guide",
          keywords: ["China visa 2025", "China visa requirements", "China tourist visa", "China visa application", "China visa fees 2025"],
          wordCount: 4000,
          readTime: "PT20M"
        }}
      />
      
      <SchemaMarkup 
        type="breadcrumb"
        data={{
          breadcrumbs: [
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: "China Visa Requirements 2025", url: "/blog/china-visa-requirements-2025" }
          ]
        }}
      />
    </div>
  )
}
