"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { name: "Gen", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Feb", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Mar", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Apr", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Mag", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Giu", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Lug", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Ago", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Set", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Ott", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Nov", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Dic", total: Math.floor(Math.random() * 5000) + 1000 },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `€${value}`}
        />
        <Bar dataKey="total" fill="#bb78ff" radius={[4, 4, 0, 0]} name="Totale" />
        <Tooltip
          formatter={(value: number) => [`€${value.toLocaleString()}`, "Totale"]}
          cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
          contentStyle={{ 
            background: 'white', 
            border: '1px solid #ccc', 
            borderRadius: '4px',
            boxShadow: 'none'  // Remove the shadow
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

