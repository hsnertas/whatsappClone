import React, {useEffect} from "react";
import "./App.css";
import SideBar from "./SideBar";
import Chat from "./Chat";
import Pusher from "pusher-js";

function App() {
useEffect(()=>{
  const pusher = new Pusher('2ea69fe42b2f540e79f0', {
    cluster: 'us2'
  });

  const channel = pusher.subscribe('messages');
  channel.bind('inserted', (data)=> {
    alert(JSON.stringify(data));
  });
}, [])
  return (
    <div className="app">
      <div className="app__body">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
