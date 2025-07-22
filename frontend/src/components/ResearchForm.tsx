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
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Research Query
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="analysis-type" className="block text-sm font-medium text-gray-700 mb-2">
            Analysis Type
          </label>
          <select
            id="analysis-type"
            value={analysisType}
            onChange={(e) => setAnalysisType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lumen-primary focus:border-transparent"
          >
            {analysisTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-2">
            Research Question
          </label>
          <textarea
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your research question about Lumen products, market opportunities, or competitive analysis..."
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lumen-primary focus:border-transparent resize-none"
            disabled={isLoading}
          />
        </div>

        <button
          type="submit"
          disabled={!query.trim() || isLoading}
          className="w-full bg-lumen-primary text-white py-2 px-4 rounded-md hover:bg-lumen-secondary focus:outline-none focus:ring-2 focus:ring-lumen-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Analyzing...' : 'Start Analysis'}
        </button>
      </form>

      <div className="mt-6 p-4 bg-lumen-light rounded-md">
        <h4 className="text-sm font-medium text-lumen-dark mb-2">
          Sample Queries
        </h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Analyze Lumen's fiber network competitive advantages</li>
          <li>• Research edge computing market opportunities</li>
          <li>• Compare Lumen's cloud connectivity solutions</li>
          <li>• Evaluate 5G infrastructure partnership potential</li>
        </ul>
      </div>
    </div>
  )
}

export default ResearchForm
