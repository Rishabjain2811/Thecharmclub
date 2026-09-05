import React from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, MapPin, Phone } from 'lucide-react'
import { siteConfig } from '../config/site'
import { assetPath } from '../utils/assetPath'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerStyle = {
    backgroundColor: '#0B0B0D',
    color: '#FFFFFF',
    padding: '64px 16px',
    borderTopLeftRadius: '32px',
    borderTopRightRadius: '32px',
  }

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '48px',
    marginBottom: '32px',
  }

  const headingStyle = {
    fontFamily: 'Playfair Display, serif',
    fontSize: '20px',
    fontWeight: 500,
    marginBottom: '20px',
    letterSpacing: '0.5px',
  }

  const linkStyle = {
    color: '#999999',
    textDecoration: 'none' as const,
    fontSize: '15px',
    display: 'block',
    marginBottom: '12px',
    transition: 'color 0.3s ease',
  }


  const dividerStyle = {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    margin: '32px 0',
    paddingTop: '32px',
    textAlign: 'center' as const,
  }

  const copyrightStyle = {
    color: '#777777',
    fontSize: '14px',
  }

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={gridStyle}>
          {/* Brand */}
          <div>
            <img
              src={assetPath('/tcc.logo.png')}
              alt={siteConfig.name}
              style={{ 
                width: '64px', 
                height: '64px', 
                objectFit: 'contain',
                marginBottom: '16px'
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <p style={{ color: '#777777', fontSize: '14px', marginBottom: '8px' }}>
              {siteConfig.displayName}
            </p>
            <p style={{ color: '#777777', fontSize: '14px' }}>
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={headingStyle}>Quick Links</h3>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/shop" style={linkStyle}>Shop</Link>
            <Link to="/about" style={linkStyle}>About Us</Link>
            <Link to="/contact" style={linkStyle}>Contact</Link>
          </div>

          {/* Contact */}
          <div>
            <h3 style={headingStyle}>Get in Touch</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <MapPin size={18} style={{ flexShrink: 0, color: '#E8A7D8' }} />
              <span style={{ color: '#999999', fontSize: '15px' }}>{siteConfig.location}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <Phone size={18} style={{ flexShrink: 0, color: '#E8A7D8' }} />
              <span style={{ color: '#999999', fontSize: '15px' }}>{siteConfig.phone}</span>
            </div>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#999999', fontSize: '15px', textDecoration: 'none' }}
            >
              <MessageCircle size={18} style={{ flexShrink: 0, color: '#E8A7D8' }} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div style={dividerStyle}>
          <p style={copyrightStyle}>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
