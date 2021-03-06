import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import BackOfCard from './BackOfCard'


const Card = (props) => {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = (e) => {
        e.preventDefault();
        // setIsFlipped(prevState => ({ isFlipped: !prevState.isFlipped }));
        setIsFlipped(!isFlipped);
    }



    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="border2 card">
                <p>{props.player.name}</p>
                <p>{props.player.country}</p>
                <p>{props.player.searches}</p>
                <button onClick={handleClick}>click me</button>
            </div>
            
            <div>
                <BackOfCard handleClick={handleClick}/>
            </div>
        </ReactCardFlip>
    )
}

export default Card
