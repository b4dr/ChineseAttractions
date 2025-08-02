'use client'

interface SchemaMarkupProps {
  type: 'attraction' | 'article' | 'faq' | 'breadcrumb'
  data: any
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const generateSchema = () => {
    switch (type) {
      case 'attraction':
        return {
          "@context": "https://schema.org",
          "@type": "TouristAttraction",
          "name": data.name,
          "description": data.description,
          "image": data.image || "/og-image.jpg",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": data.location,
            "addressCountry": "China"
          },
          "geo": data.coordinates ? {
            "@type": "GeoCoordinates",
            "latitude": data.coordinates.lat,
            "longitude": data.coordinates.lng
          } : undefined,
          "aggregateRating": data.rating ? {
            "@type": "AggregateRating",
            "ratingValue": data.rating,
            "reviewCount": data.reviewCount || 100,
            "bestRating": 5,
            "worstRating": 1
          } : undefined,
          "openingHours": data.openingHours,
          "priceRange": data.priceRange || "$$",
          "url": `https://chineseattractions.com${data.url}`,
          "sameAs": data.socialLinks || [],
          "touristType": ["Cultural", "Historical", "Educational"],
          "isAccessibleForFree": data.isFree || false,
          "maximumAttendeeCapacity": data.capacity,
          "amenityFeature": data.amenities || [
            {
              "@type": "LocationFeatureSpecification",
              "name": "Guided Tours Available"
            },
            {
              "@type": "LocationFeatureSpecification", 
              "name": "Photography Allowed"
            }
          ]
        }

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "image": data.image || "/og-image.jpg",
          "author": {
            "@type": "Person",
            "name": data.author,
            "jobTitle": data.authorTitle || "Travel Expert",
            "url": "https://chineseattractions.com/about"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Chinese Attractions",
            "logo": {
              "@type": "ImageObject",
              "url": "https://chineseattractions.com/logo.png"
            }
          },
          "datePublished": data.datePublished,
          "dateModified": data.dateModified || data.datePublished,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://chineseattractions.com${data.url}`
          },
          "articleSection": data.category,
          "keywords": data.keywords?.join(", "),
          "wordCount": data.wordCount || 2000,
          "timeRequired": data.readTime || "PT10M",
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "about": {
            "@type": "Thing",
            "name": "China Travel",
            "description": "Travel guide and attractions in China"
          }
        }

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.faqs?.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          })) || []
        }

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.breadcrumbs?.map((crumb: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": `https://chineseattractions.com${crumb.url}`
          })) || []
        }

      default:
        return {}
    }
  }

  const schema = generateSchema()
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2)
      }}
    />
  )
}
