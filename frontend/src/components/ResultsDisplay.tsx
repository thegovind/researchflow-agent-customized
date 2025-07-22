import React from 'react'

interface AnalysisResult {
  id: string
  query: string
  summary: string
  insights: string[]
  recommendations: string[]
  timestamp: string
}

interface ResultsDisplayProps {
  results: AnalysisResult[]
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  if (results.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
        <div className="w-16 h-16 bg-lumen-light rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-lumen-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Ready for Analysis
        </h3>
        <p className="text-gray-600">
          Submit a research query to get AI-powered insights about Lumen products and market opportunities.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {results.map((result) => (
        <div key={result.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="mb-4">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Analysis Results
              </h3>
              <span className="text-sm text-gray-500">
                {new Date(result.timestamp).toLocaleDateString()}
              </span>
            </div>
            <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
              <strong>Query:</strong> {result.query}
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-md font-medium text-gray-900 mb-2">Executive Summary</h4>
            <p className="text-gray-700 leading-relaxed">{result.summary}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-md font-medium text-gray-900 mb-3 flex items-center">
                <svg className="w-5 h-5 text-lumen-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Key Insights
              </h4>
              <ul className="space-y-2">
                {result.insights.map((insight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-lumen-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-md font-medium text-gray-900 mb-3 flex items-center">
                <svg className="w-5 h-5 text-lumen-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Recommendations
              </h4>
              <ul className="space-y-2">
                {result.recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-lumen-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Analysis completed using ResearchFlow Agent
              </div>
              <button className="text-lumen-primary hover:text-lumen-secondary text-sm font-medium">
                Export Report
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ResultsDisplay
