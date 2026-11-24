import Link from 'next/link'
import { MapPin, Star, ArrowRight, Clock, BadgeCheck, Sparkles } from 'lucide-react'
import GetYourGuideWidget from '@/components/GetYourGuideWidget'
import TravelInsuranceBanner from '@/components/TravelInsuranceBanner'
import EsimBanner from '@/components/EsimBanner'
import TripComBanner from '@/components/TripComBanner'
import { IMAGES } from '@/lib/images'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chinese Attractions | Discover Amazing Places in China',
  description: 'Explore the most spectacular tourist attractions in China. From the Great Wall to the Forbidden City, discover and book unforgettable experiences with our comprehensive travel guide.',
  keywords: [
    'China attractions',
    'Chinese tourism',
    'Great Wall tours',
    'Forbidden City tickets',
    'Beijing attractions',
    'Shanghai tours',
    'China travel guide',
    'Chinese landmarks',
    'China sightseeing',
    'China vacation packages'
  ],
  openGraph: {
    title: 'Chinese Attractions | Discover Amazing Places in China',
    description: 'Explore the most spectacular tourist attractions in China. From the Great Wall to the Forbidden City, discover and book unforgettable experiences.',
    images: ['/og-home.jpg'],
  },
}

const featuredAttractions = [
  { name: 'Great Wall of China', city: 'Beijing', img: 'great-wall', rating: 4.8, price: 'From $45', duration: '8 hrs', tag: 'UNESCO Wonder', slug: 'great-wall-china' },
  { name: 'Forbidden City', city: 'Beijing', img: 'forbidden-city', rating: 4.7, price: 'From $35', duration: '4 hrs', tag: 'Imperial Palace', slug: 'forbidden-city' },
  { name: 'Terracotta Army', city: "Xi'an", img: 'terracotta', rating: 4.9, price: 'From $55', duration: '6 hrs', tag: '8,000 Warriors', slug: 'terracotta-army' },
  { name: 'Li River Cruise', city: 'Guilin', img: 'guilin2', rating: 4.6, price: 'From $65', duration: '5 hrs', tag: 'Karst Scenery', slug: 'li-river-cruise' },
]

const cities = [
  { name: 'Beijing', chinese: '北京', img: 'forbidden-city', slug: 'beijing' },
  { name: 'Shanghai', chinese: '上海', img: 'shanghai', slug: 'shanghai' },
  { name: "Xi'an", chinese: '西安', img: 'xian', slug: 'xian' },
  { name: 'Guilin', chinese: '桂林', img: 'terraces', slug: 'guilin' },
  { name: 'Chengdu', chinese: '成都', img: 'chengdu', slug: 'chengdu' },
  { name: 'Hangzhou', chinese: '杭州', img: 'west-lake', slug: 'hangzhou' },
  { name: 'Suzhou', chinese: '苏州', img: 'suzhou', slug: 'suzhou' },
  { name: 'Nanjing', chinese: '南京', img: 'nanjing', slug: 'nanjing' },
]

const guides = [
  { title: 'China Visa Requirements', img: 'flatlay', slug: 'china-visa-requirements-2025', label: 'Essential' },
  { title: 'High-Speed Rail Guide', img: 'hsr', slug: 'china-high-speed-rail-guide-2026', label: 'Getting Around' },
  { title: 'eSIM & VPN Guide', img: 'esim', slug: 'china-esim-vpn-guide-2026', label: 'Stay Connected' },
]

