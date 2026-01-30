import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>cuFFa - Professional Overwatch 2 Coaching</title>
        <meta name="description" content="Professional Overwatch 2 coaching by cuFFa. Improve your gameplay with personalized coaching sessions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="h-screen overflow-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md z-50 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/">
                <div className="text-2xl font-bold text-white cursor-pointer">
                  cuFFa
                </div>
              </Link>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                <Link href="/book" className="hover:text-ow-orange transition">Book Now</Link>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden pb-4 space-y-2">
                <Link href="/book" className="block hover:text-ow-orange transition">Book Now</Link>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section - Full Screen */}
        <section className="h-full flex items-center pt-16 overflow-y-auto md:overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
              {/* Left - Image */}
              <div className="order-2 lg:order-1">
                <div className="relative rounded-xl md:rounded-2xl overflow-hidden border-2 border-ow-orange/30 hover:border-ow-orange transition">
                  <img 
                    src="/tournament-photo.jpg" 
                    alt="cuFFa at tournament"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Right - Content */}
              <div className="order-1 lg:order-2">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-white">
                  cuFFa
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl text-ow-orange font-semibold mb-4 md:mb-6">
                  Professional Overwatch 2 Coaching
                </p>
                
                {/* Achievements */}
                <div className="mb-6 md:mb-8">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-3 md:mb-4">
                    5+ years of competing in Overwatch Contenders, OWCS, Collegiate and OW World Cup
                  </p>
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="text-ow-orange mr-2">•</span>
                      <span>3rd Place - Champions Clash 2025</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ow-orange mr-2">•</span>
                      <span>Top 8 - Midseason Championship 2025 (EWC)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ow-orange mr-2">•</span>
                      <span>2x NA OWCS 2025 Stage Titles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ow-orange mr-2">•</span>
                      <span>10x Collegiate National Champion</span>
                    </li>
                  </ul>
                </div>

                <Link href="/book">
                  <button className="bg-ow-orange hover:bg-ow-orange/90 text-white px-8 md:px-10 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transition transform hover:scale-105 shadow-lg shadow-ow-orange/50 w-full sm:w-auto">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="fixed bottom-0 w-full py-4 md:py-6 px-4 border-t border-white/10 bg-black/30 backdrop-blur-md">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
              <div className="flex space-x-4 md:space-x-6 text-xs md:text-sm">
                <a href="https://twitch.tv/cuffa" target="_blank" rel="noopener noreferrer" className="hover:text-ow-orange transition">Twitch</a>
                <a href="https://x.com/cuffah" target="_blank" rel="noopener noreferrer" className="hover:text-ow-orange transition">Twitter</a>
                <a href="https://discord.gg/tcqr4zEtK7" target="_blank" rel="noopener noreferrer" className="hover:text-ow-orange transition">Discord</a>
              </div>
              <div className="text-gray-500 text-xs md:text-sm">
                © 2025 cuFFa Coaching
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
