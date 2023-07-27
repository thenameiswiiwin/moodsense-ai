'use client'

import { useEffect, useState } from 'react'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'

interface CustomTooltipProps {
  payload: any[]
  label: string
  active: boolean
}

const CustomTooltip = ({ payload, label, active }: CustomTooltipProps) => {
  const dateLabel = new Date(label).toLocaleString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })

  const [isVisible, setIsVisible] = useState(false)

  // Add a delay to show the tooltip with a fade-in effect
  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (active) {
      timeout = setTimeout(() => {
        setIsVisible(true)
      }, 200)
    } else {
      setIsVisible(false)
    }

    return () => clearTimeout(timeout)
  }, [active])

  if (active && isVisible) {
    const analysis = payload[0]?.payload

    return (
      <div className="custom-tooltip relative animate-fade-in rounded-lg border border-black/10 bg-white/5 p-8 shadow-md backdrop-blur-md">
        <div
          className="absolute left-2 top-2 h-2 w-2 rounded-full"
          style={{ background: analysis?.color || '#8884d8' }}
        ></div>
        <p className="label text-sm text-black/30">{dateLabel}</p>
        <p className="intro text-xl uppercase">{analysis?.mood}</p>
      </div>
    )
  }

  return null
}

interface DataProp {
  createdAt: Date
  sentimentScore: number
  mood: string
  color: string
}

const HistoryChart = ({ data }: { data: DataProp[] }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={300} height={100} data={data}>
        <Line
          type="monotone"
          dataKey="sentimentScore"
          stroke="#8884d8"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <XAxis dataKey="createdAt" />
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default HistoryChart
