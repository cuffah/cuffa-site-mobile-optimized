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
                <p className="text-lg sm:text-xl lg:text-2xl text-ow-orange font-semibold mb-4 md:mb-6">
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
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
              <div className="flex items-center space-x-3">
                <span className="text-white font-bold text-sm md:text-base">cuFFa</span>
                <div className="flex items-center space-x-2">
                  <a href="https://twitch.tv/cuffa" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition" title="Twitch">
                    <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                    </svg>
                  </a>
                  <a href="https://x.com/cuffah" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition" title="Twitter/X">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="https://discord.gg/tcqr4zEtK7" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition" title="Discord">
                    <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  </a>
                  <a href="https://liquipedia.net/overwatch/CuFFa" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition" title="Liquipedia">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4zm-1.2 3.6v9.6h2.4V6h-2.4zm0 10.8V18h2.4v-1.2h-2.4z"/>
                    </svg>
                  </a>
                </div>
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
