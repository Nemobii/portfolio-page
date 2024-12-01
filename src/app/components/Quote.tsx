'use client'
import React, { useEffect, useState } from 'react'

const Quote = () => {
    const [joke, setJoke] = useState('');
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchJoke = async () => {
        try {
          const response = await fetch('https://api.chucknorris.io/jokes/random');
          const data = await response.json();
          setJoke(data.value);
        } catch (error) {
          console.error('Error fetching joke:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchJoke();
    }, []);

    return (
        <div className='text-white text-xl'>
            {loading ? <p></p> : <p>{joke}</p>}
        </div>
    )
}

export default Quote