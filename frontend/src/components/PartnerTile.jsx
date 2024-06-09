import React from 'react';

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

function PartnerTile(partnerData) {

  function DeleteTile() {
    fetch('http://localhost:4000/', {
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(partnerData.partnerData)
  }).then(response => JSON.stringify(response)).then(data =>
    console.log(data));
  }

  return (
    <>
    <div className="partner-tile">
      <img className="partner-thumbnail" src={partnerData.partnerData.thumbnailUrl} />
      <div className="top-line">
        <div className="partner-title">{partnerData.partnerData.name}</div>
        {partnerData.partnerData.isActive == true ? (
          <div className="active-indicator">Active</div>
        ) 
          : ( <div className="inactive-indicator">Inactive</div>)
        }
      </div>
      <div className="partner-info">
        {partnerData.partnerData.description}
      </div>
      <div className="center">
      <button className="delete-button" onClick={DeleteTile}>
        delete project
      </button>
      </div>
    </div>
    </>
  )
}
export default PartnerTile;