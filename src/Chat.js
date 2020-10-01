import React from 'react';
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVert from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFile from "@material-ui/icons/AttachFile";
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import MicIcon from "@material-ui/icons/Mic"
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
           <div className="chat__body">
             <p className="chat__message">
               <span className="chat__name">Hasan</span>
               This is a message
    <span className="chat__timestamp">{new Date().toUTCString()}</span>
               
               </p>
               <p className="chat__message chat__reciever">
               <span className="chat__name">Hasan</span>
               This is a message
    <span className="chat__timestamp">{new Date().toUTCString()}</span>
               
               </p>
           </div>
           <div className="chat__footer">
             <EmojiEmotionsOutlinedIcon/>
             <form>
               <input placeholder="Type a message" type="text"/>
               <button type="submit">Send a message</button>
             </form>
             <MicIcon/>
           </div>
        </div>
    )
}

export default Chat
