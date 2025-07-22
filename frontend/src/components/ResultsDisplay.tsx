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
      <div className="card shadow-2xl border-0 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
          <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-6">
          Ready for Analysis
        </h3>
        <p className="text-lg text-gray-600 max-w-lg mx-auto leading-relaxed font-medium mb-8">
          Submit a research query to get AI-powered insights about Lumen products and market opportunities.
        </p>
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-2xl text-sm font-semibold shadow-lg border border-blue-200">
          <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          Powered by Azure AI Agent Service
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {results.map((result) => (
        <div key={result.id} className="card shadow-2xl border-0 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/20">
          <div className="mb-8">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 lumen-gradient rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Analysis Results
                </h3>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-500 font-medium">
                  {new Date(result.timestamp).toLocaleDateString()}
                </span>
                <p className="text-xs text-gray-400">Generated Report</p>
              </div>
            </div>
            <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-bold text-blue-900">Query</span>
              </div>
              <p className="text-blue-800 font-semibold">
                {result.query}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              Executive Summary
            </h4>
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
              <p className="text-gray-700 leading-relaxed font-medium text-lg">{result.summary}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                Key Insights
              </h4>
              <ul className="space-y-3">
                {result.insights.map((insight, index) => (
                  <li key={index} className="flex items-start group">
                    <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200"></span>
                    <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                Recommendations
              </h4>
              <ul className="space-y-3">
                {result.recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start group">
                    <span className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200"></span>
                    <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">Analysis completed using ResearchFlow Agent</span>
              </div>
              <button className="btn-secondary hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 hover:text-blue-900 transition-all duration-200">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
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
