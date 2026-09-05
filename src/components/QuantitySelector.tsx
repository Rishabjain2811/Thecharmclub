import React from 'react'
import { Minus, Plus } from 'lucide-react'
import { cn } from '../utils/cn'

interface QuantitySelectorProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
  min?: number
  max?: number
  className?: string
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
  max,
  className
}) => {
  const canDecrease = quantity > min
  const canIncrease = max === undefined || quantity < max

  return (
    <div className={cn('flex items-center border border-brand-black/20 rounded-lg overflow-hidden', className)}>
      <button
        onClick={onDecrease}
        disabled={!canDecrease}
        className="w-10 h-10 flex items-center justify-center hover:bg-brand-pink/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus size={16} />
      </button>
      <span className="w-12 text-center font-medium">{quantity}</span>
      <button
        onClick={onIncrease}
        disabled={!canIncrease}
        className="w-10 h-10 flex items-center justify-center hover:bg-brand-pink/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        aria-label="Increase quantity"
      >
        <Plus size={16} />
      </button>
    </div>
  )
}
