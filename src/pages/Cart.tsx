import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatPrice, orderCartOnWhatsApp } from '../utils/whatsapp'

export const Cart: React.FC = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, getCartTotal } = useCart()

  const handleWhatsAppOrder = () => {
    orderCartOnWhatsApp(cart)
  }

  if (cart.length === 0) {
    return (
      <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#FAF8F9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', maxWidth: '400px' }}>
          <ShoppingBag size={64} style={{ color: '#777777', marginBottom: '16px' }} />
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#0B0B0D', marginBottom: '16px' }}>
            Your cart is feeling a little empty ✨
          </h1>
          <p style={{ color: '#777777', marginBottom: '32px' }}>
            Let's find something cute for you.
          </p>
          <Link to="/shop">
            <button style={{ backgroundColor: '#0B0B0D', color: '#FFFFFF', padding: '12px 32px', borderRadius: '9999px', border: 'none', cursor: 'pointer' }}>
              Explore Products
            </button>
          </Link>
        </div>
      </div>
    )
  }

  const pageStyle = {
    paddingTop: '80px',
    minHeight: '100vh',
    backgroundColor: '#FAF8F9',
  }

  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '32px 16px',
  }

  const headingStyle = {
    fontFamily: 'Playfair Display, serif',
    fontSize: '36px',
    fontWeight: 500,
    color: '#0B0B0D',
    marginBottom: '32px',
  }

  const cardStyle = {
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    padding: '24px',
    marginBottom: '16px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  }

  const buttonStyle = {
    backgroundColor: '#E8A7D8',
    color: '#FFFFFF',
    padding: '12px 32px',
    borderRadius: '9999px',
    fontWeight: 500,
    border: 'none',
    cursor: 'pointer',
    width: '100%',
  }

  const secondaryButtonStyle = {
    backgroundColor: 'transparent',
    color: '#0B0B0D',
    padding: '12px 32px',
    borderRadius: '9999px',
    fontWeight: 500,
    border: '2px solid #0B0B0D',
    cursor: 'pointer',
    width: '100%',
  }

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <div style={{ marginBottom: '32px' }}>
          <Link to="/shop" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#777777', textDecoration: 'none', marginBottom: '16px' }}>
            <ArrowLeft size={20} />
            Continue Shopping
          </Link>
          <h1 style={headingStyle}>Your Cart</h1>
        </div>

        <div style={{ marginBottom: '32px' }}>
          {cart.map((item) => (
            <div key={item.product.id} style={cardStyle}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ 
                  width: '96px', 
                  height: '96px', 
                  backgroundColor: '#E8A7D8',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontSize: '12px'
                }}>
                  Image
                </div>
                
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flexStart', marginBottom: '8px' }}>
                    <div>
                      <h3 style={{ fontWeight: 500, color: '#0B0B0D' }}>{item.product.name}</h3>
                      <p style={{ fontSize: '14px', color: '#777777' }}>{item.product.category}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      style={{ padding: '8px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: '#ef4444' }}
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flexEnd' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button
                        onClick={() => decreaseQuantity(item.product.id)}
                        style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FAF8F9', border: '1px solid rgba(0,0,0,0.2)', borderRadius: '4px', cursor: 'pointer' }}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span style={{ width: '32px', textAlign: 'center', fontWeight: 500 }}>{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.product.id)}
                        style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FAF8F9', border: '1px solid rgba(0,0,0,0.2)', borderRadius: '4px', cursor: 'pointer' }}
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ fontWeight: 600, color: '#0B0B0D' }}>
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                      <p style={{ fontSize: '14px', color: '#777777' }}>
                        {formatPrice(item.product.price)} each
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '18px', marginBottom: '16px' }}>
            <span style={{ color: '#777777' }}>Subtotal</span>
            <span style={{ fontWeight: 600, color: '#0B0B0D' }}>
              {formatPrice(getCartTotal())}
            </span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '18px', marginBottom: '24px' }}>
            <span style={{ color: '#777777' }}>Total Items</span>
            <span style={{ fontWeight: 600, color: '#0B0B0D' }}>
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
          </div>

          <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              onClick={handleWhatsAppOrder}
              style={buttonStyle}
            >
              Send Order on WhatsApp
            </button>
            
            <Link to="/shop">
              <button style={secondaryButtonStyle}>
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
