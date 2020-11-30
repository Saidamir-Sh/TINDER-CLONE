import React, {useEffect, useState} from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import { SwipeableDrawer } from '@material-ui/core';
import database from './firebase'

function TinderCards() {
    const [people, setPeople] = useState([
       /* {
            name: "Emma",
            url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQzMzAxODc2MTU3MjYxMzgz/emma-watson_gettyimages-619546914jpg.jpg",
        },
        {
            name: "Anna",
            url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE4MDAzNDEwNDE0NDM3OTAy/anne-hathaway-565920-1-402.jpg",
        },
        {
            name: "Jon",
            url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NTU2MzE2NDkyNjI5NTE1/jon-stewart-16242282-1-402.jpg"
        },
        {
            name: "Robert",
            url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE4MDAzNDEwNzMzODYwMzY2/robert-downey-jr-9542052-1-402.jpg"
        },
        {
            name: "Scarlett",
            url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE4MDAzNDEwNzkxOTI1MjYy/scarlett-johansson-13671719-1-402.jpg"
        } */
    ]);

    useEffect(() => {
        database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen");
    };

    return (
        <div className='tinderCards'>
            <div className='tinderCards__cardContainer'>
                {people.map((person) => (
                   <TinderCard 
                    className='swipe'
                    key={person.name}
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                   >
                       <div style={{backgroundImage: `url(${person.url})`}}
                            className="card">
                                <h3>{person.name}</h3>
                       </div>
                   </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
