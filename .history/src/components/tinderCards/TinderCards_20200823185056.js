import React, { useState } from 'react';
import "./TinderCards.css"
import TinderCard from "react-tinder-card"

const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            name:"alan share",
            url:"https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            name:"johny cash",
            url:"https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
    ]);


    return (
        <div className="tinderCards">
            {people.map(person=>(
                <TinderCard>
                    <div style={{backgroundImage:`url(${person.url})`}} className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    );
};

export default TinderCards;