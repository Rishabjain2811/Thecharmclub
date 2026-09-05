import React from 'react'
import { X, Plus, Minus, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatPrice, orderCartOnWhatsApp } from '../utils/whatsapp'
import { assetPath } from '../utils/assetPath'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, getCartTotal } = useCart()

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleWhatsAppOrder = () => {
    orderCartOnWhatsApp(cart)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-serif text-xl">Your Cart</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-brand-pink/10 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-brand-grey mb-4">Your cart is feeling a little empty ✨</p>
              <p className="text-brand-grey text-sm">Let's find something cute for you.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.product.id} className="flex gap-4 p-4 bg-brand-offwhite rounded-lg">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded"
                    onError={(e) => {
                      e.currentTarget.src = assetPath('/images/placeholder.svg')
                    }}
                  />
                  
                  <div className="flex-1">
                    <h4 className="font-medium text-brand-black text-sm mb-1">
                      {item.product.name}
                    </h4>
                    <p className="text-brand-pink font-semibold text-sm mb-2">
                      {formatPrice(item.product.price)}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decreaseQuantity(item.product.id)}
                          className="w-6 h-6 flex items-center justify-center bg-white border border-brand-black/20 rounded hover:bg-brand-pink/10 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.product.id)}
                          className="w-6 h-6 flex items-center justify-center bg-white border border-brand-black/20 rounded hover:bg-brand-pink/10 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-1 hover:bg-red-100 rounded transition-colors text-red-500"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-brand-grey">Subtotal</span>
              <span className="font-semibold text-lg">{formatPrice(getCartTotal())}</span>
            </div>
            
            <button
              onClick={handleWhatsAppOrder}
              className="w-full bg-brand-pink text-white py-3 rounded-lg font-medium hover:bg-brand-black transition-colors flex items-center justify-center gap-2"
            >
              Send Order on WhatsApp
            </button>
            
            <button
              onClick={onClose}
              className="w-full border-2 border-brand-black text-brand-black py-3 rounded-lg font-medium hover:bg-brand-black hover:text-white transition-colors"
            >
              View Cart
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
