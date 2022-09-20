import { useState } from 'react';
import './Popup.css';

const Popup = () => {
    const [showPopup, setShowPopup] = useState(true)
    return (
        <div>
            {showPopup ?

                <div class="popup">
                    <p>This website is built with dummy data for learning purpose</p>
                    <button class="ok-btn" onClick={() => setShowPopup(false)}>OK</button>
                </div>
                :
                null
            }
        </div>
    )
}

export default Popup;