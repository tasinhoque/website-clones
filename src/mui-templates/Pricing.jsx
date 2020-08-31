import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Divider,
  makeStyles,
  Button,
  Grid,
  Link,
  Container,
  CardHeader,
  Card,
  CardActions,
  CardContent,
  Box,
} from '@material-ui/core'
import StarBorderIcon from '@material-ui/icons/StarBorder'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  header: {
    padding: theme.spacing(8, 0, 6, 0),
  },
  thin: {
    fontWeight: 300,
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  price: {
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(6, 3),
  },
}))

const SubscriptionCard = ({
  type,
  price,
  userCount,
  storage,
  additionalSupport,
  buttonText,
}) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        {type === 'Pro' ? (
          <CardHeader
            action={<StarBorderIcon />}
            title={
              <Typography align='center' variant='h5'>
                {type}
              </Typography>
            }
            subheader={
              <Typography align='center' variant='body1' color='textSecondary'>
                Most popular
              </Typography>
            }
            className={classes.cardHeader}
          />
        ) : (
          <CardHeader
            title={
              <Typography align='center' variant='h5'>
                {type}
              </Typography>
            }
            className={classes.cardHeader}
          />
        )}
        <CardContent>
          <Grid container direction='column' alignItems='center'>
            <Grid item className={classes.price}>
              <Typography variant='h3' component='span'>
                ${price}
              </Typography>
              <Typography component='span' color='textSecondary' variant='h6'>
                /mo
              </Typography>
            </Grid>
            <Grid item>
              <Typography>{userCount} users included</Typography>
            </Grid>
            <Grid item>
              <Typography>{storage} GB of storage</Typography>
            </Grid>
            <Grid item>
              <Typography>Help center access</Typography>
            </Grid>
            <Grid item>
              <Typography>{additionalSupport}</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button
            variant={type === 'Pro' ? 'contained' : 'outlined'}
            color='primary'
            fullWidth
          >
            {buttonText}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

const footerContent = [
  {
    header: 'Company',
    items: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    header: 'Features',
    items: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    header: 'Resources',
    items: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    header: 'Legal',
    items: ['Privacy policy', 'Terms of use'],
  },
]

const Pricing = () => {
  const classes = useStyles()

  return (
    <>
      <AppBar color='default' position='static' elevation={0}>
        <Toolbar>
          <Grid container spacing={4} alignItems='center'>
            <Grid item className={classes.grow}>
              <Typography variant='h6'>Company name</Typography>
            </Grid>
            <Grid item>
              <Link variant='button' href='#' color='textPrimary'>
                FEATURES
              </Link>
            </Grid>
            <Grid item>
              <Link variant='button' href='#' color='textPrimary'>
                ENTERPRISE
              </Link>
            </Grid>
            <Grid item>
              <Link variant='button' href='#' color='textPrimary'>
                SUPPORT
              </Link>
            </Grid>
            <Grid item>
              <Button variant='outlined' color='primary'>
                Login
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Divider />
      <Container maxWidth='sm' className={classes.header}>
        <Typography
          variant='h2'
          gutterBottom
          align='center'
          className={classes.thin}
        >
          Pricing
        </Typography>
        <Typography variant='h5' color='textSecondary' paragraph align='center'>
          Quickly build an effective pricing table for your potential customers
          with this layout. It's built with default Material-UI components with
          little customization.
        </Typography>
      </Container>
      <Container maxWidth='md'>
        <Grid container spacing={4} alignItems='flex-end'>
          <SubscriptionCard
            type='Free'
            price='0'
            userCount='10'
            storage='2'
            additionalSupport='Email support'
            buttonText='Sign up for free'
          />
          <SubscriptionCard
            type='Pro'
            price='15'
            userCount='20'
            storage='10'
            additionalSupport='Priority email support'
            buttonText='Get started'
          />
          <SubscriptionCard
            type='Enterprise'
            price='30'
            userCount='50'
            storage='30'
            additionalSupport='Phone & email support'
            buttonText='Contact us'
          />
        </Grid>
        <Box marginTop={8}>
          <Divider />
        </Box>
      </Container>
      <Container maxWidth='md' className={classes.footer}>
        <Grid container spacing={4}>
          {footerContent.map(section => (
            <Grid key={section.header} item xs={6} sm={3}>
              <Typography variant='h6'>{section.header}</Typography>
              <Grid container direction='column'>
                {section.items.map(item => (
                  <Grid item>
                    <Link color='textSecondary' variant='body1'>
                      {item}
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box marginBottom={3}>
        <Typography align='center' variant='body2' color='textSecondary'>
          Copyright &copy;{' '}
          <Link color='inherit' href='#'>
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}.
        </Typography>
      </Box>
    </>
  )
}

export default Pricing
