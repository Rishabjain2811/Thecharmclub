import React, { useState, useEffect } from 'react'
import { ProductCard } from './ProductCard'
import type { Product } from '../data/products'

interface ProductGridProps {
  products: Product[]
  onAddToCart?: (product: Product) => void
  className?: string
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onAddToCart,
  className
}) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (products.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: isMobile ? '48px 20px' : '64px 24px' }}>
        <p style={{ color: '#999999', fontSize: isMobile ? '16px' : '18px', fontWeight: 300 }}>No little treasures found ✨</p>
      </div>
    )
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: isMobile ? '24px' : '32px'
    }} className={className}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}
