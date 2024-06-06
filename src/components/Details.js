import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://imdb-backend-zw31.onrender.com/${id}`);
        console.log(response.data);
        setMovie(response.data);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className='details-container'>
      <h1 className='details-title'>{movie.title}</h1>
      <img className='details-image' src={movie.imageUrl} alt={movie.title} />
      <div className='details-info'>
        <span className='details-rating'>Rating: {movie.rating}</span>
        <span className='details-date'>Release Date: {movie.releaseDate}</span>
      </div>
      <p className='details-description'>{movie.bigDescription}</p>
    </div>
  );
};

export default Details;
