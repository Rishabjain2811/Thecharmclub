import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '../config/site'
import { getFeaturedProducts } from '../data/products'
import type { Product } from '../data/products'
import { ProductGrid } from '../components/ProductGrid'
import { useCart } from '../context/CartContext'

export const Home: React.FC = () => {
  const { addToCart } = useCart()
  const featuredProducts = getFeaturedProducts()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    addToCart(product, quantity)
  }

  const styles = {
    heroSection: {
      paddingTop: isMobile ? '70px' : '120px',
      paddingBottom: isMobile ? '30px' : '80px',
      backgroundColor: '#FAF8F9',
      position: 'relative' as const,
      overflow: 'hidden' as const,
    },
    container: {
      maxWidth: isMobile ? '100%' : '1200px',
      margin: '0 auto',
      padding: isMobile ? '0 16px' : '0 24px',
    },
    heading: {
      fontFamily: 'Playfair Display, serif',
      fontSize: isMobile ? '24px' : '56px',
      fontWeight: 400,
      color: '#0B0B0D',
      marginBottom: isMobile ? '10px' : '20px',
      lineHeight: 1.2,
      letterSpacing: isMobile ? '0px' : '-0.5px',
    },
    subtitle: {
      fontSize: isMobile ? '13px' : '18px',
      color: '#666666',
      marginBottom: isMobile ? '16px' : '32px',
      lineHeight: 1.5,
      fontWeight: 300,
    },
    button: {
      backgroundColor: '#0B0B0D',
      color: '#FFFFFF',
      padding: isMobile ? '12px 28px' : '14px 36px',
      borderRadius: '50px',
      fontWeight: 400,
      border: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      textDecoration: 'none' as const,
      transition: 'all 0.3s ease',
      fontSize: isMobile ? '14px' : '16px',
    },
    buttonPink: {
      backgroundColor: '#E8A7D8',
      color: '#FFFFFF',
      padding: isMobile ? '12px 28px' : '14px 36px',
      borderRadius: '50px',
      fontWeight: 400,
      border: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'all 0.3s ease',
      fontSize: isMobile ? '14px' : '16px',
    },
  }

  return (
    <div style={{ backgroundColor: '#FAF8F9', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.container}>
          <div style={{ display: isMobile ? 'flex' : 'grid', flexDirection: isMobile ? 'column' : 'row', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '24px' : '64px', alignItems: isMobile ? 'start' : 'center', width: '100%' }}>
            {/* Video - show first on mobile */}
            {isMobile && (
              <div style={{ position: 'relative', marginBottom: '24px', marginTop: '16px', width: '100%' }}>
                <div style={{
                  position: 'absolute',
                  top: '-5px',
                  right: '-5px',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#E8A7D8',
                  borderRadius: '16px',
                  opacity: 0.2,
                  filter: 'blur(15px)',
                }} />
                <div style={{
                  width: '100%',
                  height: '200px',
                  borderRadius: '12px',
                  position: 'relative',
                  zIndex: 1,
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                }}>
                  <video
                    src="/reel.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '12px',
                    }}
                  />
                </div>
              </div>
            )}

            <div style={{ width: '100%' }}>
              <h1 style={{
                ...styles.heading,
                fontFamily: 'Playfair Display, serif',
                fontWeight: 300,
                letterSpacing: isMobile ? '0px' : '1px',
                fontSize: isMobile ? '24px' : '52px',
                textAlign: isMobile ? 'center' : 'left',
              }}>
                Little Charms. Big Smiles.
              </h1>
              <p style={{
                ...styles.subtitle,
                textAlign: isMobile ? 'center' : 'left',
              }}>
                Cute, thoughtful & aesthetic gifts made to make every moment a little more special.
              </p>
              <div style={{ display: 'flex', gap: isMobile ? '8px' : '16px', flexWrap: 'wrap', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                <Link to="/shop" style={styles.button}>
                  Shop Now
                  <ArrowRight size={isMobile ? 16 : 18} />
                </Link>
              </div>
            </div>

            {/* Video - show second on desktop */}
            {!isMobile && (
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#E8A7D8',
                  borderRadius: '40px',
                  opacity: 0.2,
                  filter: 'blur(40px)',
                }} />
                <div style={{
                  width: '100%',
                  height: '500px',
                  borderRadius: '32px',
                  position: 'relative',
                  zIndex: 1,
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                }}>
                  <video
                    src="/reel.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '32px',
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '0 16px' : '0 24px',
      }}>
        <div style={{
          height: '1px',
          backgroundColor: 'rgba(0, 0, 0, 0.08)',
          margin: isMobile ? '0' : '0',
        }} />
      </div>

      {/* Featured Products Section */}
      <section style={{ padding: isMobile ? '40px 20px' : '80px 24px', backgroundColor: '#FAF8F9' }}>
        <div style={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '32px' : '64px' }}>
            <h2 style={{ ...styles.heading, fontSize: isMobile ? '28px' : '42px', marginBottom: '12px' }}>
              Best Sellers
            </h2>
            <p style={{ ...styles.subtitle, fontSize: isMobile ? '14px' : '16px' }}>
              Our most loved little treasures.
            </p>
          </div>

          <ProductGrid
            products={featuredProducts}
            onAddToCart={handleAddToCart}
          />

          <div style={{ textAlign: 'center', marginTop: isMobile ? '32px' : '64px' }}>
            <Link to="/shop" style={{
              border: '1.5px solid #0B0B0D',
              color: '#0B0B0D',
              padding: isMobile ? '12px 28px' : '14px 36px',
              borderRadius: '50px',
              fontWeight: 400,
              backgroundColor: 'transparent',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              fontSize: isMobile ? '14px' : '16px',
            }}>
              View All Products
              <ArrowRight size={isMobile ? 16 : 18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section style={{ padding: isMobile ? '40px 20px' : '80px 24px', backgroundColor: '#FFFFFF' }}>
        <div style={styles.container}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...styles.heading, fontSize: isMobile ? '28px' : '38px', marginBottom: '8px' }}>
              Follow Our Journey ✨
            </h2>
            <p style={{ ...styles.subtitle, fontSize: isMobile ? '14px' : '16px', marginBottom: isMobile ? '20px' : '32px' }}>
              @{siteConfig.instagram}
            </p>
            {siteConfig.instagramUrl ? (
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...styles.buttonPink, textDecoration: 'none' }}
              >
                Follow Us
                <ArrowRight size={isMobile ? 16 : 18} />
              </a>
            ) : (
              <button style={{ ...styles.buttonPink, opacity: 0.5, cursor: 'not-allowed' }}>
                Follow Us
                <ArrowRight size={isMobile ? 16 : 18} />
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
