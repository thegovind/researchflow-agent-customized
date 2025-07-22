import React from 'react'

interface LoadingStateProps {
  query: string
}

const LoadingState: React.FC<LoadingStateProps> = ({ query }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-lumen-light rounded-full mb-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-lumen-primary"></div>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Analyzing Your Request
        </h3>
        
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Our ResearchFlow Agent is processing your query and gathering insights about Lumen products and market opportunities.
        </p>

        <div className="bg-gray-50 rounded-md p-4 mb-6">
          <p className="text-sm text-gray-700">
            <strong>Current Query:</strong> {query}
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-center text-sm text-gray-600">
            <div className="w-2 h-2 bg-lumen-primary rounded-full mr-2 animate-pulse"></div>
            Gathering facts and data points...
          </div>
          <div className="flex items-center justify-center text-sm text-gray-600">
            <div className="w-2 h-2 bg-lumen-accent rounded-full mr-2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            Planning analysis approach...
          </div>
          <div className="flex items-center justify-center text-sm text-gray-600">
            <div className="w-2 h-2 bg-lumen-secondary rounded-full mr-2 animate-pulse" style={{ animationDelay: '1s' }}></div>
            Generating insights and recommendations...
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingState
