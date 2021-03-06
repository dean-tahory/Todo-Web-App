import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



const styles = (theme) => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  menuButton: {
    marginRight: theme.spacing(2), 
  },
  title: {
    flexGrow: 1,
  },
});

class Header extends React.Component {
    render() {

        const {classes} = this.props;
        return(
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                         <MenuIcon />
                     </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        ToDo
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Header);