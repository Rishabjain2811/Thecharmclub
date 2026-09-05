import React, { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { searchProducts } from '../data/products'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/whatsapp'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(searchProducts(''))

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setResults([])
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    if (query.trim()) {
      setResults(searchProducts(query))
    } else {
      setResults([])
    }
  }, [query])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center gap-4 p-4 border-b">
          <Search size={20} className="text-brand-grey" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for charms, keychains, bouquets..."
            className="flex-1 text-lg outline-none placeholder:text-brand-grey"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-2 hover:bg-brand-pink/10 rounded-full transition-colors"
            aria-label="Close search"
          >
            <X size={20} />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {query.trim() === '' ? (
            <div className="p-8 text-center">
              <p className="text-brand-grey">Start typing to search...</p>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-brand-grey">No little treasures found ✨</p>
            </div>
          ) : (
            <div className="divide-y">
              {results.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  onClick={onClose}
                  className="flex items-center gap-4 p-4 hover:bg-brand-pink/5 transition-colors"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                    onError={(e) => {
                      e.currentTarget.src = '/images/placeholder.svg'
                    }}
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-brand-black">{product.name}</h4>
                    <p className="text-sm text-brand-grey">{product.category}</p>
                  </div>
                  <span className="font-semibold text-brand-black">
                    {formatPrice(product.price)}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
