import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-lumen-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">L</span>
                </div>
                <div className="ml-3">
                  <h1 className="text-xl font-semibold text-gray-900">
                    Lumen Technology
                  </h1>
                  <p className="text-sm text-gray-500">ResearchFlow Agent</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Channel Partner Portal</span>
            <div className="w-8 h-8 bg-lumen-primary rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">CP</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
