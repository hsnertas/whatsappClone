import React from 'react';
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVert from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFile from "@material-ui/icons/AttachFile";
import SidebarChat from "./SidebarChat";
function Chat() {
    return (
        <div className="chat">
           <div className='chat__header'>
               <Avatar/>
               <div className="chat__headerInfo">
                   <h3>Room name</h3>
                   <p>Last seen at...</p>
               </div>
               <div className="chat__headerRight">
               <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
               </div>
           </div>
        </div>
    )
}

export default Chat
