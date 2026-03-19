'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    window.addEventListener('mousemove', onMove)

    let raf: number
    const loop = () => {
      rx += (mx - rx) * 0.13
      ry += (my - ry) * 0.13
      dot.style.left  = `${mx}px`
      dot.style.top   = `${my}px`
      ring.style.left = `${rx}px`
      ring.style.top  = `${ry}px`
      raf = requestAnimationFrame(loop)
    }
    loop()
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
