import React from 'react'
import './Chats.css';
import Chat from './Chat';
function Chats() {
    return (
        <div className='chats'>
            <Chat 
                name="Mark"
                message="Yooo, What's up bro !"
                timestamp = "48 minutes ago"
                profilePic="https://personaldatingassistants.com/wp-content/uploads/elementor/thumbs/nosmile-lookaway-n60tnhw905n9umtue0wyv7d99i0x0zjdqdxu8ovdmg.jpg"
            />
             <Chat 
                name="Ellen"
                message="How are you doing ?"
                timestamp = "1 hour ago"
                profilePic="https://i.pinimg.com/originals/81/a9/4a/81a94a7d0454d9ec58f1ea8db69d9b2e.jpg"
            />
             <Chat 
                name="Sandra"
                message="Ola !!!"
                timestamp = "1 day ago"
                profilePic="https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg"
            />
             <Chat 
                name="Natasha"
                message="Ooops, there is he is 😹 "
                timestamp = "2 days ago"
                profilePic="https://img.buzzfeed.com/buzzfeed-static/static/2019-02/19/12/asset/buzzfeed-prod-web-03/sub-buzz-9568-1550598412-1.png"
            />
             <Chat 
                name="Sarah"
                message="Hey, How are you ? 😇 "
                timestamp = "3 days ago"
                profilePic="https://data.whicdn.com/images/335839086/original.jpg"
            />
        </div>
    )
}

export default Chats
