import React from 'react'
import { Heart, Sparkles, Gift } from 'lucide-react'
import { siteConfig } from '../config/site'

export const About: React.FC = () => {
  const pageStyle = {
    paddingTop: '80px',
    minHeight: '100vh',
    backgroundColor: '#FAF8F9',
  }

  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '48px 16px',
  }

  const headingStyle = {
    fontFamily: 'Playfair Display, serif',
    fontSize: '48px',
    fontWeight: 500,
    color: '#0B0B0D',
    marginBottom: '24px',
  }

  const sectionHeadingStyle = {
    fontFamily: 'Playfair Display, serif',
    fontSize: '24px',
    fontWeight: 500,
    color: '#0B0B0D',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  }

  const cardStyle = {
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    padding: '24px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  }

  const buttonStyle = {
    backgroundColor: '#E8A7D8',
    color: '#FFFFFF',
    padding: '12px 24px',
    borderRadius: '9999px',
    fontWeight: 500,
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none' as const,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
  }

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h1 style={headingStyle}>
            Made with Love, Just for You.
          </h1>
          <p style={{ fontSize: '18px', color: '#777777', maxWidth: '600px', margin: '0 auto' }}>
            TheCharmClub is a Chennai-based small business by {siteConfig.founders}, creating cute, thoughtful and aesthetic pieces designed to make gifting and everyday moments a little more special.
          </p>
        </div>

        {/* Our Story */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={sectionHeadingStyle}>
            <Heart style={{ color: '#E8A7D8' }} size={24} />
            Our Story
          </h2>
          <div style={cardStyle}>
            <p style={{ color: '#777777', lineHeight: 1.6, marginBottom: '16px' }}>
              Born from a love for all things cute and aesthetic, TheCharmClub started as a passion project to create charming little pieces that bring joy to everyday life. What began as making small accessories for friends and family has grown into a small business dedicated to spreading happiness through thoughtful, handcrafted creations.
            </p>
            <p style={{ color: '#777777', lineHeight: 1.6 }}>
              Every piece is made with care and attention to detail, ensuring that each item carries a little bit of love and charm. We believe that the smallest things can make the biggest impact, and that's what drives us to create pieces that make you smile.
            </p>
          </div>
        </section>

        {/* Why TheCharmClub */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={sectionHeadingStyle}>
            <Sparkles style={{ color: '#E8A7D8' }} size={24} />
            Why TheCharmClub?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            <div style={cardStyle}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 500, color: '#0B0B0D', marginBottom: '12px' }}>
                Thoughtfully Designed
              </h3>
              <p style={{ color: '#777777', fontSize: '14px' }}>
                Each piece is carefully designed with attention to detail, ensuring quality and charm in every creation.
              </p>
            </div>
            <div style={cardStyle}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 500, color: '#0B0B0D', marginBottom: '12px' }}>
                Made with Love
              </h3>
              <p style={{ color: '#777777', fontSize: '14px' }}>
                We pour our heart into every piece, creating items that are made to be loved and cherished.
              </p>
            </div>
            <div style={cardStyle}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 500, color: '#0B0B0D', marginBottom: '12px' }}>
                Chennai Based
              </h3>
              <p style={{ color: '#777777', fontSize: '14px' }}>
                Proudly based in Chennai, Tamil Nadu, bringing aesthetic charm to customers across India.
              </p>
            </div>
          </div>
        </section>

        {/* Made for Gifting */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={sectionHeadingStyle}>
            <Gift style={{ color: '#E8A7D8' }} size={24} />
            Made for Gifting
          </h2>
          <div style={cardStyle}>
            <p style={{ color: '#777777', lineHeight: 1.6, marginBottom: '16px' }}>
              Whether it's a birthday, anniversary, or just because – our pieces are perfect for making someone's day a little more special. From phone charms that add a personal touch to your everyday carry, to keychains that carry memories wherever you go, to beautiful bouquets and hampers for those bigger celebrations.
            </p>
            <p style={{ color: '#777777', lineHeight: 1.6 }}>
              We also offer custom gifts for those looking for something truly unique. Reach out to us on WhatsApp to discuss custom orders and personalized creations.
            </p>
          </div>
        </section>

        {/* Location */}
        <section style={{ textAlign: 'center' }}>
          <div style={{ backgroundColor: '#0B0B0D', color: '#FFFFFF', borderRadius: '8px', padding: '32px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 500, marginBottom: '16px' }}>
              Based in {siteConfig.location}
            </h2>
            <p style={{ color: '#777777', marginBottom: '24px' }}>
              Founded by {siteConfig.founders}
            </p>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={buttonStyle}
            >
              Chat With Us on WhatsApp
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
