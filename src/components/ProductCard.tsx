import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Eye, Plus, Minus } from 'lucide-react'
import type { Product } from '../data/products'
import { formatPrice } from '../utils/whatsapp'
import { cn } from '../utils/cn'

interface ProductCardProps {
  product: Product
  onAddToCart?: (product: Product, quantity: number) => void
  className?: string
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  className
}) => {
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onAddToCart?.(product, quantity)
  }

  const incrementQuantity = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setQuantity(prev => prev + 1)
  }

  const decrementQuantity = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn(
        'group bg-white rounded-2xl overflow-hidden border border-brand-black/5 hover:border-brand-pink/40 transition-all duration-300 hover:shadow-xl',
        className
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-brand-offwhite">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          onError={(e) => {
            e.currentTarget.src = '/images/placeholder.svg'
          }}
        />

        {product.badge && (
          <span className="absolute top-4 left-4 bg-brand-pink text-white text-xs px-3 py-1.5 rounded-full font-medium">
            {product.badge}
          </span>
        )}

        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={handleAddToCart}
            className="bg-white text-brand-black p-3.5 rounded-full hover:bg-brand-pink hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>
          <span className="bg-white text-brand-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-pink hover:text-white transition-all duration-300 flex items-center gap-2">
            <Eye size={16} />
            View Details
          </span>
        </div>
      </div>

      <div className="p-5">
        <p className="text-xs text-brand-grey mb-1.5 font-medium tracking-wide">{product.category}</p>
        <h3 className="font-serif text-lg font-normal text-brand-black mb-2 group-hover:text-brand-pink transition-colors">
          {product.name}
        </h3>
        <p className="text-brand-black font-medium mb-3">{formatPrice(product.price)}</p>

        <div className="flex items-center gap-2">
          <div className="flex items-center border border-brand-black/10 rounded-full">
            <button
              onClick={decrementQuantity}
              className="p-2 hover:bg-brand-pink/10 transition-colors rounded-l-full"
              disabled={quantity <= 1}
            >
              <Minus size={14} />
            </button>
            <span className="px-3 text-sm font-medium min-w-[32px] text-center">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="p-2 hover:bg-brand-pink/10 transition-colors rounded-r-full"
            >
              <Plus size={14} />
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-brand-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-brand-pink transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart size={14} />
            Add
          </button>
        </div>
      </div>
    </Link>
  )
}
