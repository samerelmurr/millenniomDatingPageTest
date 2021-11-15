import React, { useState, useEffect } from 'react';
import './DatingCards.css';
import TinderCard from 'react-tinder-card';
import axios from "./axios";

function DatingCards() {
    //use state for cards 
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get("/millenniom/cards");

            setPeople(req.data);
        }

        fetchData();
    }, []);

    const swiped = (direction, nameToDelete) => {
        console.log("removing" + nameToDelete);
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen");
    }

    return (
        <div className="datingCards">
            <div className="TinderCardContainer">
                {people.map((person) => (
                    <TinderCard 
                        className="swipe" 
                        key={person.name} 
                        onSwipe={(dir) => swiped(dir, person.name)} 
                        onCardLeftScreen={() => outOfFrame(person.name)} 
                        preventSwipe={['up', 'down']}
                    >
                        <div  style={{backgroundImage: `url(${person.url})`}} className="card">
                            <h3 id="personName">{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>  
        </div>
    );
}

export default DatingCards;
