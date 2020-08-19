import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { LineChart, Line, XAxis, YAxis, Tooltip, Label } from 'recharts'

function createData(time, amount) {
  return { time, amount }
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
]

const Chart = () => {
  const theme = useTheme()

  return (
    <>
      <Typography variant='h6' color='primary' gutterBottom>
        Today
      </Typography>
      <LineChart
        width={800}
        height={150}
        data={data}
        margin={{ top: 16, right: 16, left: 24, bottom: 0 }}
      >
        <XAxis dataKey='time' stroke={theme.palette.text.secondary} />
        <YAxis stroke={theme.palette.text.secondary}>
          <Label angle={270} position='left' style={{ textAnchor: 'middle' }}>
            Sales ($)
          </Label>
        </YAxis>
        <Tooltip />
        <Line
          type='monotone'
          dataKey='amount'
          dot={false}
          stroke={theme.palette.primary.main}
        />
      </LineChart>
    </>
  )
}

export default Chart