export default function HomePage() {
  return (
    <div className="pt-16 md:pt-20 bg-paper-100">
      {/* ─── Hero: one decisive image ─── */}
      <section className="relative min-h-[82vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES['great-wall']})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/35 to-ink-950/10" />

        <div className="relative container mx-auto px-4 sm:px-6 pb-16 sm:pb-20 pt-32 z-10">
          <h1 className="font-serif text-white text-4xl sm:text-5xl lg:text-[4.25rem] leading-[1.05] max-w-3xl">
            China's wonders,
            <span className="block italic text-paper-200">planned perfectly.</span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-paper-100/90 max-w-xl leading-relaxed">
            Ancient walls, hidden temples, cities that never sleep — honest guides and handpicked tours for the trip of a lifetime.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/attractions" className="btn-primary inline-flex items-center justify-center text-base px-7 py-3.5">
              Explore attractions
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/cities" className="inline-flex items-center justify-center px-7 py-3.5 rounded-md font-medium text-white border border-white/40 hover:bg-white/10 transition-colors">
              <MapPin className="w-4 h-4 mr-2" />
              Browse cities
            </Link>
          </div>
          <p className="mt-8 text-sm text-paper-200/80 flex items-center gap-2">
            <BadgeCheck className="w-4 h-4 text-jade-300" />
            Tours via GetYourGuide · Free cancellation on most experiences
          </p>
        </div>
      </section>

      {/* ─── Featured attractions: photo cards ─── */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="heading-lg">The attractions worth the flight</h2>
              <p className="mt-2 text-ink-500 max-w-xl">The ten experiences no first trip to China should miss — starting with these four.</p>
            </div>
            <Link href="/attractions" className="hidden sm:inline-flex items-center text-jade-700 font-medium hover:text-jade-800">
              See all 10 <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredAttractions.map((a) => (
              <Link key={a.slug} href={`/attractions/${a.slug}`} className="group block">
                <div className="photo-card aspect-[4/5]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${IMAGES[a.img]})` }}
                  />
                  <div className="relative z-10 h-full flex flex-col justify-end p-5 text-white">
                    <span className="text-xs font-medium tracking-wide text-paper-200 uppercase">{a.tag}</span>
                    <h3 className="mt-1 text-xl font-serif text-white">{a.name}</h3>
                    <div className="mt-2 flex items-center gap-3 text-sm text-paper-200">
                      <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />{a.rating}</span>
                      <span>{a.price}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{a.duration}</span>
                    </div>
                    <span className="mt-3 text-sm text-paper-200/80">{a.city}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Cities: photo mosaic ─── */}
      <section className="section-padding bg-white border-y border-paper-300">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="heading-lg">Eight cities, eight Chinas</h2>
              <p className="mt-2 text-ink-500 max-w-xl">From imperial capitals to karst river towns — pick your base and explore outwards.</p>
            </div>
            <Link href="/cities" className="hidden sm:inline-flex items-center text-jade-700 font-medium hover:text-jade-800">
              All cities <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {cities.map((c) => (
              <Link key={c.slug} href={`/cities/${c.slug}`} className="group block">
                <div className="photo-card aspect-square">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${IMAGES[c.img]})` }}
                  />
                  <div className="relative z-10 h-full flex flex-col justify-end p-4 text-white">
                    <span className="font-serif text-2xl text-white/95">{c.chinese}</span>
                    <span className="mt-1 text-sm font-medium tracking-wide uppercase">{c.name}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Booking: revenue driver ─── */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="heading-lg">Book your China adventure</h2>
              <p className="mt-2 text-ink-500">Handpicked tours, skip-the-line tickets and day trips — bookable in minutes.</p>
            </div>

            <div className="rounded-lg overflow-hidden border border-paper-300 bg-white shadow-sm">
              <div className="px-5 py-4 bg-ink-800 text-paper-50 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg text-paper-50">Top-rated China experiences</h3>
                  <p className="text-sm text-paper-300">Tours, activities and attractions across the country</p>
                </div>
                <span className="seal hidden sm:flex">玉</span>
              </div>
              <div
                data-gyg-href="https://widget.getyourguide.com/default/activities.frame"
                data-gyg-locale-code="en-US"
                data-gyg-widget="activities"
                data-gyg-number-of-items="8"
                data-gyg-partner-id="UENNPLZ"
                data-gyg-q="china"
                className="min-h-[400px] sm:min-h-[600px] bg-paper-50 flex items-center justify-center"
              >
                <div className="text-center p-8">
                  <div className="animate-spin rounded-full h-10 w-10 border-2 border-jade-200 border-t-jade-600 mx-auto mb-5" />
                  <p className="text-ink-500">Loading experiences…</p>
                </div>
              </div>
              <div className="px-5 py-3 border-t border-paper-300 bg-paper-50 text-center">
                <span className="text-sm text-ink-500">
                  Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/china-l186/" className="text-jade-700 hover:underline font-medium">GetYourGuide</a>
                  <span className="mx-2 text-ink-300">·</span>Free cancellation
                  <span className="mx-2 text-ink-300">·</span>Instant confirmation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Guides teasers ─── */}
      <section className="section-padding bg-white border-y border-paper-300">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="heading-lg">Plan like a pro</h2>
              <p className="mt-2 text-ink-500 max-w-xl">The practical stuff — visas, trains, staying online — explained simply.</p>
            </div>
            <Link href="/blog" className="hidden sm:inline-flex items-center text-jade-700 font-medium hover:text-jade-800">
              All guides <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {guides.map((g) => (
              <Link key={g.slug} href={`/blog/${g.slug}`} className="group card">
                <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES[g.img]})` }} />
                <div className="p-5">
                  <span className="text-xs font-medium tracking-wide text-jade-700 uppercase">{g.label}</span>
                  <h3 className="mt-1.5 text-lg font-serif text-ink-900 group-hover:text-jade-800 transition-colors">{g.title}</h3>
                  <span className="mt-3 inline-flex items-center text-sm text-jade-700 font-medium">
                    Read the guide <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Travel essentials (affiliate) ─── */}
      <TripComBanner variant="full" />
      <EsimBanner variant="full" />
      <TravelInsuranceBanner variant="full" />

      {/* ─── Honest value props ─── */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-lg">Why travelers use this guide</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-jade-600 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-paper-50" />
              </div>
              <h3 className="text-lg font-semibold text-ink-900 mb-2">Everything in one place</h3>
              <p className="text-ink-500">Attractions, cities, visas, transport and connectivity — the whole trip, one guide.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-jade-600 flex items-center justify-center mx-auto mb-4">
                <BadgeCheck className="w-6 h-6 text-paper-50" />
              </div>
              <h3 className="text-lg font-semibold text-ink-900 mb-2">Handpicked partners</h3>
              <p className="text-ink-500">Tours and services from established platforms — booked securely, cancellable easily.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-jade-600 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-paper-50" />
              </div>
              <h3 className="text-lg font-semibold text-ink-900 mb-2">Written for real trips</h3>
              <p className="text-ink-500">Practical detail over fluff — opening hours, prices, how to get there, what to skip.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
