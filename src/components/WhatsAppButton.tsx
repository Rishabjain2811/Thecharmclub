import React from 'react'
import { MessageCircle } from 'lucide-react'
import { siteConfig } from '../config/site'

interface WhatsAppButtonProps {
  text?: string
  onClick?: () => void
  className?: string
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  text = 'Order on WhatsApp',
  onClick,
  className
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      window.open(siteConfig.whatsappUrl, '_blank')
    }
  }

  const buttonStyle = {
    backgroundColor: '#E8A7D8',
    color: '#FFFFFF',
    padding: '12px 32px',
    borderRadius: '9999px',
    fontWeight: 500,
    border: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '16px',
  }

  return (
    <button
      style={buttonStyle}
      onClick={handleClick}
      className={className}
    >
      <MessageCircle size={20} />
      {text}
    </button>
  )
}
