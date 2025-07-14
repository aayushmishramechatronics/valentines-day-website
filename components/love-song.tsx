"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, Pause } from "lucide-react"

export default function LoveSong() {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="w-full max-w-sm sm:max-w-md mx-auto bg-red-100 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-4">
        <h3 className="text-lg font-bold text-red-600 mb-2">Our Love Song</h3>
        <p className="text-sm text-red-500 mb-4">Ed Sheeran - Perfect</p>
        <div className="relative aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/2Vv-BfVoq4g?autoplay=${isPlaying ? 1 : 0}&mute=${isPlaying ? 0 : 1}`}
            title="Ed Sheeran - Perfect (Official Music Video)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button
            onClick={togglePlay}
            className="absolute bottom-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

