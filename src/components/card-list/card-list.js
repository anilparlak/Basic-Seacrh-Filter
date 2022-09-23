import React from 'react';
import "./card-list.css";

const CardList = ({monsters}) => {

  return (
    <div className='card-list'>
        {monsters?.map((monster) => (
        <div className='card-container' key={monster.id}>
          <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt={`monsters ${monster.name}`} />
          <h2>{monster.name}</h2>
          <p>{monster.email} </p>
        </div>
      ))}
    </div>
  )
}

export default CardList