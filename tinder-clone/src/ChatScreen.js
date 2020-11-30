import React, { useState } from 'react';
import './ChatScreen.css';
import Avatar from '@material-ui/core/Avatar';

function ChatScreen() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: 'Emma',
            image: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQzMzAxODc2MTU3MjYxMzgz/emma-watson_gettyimages-619546914jpg.jpg',
            message: 'Whats up ?'
        },
        {
            name: 'Ellen',
            image: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQzMzAxODc2MTU3MjYxMzgz/emma-watson_gettyimages-619546914jpg.jpg',
            message: 'How r u doing'
        },
        {
            message: 'Hey How are you ?!'
        }
    ])

    // HANDLE SEND FUNCTION
    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, {message : input}]);
        setInput('')
    }
    return (
        <div className='chatscreen'>
            <p className='chatScreen__timestamp'>YOU MATCHED WITH EMMA ON 12/09/19</p>
            {messages.map(message => (
                message.name ? (
                    <div className='chatScreen__message'>
                    <Avatar className='chatScreen__image'
                            alt={message.name}  
                            src={message.image}
                    ></Avatar>
                    <p className='chatScreen__text'>{message.message}</p>
                </div>
                ) : (
                    <div className='chatScreen__message'>
                        <p className='chatScreen__textUser'>{message.message}</p>
                    </div>
                )
                
            ))}
            <div className='chatScreen__input__div'>
                <form className='chatScreen__input'>
                    <input value={input} 
                           onChange={e => setInput(e.target.value)} 
                           className='chatScreen__inputField' 
                           placeholder="type message..." 
                           type='text'>
                    </input>
                    <button 
                    className='chatScreen__inputButton' 
                    type='submit' 
                    onClick={handleSend}
                        >SEND
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ChatScreen
