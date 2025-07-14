"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart } from "lucide-react"

interface MessageForYouProps {
  onOpen: () => void
}

export default function MessageForYou({ onOpen }: MessageForYouProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
    onOpen()
  }

  return (
    <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
      <motion.div
        className={`bg-red-100 rounded-lg shadow-lg overflow-hidden cursor-pointer ${isOpen ? "h-[60vh] sm:h-[80vh]" : "h-36 sm:h-48"}`}
        onClick={handleOpen}
        layout
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{ opacity: isOpen ? 0 : 1 }}
        >
          <span className="text-red-500 text-6xl">💌</span>
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="p-6 h-full overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="text-red-600 text-xs sm:text-sm font-pixel leading-relaxed">
                My Dearest Valentine [His/Her Name],
                <br />
                <br />
                In this vast digital cosmos,
                <br />
                You are my favorite pixel.
                <br />
                Your love illuminates my world
                <br />
                Like a supernova in the night sky.
                <br />
                <br />
                Every moment with you is
                <br />A high-score in the game of life.
                <br />
                You're the cheat code to my heart,
                <br />
                The power-up to my soul.
                <br />
                <br />
                Let's continue this co-op adventure,
                <br />
                Navigating life's levels together.
                <br />
                <br />
                With All My Love,
                <br />
                [Your Name]
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-red-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Heart
                  size={24}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    position: "absolute",
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

