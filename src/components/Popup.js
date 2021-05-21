import React from 'react';

function Popup({selected, closePopup}) {
    return (
        <selection className="popup">
            <div className= "çontent">
                <h2>{selected.Title} <span>({selected.listingType})</span></h2>
                <p className = "rating">Rating: {selected.imdbRating}</p>
                <div className="plot">
                    <img src={selected.Poster}></img>
                    <p>{selected.Plot}</p>
                </div>
                <button className="close" onClick={closePopup}></button>
            </div>
        </selection>
    )
}

export default Popup;