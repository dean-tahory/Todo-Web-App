import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
  item: {
    width: '100%',
    maxWidth: 360,
  },
  itemTitle:{
      textDecoration: 'line-through',
  }
}));

const Item = ({title, id, onCheckboxClicked, done}) => {

    const classes = useStyles();
    

    return (
        <div className='classes.item '>
        <ListItem >
            <ListItemAvatar>
                <Avatar>
                    <ImageIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={title} secondary={id} style={{textDecoration: `${done ? 'line-through' : ''}`}} />
            <ListItemSecondaryAction>
                <Checkbox
                    onChange={onCheckboxClicked}
                    edge="end"
                    checked={done}
                />
            </ListItemSecondaryAction>
      </ListItem>
      </div>
    )
}

export default Item;