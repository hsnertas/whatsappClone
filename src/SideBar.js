import React from "react";
import "./Sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
function SideBar() {
  return (
    <div className="sidebar">
      <h4>I am sidebar</h4>
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
    </div>
  );
}

export default SideBar;
