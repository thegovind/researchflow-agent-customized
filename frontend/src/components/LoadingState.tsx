import React from 'react'

interface LoadingStateProps {
  query: string
}

const LoadingState: React.FC<LoadingStateProps> = ({ query }) => {
  return (
    <div className="card shadow-2xl border-0 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
      <div className="text-center">
        <div className="relative inline-flex items-center justify-center w-32 h-32 mb-8">
          <div className="absolute inset-0 lumen-gradient rounded-full animate-pulse opacity-20"></div>
          <div className="absolute inset-2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-pulse opacity-40"></div>
          <div className="relative bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-2xl">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-200 border-t-blue-600"></div>
          </div>
        </div>
        
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Analyzing Your Request
        </h3>
        
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
          Our ResearchFlow Agent is processing your query and gathering comprehensive insights about Lumen products and market opportunities.
        </p>

        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 mb-10 border border-blue-200 shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-base font-bold text-blue-900">Current Query</span>
          </div>
          <p className="text-blue-800 font-semibold text-center text-lg">
            {query}
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-center text-gray-700 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-200">
            <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-4 animate-pulse"></div>
            <span className="font-semibold text-lg">Gathering facts and data points...</span>
          </div>
          <div className="flex items-center justify-center text-gray-700 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-200">
            <div className="w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-4 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <span className="font-semibold text-lg">Planning analysis approach...</span>
          </div>
          <div className="flex items-center justify-center text-gray-700 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-200">
            <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mr-4 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <span className="font-semibold text-lg">Generating insights and recommendations...</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingState
