import React from 'react';
import './card-styles.css'

export const Card = (props) => {
    return(
        <div className = 'card-container'>
            <img className = 'image' alt = 'random' src={`https://thronesapi.com/assets/images/${props.character.image}`}/>
             <p> {props.character.firstName + ' ' + props.character.lastName}</p>
             <p>{props.character.title}</p>

        </div>

    )
}

export default Card;