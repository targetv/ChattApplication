import React from 'react';
import {useState} from "react";
import NewMessage from './Messsage';

import { makeStyles } from '@material-ui/core/styles';
import {Divider, List, Paper, TextField, Button} from "@material-ui/core"



 const myStyles = makeStyles({
    messageContainer: {
        width: "80%",
        height: "80vh",
        display: "grid",
        gridTemplateRows: "10fr 10px 1fr",

    },

    list:{
        overflow: "scroll",
        padding: "20px"

    },

    messageInputContainer: {
        display: "grid",
        gridTemplateColumns: "80% 20%",
        padding: "10px",
        gridGap: "10px"
    },
    messageInput:{
        alignSelf: "center",
        justifySelf: "center",
        width: "100%"
    },

    button:{
        width: "80%",
        placeSelf: "center",
    },

    divider:{
        alignSelf: "center"
    }

 })

 




 export type Message = {
    message: string,
    imageUrl: string
}


function MessagesComponent() {


const classes = myStyles();
    
    const [messages, setMessages] = useState<Message[]>([{ message: "Hello World", imageUrl: "https://material-ui.com/static/images/avatar/2.jpg" }, {message: "Test Message", imageUrl: "https://material-ui.com/static/images/avatar/2.jpg"}]);

    return (
            <Paper className={classes.messageContainer}>
            <List component="nav">
                {messages.map(message => <NewMessage message={message}/>)}
                </List>
                <Divider className={classes.divider}/>
                <div className={classes.messageInputContainer}>
                <TextField id="outlined-basic-email" label="Type Something" className={classes.messageInput}  />
                <Button variant="contained" className={classes.button}>Send Message</Button>
                </div>
                </Paper>
        
        
    );
}

export default MessagesComponent;