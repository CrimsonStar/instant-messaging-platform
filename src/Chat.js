import React from 'react'
import ChatHeader from './ChatHeader'
import './Chat.css'
import Message from './Message'
import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@material-ui/icons'
function Chat() {
  return (
    <div className='chat'>
      <ChatHeader/>
      <div className="chat__messages">
        <Message/>
      </div>
      <div className="chat__input">
        <AddCircle fontSize='large'/>
        <form>
          <input placeholder= {'Message #TextChannel'} />
          <button type='submit' className='chat__inputButton'> Send Message</button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcard fontSize='large'/>
          <Gif fontSize='large'/>
          <EmojiEmotions fontSize='large'/>
        </div>
      </div>
    </div>
  )
}

export default Chat