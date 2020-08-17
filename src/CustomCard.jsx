import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Grid,
  CardActionArea,
  CardContent,
  Typography,
  Card,
} from '@material-ui/core'

const CustomCard = ({ link, text }) => (
  <Grid item xs={4}>
    <CardActionArea component={RouterLink} to={link}>
      <Card>
        <CardContent>
          <Typography variant='h5'>{text}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  </Grid>
)

export default CustomCard
