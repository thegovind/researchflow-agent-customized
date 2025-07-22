import React, { useState } from 'react'

interface ResearchFormProps {
  onSubmit: (query: string, analysisType: string) => void
  isLoading: boolean
}

const ResearchForm: React.FC<ResearchFormProps> = ({ onSubmit, isLoading }) => {
  const [query, setQuery] = useState('')
  const [analysisType, setAnalysisType] = useState('market-analysis')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      onSubmit(query.trim(), analysisType)
      setQuery('')
    }
  }

  const analysisTypes = [
    { value: 'market-analysis', label: 'Market Analysis' },
    { value: 'competitive-research', label: 'Competitive Research' },
    { value: 'product-insights', label: 'Product Insights' },
    { value: 'customer-analysis', label: 'Customer Analysis' },
    { value: 'technology-trends', label: 'Technology Trends' }
  ]

  return (
    <div className="card shadow-2xl border-0 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
      <div className="card-header">
        <div className="flex items-center">
          <div className="w-12 h-12 lumen-gradient rounded-xl flex items-center justify-center mr-4 shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Research Query
            </h3>
            <p className="text-sm text-gray-600 font-medium">AI-powered analysis for channel partners</p>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label htmlFor="analysis-type" className="block text-sm font-bold text-gray-800 mb-4">
            Analysis Type
          </label>
          <select
            id="analysis-type"
            value={analysisType}
            onChange={(e) => setAnalysisType(e.target.value)}
            className="select-field shadow-md hover:shadow-lg"
          >
            {analysisTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="query" className="block text-sm font-bold text-gray-800 mb-4">
            Research Question
          </label>
          <textarea
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your research question about Lumen products, market opportunities, or competitive analysis..."
            rows={6}
            className="input-field shadow-md hover:shadow-lg resize-none"
            disabled={isLoading}
          />
        </div>

        <button
          type="submit"
          disabled={!query.trim() || isLoading}
          className="btn-primary w-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 disabled:transform-none disabled:shadow-md"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
              <span className="font-semibold">Analyzing...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="font-semibold">Start Analysis</span>
            </div>
          )}
        </button>
      </form>

      <div className="mt-10 p-8 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl border border-blue-200 shadow-lg">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h4 className="text-lg font-bold text-blue-900">
            Sample Queries
          </h4>
        </div>
        <ul className="space-y-4">
          <li className="flex items-start group">
            <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200"></span>
            <span className="text-sm text-blue-800 font-semibold group-hover:text-blue-900 transition-colors duration-200">Analyze Lumen's fiber network competitive advantages</span>
          </li>
          <li className="flex items-start group">
            <span className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200"></span>
            <span className="text-sm text-blue-800 font-semibold group-hover:text-blue-900 transition-colors duration-200">Research edge computing market opportunities</span>
          </li>
          <li className="flex items-start group">
            <span className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200"></span>
            <span className="text-sm text-blue-800 font-semibold group-hover:text-blue-900 transition-colors duration-200">Compare Lumen's cloud connectivity solutions</span>
          </li>
          <li className="flex items-start group">
            <span className="w-3 h-3 bg-gradient-to-r from-pink-500 to-red-600 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200"></span>
            <span className="text-sm text-blue-800 font-semibold group-hover:text-blue-900 transition-colors duration-200">Evaluate 5G infrastructure partnership potential</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ResearchForm
