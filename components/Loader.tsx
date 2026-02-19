'use client';
import { Styles } from '@/components/Styles'

const TOTAL = 10
const ORANGE_COUNT = 2

const Loader = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        className="animate-spin"
        style={{ animationDuration: '0.9s' }}
      >
        {Array.from({ length: TOTAL }).map((_, i) => {
          const angle = (i * 360) / TOTAL
          const isOrange = i >= TOTAL - ORANGE_COUNT
          const opacity = isOrange ? 1 : 0.15 + (i / TOTAL) * 0.65
          const color = isOrange ? Styles.primaryOrange : `rgba(150,150,150,${opacity})`

          return (
            <line
              key={i}
              x1="22"
              y1="6"
              x2="22"
              y2="13"
              stroke={color}
              strokeWidth="3"
              strokeLinecap="round"
              transform={`rotate(${angle} 22 22)`}
            />
          )
        })}
      </svg>
    </div>
  )
}

export default Loader