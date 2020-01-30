import React from 'react'

const BackOfCard = ({handleClick}) => {
    return (
        <div className='border2 card'>
            <p>Don't look back here!!!!!!</p>
            <button onClick={handleClick}>flip me</button>
        </div>
    )
}

export default BackOfCard
