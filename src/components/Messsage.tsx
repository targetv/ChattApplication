import React from 'react';
import { Message } from './MessagesComponent';
import {ListItem, ListItemIcon, ListItemText, Avatar} from "@material-ui/core"


type MessageType = {
    message: Message
}

function NewMessage({message}: MessageType) {
    return (
        <ListItem>
            <ListItemIcon>
                <Avatar>
                <Avatar alt="Cindy Baker" src={message.imageUrl} />
                </Avatar>
                </ListItemIcon>
            <ListItemText primary={message.message}></ListItemText>
         </ListItem>
    );
}

export default NewMessage;