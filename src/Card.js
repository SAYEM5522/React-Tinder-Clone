import React from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCard.css'
const Card = ({name,url}) => {
    return (
        <div className="card__cardcontains">
        <TinderCard
        className="swipe"
        key={name}
        preventSwipe={['up','down']}
        >
        <div style={{backgroundImage:`url(${url})`}}className="card">
            <h3>{name}</h3>
        </div>
        </TinderCard>
        </div>
        )

}

export default Card
