import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '../utils/cn'
import { assetPath } from '../utils/assetPath'

interface CategoryCardProps {
  name: string
  description: string
  image: string
  className?: string
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  description,
  image,
  className
}) => {
  return (
    <Link
      to={`/shop?category=${encodeURIComponent(name)}`}
      className={cn(
        'group relative aspect-[4/5] overflow-hidden rounded-lg bg-brand-offwhite',
        className
      )}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        onError={(e) => {
          e.currentTarget.src = assetPath('/images/placeholder.svg')
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="font-serif text-2xl font-medium mb-2">{name}</h3>
        <p className="text-sm text-white/80 mb-4">{description}</p>
        <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
          Shop
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  )
}
