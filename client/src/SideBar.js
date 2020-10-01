import React from "react";
import "./Sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from "./SidebarChat";
function SideBar() {
  return (
    <div className="sidebar">
     
      <div className="sidebar__header">
      <Avatar src="https://avatars1.githubusercontent.com/u/61996861?s=460&u=33f721345c831fed83eb8a92cb3a289680bad660&v=4" alt="avatar"/>
        <div className="sidebar__headerRight">
            
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
          <div className="sidebar__searchContainer">
          <SearchOutlinedIcon/>
          <input placeholder="Search or start new chat" type="text" />
          </div>
      </div>
      <div className="sidebar__chats">
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
      </div>
    </div>
  );
}

export default SideBar;
