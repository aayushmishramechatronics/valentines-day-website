"use client"

import { Button } from "@/components/ui/button"
import { Meteors } from "@/components/ui/meteors"
import type { ReactNode } from "react"

interface SpaceCardProps {
  icon: ReactNode
  title: string
  description: string
  expandedContent: string
  onExpand: () => void
}

export default function SpaceCard({ icon: Icon, title, description, onExpand }: SpaceCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg p-4 sm:p-6 bg-red-800 transition-all duration-300 ease-in-out max-w-md w-full">
      <Meteors number={20} />
      <div className="relative z-10">
        {Icon}
        <h3 className="text-xl font-bold text-red-300 mb-2">{title}</h3>
        <p className="text-red-200 mb-4">{description}</p>
        <Button onClick={onExpand} className="bg-red-600 hover:bg-red-700 text-white w-full">
          Yes, Tell Me More!
        </Button>
      </div>
    </div>
  )
}

