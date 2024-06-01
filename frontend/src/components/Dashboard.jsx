import { useState, useEffect } from 'react';
import React from 'react';

/*
  The top-level component containing everything relevant to the dashboard,
  including information on each partner
*/
function Dashboard() {

  const [partners, setPartners] = useState({});

  // Load all partners on initial page load 
  useEffect(() => {
    fetch('http://localhost:4000', {
      method: 'GET',
    }).then((res) => res.json()
    ).then(
      data => {
        setPartners(data)
      }
    )
  }, [])

  return (
    <div id="main-content">
      <div id="main-partners-grid">
        <ul>
          {partners.map(item => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;