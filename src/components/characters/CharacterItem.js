import React from 'react';

const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.flag} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name} </h1>
          <ul>
            <li>
              <strong>Capital: </strong>
              {item.capital}
            </li>
            <li>
              <strong>Region: </strong>
              {item.region}
            </li>
            <li>
              <strong>Population: </strong>
              {item.population}
            </li>
            <li>
              <strong>Currency: </strong>
              {item.currencies[0].name}
            </li>
            {/* <li>
              <strong>Languages: </strong>
              {item.langulages.map((eachItem, i) => (
                <ul>
                  <li key={i}>{eachItem.name}</li>
                </ul>
              ))}
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
