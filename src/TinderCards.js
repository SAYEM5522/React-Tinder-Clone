import React, { useEffect, useState } from 'react';
import './TinderCards.css';
import Card from './Card'
import db from './firebase';

const TinderCards = () => {
    const [people,setPeople]=useState([])

        
    useEffect(()=>{
     
        db.collection("5522").onSnapshot((snapshot)=>{
            setPeople(snapshot.docs.map((doc)=>(doc.data())
            ))
        })
    },[])
    return (
        <div className="tindercards">
           {people.map((person)=>(
               <Card  name={person.name} url={person.url}
               />
           ))}
        </div>
    )
}

export default TinderCards
