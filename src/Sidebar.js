
import { Avatar } from '@material-ui/core';
import { Add, Call, ExpandMore, Headset, InfoOutlined, Mic, Settings, SignalCellular0Bar, SignalCellular2Bar, SignalCellularAlt } from '@material-ui/icons';
import React from 'react';
import './Sidebar.css'
import SidebarChannel from './SidebarChannel';
function Sidebar() {
  return (
    <div className='Sidebar'>
      <div className='sidebar__top'>
        <h3>Clever Programmer</h3>
        <ExpandMore/>
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
          <ExpandMore/>
            <h4>Text Channels</h4>
          </div>
          <Add className="sidebar__addChannel"/>
        </div>
        <div className="sidebar__channelsList">
          <SidebarChannel/>
          <SidebarChannel/>
          <SidebarChannel/>
          <SidebarChannel/>
        </div>
      </div>
      <div className="sidebar__voice">
        <SignalCellularAlt className='sidebar__voiceIcon' fontSize='large'/>
        <div className='sidebar__voiceInfo'>
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className='sidebar__voiceIcons'>
          <InfoOutlined/>
          <Call/>
        </div>
        
      </div>
      <div className="sidebar__profile">
          <Avatar src='https://i.pinimg.com/originals/f4/5f/ed/f45fedbad7a5524a8c54766bfc02e7ae.png'/>
          <div className="sidebar__profileInfo">
            <h3>@Raja</h3>
            <p>#ThisIsMyId</p>
          </div>
          <div className="sidebar__profileIcons">
            <Mic/>
            <Headset/>
            <Settings/>
          </div>
        </div>
    </div>
  )
}

export default Sidebar

