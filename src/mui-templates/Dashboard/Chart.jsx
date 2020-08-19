import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import {} from '@material-ui/core'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from 'recharts'

// eslint-disable-next-line
const useStyles = makeStyles(theme => ({}))
// Generate Sales Data
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
  return (
    <LineChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type='monotone' dataKey='pv' stroke='#8884d8' />
      <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
    </LineChart>
  )
}

export default Chart
