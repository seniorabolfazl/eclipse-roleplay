import { useEffect, useState } from 'react'

interface AnimatedHeadingProps {
  text: string
  className?: string
  style?: React.CSSProperties
  initialDelay?: number
  charDelay?: number
  charDuration?: number
}

/**
 * Splits `text` on \n into lines, then each line into characters.
 * Every character is its own inline-block span that animates from
 * opacity:0 / translateX(-18px) to opacity:1 / translateX(0), with a
 * stagger based on line + character index.
 */
export default function AnimatedHeading({
  text,
  className = '',
  style,
  initialDelay = 200,
  charDelay = 30,
  charDuration = 500,
}: AnimatedHeadingProps) {
  const [started, setStarted] = useState(false)
  const lines = text.split('\n')

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), initialDelay)
    return () => clearTimeout(timer)
  }, [initialDelay])

  return (
    <h1 className={className} style={style}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {line.split('').map((char, charIndex) => {
            const delay =
              lineIndex * line.length * charDelay + charIndex * charDelay
            return (
              <span
                key={charIndex}
                className="inline-block transition-all ease-out"
                style={{
                  opacity: started ? 1 : 0,
                  transform: started ? 'translateX(0)' : 'translateX(-18px)',
                  transitionDelay: `${delay}ms`,
                  transitionDuration: `${charDuration}ms`,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}
