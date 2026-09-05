import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products } from '../data/products'
import { siteConfig } from '../config/site'
import { useCart } from '../context/CartContext'
import { ProductGrid } from '../components/ProductGrid'
import type { Product } from '../data/products'

export const Shop: React.FC = () => {
  const [searchParams] = useSearchParams()
  const categoryParam = searchParams.get('category')
  const searchParam = searchParams.get('search')
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'All')
  const [sortBy, setSortBy] = useState<string>('featured')
  const [searchQuery, setSearchQuery] = useState<string>(searchParam || '')
  const { addToCart } = useCart()

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    }
  }, [categoryParam])

  useEffect(() => {
    if (searchParam) {
      setSearchQuery(searchParam)
    }
  }, [searchParam])

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    addToCart(product, quantity)
  }

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'newest':
        return b.id.localeCompare(a.id)
      default: // featured
        return (a.featured ? -1 : 1) - (b.featured ? -1 : 1)
    }
  })

  const pageStyle = {
    paddingTop: '120px',
    minHeight: '100vh',
    backgroundColor: '#FAF8F9',
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '32px 24px',
  }

  const headerStyle = {
    textAlign: 'center' as const,
    marginBottom: '48px',
  }

  const headingStyle = {
    fontFamily: 'Playfair Display, serif',
    fontSize: '42px',
    fontWeight: 400,
    color: '#0B0B0D',
    marginBottom: '16px',
    letterSpacing: '-0.5px',
  }

  const subtitleStyle = {
    fontSize: '18px',
    color: '#666666',
    fontWeight: 300,
  }

  const filterButtonStyle = {
    padding: '10px 20px',
    borderRadius: '50px',
    fontSize: '14px',
    fontWeight: 400,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  }

  const activeFilterStyle = {
    ...filterButtonStyle,
    backgroundColor: '#0B0B0D',
    color: '#FFFFFF',
  }

  const inactiveFilterStyle = {
    ...filterButtonStyle,
    backgroundColor: '#FFFFFF',
    color: '#0B0B0D',
    border: '1px solid rgba(0, 0, 0, 0.1)',
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 20px',
    borderRadius: '50px',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    fontSize: '14px',
    backgroundColor: '#FFFFFF',
    transition: 'all 0.3s ease',
  }

  const selectStyle = {
    padding: '12px 20px',
    borderRadius: '50px',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    fontSize: '14px',
    backgroundColor: '#FFFFFF',
    transition: 'all 0.3s ease',
  }


  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <h1 style={headingStyle}>Shop All</h1>
          <p style={subtitleStyle}>
            Find something cute, thoughtful and made to be loved.
          </p>
        </div>

        {/* Filters */}
        <div style={{ marginBottom: '32px', gap: '16px', display: 'flex', flexDirection: 'column' }}>
          {/* Category Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            <button
              onClick={() => setSelectedCategory('All')}
              style={selectedCategory === 'All' ? activeFilterStyle : inactiveFilterStyle}
            >
              All
            </button>
            {siteConfig.categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={selectedCategory === category ? activeFilterStyle : inactiveFilterStyle}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search and Sort */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              style={{ ...inputStyle, maxWidth: '256px' }}
            />
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{ ...selectStyle, maxWidth: '192px' }}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        {/* Products */}
        {sortedProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '64px 24px' }}>
            <p style={{ color: '#999999', fontSize: '18px', fontWeight: 300 }}>No little treasures found ✨</p>
          </div>
        ) : (
          <ProductGrid
            products={sortedProducts}
            onAddToCart={handleAddToCart}
          />
        )}

        {/* Results Count */}
        <div style={{ textAlign: 'center', marginTop: '32px', color: '#777777' }}>
          {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'} found
        </div>
      </div>
    </div>
  )
}
