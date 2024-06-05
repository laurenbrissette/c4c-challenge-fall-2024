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
      {partnerData.partnerData.name}
      <img className="partner-thumbnail" src='' />
      <hr />
      <button onClick={respond}>
        <img className="edit-symbol" src='/edit.png'></img>
      </button>
      <div id="demo" className="partner-info">
        {partnerData.partnerData.description}
      </div>
      <button onClick={DeleteTile}>
        click this to delete
      </button>
    </div>
    </>
  )
}

function respond() {
  return (
    <>
      {alert(0)}
    </>
  );
}

export default PartnerTile;