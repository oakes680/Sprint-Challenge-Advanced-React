import React from 'react'

const Card = (props) => {
    return (
        <div className="border2 card">
            <p>{props.player.name}</p>
            <p>{props.player.country}</p>
            <p>{props.player.searches}</p>
        </div>
    )
}

export default Card
