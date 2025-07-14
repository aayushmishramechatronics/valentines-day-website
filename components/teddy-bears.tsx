"use client"

import { motion } from "framer-motion"

interface TeddyBearsProps {
  show: boolean
}

export default function TeddyBears({ show }: TeddyBearsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.5 }}
      transition={{ duration: 0.5 }}
      className="w-64 h-64 relative"
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ x: show ? -10 : 0 }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, repeatType: "reverse" }}
      >
        <span className="text-6xl transform -scale-x-100">🧸</span>
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ x: show ? 10 : 0 }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, repeatType: "reverse" }}
      >
        <span className="text-6xl">🧸</span>
      </motion.div>
    </motion.div>
  )
}

