import { EditLocation, Help, Notifications, PeopleAltRounded, Search, SearchRounded, Send } from '@material-ui/icons'
import React from 'react'
import './ChatHeader.css'
function ChatHeader() {
  return (
    <div className='chatHeader'>
      <div className="chatHeader__left">
        <h3>
          <span className='chatHeader__hash'>#</span>
          Test Channel Name
        </h3>
      </div>
      <div className='chatHeader__right'>
        <Notifications className='notif'/>
        <EditLocation className='editLocation'/>
        <PeopleAltRounded className='peopleAltRounded'/>
      </div>
      <div className="chatHeader__search">
        <input placeholder='Search' type="search" />
        <Search className='search'/>
      </div>
        <Send className='send'/>
        <Help className='help'/>
      
    </div>
  )
}

export default ChatHeader