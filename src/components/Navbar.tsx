import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X, Sparkles } from 'lucide-react'
import { siteConfig } from '../config/site'
import { useCart } from '../context/CartContext'
import { SearchModal } from './SearchModal'
import { searchProducts } from '../data/products'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { getCartCount } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const cartCount = getCartCount()

  const suggestions = searchQuery.length > 0 ? searchProducts(searchQuery).slice(0, 5) : []

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setShowSuggestions(e.target.value.length > 0)
  }

  const handleSuggestionClick = (productId: string) => {
    navigate(`/product/${productId}`)
    setSearchQuery('')
    setShowSuggestions(false)
  }

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
      setShowSuggestions(false)
    }
  }

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ]

  const navbarStyle = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 40,
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.85)',
    backdropFilter: isScrolled ? 'blur(12px)' : 'blur(8px)',
    boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none',
    transition: 'all 0.4s ease',
  }

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: isMobile ? '0 12px' : '0 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: isMobile ? '64px' : '80px',
  }

  const linkStyle = {
    color: '#0B0B0D',
    textDecoration: 'none' as const,
    fontSize: '15px',
    fontWeight: 400,
    padding: '10px 20px',
    borderRadius: '24px',
    transition: 'all 0.3s ease',
  }

  const activeLinkStyle = {
    ...linkStyle,
    color: '#E8A7D8',
    backgroundColor: 'rgba(232, 167, 216, 0.1)',
  }

  const buttonStyle = {
    padding: '8px',
    borderRadius: '9999px',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'backgroundColor 0.2s',
  }

  const cartButtonStyle = {
    ...buttonStyle,
    position: 'relative' as const,
  }

  const cartBadgeStyle = {
    position: 'absolute' as const,
    top: '-4px',
    right: '-4px',
    backgroundColor: '#E8A7D8',
    color: '#FFFFFF',
    fontSize: '12px',
    width: '20px',
    height: '20px',
    borderRadius: '9999px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const whatsappButtonStyle = {
    backgroundColor: '#E8A7D8',
    color: '#FFFFFF',
    padding: '8px 16px',
    borderRadius: '9999px',
    fontWeight: 500,
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    textDecoration: 'none' as const,
  }

  return (
    <>
      <nav style={navbarStyle}>
        <div style={containerStyle}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '6px' : '12px' }}>
              <img
                src="/tcc.logo.png"
                alt={siteConfig.name}
                style={{ 
                  width: isMobile ? '36px' : '48px', 
                  height: isMobile ? '36px' : '48px', 
                  objectFit: 'contain'
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <span style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: isMobile ? '14px' : '20px',
                fontWeight: 600,
                color: '#0B0B0D',
                whiteSpace: 'nowrap'
              }}>
                The Charm Club
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '4px' : '32px' }}>
            {!isMobile && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    style={location.pathname === link.path ? activeLinkStyle : linkStyle}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Desktop Search Bar */}
                <div style={{ position: 'relative' }}>
                  <Search
                    size={16}
                    style={{
                      position: 'absolute',
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#999999',
                      zIndex: showSuggestions ? 10 : 1,
                    }}
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSearchSubmit()
                      }
                    }}
                    onFocus={() => setShowSuggestions(searchQuery.length > 0)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    placeholder="Search..."
                    style={{
                      width: '200px',
                      padding: '8px 12px 8px 36px',
                      borderRadius: '24px',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      fontSize: '14px',
                      backgroundColor: '#FFFFFF',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                    }}
                  />
                  
                  {/* Search Suggestions Dropdown */}
                  {showSuggestions && suggestions.length > 0 && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      right: 0,
                      marginTop: '8px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '12px',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                      zIndex: 100,
                      maxHeight: '300px',
                      overflowY: 'auto',
                    }}>
                      {suggestions.map((product) => (
                        <div
                          key={product.id}
                          onClick={() => handleSuggestionClick(product.id)}
                          style={{
                            padding: '12px 16px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                            transition: 'background-color 0.2s ease',
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(232, 167, 216, 0.1)'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '8px',
                              objectFit: 'cover',
                            }}
                            onError={(e) => {
                              e.currentTarget.style.display = 'none'
                            }}
                          />
                          <div style={{ flex: 1 }}>
                            <p style={{
                              fontSize: '14px',
                              fontWeight: 500,
                              color: '#0B0B0D',
                              margin: 0,
                            }}>
                              {product.name}
                            </p>
                            <p style={{
                              fontSize: '12px',
                              color: '#666666',
                              margin: '2px 0 0 0',
                            }}>
                              {product.category}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '4px' : '16px' }}>
              <button
                onClick={() => setIsSearchOpen(true)}
                style={buttonStyle}
                aria-label="Search"
              >
                <Search size={20} />
              </button>

              <Link to="/cart" style={cartButtonStyle} aria-label="Cart">
                <ShoppingBag size={20} />
                {cartCount > 0 && <span style={cartBadgeStyle}>{cartCount}</span>}
              </Link>

              {!isMobile && (
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={whatsappButtonStyle}
                >
                  <Sparkles size={16} />
                  Order on WhatsApp
                </a>
              )}

              {/* Mobile Menu Button */}
              {isMobile && (
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  style={buttonStyle}
                  aria-label="Toggle menu"
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-navigation"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 50,
          backgroundColor: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column'
        }} id="mobile-navigation">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
            <img
              src="/tcc.logo.png"
              alt={siteConfig.name}
              style={{ 
                width: '40px', 
                height: '40px', 
                objectFit: 'contain'
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              style={buttonStyle}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '16px', gap: '8px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  ...linkStyle,
                  fontSize: '18px',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(0,0,0,0.1)',
                }}
              >
                {link.label}
              </Link>
            ))}
            
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...linkStyle, fontSize: '18px', padding: '12px 0', color: '#E8A7D8', borderBottom: '1px solid rgba(0,0,0,0.1)' }}
            >
              <Sparkles size={20} style={{ marginRight: '8px' }} />
              Order on WhatsApp
            </a>
          </div>
        </div>
      )}

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
