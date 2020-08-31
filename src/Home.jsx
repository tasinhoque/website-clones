import React from 'react'
import { Grid, CssBaseline } from '@material-ui/core'
import CustomCard from './CustomCard'
import muiTemplates from './mui-templates.jpg'

const Home = () => {
  return (
    <Grid container spacing={3}>
      <CssBaseline />
      <CustomCard
        link='/mui-templates'
        text='Material UI Templates'
        img={muiTemplates}
      />
    </Grid>
  )
}

export default Home
