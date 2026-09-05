import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getProductById } from '../data/products'
import { formatPrice, orderProductOnWhatsApp } from '../utils/whatsapp'
import { useCart } from '../context/CartContext'

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const product = getProductById(id || '')
  const [quantity, setQuantity] = React.useState(1)
  const { addToCart } = useCart()

  if (!product) {
    return (
      <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#FAF8F9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#0B0B0D', marginBottom: '16px' }}>Product not found</h1>
          <Link to="/shop">
            <button style={{ backgroundColor: '#0B0B0D', color: '#FFFFFF', padding: '12px 24px', borderRadius: '9999px', border: 'none', cursor: 'pointer' }}>
              Back to Shop
            </button>
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  const handleWhatsAppOrder = () => {
    orderProductOnWhatsApp(product, quantity)
  }

  const pageStyle = {
    paddingTop: '80px',
    minHeight: '100vh',
    backgroundColor: '#FAF8F9',
  }

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '32px 16px',
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '48px',
  }


  const headingStyle = {
    fontFamily: 'Playfair Display, serif',
    fontSize: '36px',
    fontWeight: 500,
    color: '#0B0B0D',
    marginBottom: '8px',
  }

  const priceStyle = {
    fontSize: '24px',
    fontWeight: 600,
    color: '#E8A7D8',
    marginBottom: '16px',
  }

  const descriptionStyle = {
    color: '#777777',
    lineHeight: 1.6,
    marginBottom: '24px',
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
    marginRight: '16px',
  }

  const buttonPinkStyle = {
    backgroundColor: '#E8A7D8',
    color: '#FFFFFF',
    padding: '12px 32px',
    borderRadius: '9999px',
    fontWeight: 500,
    border: 'none',
    cursor: 'pointer',
  }

  const quantityStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '24px',
  }

  const quantityButtonStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
    fontSize: '18px',
  }

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <Link to="/shop" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#777777', textDecoration: 'none', marginBottom: '24px' }}>
          <ArrowLeft size={20} />
          Back to Shop
        </Link>

        <div style={gridStyle}>
          <div style={{ aspectRatio: '1', backgroundColor: '#E8A7D8', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontSize: '24px' }}>
            Product Image
          </div>

          <div>
            <p style={{ fontSize: '14px', color: '#777777', marginBottom: '8px' }}>{product.category}</p>
            <h1 style={headingStyle}>{product.name}</h1>
            <p style={priceStyle}>{formatPrice(product.price)}</p>

            {product.badge && (
              <span style={{ display: 'inline-block', backgroundColor: '#E8A7D8', color: '#FFFFFF', fontSize: '14px', padding: '4px 12px', borderRadius: '9999px', marginBottom: '16px' }}>
                {product.badge}
              </span>
            )}

            <p style={descriptionStyle}>{product.description}</p>

            {product.availability && (
              <p style={{ fontSize: '14px', color: '#0B0B0D', marginBottom: '24px' }}>
                <span style={{ fontWeight: 500 }}>Availability:</span> {product.availability}
              </p>
            )}

            <div style={quantityStyle}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#0B0B0D', marginBottom: '8px' }}>
                Quantity
              </label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button style={quantityButtonStyle} onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span style={{ fontSize: '18px', fontWeight: 500, minWidth: '40px', textAlign: 'center' }}>{quantity}</span>
                <button style={quantityButtonStyle} onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button style={buttonStyle} onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button style={buttonPinkStyle} onClick={handleWhatsAppOrder}>
                Order on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
