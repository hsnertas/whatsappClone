import React, { useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVert from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import MicIcon from "@material-ui/icons/Mic";
import axios from './axios';
function Chat({ messages }) {
const [input, setInput]=useState("");
const sendMessage= async (e)=>{
  e.preventDefault();
  await axios.post('/messages/new', {
    message:input,
    name:"Hasan",
    timestamp:"just now",
    received:false,
  })
}

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
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
        {messages.map((message) => (
          <p key={message._id} className={`chat__message ${message.received && "chat__reciever"}`}>
            <span className="chat__name">{message.name}</span>
{message.message}            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}

        {/* <p className="chat__message chat__reciever">
          <span className="chat__name">Hasan</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p> */}
      </div>
      <div className="chat__footer">
        <EmojiEmotionsOutlinedIcon />
        <form>
          <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Type a message" type="text" />
          <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
