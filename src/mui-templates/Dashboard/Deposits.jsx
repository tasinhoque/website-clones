import React from 'react'
import { Link, Typography } from '@material-ui/core'

export default function Deposits() {
  return (
    <>
      <Typography variant='h6' color='primary'>
        Recent Deposits
      </Typography>
      <Typography variant='h4'>$3,024.00</Typography>
      <Typography color='textSecondary'>on 15 March, 2019</Typography>
      <Link color='primary' href='#'>
        View balance
      </Link>
    </>
  )
}
