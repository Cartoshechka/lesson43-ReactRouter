import React, { useState, useEffect } from 'react'
import { Link, useRouteError, isRouteErrorResponse } from 'react-router'
import './NotFound.css'

const NotFound: React.FC = () => {
  const error = useRouteError()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<
    {
      id: number
      left: string
      size: string
      delay: string
      duration: string
    }[]
  >([])

  // Отслеживание мыши для параллакса
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const x = (clientX - window.innerWidth / 2) / 50
      const y = (clientY - window.innerHeight / 2) / 50
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Генерация частиц
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 5 + 2}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 10 + 5}s`
    }))
    setParticles(newParticles)
  }, [])

  const getErrorMessage = () => {
    if (isRouteErrorResponse(error)) {
      return error.statusText || error.data?.message || 'Страница не найдена'
    } else if (error instanceof Error) {
      return error.message
    } else {
      return 'Похоже, эта страница ушла на дискотеку без нас'
    }
  }

  return (
    <div className="notfound-container">
      <div className="notfound-blur-overlay"></div>

      {/* Анимированные частицы */}
      <div className="notfound-particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="notfound-particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration
            }}
          />
        ))}
      </div>

      {/* Огромные 404 с параллаксом */}
      <div
        className="notfound-title-wrapper"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      >
        <h1 className="notfound-title">404</h1>
      </div>

      {/* Пушистый чубрик (персонаж) */}
      <div className="notfound-character-area">
        <div className="notfound-chubrik">
          <div className="notfound-chubrik-body">
            <div className="notfound-chubrik-eyes">
              <div className="notfound-eye"></div>
              <div className="notfound-eye"></div>
            </div>
          </div>
          <div className="notfound-chubrik-limbs">
            <div className="notfound-limb arm-l"></div>
            <div className="notfound-limb arm-r"></div>
            <div className="notfound-limb leg-l"></div>
            <div className="notfound-limb leg-r"></div>
          </div>
        </div>
      </div>

      {/* Контент под персонажем */}
      <div className="notfound-content">
        <p className="notfound-message">{getErrorMessage()}</p>
        <Link to="/" className="notfound-home-btn">
          Вернуться в реальность
        </Link>
      </div>
    </div>
  )
}

export default NotFound
