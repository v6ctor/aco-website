"use client"

import PixelBlast from "@/components/ui/PixelBlast"

export default function PixelBlastBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <PixelBlast
        variant="square"
        pixelSize={4}
        color="#f1d69c"
        patternScale={2}
        patternDensity={1}
        pixelSizeJitter={0}
        enableRipples
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        speed={0.5}
        edgeFade={0.25}
        transparent
      />
    </div>
  )
}