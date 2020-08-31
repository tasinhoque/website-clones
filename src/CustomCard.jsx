import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Grid,
  CardActionArea,
  CardContent,
  Typography,
  Card,
} from '@material-ui/core'

const CustomCard = ({ link, text, img }) => (
  <Grid item xs={3}>
    <CardActionArea component={RouterLink} to={link}>
      <Card>
        <img src={img} width='100%' height='auto' alt='preview' />
        <CardContent>
          <Typography variant='body2'>{text}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  </Grid>
)

export default CustomCard
