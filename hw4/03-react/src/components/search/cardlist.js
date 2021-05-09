import React from 'react';
import './card-list-styles.css';
import {Card} from './card';

export const CardList = (props) => {
    return (
        <div className = 'card-list'>
           {props.results.map(character => (
             <Card key = {character.id} character = {character} />
           ))}              
        </div>

    )
      
}
export default CardList