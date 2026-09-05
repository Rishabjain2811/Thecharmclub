import React, { useState } from 'react'
import { MapPin, Phone, MessageCircle, Send } from 'lucide-react'
import { siteConfig } from '../config/site'
import { sendEnquiryOnWhatsApp } from '../utils/whatsapp'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      sendEnquiryOnWhatsApp(
        formData.name,
        formData.phone,
        formData.email,
        formData.message
      )
    }
  }

  const pageStyle = {
    paddingTop: '80px',
    minHeight: '100vh',
    backgroundColor: '#FAF8F9',
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '48px 16px',
  }

  const headingStyle = {
    fontFamily: 'Playfair Display, serif',
    fontSize: '48px',
    fontWeight: 500,
    color: '#0B0B0D',
    marginBottom: '16px',
  }

  const cardStyle = {
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    padding: '32px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: errors.name ? '1px solid #ef4444' : '1px solid rgba(0, 0, 0, 0.2)',
    fontSize: '14px',
  }

  const buttonStyle = {
    backgroundColor: '#0B0B0D',
    color: '#FFFFFF',
    padding: '12px 32px',
    borderRadius: '9999px',
    fontWeight: 500,
    border: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    width: '100%',
  }

  const whatsappButtonStyle = {
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
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={headingStyle}>
            Let's Create Something Special ✨
          </h1>
          <p style={{ fontSize: '18px', color: '#777777' }}>
            Have a question or want to place a custom order? We'd love to hear from you!
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 500, color: '#0B0B0D', marginBottom: '24px' }}>
                Get in Touch
              </h2>
              <p style={{ color: '#777777', marginBottom: '24px' }}>
                {siteConfig.displayName}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'flexStart', gap: '16px' }}>
                <div style={{ padding: '12px', backgroundColor: 'rgba(232, 167, 216, 0.1)', borderRadius: '9999px' }}>
                  <MapPin style={{ color: '#E8A7D8' }} size={20} />
                </div>
                <div>
                  <h3 style={{ fontWeight: 500, color: '#0B0B0D', marginBottom: '4px' }}>Location</h3>
                  <p style={{ color: '#777777' }}>{siteConfig.location}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flexStart', gap: '16px' }}>
                <div style={{ padding: '12px', backgroundColor: 'rgba(232, 167, 216, 0.1)', borderRadius: '9999px' }}>
                  <Phone style={{ color: '#E8A7D8' }} size={20} />
                </div>
                <div>
                  <h3 style={{ fontWeight: 500, color: '#0B0B0D', marginBottom: '4px' }}>Phone / WhatsApp</h3>
                  <p style={{ color: '#777777' }}>{siteConfig.phone}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flexStart', gap: '16px' }}>
                <div style={{ padding: '12px', backgroundColor: 'rgba(232, 167, 216, 0.1)', borderRadius: '9999px' }}>
                  <MessageCircle style={{ color: '#E8A7D8' }} size={20} />
                </div>
                <div>
                  <h3 style={{ fontWeight: 500, color: '#0B0B0D', marginBottom: '4px' }}>WhatsApp</h3>
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#E8A7D8', textDecoration: 'none' }}
                  >
                    Chat with us
                  </a>
                </div>
              </div>
            </div>

            <div style={cardStyle}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 500, marginBottom: '16px' }}>
                Quick Response
              </h3>
              <p style={{ color: '#777777', fontSize: '14px', marginBottom: '24px' }}>
                For the fastest response, reach out to us directly on WhatsApp. We typically respond within a few hours during business hours.
              </p>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={whatsappButtonStyle}
              >
                <MessageCircle size={20} />
                Chat With Us on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div style={cardStyle}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 500, color: '#0B0B0D', marginBottom: '24px' }}>
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#0B0B0D', marginBottom: '8px' }}>
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={inputStyle}
                  placeholder="Your name"
                />
                {errors.name && <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '4px' }}>{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="phone" style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#0B0B0D', marginBottom: '8px' }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={inputStyle}
                  placeholder="Your phone number"
                />
                {errors.phone && <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '4px' }}>{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="email" style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#0B0B0D', marginBottom: '8px' }}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={inputStyle}
                  placeholder="your@email.com"
                />
                {errors.email && <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '4px' }}>{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#0B0B0D', marginBottom: '8px' }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  style={{ ...inputStyle, resize: 'none' }}
                  placeholder="Tell us about your enquiry or custom order..."
                />
                {errors.message && <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '4px' }}>{errors.message}</p>}
              </div>

              <button
                type="submit"
                style={buttonStyle}
              >
                <Send size={20} />
                Send Enquiry
              </button>

              <p style={{ fontSize: '14px', color: '#777777', textAlign: 'center' }}>
                This will open WhatsApp with your enquiry message
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
