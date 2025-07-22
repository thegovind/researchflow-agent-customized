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

  const handleResearchSubmit = async (query: string, analysisType: string) => {
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
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Lumen Product Analysis Dashboard
        </h2>
        <p className="text-gray-600">
          Leverage AI-powered research to analyze Lumen products, market opportunities, and competitive positioning for channel partners.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <ResearchForm onSubmit={handleResearchSubmit} isLoading={isLoading} />
        </div>
        
        <div className="lg:col-span-2">
          {isLoading ? (
            <LoadingState query={currentQuery} />
          ) : (
            <ResultsDisplay results={results} />
          )}
        </div>
      </div>
    </main>
  )
}

export default Dashboard
