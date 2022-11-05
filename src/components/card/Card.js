import React, { useState } from 'react'
import './Card.css'
import img from '../../assets/rightside.jpg'

function Card() {
    const [showImage, setShowImage] = useState(false)


    return (
        <div className="card-container">
            <div className="card" onClick={() => { setShowImage(!showImage) }}>
                <div className="top">
                    <div className="date">27 june 2022</div>
                    <div className="button">
                        <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15.5" cy="15" r="15" fill="#FF6812" />
                            <path d="M12.1934 12.8057L17.6931 18.3054" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.1934 18.3057L17.6931 12.8059" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div>

                </div>
                <div className="heading">
                    <span>Introducing New Feature</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit optio suscipit doloremque adipisci natus? Laudantium!</p>
                </div>
                {showImage ? <div className='image'> <img src={img} alt="" /> </div> : null}
            </div>
        </div>
    )
}

export default Card