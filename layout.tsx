import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Elite Limousine - Luxury Transportation Services | Book Now",
  description:
    "Premium limousine rental services for weddings, corporate events, airport transfers, and special occasions. Book your luxury limo today with Elite Limousine.",
  keywords: [
    "limousine rental",
    "luxury car rental",
    "limo service",
    "wedding limo",
    "corporate transportation",
    "airport transfer limo",
    "party bus rental",
    "luxury transportation",
  ],
  authors: [{ name: "Elite Limousine" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elitelimousine.com",
    siteName: "Elite Limousine",
    title: "Elite Limousine - Luxury Transportation Services",
    description:
      "Premium limousine rental for all your special occasions. Book now for weddings, corporate events, and more.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#1a1a1a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Elite Limousine",
              description:
                "Premium luxury transportation services for weddings, corporate events, airport transfers, and special occasions.",
              url: "https://elitelimousine.com",
              telephone: "(555) 123-4567",
              email: "info@elitelimo.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Luxury Ave, Suite 100",
                addressLocality: "New York",
                addressRegion: "NY",
                postalCode: "10001",
                addressCountry: "US",
              },
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}