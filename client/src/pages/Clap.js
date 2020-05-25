import React, { useState, useEffect } from 'react';
import { ClapList } from '../components';

const Clap = () => {
  const [clapped, setClapped] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/articles/me/clapped`,{
      headers:{
        access_token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInVzZXJFbWFpbCI6ImFuYW5kYXB1amFAZ21haWwuY29tIiwiaWF0IjoxNTkwMDY5MDk2fQ.xgXkAyPdTbYz4hAFN8UPnaqpZWm0G7hsYhED1_Qc3_s`
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