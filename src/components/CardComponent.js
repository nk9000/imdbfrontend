import React from 'react';
import { Link } from 'react-router-dom';

const CardComponent = ({ el }) => {
  return (
    <div className='ui'>
      <div className='uileft'>
        <h3>{el.title}</h3>
        <img src={el.imageUrl} alt={el.title} style={{ width: '10rem', height: '10rem', marginTop: '0.75rem', border: '1.5px solid grey', borderRadius: '1.5rem' }} />
      </div>
      <div className='uiright'>
        {el.description}
        <Link to={`/details/${el._id}`}>
          <button style={{ marginTop: '0.75rem'  , backgroundColor:'yellow' , padding:'0.5rem'}} className='buttonui'>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default CardComponent;
