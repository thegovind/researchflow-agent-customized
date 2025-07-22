import React, { useState } from 'react'
import ResearchForm from './ResearchForm'
import ResultsDisplay from './ResultsDisplay'
import LoadingState from './LoadingState'

interface AnalysisResult {
  id: string
  query: string
  summary: string
  insights: string[]
  recommendations: string[]
  timestamp: string
}

const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<AnalysisResult[]>([])
  const [currentQuery, setCurrentQuery] = useState('')

  const handleResearchSubmit = async (query: string, _analysisType: string) => {
    setIsLoading(true)
    setCurrentQuery(query)

    try {
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      const mockResult: AnalysisResult = {
        id: Date.now().toString(),
        query,
        summary: `Comprehensive analysis of ${query} for Lumen Technology channel partners. This analysis leverages our ResearchFlow Agent to provide actionable insights for your business development initiatives.`,
        insights: [
          'Market opportunity analysis shows strong growth potential in enterprise networking solutions',
          'Competitive positioning indicates Lumen\'s fiber infrastructure provides significant advantages',
          'Customer feedback suggests high demand for integrated cloud and connectivity services',
          'Technology trends favor edge computing and 5G integration opportunities'
        ],
        recommendations: [
          'Focus on enterprise customers requiring high-bandwidth, low-latency solutions',
          'Develop partnerships with cloud service providers for integrated offerings',
          'Invest in edge computing capabilities to capture emerging market opportunities',
          'Create specialized solutions for industries with strict compliance requirements'
        ],
        timestamp: new Date().toISOString()
      }

      setResults(prev => [mockResult, ...prev])
    } catch (error) {
      console.error('Analysis failed:', error)
    } finally {
      setIsLoading(false)
      setCurrentQuery('')
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-2xl text-sm font-semibold mb-6 shadow-lg border border-blue-200">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            AI-Powered Business Intelligence Platform
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Lumen Product Analysis Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Leverage advanced AI research capabilities to analyze Lumen products, identify market opportunities, and develop competitive positioning strategies for channel partners.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="sticky top-32">
              <ResearchForm onSubmit={handleResearchSubmit} isLoading={isLoading} />
            </div>
          </div>
          
          <div className="lg:col-span-3">
            {isLoading ? (
              <LoadingState query={currentQuery} />
            ) : (
              <ResultsDisplay results={results} />
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Dashboard
