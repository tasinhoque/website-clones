import React from 'react'
import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core'

const ShippingAddress = () => {
  return (
    <>
      <Typography variant='h6' gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField variant='outlined' required label='First Name' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField variant='outlined' label='Last Name' required fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant='outlined'
            required
            fullWidth
            label='Address line 1'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant='outlined'
            required
            fullWidth
            label='Address line 2'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth variant='outlined' required label='City' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant='outlined'
            label='State/Province/Region'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant='outlined'
            required
            label='Zip/Postal Code'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth variant='outlined' label='Country' required />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color='primary' />}
            label='Use this address for payment details'
          />
        </Grid>
      </Grid>
    </>
  )
}

export default ShippingAddress
