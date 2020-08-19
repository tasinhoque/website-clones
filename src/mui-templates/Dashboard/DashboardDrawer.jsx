import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PeopleIcon from '@material-ui/icons/People'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import LayersIcon from '@material-ui/icons/Layers'
import AssignmentIcon from '@material-ui/icons/Assignment'
import BarChartIcon from '@material-ui/icons/BarChart'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import {
  ListItemAvatar,
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'

const drawerWidth = 240

const drawerList = [
  { Icon: DashboardIcon, label: 'Dashboard' },
  { Icon: ShoppingCartIcon, label: 'Orders' },
  { Icon: PeopleIcon, label: 'Customers' },
  { Icon: BarChartIcon, label: 'Reports' },
  { Icon: LayersIcon, label: 'Integration' },
]

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  grow: {
    flexGrow: 1,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    zIndex: 100000,
  },
  table: {
    minWidth: 650,
  },
  appBarSpacer: theme.mixins.toolbar,
}))

const DashboardDrawer = ({ open, handleDrawerClose }) => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Drawer
      variant='permanent'
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {drawerList.map(({ Icon, label }) => (
          <ListItem button key={label}>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText secondary='Saved reports' />
        </ListItem>
        {['Current month', 'Last quarter', 'Year-end sale'].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </Drawer>
  )
}

export default DashboardDrawer
