"use client"

import { FC, useEffect, useRef, useState } from "react"
import { motion, useSpring } from "framer-motion"
import { useCursor } from "../AppContextFolder/CursorContext"

interface Position {
  x: number
  y: number
}

export interface SmoothCursorProps {
  cursor?: React.ReactNode
  springConfig?: {
    damping: number
    stiffness: number
    mass: number
    restDelta: number
  }
}

const DefaultCursorSVG: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={54}
      viewBox="0 0 50 54"
      fill="none"
    >
      <g filter="url(#filter0_d_91_7928)">
        <path
          d="M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z"
          fill="var(--theme-text-primary)"
        />
        <path
          d="M43.7146 40.6933L28.5431 6.34306C27.3556 3.65428 23.5772 3.69516 22.3668 6.32755L6.57226 40.6778C5.3134 43.4156 7.97238 46.298 10.803 45.2549L24.7662 40.109C25.0221 40.0147 25.2999 40.0156 25.5494 40.1082L39.4193 45.254C42.2261 46.2953 44.9254 43.4347 43.7146 40.6933Z"
          stroke="var(--theme-primary)"
          strokeWidth={2.25825}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_91_7928"
          x={0.602397}
          y={0.952444}
          width={49.0584}
          height={52.428}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2.25825} />
          <feGaussianBlur stdDeviation={2.25825} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_91_7928"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_91_7928"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

const CircleCursorSVG: FC = () => (
  <svg width="50" height="54" viewBox="0 0 50 54" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.1))" }}>
    <circle cx="25" cy="27" r="16" stroke="var(--theme-text-primary)" strokeWidth="2" fill="rgba(0,0,0,0.1)" />
    <circle cx="25" cy="27" r="3" fill="var(--theme-text-primary)" />
  </svg>
)

const DotCursorSVG: FC = () => (
  <svg width="50" height="54" viewBox="0 0 50 54" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.2))" }}>
    <circle cx="25" cy="27" r="6" fill="var(--theme-text-primary)" stroke="var(--theme-primary)" strokeWidth="1" />
  </svg>
)

const CrosshairCursorSVG: FC = () => (
  <svg width="50" height="54" viewBox="0 0 50 54" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.2))" }}>
    <line x1="25" y1="15" x2="25" y2="39" stroke="var(--theme-text-primary)" strokeWidth="2" strokeLinecap="round" />
    <line x1="13" y1="27" x2="37" y2="27" stroke="var(--theme-text-primary)" strokeWidth="2" strokeLinecap="round" />
    <circle cx="25" cy="27" r="12" stroke="var(--theme-text-primary)" strokeWidth="1.5" />
    <circle cx="25" cy="27" r="2" fill="var(--theme-text-primary)" />
  </svg>
)

export function SmoothCursor({
  cursor: propCursor,
  springConfig = {
    damping: 45,
    stiffness: 400,
    mass: 1,
    restDelta: 0.001,
  },
}: SmoothCursorProps) {
  const { cursorType } = useCursor()
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const lastMousePos = useRef<Position>({ x: 0, y: 0 })
  const velocity = useRef<Position>({ x: 0, y: 0 })
  const lastUpdateTime = useRef(Date.now())
  const previousAngle = useRef(0)
  const accumulatedRotation = useRef(0)

  const cursorX = useSpring(0, springConfig)
  const cursorY = useSpring(0, springConfig)
  const rotation = useSpring(0, {
    ...springConfig,
    damping: 60,
    stiffness: 300,
  })
  const scale = useSpring(0.4, {
    ...springConfig,
    stiffness: 500,
    damping: 35,
  })

  useEffect(() => {
    const checkMobile = () => {
      // Check if device is touch or small screen
      setIsMobile(window.matchMedia("(max-width: 768px) or (pointer: coarse)").matches)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const updateVelocity = (currentPos: Position) => {
      const currentTime = Date.now()
      const deltaTime = currentTime - lastUpdateTime.current

      if (deltaTime > 0) {
        velocity.current = {
          x: (currentPos.x - lastMousePos.current.x) / deltaTime,
          y: (currentPos.y - lastMousePos.current.y) / deltaTime,
        }
      }

      lastUpdateTime.current = currentTime
      lastMousePos.current = currentPos
    }

    const smoothMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true)

      const target = e.target as HTMLElement
      if (!target) return

      const isInteractive = target.closest('button, a, [role="button"], .cursor-pointer')

      // Feedback for interactive elements
      if (isInteractive) {
        scale.set(0.6)
      } else {
        scale.set(0.4)
      }

      const currentPos = { x: e.clientX, y: e.clientY }
      updateVelocity(currentPos)

      const speed = Math.sqrt(
        Math.pow(velocity.current.x, 2) + Math.pow(velocity.current.y, 2)
      )

      cursorX.set(currentPos.x)
      cursorY.set(currentPos.y)

      if (speed > 0.1) {
        const currentAngle =
          Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI) +
          90

        let angleDiff = currentAngle - previousAngle.current
        if (angleDiff > 180) angleDiff -= 360
        if (angleDiff < -180) angleDiff += 360
        accumulatedRotation.current += angleDiff
        rotation.set(accumulatedRotation.current)
        previousAngle.current = currentAngle
      }
    }

    let rafId: number
    const throttledMouseMove = (e: MouseEvent) => {
      if (rafId) return

      rafId = requestAnimationFrame(() => {
        smoothMouseMove(e)
        rafId = 0
      })
    }

    window.addEventListener("mousemove", throttledMouseMove)

    return () => {
      window.removeEventListener("mousemove", throttledMouseMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [cursorX, cursorY, rotation, scale, isVisible, isMobile])

  if (isMobile) return null

  // Determine which cursor to render
  let activeCursor = <DefaultCursorSVG />

  if (propCursor) {
    activeCursor = <>{propCursor}</>
  } else {
    switch (cursorType) {
      case 'circle':
        activeCursor = <CircleCursorSVG />
        break
      case 'dot':
        activeCursor = <DotCursorSVG />
        break
      case 'crosshair':
        activeCursor = <CrosshairCursorSVG />
        break
      case 'default':
      default:
        activeCursor = <DefaultCursorSVG />
        break
    }
  }

  return (
    <motion.div
      style={{
        position: "fixed",
        left: cursorX,
        top: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        rotate: cursorType === 'default' ? rotation : 0, // Only rotate the arrow cursor
        scale: scale,
        zIndex: 1000,
        pointerEvents: "none",
        willChange: "transform",
        opacity: isVisible ? 1 : 0,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
    >
      {activeCursor}
    </motion.div>
  )
}

