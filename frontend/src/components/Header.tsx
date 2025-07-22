import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="glass-effect shadow-2xl border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-16 h-16 lumen-gradient rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-200">
                  <span className="text-white font-bold text-2xl">L</span>
                </div>
                <div className="ml-6">
                  <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                    Lumen Technology
                  </h1>
                  <p className="text-base text-blue-600 font-semibold">ResearchFlow Agent</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div className="text-right">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200">
                <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
                <span className="text-sm font-semibold text-blue-900">Channel Partner Portal</span>
              </div>
              <p className="text-xs text-gray-600 mt-1 font-medium">AI-Powered Business Intelligence</p>
            </div>
            <div className="w-14 h-14 lumen-gradient rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform duration-200">
              <span className="text-white text-base font-bold">CP</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
