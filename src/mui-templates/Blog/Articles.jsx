import React from 'react'
import Markdown from 'markdown-to-jsx'
import { Typography, Grid, Divider, Link } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import post1Path from './blog-post1.md'
import post2Path from './blog-post2.md'
import post3Path from './blog-post3.md'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const styles = theme => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
})

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h5',
      },
    },
    h2: { component: Typography, props: { gutterBottom: true, variant: 'h6' } },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: 'subtitle1' },
    },
    h4: {
      component: Typography,
      props: { gutterBottom: true, variant: 'caption', paragraph: true },
    },
    p: { component: Typography, props: { paragraph: true } },
    a: { component: Link },
    li: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <li className={classes.listItem}>
          <Typography component='span' {...props} />
        </li>
      )),
    },
  },
}

const Articles = ({ classes }) => {
  const [postContents, setPostContents] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const post1Response = await axios.get(post1Path)
      const post2Response = await axios.get(post2Path)
      const post3Response = await axios.get(post3Path)

      setPostContents([
        post1Response.data,
        post2Response.data,
        post3Response.data,
      ])
    }
    fetchData()
  }, [])

  return (
    <Grid item xs={12} md={8}>
      <Typography variant='h6' gutterBottom>
        From the firehose
      </Typography>
      <Divider />
      {postContents.map(post => (
        <Markdown
          options={options}
          className={classes.markdown}
          key={post.substring(0, 40)}
        >
          {post}
        </Markdown>
      ))}
    </Grid>
  )
}

export default withStyles(styles)(Articles)
