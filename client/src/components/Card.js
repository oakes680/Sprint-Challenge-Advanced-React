import React from 'react'

const Card = (props) => {
    return (
        <div>
            <p>{props.player.name}</p>
            <p>{props.player.country}</p>
            <p>{props.player.searches}</p>
        </div>
    )
}

export default Card
