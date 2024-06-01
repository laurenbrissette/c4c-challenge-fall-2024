import React from 'react';

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

function PartnerTile(partnerData) {

  return (
    <div className="partner-tile">
      {Object.values(partnerData).map(i => {
          return <p>{i.item.name}</p>;
        })}
      <img className="partner-thumbnail" src='' />
      <hr />
      <div id="demo" className="partner-info">
        {Object.values(partnerData).map(i => {
          return <p>{i.item.description}</p>;
        })}
      </div>
    </div>
  )
}

export default PartnerTile;