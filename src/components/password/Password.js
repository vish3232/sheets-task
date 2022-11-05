import React, { useState } from 'react'
import './Password.css'
import avatar from '../../assets/icons/Avatar.svg'
import avatar2 from '../../assets/images/avatar.svg'
import save from "../../assets/icons/save.svg";


function Password() {
    const [passwordView, setPasswordView] = useState(true)
    const [passwordView2, setPasswordView2] = useState(true)
    const [passwordView3, setPasswordView3] = useState(true)

    return (

        <div className="temp">
            <div className="password-container">

                <div className="header">
                    <div className="title">

                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="24" fill="#00C49A" fill-opacity="0.1" />
                            <path d="M30.4167 22.083H17.5833C16.5708 22.083 15.75 22.9038 15.75 23.9163V30.333C15.75 31.3455 16.5708 32.1663 17.5833 32.1663H30.4167C31.4292 32.1663 32.25 31.3455 32.25 30.333V23.9163C32.25 22.9038 31.4292 22.083 30.4167 22.083Z" stroke="#00C49A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19.418 22.083V18.4163C19.418 17.2008 19.9009 16.035 20.7604 15.1754C21.6199 14.3159 22.7857 13.833 24.0013 13.833C25.2169 13.833 26.3827 14.3159 27.2422 15.1754C28.1018 16.035 28.5846 17.2008 28.5846 18.4163V22.083" stroke="#00C49A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>


                        <div className="group">
                            <span>Password</span>
                            <p>Change and keep secure password</p>
                        </div>
                    </div>

                    <button className="save">
                        <img src={save} alt="save" />
                        Reset
                    </button>
                </div>
                <div className="profile-form">
                    <div className="row" style={{ marginTop: "29px" }}>
                        <div className="input">
                            <span>Current Password</span>
                            <input type={passwordView ? "password" : "text"} placeholder='#Something123' />
                            <svg className='user' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.25 8.25H3.75C2.92157 8.25 2.25 8.92157 2.25 9.75V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V9.75C15.75 8.92157 15.0784 8.25 14.25 8.25Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.25 8.25V5.25C5.25 4.25544 5.64509 3.30161 6.34835 2.59835C7.05161 1.89509 8.00544 1.5 9 1.5C9.99456 1.5 10.9484 1.89509 11.6517 2.59835C12.3549 3.30161 12.75 4.25544 12.75 5.25V8.25" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            {passwordView ? <svg onClick={() => { setPasswordView(!passwordView) }} className='eye' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2085_2053)">
                                    <path d="M1.54297 10.9206C1.54297 10.9206 4.8763 4.25391 10.7096 4.25391C16.543 4.25391 19.8763 10.9206 19.8763 10.9206C19.8763 10.9206 16.543 17.5872 10.7096 17.5872C4.8763 17.5872 1.54297 10.9206 1.54297 10.9206Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10.7109 13.4209C12.0916 13.4209 13.2109 12.3016 13.2109 10.9209C13.2109 9.54019 12.0916 8.4209 10.7109 8.4209C9.33023 8.4209 8.21094 9.54019 8.21094 10.9209C8.21094 12.3016 9.33023 13.4209 10.7109 13.4209Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2085_2053">
                                        <rect width="20" height="20" fill="white" transform="translate(0.710938 0.920898)" />
                                    </clipPath>
                                </defs>
                            </svg> :
                                <svg onClick={() => { setPasswordView(!passwordView) }} className='eye' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2085_2029)">
                                        <path d="M14.9487 14.9497C13.5242 16.0355 11.7896 16.6371 9.9987 16.6664C4.16536 16.6664 0.832031 9.99969 0.832031 9.99969C1.86861 8.06794 3.30631 6.3802 5.0487 5.0497M8.2487 3.53303C8.82231 3.39876 9.40959 3.33164 9.9987 3.33303C15.832 3.33303 19.1654 9.99969 19.1654 9.99969C18.6595 10.946 18.0562 11.837 17.3654 12.658M11.7654 11.7664C11.5365 12.012 11.2605 12.209 10.9538 12.3456C10.6472 12.4823 10.3161 12.5557 9.98044 12.5617C9.64476 12.5676 9.31133 12.5058 9.00004 12.3801C8.68875 12.2544 8.40597 12.0672 8.16857 11.8298C7.93117 11.5924 7.74403 11.3096 7.61829 10.9984C7.49255 10.6871 7.4308 10.3536 7.43673 10.018C7.44265 9.68228 7.51612 9.35123 7.65276 9.04457C7.7894 8.7379 7.98641 8.4619 8.23203 8.23303" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M0.832031 0.833008L19.1654 19.1663" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2085_2029">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            }

                            <div className='errorMessage'></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input">
                            <span>New Password</span>
                            <input type={passwordView2 ? "password" : "text"} placeholder='#Something123' />
                            <svg className='user' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.25 8.25H3.75C2.92157 8.25 2.25 8.92157 2.25 9.75V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V9.75C15.75 8.92157 15.0784 8.25 14.25 8.25Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.25 8.25V5.25C5.25 4.25544 5.64509 3.30161 6.34835 2.59835C7.05161 1.89509 8.00544 1.5 9 1.5C9.99456 1.5 10.9484 1.89509 11.6517 2.59835C12.3549 3.30161 12.75 4.25544 12.75 5.25V8.25" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            {passwordView2 ? <svg onClick={() => { setPasswordView2(!passwordView2) }} className='eye' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2085_2053)">
                                    <path d="M1.54297 10.9206C1.54297 10.9206 4.8763 4.25391 10.7096 4.25391C16.543 4.25391 19.8763 10.9206 19.8763 10.9206C19.8763 10.9206 16.543 17.5872 10.7096 17.5872C4.8763 17.5872 1.54297 10.9206 1.54297 10.9206Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10.7109 13.4209C12.0916 13.4209 13.2109 12.3016 13.2109 10.9209C13.2109 9.54019 12.0916 8.4209 10.7109 8.4209C9.33023 8.4209 8.21094 9.54019 8.21094 10.9209C8.21094 12.3016 9.33023 13.4209 10.7109 13.4209Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2085_2053">
                                        <rect width="20" height="20" fill="white" transform="translate(0.710938 0.920898)" />
                                    </clipPath>
                                </defs>
                            </svg> :
                                <svg onClick={() => { setPasswordView2(!passwordView2) }} className='eye' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2085_2029)">
                                        <path d="M14.9487 14.9497C13.5242 16.0355 11.7896 16.6371 9.9987 16.6664C4.16536 16.6664 0.832031 9.99969 0.832031 9.99969C1.86861 8.06794 3.30631 6.3802 5.0487 5.0497M8.2487 3.53303C8.82231 3.39876 9.40959 3.33164 9.9987 3.33303C15.832 3.33303 19.1654 9.99969 19.1654 9.99969C18.6595 10.946 18.0562 11.837 17.3654 12.658M11.7654 11.7664C11.5365 12.012 11.2605 12.209 10.9538 12.3456C10.6472 12.4823 10.3161 12.5557 9.98044 12.5617C9.64476 12.5676 9.31133 12.5058 9.00004 12.3801C8.68875 12.2544 8.40597 12.0672 8.16857 11.8298C7.93117 11.5924 7.74403 11.3096 7.61829 10.9984C7.49255 10.6871 7.4308 10.3536 7.43673 10.018C7.44265 9.68228 7.51612 9.35123 7.65276 9.04457C7.7894 8.7379 7.98641 8.4619 8.23203 8.23303" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M0.832031 0.833008L19.1654 19.1663" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2085_2029">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            }
                            <div className='errorMessage'></div>
                        </div>
                        <div className="input">
                            <span>New Password</span>
                            <input type={passwordView3 ? "password" : "text"} placeholder='#Something123' />
                            <svg className='user' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.25 8.25H3.75C2.92157 8.25 2.25 8.92157 2.25 9.75V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V9.75C15.75 8.92157 15.0784 8.25 14.25 8.25Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.25 8.25V5.25C5.25 4.25544 5.64509 3.30161 6.34835 2.59835C7.05161 1.89509 8.00544 1.5 9 1.5C9.99456 1.5 10.9484 1.89509 11.6517 2.59835C12.3549 3.30161 12.75 4.25544 12.75 5.25V8.25" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            {passwordView3 ? <svg onClick={() => { setPasswordView3(!passwordView3) }} className='eye' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2085_2053)">
                                    <path d="M1.54297 10.9206C1.54297 10.9206 4.8763 4.25391 10.7096 4.25391C16.543 4.25391 19.8763 10.9206 19.8763 10.9206C19.8763 10.9206 16.543 17.5872 10.7096 17.5872C4.8763 17.5872 1.54297 10.9206 1.54297 10.9206Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10.7109 13.4209C12.0916 13.4209 13.2109 12.3016 13.2109 10.9209C13.2109 9.54019 12.0916 8.4209 10.7109 8.4209C9.33023 8.4209 8.21094 9.54019 8.21094 10.9209C8.21094 12.3016 9.33023 13.4209 10.7109 13.4209Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2085_2053">
                                        <rect width="20" height="20" fill="white" transform="translate(0.710938 0.920898)" />
                                    </clipPath>
                                </defs>
                            </svg> :
                                <svg onClick={() => { setPasswordView3(!passwordView3) }} className='eye' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2085_2029)">
                                        <path d="M14.9487 14.9497C13.5242 16.0355 11.7896 16.6371 9.9987 16.6664C4.16536 16.6664 0.832031 9.99969 0.832031 9.99969C1.86861 8.06794 3.30631 6.3802 5.0487 5.0497M8.2487 3.53303C8.82231 3.39876 9.40959 3.33164 9.9987 3.33303C15.832 3.33303 19.1654 9.99969 19.1654 9.99969C18.6595 10.946 18.0562 11.837 17.3654 12.658M11.7654 11.7664C11.5365 12.012 11.2605 12.209 10.9538 12.3456C10.6472 12.4823 10.3161 12.5557 9.98044 12.5617C9.64476 12.5676 9.31133 12.5058 9.00004 12.3801C8.68875 12.2544 8.40597 12.0672 8.16857 11.8298C7.93117 11.5924 7.74403 11.3096 7.61829 10.9984C7.49255 10.6871 7.4308 10.3536 7.43673 10.018C7.44265 9.68228 7.51612 9.35123 7.65276 9.04457C7.7894 8.7379 7.98641 8.4619 8.23203 8.23303" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M0.832031 0.833008L19.1654 19.1663" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2085_2029">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            }

                            <div className='errorMessage'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Password