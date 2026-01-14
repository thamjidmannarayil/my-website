"use client"

import { useEffect, useRef, useState } from "react"
import createGlobe, { COBEOptions } from "cobe"
import { useMotionValue, useSpring } from "framer-motion"
import ArrowIcon from "../../Icons/ArrowIcon";

// Simplified cn function since lib/utils doesn't exist
function cn(...inputs: (string | boolean | undefined)[]) {
    return inputs.filter(Boolean).join(" ")
}

const GLOBE_CONFIG: COBEOptions = {
    width: 800,
    height: 800,
    onRender: () => { },
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 1,
    diffuse: 0.4,
    mapSamples: 16000,
    mapBrightness: 1.2,
    baseColor: [1, 1, 1],
    markerColor: [251 / 255, 100 / 255, 21 / 255],
    glowColor: [1, 1, 1],
    markers: [
        { location: [25.2048, 55.2708], size: 0.1 }, // UAE
        { location: [10.1632, 76.6413], size: 0.1 }, // Kerala, India
        { location: [51.9194, 19.1451], size: 0.1 }, // Poland
        { location: [42.1292, -80.0851], size: 0.1 }, // Erie, Pennsylvania, USA
        { location: [23.8859, 45.0792], size: 0.1 }, // Saudi Arabia
        { location: [26.8206, 30.8025], size: 0.1 }, // Egypt
    ],
}

export function GlobeCanvas({
    className,
    config = GLOBE_CONFIG,
}: {
    className?: string
    config?: COBEOptions
}) {
    const phi = useRef(0)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const pointerInteracting = useRef<number | null>(null)
    const pointerInteractionMovement = useRef(0)
    const [width, setWidth] = useState(0)

    const r = useMotionValue(0)
    const rs = useSpring(r, {
        mass: 1,
        damping: 30,
        stiffness: 100,
    })

    const updatePointerInteraction = (value: number | null) => {
        pointerInteracting.current = value
        if (canvasRef.current) {
            canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab"
        }
    }

    const updateMovement = (clientX: number) => {
        if (pointerInteracting.current !== null) {
            const delta = clientX - pointerInteracting.current
            pointerInteractionMovement.current = delta
            r.set(r.get() + delta / 1400)
        }
    }

    useEffect(() => {
        const onResize = () => {
            if (canvasRef.current) {
                setWidth(canvasRef.current.offsetWidth)
            }
        }

        window.addEventListener("resize", onResize)
        onResize()

        if (!canvasRef.current) return

        const globe = createGlobe(canvasRef.current, {
            ...config,
            width: width * 2,
            height: width * 2,
            onRender: (state) => {
                if (!pointerInteracting.current) phi.current += 0.005
                state.phi = phi.current + rs.get()
                state.width = width * 2
                state.height = width * 2
            },
        })

        setTimeout(() => {
            if (canvasRef.current) canvasRef.current.style.opacity = "1"
        }, 0)

        return () => {
            globe.destroy()
            window.removeEventListener("resize", onResize)
        }
    }, [rs, config, width])

    return (
        <div
            className={cn(
                "relative mx-auto aspect-[1/1] w-full max-w-[600px]",
                className
            )}
        >
            <canvas
                className={cn(
                    "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
                )}
                ref={canvasRef}
                onPointerDown={(e) => {
                    pointerInteracting.current = e.clientX
                    updatePointerInteraction(e.clientX)
                }}
                onPointerUp={() => updatePointerInteraction(null)}
                onPointerOut={() => updatePointerInteraction(null)}
                onMouseMove={(e) => updateMovement(e.clientX)}
                onTouchMove={(e) =>
                    e.touches[0] && updateMovement(e.touches[0].clientX)
                }
            />
        </div>
    )
}

export default function GlobeSection() {
    return (
        <section id="ClientIDealtWithSection" className="relative overflow-hidden border-y border-AAsecondary/10 bg-AAprimary py-24">
            {/* Title */}
            <div data-aos="fade-up" className="flex flex-row items-center 2xl:px-72 lg:px-24 md:px-16 sm:px-16 px-4 mb-16">
                <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
                <div className="flex-none flex-row space-x-2 text-AATextPrimary items-center pr-2">
                    <span className="font-bold tracking-wider text-lg md:text-2xl w-44 md:w-56 opacity-85">
                        {" "}
                        Clients I Worked With
                    </span>
                </div>
                <div className="bg-AATextMuted h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
            </div>
            <div className="container relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 md:flex-row">
                <div className="relative z-10 flex flex-1 flex-col items-start gap-6 text-left" data-aos="fade-right">
                    <h2 className="text-3xl font-bold tracking-tight text-AATextPrimary md:text-4xl lg:text-5xl">
                        Working with Clients <span className="text-AAsecondary">Globally</span>
                    </h2>
                    <p className="max-w-[500px] text-lg text-AATextMuted md:text-xl">
                        I collaborate with innovative companies and teams worldwide, delivering AI and Machine Learning solutions that scale across borders.
                    </p>
                    <div className="flex flex-row space-x-4 items-center">
                        <div className="flex flex-col">
                            <span className="text-AAsecondary font-bold text-2xl">4+</span>
                            <span className="text-AATextMuted text-xs">Years Experience</span>
                        </div>
                        <div className="h-8 w-[1px] bg-AAsecondary/20"></div>
                        <div className="flex flex-col">
                            <span className="text-AAsecondary font-bold text-2xl">Global</span>
                            <span className="text-AATextMuted text-xs">Collaboration</span>
                        </div>
                    </div>
                </div>
                <div className="relative flex h-[400px] w-full flex-1 items-center justify-center sm:h-[450px] md:h-[500px]" data-aos="fade-left">
                    <div className="absolute inset-0 bg-AAsecondary/5 blur-[100px] rounded-full"></div>
                    <GlobeCanvas className="opacity-80 transition-opacity duration-1000 hover:opacity-100" />
                </div>
            </div>
        </section>
    )
}
