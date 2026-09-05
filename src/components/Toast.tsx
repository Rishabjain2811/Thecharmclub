import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { cn } from '../utils/cn'

interface ToastProps {
  message: string
  duration?: number
  onClose: () => void
  className?: string
}

export const Toast: React.FC<ToastProps> = ({
  message,
  duration = 3000,
  onClose,
  className
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onClose, 300)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  return (
    <div
      className={cn(
        'fixed bottom-4 right-4 bg-brand-black text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 z-50 transition-all duration-300',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
        className
      )}
    >
      <span className="text-sm font-medium">{message}</span>
      <button
        onClick={onClose}
        className="hover:bg-brand-pink/20 rounded-full p-1 transition-colors"
        aria-label="Close toast"
      >
        <X size={16} />
      </button>
    </div>
  )
}
