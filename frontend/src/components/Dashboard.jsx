import { useState, useEffect } from 'react';
import React from 'react';
import PartnerTile from './PartnerTile';


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
        <p>cat</p>
        {partners.map(item => {
            return <p>{<PartnerTile partnerData={{item}} />}</p>
          })}
      </div>
    </div>
  )
}

export default Dashboard;