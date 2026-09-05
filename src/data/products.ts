export interface Product {
  id: string
  name: string
  category: string
  price: number
  description: string
  image: string
  images?: string[]
  featured?: boolean
  badge?: string
  availability?: string
  options?: string[]
}

export const products: Product[] = [
  {
    id: "pink-pearl-phone-charm",
    name: "Pink Pearl Phone Charm",
    category: "Phone Charms",
    price: 299,
    description: "A delicate pastel pink pearl charm that adds a touch of elegance to your phone. Perfect for everyday use.",
    image: "/images/products/pink-pearl-phone-charm.jpg",
    images: ["/images/products/pink-pearl-phone-charm.jpg"],
    featured: true,
    badge: "Best Seller",
    availability: "In Stock"
  },
  {
    id: "cherry-phone-charm",
    name: "Cherry Phone Charm",
    category: "Phone Charms",
    price: 249,
    description: "Cute cherry charm with vibrant red details. A playful addition to your phone accessories.",
    image: "/images/products/cherry-phone-charm.jpg",
    images: ["/images/products/cherry-phone-charm.jpg"],
    featured: true,
    badge: "Popular",
    availability: "In Stock"
  },
  {
    id: "custom-name-keychain",
    name: "Custom Name Keychain",
    category: "Key Chains",
    price: 199,
    description: "Personalized keychain with your name or initials. Makes for a thoughtful gift.",
    image: "/images/products/custom-name-keychain.jpg",
    images: ["/images/products/custom-name-keychain.jpg"],
    featured: true,
    badge: "Customizable",
    availability: "In Stock"
  },
  {
    id: "mini-floral-bouquet",
    name: "Mini Floral Bouquet",
    category: "Bouquets",
    price: 499,
    description: "A charming mini bouquet with delicate flowers. Perfect for small gestures and special moments.",
    image: "/images/products/mini-floral-bouquet.jpg",
    images: ["/images/products/mini-floral-bouquet.jpg"],
    featured: true,
    badge: "New",
    availability: "In Stock"
  },
  {
    id: "pink-dream-hamper",
    name: "Pink Dream Hamper",
    category: "Gift Hampers",
    price: 999,
    description: "A curated hamper filled with pink-themed aesthetic goodies. Perfect for gifting.",
    image: "/images/products/pink-dream-hamper.jpg",
    images: ["/images/products/pink-dream-hamper.jpg"],
    featured: true,
    badge: "Best Seller",
    availability: "In Stock"
  },
  {
    id: "cute-bow-keychain",
    name: "Cute Bow Keychain",
    category: "Key Chains",
    price: 249,
    description: "Adorable bow-shaped keychain in soft pastel colors. Adds a cute touch to your keys.",
    image: "/images/products/cute-bow-keychain.jpg",
    images: ["/images/products/cute-bow-keychain.jpg"],
    featured: true,
    badge: "Popular",
    availability: "In Stock"
  },
  {
    id: "star-phone-charm",
    name: "Star Phone Charm",
    category: "Phone Charms",
    price: 279,
    description: "Twinkling star charm that catches the light. A celestial touch for your phone.",
    image: "/images/products/star-phone-charm.jpg",
    images: ["/images/products/star-phone-charm.jpg"],
    featured: false,
    availability: "In Stock"
  },
  {
    id: "heart-keychain",
    name: "Heart Keychain",
    category: "Key Chains",
    price: 179,
    description: "Sweet heart-shaped keychain. Simple, elegant, and full of love.",
    image: "/images/products/heart-keychain.jpg",
    images: ["/images/products/heart-keychain.jpg"],
    featured: false,
    availability: "In Stock"
  },
  {
    id: "rose-bouquet",
    name: "Rose Bouquet",
    category: "Bouquets",
    price: 599,
    description: "Beautiful rose bouquet with soft pink blooms. A classic romantic gesture.",
    image: "/images/products/rose-bouquet.jpg",
    images: ["/images/products/rose-bouquet.jpg"],
    featured: false,
    badge: "Popular",
    availability: "In Stock"
  },
  {
    id: "birthday-hamper",
    name: "Birthday Hamper",
    category: "Gift Hampers",
    price: 1299,
    description: "Special birthday hamper with curated treats and decorations. Make their day extra special.",
    image: "/images/products/birthday-hamper.jpg",
    images: ["/images/products/birthday-hamper.jpg"],
    featured: false,
    badge: "New",
    availability: "In Stock"
  },
  {
    id: "custom-photo-keychain",
    name: "Custom Photo Keychain",
    category: "Custom Gifts",
    price: 349,
    description: "Personalized keychain with your favorite photo. Keep your memories close.",
    image: "/images/products/custom-photo-keychain.jpg",
    images: ["/images/products/custom-photo-keychain.jpg"],
    featured: false,
    badge: "Customizable",
    availability: "In Stock"
  },
  {
    id: "mixed-flower-bouquet",
    name: "Mixed Flower Bouquet",
    category: "Bouquets",
    price: 699,
    description: "A vibrant mix of flowers in soft pastel shades. Perfect for any occasion.",
    image: "/images/products/mixed-flower-bouquet.jpg",
    images: ["/images/products/mixed-flower-bouquet.jpg"],
    featured: false,
    availability: "In Stock"
  }
]

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id)
}

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category)
}

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured)
}

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase()
  return products.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.category.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery)
  )
}
