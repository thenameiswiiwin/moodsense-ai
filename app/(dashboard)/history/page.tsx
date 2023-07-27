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

  return (
    <div className="h-full overflow-hidden px-10 py-12">
      <div>
        <h1 className="mb-4 text-2xl">{`Average Sentiment Score: ${avgSentimentScore}`}</h1>
      </div>
      <div className="h-full w-full">
        <HistoryChart data={analysis} />
      </div>
    </div>
  )
}

export default History
