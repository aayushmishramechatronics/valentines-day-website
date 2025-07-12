"use client"

import Link from "next/link"
import { Heart, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useRef } from "react"
import ShootingStars from "@/components/shooting-stars"
import SpaceCard from "@/components/space-card"
import MessageForYou from "@/components/message-for-you"
import TeddyBears from "@/components/teddy-bears"
import LoveSong from "@/components/love-song"

export default function SpaceValentinesLanding() {
  const [showMessage, setShowMessage] = useState(false)
  const whySendRef = useRef(null)
  const messageForYouRef = useRef(null)
  const loveSongRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const card = {
    icon: <Heart className="h-6 w-6 text-red-500" />,
    title: "Dear [Name],",
    description:
      "The reason I sent this Valentine's Day Wish is because I wanted you to read this heartfelt message which I typed for you. Click the Button Below if you want to Read It...",
    expandedContent:
      "Love knows no boundaries, not even in the vastness of space. Your feelings are like stardust, unique and precious. Express them and watch your love story unfold like a cosmic dance.",
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0a192f] text-white overflow-hidden relative transition-all duration-500 ease-in-out font-pixel px-4 sm:px-6 lg:px-8">
      <ShootingStars />
      <header className="py-4 flex flex-col sm:flex-row items-center justify-between z-10 w-full">
        <Link className="flex items-center justify-center mb-4 sm:mb-0" href="#">
          <Heart className="h-6 w-6 text-red-500" />
          <span className="ml-2 text-xl font-bold text-red-400">Sent by [Name]</span>
        </Link>
        <nav className="flex gap-4">
          <button
            onClick={() => scrollToSection(whySendRef)}
            className="text-sm font-medium hover:underline underline-offset-4 text-red-300"
          >
            Explore
          </button>
          <button
            onClick={() => scrollToSection(messageForYouRef)}
            className="text-sm font-medium hover:underline underline-offset-4 text-red-300"
          >
            Secret!
          </button>
          <button
            onClick={() => scrollToSection(loveSongRef)}
            className="text-sm font-medium hover:underline underline-offset-4 text-red-300"
          >
            Our Song
          </button>
        </nav>
      </header>
      <main className="flex-1 relative">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-red-400 mb-4">
                  Expressing My Love to You, Cosmically!
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-red-300 max-w-[700px] mx-auto">
                  "I wanted to wish you in a unique way—beyond just roses and gifts. So, I created this special
                  webpage—a digital memory of our love and a heartfelt message for someone as wonderful as you!"
                </p>
              </div>
              <Button
                onClick={() => scrollToSection(whySendRef)}
                className="bg-red-500 hover:bg-red-600 text-white"
                size="lg"
              >
                Launch This Love <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        <section ref={whySendRef} className="w-full py-12 md:py-24 lg:py-32" id="why-send">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8 text-red-400">
              Why Send a Cosmic-Themed Valentine Wish?
            </h2>
            <div className="flex justify-center">
              <SpaceCard
                icon={card.icon}
                title={card.title}
                description={card.description}
                expandedContent={card.expandedContent}
                onExpand={() => scrollToSection(messageForYouRef)}
              />
            </div>
          </div>
        </section>
        <section
          ref={messageForYouRef}
          className={`w-full py-12 md:py-24 lg:py-32 transition-all duration-500 ease-in-out ${
            showMessage ? "bg-pink-100" : "bg-[#0a192f]"
          }`}
          id="message-for-you"
        >
          <div className="container px-4 md:px-6 relative">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter text-center mb-8 text-red-400">
              Message for You
            </h2>
            <div className="flex flex-col items-center justify-center gap-8">
              <MessageForYou onOpen={() => setShowMessage(true)} />
              <TeddyBears show={showMessage} />
            </div>
          </div>
        </section>
        <section ref={loveSongRef} className="w-full py-12 md:py-24 lg:py-32 bg-[#0a192f]" id="love-song">
          <div className="container px-4 md:px-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter text-center mb-8 text-red-400">
              Our Love Song
            </h2>
            <LoveSong />
          </div>
        </section>
      </main>
      <footer className="py-6 w-full shrink-0 px-4 border-t border-red-800 bg-[#0a192f]/50 backdrop-blur-sm text-center">
        <p className="text-xs text-red-400">© 2025 Developed by Aayush Mishra and</p>
        <p className="text-xs text-red-300 mt-2">Sent with Love by [Your Name]</p>
      </footer>
    </div>
  )
}

