import React, { useState, useEffect } from 'react';
import { ClapList } from '../components';
import url from '../url';
import { useHistory } from 'react-router-dom';

const Clap = () => {
  const history = useHistory();
  if(!localStorage.getItem('access_token')){
    history.push('/');
  }

  const [clapped, setClapped] = useState([]);

  useEffect(() => {
    fetch(`${url}/articles/me/clapped`,{
      headers:{
        access_token: localStorage.getItem('access_token')
      }
    })
      .then(res => res.json())
      .then(data => setClapped(data))
      .catch(console.log)
  },[]);

  return <>
    <div className="clapped-container">
      <div>
        <h2>Your Clapped Articles.</h2>
      </div>
      {
        clapped.length === 0 ? (
          <p>Loading ...</p>
        ) : (
          clapped.map(clap => (
            <ClapList key={clap.id} clap={clap} />
          ))
        )
      }
    </div>
  </>
}

export default Clap;