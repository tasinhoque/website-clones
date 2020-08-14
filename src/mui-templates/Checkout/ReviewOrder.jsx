import React from 'react'
import {
  Typography,
  List,
  Grid,
  ListItemText,
  Divider,
  ListItem,
} from '@material-ui/core'

const addresses = [
  '1 Material-UI Drive',
  'Reactville',
  'Anytown',
  '99999',
  'USA',
]

const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
]
const ReviewOrder = () => {
  return (
    <>
      <Typography variant='h5'>Order summary</Typography>
      <List>
        {Array(4)
          .fill(null)
          .map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`Product ${index + 1}`}
                secondary='A nice thing'
              />
              <Typography>${5 * (index + 1)}</Typography>
            </ListItem>
          ))}
        <ListItem>
          <ListItemText primary='Shipping' />
          <Typography>$0</Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary='Total' />
          <Typography>$50</Typography>
        </ListItem>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant='h6'>Shipping</Typography>
            <Typography>John Smith</Typography>
            <Typography>{addresses.join(', ')}</Typography>
          </Grid>
          <Grid item container direction='column' xs={12} md={6}>
            <Typography variant='h6'>Payment details</Typography>
            {payments.map(payment => (
              <Grid key={payment.name} container>
                <Grid item xs={6}>
                  <Typography>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>{payment.detail}</Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </List>
    </>
  )
}

export default ReviewOrder
