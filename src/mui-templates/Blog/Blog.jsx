import React from 'react'
import { Container, Grid, CssBaseline } from '@material-ui/core'
import RightNavigation from './RightNavigation'
import Articles from './Articles'
import PrimaryFeaturedPost from './PrimaryFeaturedPost'
import SecondaryFeaturedPost from './SecondaryFeaturedPost'
import Header from './Header'
import Footer from '../Footer'

const Blog = () => {
  return (
    <Container>
      <CssBaseline />
      <Header />
      <Grid container spacing={4}>
        <PrimaryFeaturedPost />
        <SecondaryFeaturedPost />
        <SecondaryFeaturedPost />
        <Articles />
        <RightNavigation />
        <Footer />
      </Grid>
    </Container>
  )
}

export default Blog
