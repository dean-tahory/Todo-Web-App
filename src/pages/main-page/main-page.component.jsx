import React from 'react'
import { withStyles } from "@material-ui/core/styles";

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Item from '../../components/item/item.component'
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';




const styles = (theme) => ({
    mainPage:{
        paddingTop: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3)

    },
    list: {
        backgroundColor: theme.palette.background.paper,
    },
    textField: {
        width: "100%"
    },
    addButton: {
        marginTop: theme.spacing(3),
    },
    title: {
        margin: theme.spacing(4, 0, 2)
    }
  });
  
  class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            todos: [
                {
                    title: 'I am rich',
                    id: 1,
                    done: false
                },
                {
                    title: 'I am powerful',
                    id: 2,
                    done: false
                },
                {
                    title: 'I am millionaire',
                    id: 3,
                    done: false
                },
                {
                    title: 'I am abundant',
                    id: 4,
                    done: true
                }
            ],

            valueField: '', 
            idcounter: 4
        }
    }


    onTextChange = event => {
        this.setState((pervState)=>({valueField: event.target.value, pervState}))
    }

    addTaskHandler = event => {
        //add only if there is text
        if(this.state.valueField){
        this.setState((pervState)=>({idcounter: ++pervState.idcounter,valueField: '', todos: [...pervState.todos,
            {
                title: `${pervState.valueField}`,
                id: pervState.idcounter,
                done: false
            }
        ]}), ()=> console.log(this.state))}
        
    }


    onCheckboxClicked = id => {
        this.setState(pervState => {
            const newList = pervState.todos.map(item => {
                if(item.id===id)
                    return {done: !item.done, title: item.title, id: item.id}
                return item;
            });
            return({todos: newList})
        });
    }

      render() {
  
          const {classes} = this.props;
          return(
            <div className={classes.mainPage}>
            <Grid container spacing='3' direction="row">
                <Grid container direction="row" item xs='12' sm='4'>
                    <Grid item xs='12' sm='12   '>
                        <List className={classes.list} >
                            {this.state.todos.filter(item => !item.done).map(item=><Item key={item.id} title={item.title} id={item.id} onCheckboxClicked={()=> this.onCheckboxClicked(item.id)} />)}
                        </List>
                    </Grid>
                    <Grid item xs='12' sm='12'>
                    <Typography className={classes.title} variant="h6">Done</Typography>
                        <List className={classes.list} >
                            {this.state.todos.filter(item => item.done).map(item=><Item key={item.id} title={item.title} id={item.id} done={item.done} onCheckboxClicked={()=> this.onCheckboxClicked(item.id)} />)}
                        </List>
                    </Grid>
                </Grid>
                <Grid item xs='12' sm='8' >
                    <TextField
                     className={classes.textField}
                     variant='outlined'
                     placeholder='Add note here...'
                     multiline
                     minRows={5}
                     maxRows={20}
                     onChange={this.onTextChange}
                     />
                    <Button variant="outlined" className={classes.addButton} onClick={this.addTaskHandler}>add</Button>
                </Grid>

            </Grid>
            </div>
          )
      }
  }
  
  export default withStyles(styles)(MainPage);