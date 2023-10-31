import React from 'react'
import "./index.css"
import phone from "../images/phone.jpg"

const Download = () => {
    return (
        <div className='download'>
            <img src={phone} alt="phone" />
            <div className='tekst'>
                <h3>Download our app</h3>
                <h1>Get the Groceries app<br />  ordermore easily.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                    elit, sed do eiusmod tempor incididunt ut.</p>

                <div className='logos'>

                    <div className='theBox'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                            <rect x="0.193359" y="0.789551" width="43" height="43" rx="10" fill="#2E2E2E" />
                            <path d="M27.885 22.4158C27.8741 20.6125 28.714 19.2534 30.4102 18.2513C29.4615 16.9292 28.0263 16.2021 26.1345 16.0619C24.3432 15.9244 22.3834 17.0773 21.6658 17.0773C20.9074 17.0773 19.1732 16.1095 17.8087 16.1095C14.9927 16.1518 12 18.2936 12 22.6511C12 23.9388 12.2419 25.2688 12.7258 26.6385C13.3727 28.4417 15.7049 32.8601 18.1376 32.7887C19.4097 32.7596 20.3094 31.9108 21.9648 31.9108C23.5712 31.9108 24.403 32.7887 25.8219 32.7887C28.2764 32.7543 30.3857 28.7379 31 26.9293C27.7083 25.4195 27.885 22.5083 27.885 22.4158ZM25.0282 14.3512C26.4063 12.7594 26.2813 11.3104 26.2405 10.7896C25.0227 10.8583 23.6147 11.596 22.8129 12.5029C21.9295 13.476 21.4103 14.6791 21.5217 16.0355C22.8373 16.1333 24.0388 15.4749 25.0282 14.3512Z" fill="white" />
                        </svg>
                        <p>App Store</p>
                    </div>

                    <div className='theBox'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="45" viewBox="0 0 34 45" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M32.2533 19.236C34.5802 20.8241 34.5802 24.2558 32.2533 25.8438L6.25459 43.5874C3.5995 45.3994 -0.000244141 43.498 -0.000244141 40.2835V4.79639C-0.000244141 1.58189 3.59949 -0.319548 6.25458 1.4925L32.2533 19.236Z" fill="#2E2E2E" />
                            <path d="M12.0836 36.4922L32.036 22.208L24.4485 16.9547L12.0836 36.4922Z" fill="#FBF9FF" />
                            <path d="M21.9193 15.2036L12.3646 8.58826L18.8281 19.8827L21.9193 15.2036Z" fill="#FBF9FF" />
                        </svg>
                        <p>Play Store</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Download