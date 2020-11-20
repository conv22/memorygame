import React  from 'react'

export default function Game(props) {
    return (
        <div id='game'>
            {props.newcards.map(card => {
                return <div 
                key={card.name} 
                className='item'> 
                <div className='cardDiv'onClick={() => {props.pick(card.name)}}><img className='cardImage' src={card.src}/> </div> 
                </div>
            })}
            
        </div>
    )
}
