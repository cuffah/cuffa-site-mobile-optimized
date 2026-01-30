import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Book() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('1on1')

  const services = [
    {
      id: '1on1',
      title: '1-on-1 Private Coaching',
      price: '$35',
      duration: '1 hour',
      description: 'In depth review of 1-2 replay codes from your recent matches/scrims/ranked games and I\'ll provide feedback that you can use towards improving specific goals or general gameplay. Ideal for personal improvement goals.',
      acuityEmbed: '<iframe src="https://app.acuityscheduling.com/schedule.php?owner=38211508&appointmentType=88422670&ref=embedded_csp" title="Schedule Appointment" width="100%" height="800" frameBorder="0" allow="payment"></iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>'
    },
    {
      id: 'team',
      title: 'Team Coaching',
      price: '$40',
      duration: '1 hour',
      description: 'One hour of team coaching where we\'ll go over 1-2 replay codes with your team and provide practical feedback, outlining specific goals and areas to improve upon. Perfect for teams looking to improve together.',
      acuityEmbed: '<iframe src="YOUR_TEAM_COACHING_ACUITY_URL" title="Schedule Appointment" width="100%" height="800" frameBorder="0" allow="payment"></iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>'
    },
    {
      id: 'scrim',
      title: 'Live Scrim Coaching',
      price: '$30',
      duration: '1 hour',
      description: 'I\'ll spectate your scrims live and provide real-time feedback on team communication, macro goals and team environment. This option is ideal for teams who might be struggling with being proactive in scrims.',
      acuityEmbed: '<iframe src="YOUR_SCRIM_COACHING_ACUITY_URL" title="Schedule Appointment" width="100%" height="800" frameBorder="0" allow="payment"></iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>'
    },
    {
      id: 'package',
      title: '3 Session Package',
      price: '$100',
      duration: '3 hours',
      description: '3x 1hr sessions of one on one private coaching. Each session: In depth review of 1-2 replay codes from your recent matches/scrims/ranked games and I\'ll provide feedback that you can use towards improving specific goals or general gameplay.',
      badge: 'Save $5',
      acuityEmbed: '<iframe src="YOUR_PACKAGE_ACUITY_URL" title="Schedule Appointment" width="100%" height="800" frameBorder="0" allow="payment"></iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>'
    }
  ]

  const currentService = services.find(s => s.id === selectedService)

  return (
    <>
      <Head>
        <title>Book a Session - cuFFa Coaching</title>
        <meta name="description" content="Book your Overwatch 2 coaching session with cuFFa." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="h-screen overflow-hidden flex flex-col">
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

        {/* Main Content - Fixed Height */}
        <div className="flex-1 overflow-auto md:overflow-hidden">
          <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 md:gap-6 h-full">
              
              {/* Left - Service Selection (1/3 width on desktop, stacked on mobile) */}
              <div className="lg:col-span-1 lg:overflow-y-auto">
                <div className="space-y-2 md:space-y-3">
                  {services.map((service) => (
                    <div 
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`bg-white/5 backdrop-blur-sm border rounded-lg p-3 md:p-4 cursor-pointer transition relative ${
                        selectedService === service.id 
                          ? 'border-ow-orange bg-ow-orange/10' 
                          : 'border-white/10 hover:border-ow-orange/50'
                      }`}
                    >
                      {service.badge && (
                        <div className="absolute top-2 right-2 bg-ow-orange px-2 py-1 rounded text-xs font-semibold">
                          {service.badge}
                        </div>
                      )}
                      <h3 className="text-base md:text-lg font-bold text-white mb-1">{service.title}</h3>
                      <div className="flex items-baseline gap-2 mb-1 md:mb-2">
                        <span className="text-xl md:text-2xl font-bold text-ow-orange">{service.price}</span>
                        <span className="text-xs md:text-sm text-gray-400">/ {service.duration}</span>
                      </div>
                      <p className="text-xs md:text-sm text-gray-300 leading-relaxed line-clamp-3 md:line-clamp-none">{service.description}</p>
                    </div>
                  ))}
                </div>

                {/* Twitch Discount */}
                <div className="mt-3 md:mt-4 bg-gradient-to-r from-ow-orange/20 to-ow-blue/20 border border-ow-orange/30 rounded-lg p-2 md:p-3">
                  <p className="text-xs text-gray-300">
                    <span className="font-semibold text-ow-orange">Twitch Subs get $5 off.</span> Promo code for twitch subscribers and enquiries here:{' '}
                    <a href="https://discord.gg/tcqr4zEtK7" target="_blank" rel="noopener noreferrer" className="text-ow-blue hover:text-ow-orange underline break-all">
                      Discord
                    </a>
                  </p>
                </div>
              </div>

              {/* Right - Acuity Calendar (2/3 width on desktop, full width on mobile) */}
              <div className="lg:col-span-2 lg:overflow-hidden min-h-[600px] lg:min-h-0">
                <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 md:p-4">
                  <div 
                    className="acuity-embed h-full"
                    dangerouslySetInnerHTML={{ __html: currentService.acuityEmbed }}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}
