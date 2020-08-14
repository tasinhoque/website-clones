import React from 'react'
import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core'

const PaymentDetails = () => {
  return (
    <>
      <Typography variant='h6' gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant='outlined'
            required
            label='Number on card'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant='outlined'
            label='Card number'
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant='outlined'
            required
            label='Expiry date'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant='outlined'
            label='CVV'
            required
            helperText='Last three digits on signature strip'
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color='primary' />}
            label='Remember credit card details for next time'
          />
        </Grid>
      </Grid>
    </>
  )
}

export default PaymentDetails
