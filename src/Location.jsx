import * as React from 'react';
import './Location.css';

const Location = (props) => {
    return (
        <div className='location-info-container'>
            <div className="location-pic">
                <img src={props.data.locationUrl} alt='location-pic' />

            </div>
            <div className='loc-name-rating'>
                <h4>{props.data.locationName}</h4>
                <div className='rating'>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "12px", width: "12px" }}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path></svg>
                    <span>{props.data.rating}</span>
                </div>
            </div>
            <div className='distance'>
                <span className='loc-distance'>{props.data.locationDistance}</span>
                <span className='date'>{props.data.availableDate}</span>
                <span className='price'>{props.data.price}<span> night</span></span>
            </div>
        </div>
    )
}

export default Location;