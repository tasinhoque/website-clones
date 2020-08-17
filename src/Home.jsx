import React from 'react'
import { Grid } from '@material-ui/core'
import CustomCard from './CustomCard'

const Home = () => {
  return (
    <Grid container spacing={3}>
      <CustomCard link='/mui-templates' text='Material UI Templates' />
    </Grid>
  )
}

export default Home
