import HistoryChart from '@/components/HistoryChart'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'

const getData = async () => {
  const user = await getUserByClerkID()
  const analysis = await prisma.analysis.findMany({
    where: {
      userId: user.id,
    },
  })

  const sum = analysis.reduce((all, current) => all + current.sentimentScore, 0)
  const avgSentimentScore = Math.round(sum / analysis.length)
  return { analysis, avgSentimentScore }
}

const History = async () => {
  const { avgSentimentScore, analysis } = await getData()

  if (analysis && avgSentimentScore) {
    return (
      <div className="h-full overflow-hidden px-6 py-8">
        <div>
          <h1 className="text-2xl font-bold">{`Average Sentiment Score: ${avgSentimentScore}`}</h1>
        </div>
        <div className="h-full w-full">
          <HistoryChart data={analysis} />
        </div>
      </div>
    )
  }
  return (
    <div className="h-full overflow-hidden px-6 py-8">
      <div className="flex h-full items-center justify-center">
        <div className="animate-spin h-12 w-12 rounded-full border-t-4 border-blue-500" />
      </div>
    </div>
  )
}

export default History
