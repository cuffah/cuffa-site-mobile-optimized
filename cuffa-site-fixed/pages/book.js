import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Book() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      id: '1on1',
      title: '1-on-1 Private Coaching',
      price: '$35',
      duration: '1 hour',
      description: 'In depth review of 1-2 replay codes from your recent matches/scrims/ranked games and I\'ll provide feedback that you can use towards improving specific goals or general gameplay.',
      acuityUrl: 'https://app.acuityscheduling.com/schedule.php?owner=38211508&appointmentType=88422670'
    },
    {
      id: 'team',
      title: 'Team Coaching',
      price: '$40',
      duration: '1 hour',
      description: 'One hour of team coaching where we\'ll go over 1-2 replay codes with your team and provide practical feedback, outlining specific goals and areas to improve upon.',
      acuityUrl: 'YOUR_TEAM_COACHING_ACUITY_URL'
    },
    {
      id: 'scrim',
      title: 'Live Scrim Coaching',
      price: '$30',
      duration: '1 hour',
      description: 'I\'ll spectate your scrims live and provide real-time feedback on team communication, macro goals and team environment.',
      acuityUrl: 'YOUR_SCRIM_COACHING_ACUITY_URL'
    },
    {
      id: 'package',
      title: '3 Session Package',
      price: '$100',
      duration: '3 hours',
      description: '3x 1hr sessions of one on one private coaching. Each session: In depth review of 1-2 replay codes from your recent matches.',
      badge: 'Save $5',
      acuityUrl: 'YOUR_PACKAGE_ACUITY_URL'
    }
  ]

  const openBookingModal = (service) => {
    setSelectedService(service)
    setIsModalOpen(true)
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
  }

  const closeBookingModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
    // Re-enable body scroll
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <Head>
        <title>Book a Session - cuFFa Coaching</title>
        <meta name="description" content="Book your Overwatch 2 coaching session with cuFFa." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen">
        {/* Navigation */}
        <nav className="bg-black/50 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/">
                <div className="text-2xl font-bold text-white cursor-pointer">
                  cuFFa
                </div>
              </Link>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                <Link href="/book" className="hover:text-ow-orange transition text-ow-orange">Book Now</Link>
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
              <div className="md:hidden pb-4">
                <Link href="/book" className="block text-ow-orange">Book Now</Link>
              </div>
            )}
          </div>
        </nav>

        {/* Services Grid */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 md:mb-8 text-white">
              Choose Your Service
            </h1>
            <p className="text-center text-gray-300 mb-8 md:mb-12 text-sm md:text-base">
              Click on any service to view available times and book your session
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {services.map((service) => (
                <div 
                  key={service.id}
                  onClick={() => openBookingModal(service)}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 hover:border-ow-orange transition cursor-pointer transform hover:scale-105 relative"
                >
                  {service.badge && (
                    <div className="absolute top-4 right-4 bg-ow-orange px-3 py-1 rounded-full text-sm font-semibold">
                      {service.badge}
                    </div>
                  )}
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{service.title}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl md:text-4xl font-bold text-ow-orange">{service.price}</span>
                    <span className="text-sm md:text-base text-gray-400">/ {service.duration}</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <div className="bg-ow-orange hover:bg-ow-orange/90 text-white px-6 py-3 rounded-lg font-semibold text-center transition">
                    Book Now
                  </div>
                </div>
              ))}
            </div>

            {/* Twitch Discount Banner */}
            <div className="mt-8 md:mt-12 bg-gradient-to-r from-ow-orange/20 to-ow-blue/20 border border-ow-orange/30 rounded-xl p-4 md:p-6 text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Twitch Subscriber Discount</h3>
              <p className="text-sm md:text-base text-gray-300">
                <span className="font-semibold text-ow-orange">Twitch Subs get $5 off.</span>
              </p>
              <p className="text-xs md:text-sm text-gray-400 mt-2">
                Promo code for twitch subscribers and enquiries:{' '}
                <a href="https://discord.gg/tcqr4zEtK7" target="_blank" rel="noopener noreferrer" className="text-ow-blue hover:text-ow-orange underline">
                  Join Discord
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Booking Modal */}
        {isModalOpen && selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-5xl h-[90vh] bg-gray-900 rounded-2xl border-2 border-ow-orange/50 shadow-2xl flex flex-col">
              
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10">
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold text-white">{selectedService.title}</h2>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-bold text-ow-orange">{selectedService.price}</span>
                    <span className="text-sm text-gray-400">/ {selectedService.duration}</span>
                  </div>
                </div>
                <button 
                  onClick={closeBookingModal}
                  className="ml-4 p-2 hover:bg-white/10 rounded-lg transition"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Body - Acuity iframe */}
              <div className="flex-1 overflow-hidden p-4 md:p-6">
                <iframe 
                  src={selectedService.acuityUrl}
                  width="100%" 
                  height="100%" 
                  frameBorder="0"
                  allow="payment"
                  className="rounded-lg"
                ></iframe>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-white/10 bg-gradient-to-r from-ow-orange/10 to-ow-blue/10">
                <p className="text-xs md:text-sm text-gray-300 text-center">
                  <span className="font-semibold text-ow-orange">Twitch Subs get $5 off!</span> Use promo code in Discord
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  )
}
