import { siteConfig } from '../config/site'
import type { Product } from '../data/products'
import type { CartItem } from '../types'

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat(siteConfig.locale, {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

export const generateWhatsAppProductMessage = (product: Product, quantity: number = 1): string => {
  const total = product.price * quantity
  const message = `Hi ${siteConfig.name}! 💗

I'd like to order:

Product: ${product.name}
Price: ${formatPrice(product.price)}
Quantity: ${quantity}
Total: ${formatPrice(total)}

Please let me know the next steps. ✨`
  
  return encodeURIComponent(message)
}

export const generateWhatsAppCartMessage = (cartItems: CartItem[]): string => {
  if (cartItems.length === 0) return ''
  
  let message = `Hi ${siteConfig.name}! 💗

I'd like to place an order:

`
  
  let total = 0
  
  cartItems.forEach((item, index) => {
    const itemTotal = item.product.price * item.quantity
    total += itemTotal
    message += `${index + 1}. ${item.product.name} × ${item.quantity} — ${formatPrice(itemTotal)}\n`
  })
  
  message += `
Total: ${formatPrice(total)}

Please let me know the next steps. Thank you! ✨`
  
  return encodeURIComponent(message)
}

export const generateWhatsAppEnquiryMessage = (name: string, phone: string, email: string, message: string): string => {
  const whatsappMessage = `Hi ${siteConfig.name}! 💗

I'd like to make an enquiry.

Name: ${name}
Phone: ${phone}
Email: ${email}

Message: ${message}`
  
  return encodeURIComponent(whatsappMessage)
}

export const openWhatsApp = (message: string): void => {
  const whatsappUrl = `${siteConfig.whatsappUrl}?text=${message}`
  window.open(whatsappUrl, '_blank')
}

export const orderProductOnWhatsApp = (product: Product, quantity: number = 1): void => {
  const message = generateWhatsAppProductMessage(product, quantity)
  openWhatsApp(message)
}

export const orderCartOnWhatsApp = (cartItems: CartItem[]): void => {
  const message = generateWhatsAppCartMessage(cartItems)
  openWhatsApp(message)
}

export const sendEnquiryOnWhatsApp = (name: string, phone: string, email: string, message: string): void => {
  const whatsappMessage = generateWhatsAppEnquiryMessage(name, phone, email, message)
  openWhatsApp(whatsappMessage)
}
