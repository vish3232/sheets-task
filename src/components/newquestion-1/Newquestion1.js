import React, { useState } from 'react'
import './Newquestion1.css'
import search from '../../assets/icons/search.svg'
import tag from "../../assets/icons/tag.svg";

function Newquestion1() {

    const arr = ["UI UX", "Something", "Mobile", "Something", "Web"]
    const [active, setActive] = useState(false)

    return (
        <div className="temp">
            <div className="newquestion1-container">

                <div className="header">
                    <div className="title">
                        {/* <img src={avatar} alt="" /> */}



                        <div className="group">
                            <span>Basic Details</span>
                            <p>Basic details include all important small details</p>
                        </div>
                    </div>

                    <button className="save">
                        Next
                        <div className="arrow">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill="white" />
                                <svg className='arrow' width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11.2661L7 6.61302L1 1.95996" stroke="#00C49A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </svg>
                        </div>

                    </button>
                </div>
                <div className="newquestion1-form">
                    <div className="row">
                        <div className="input">
                            <span>Question Title</span>
                            <input type="text" placeholder='Question Title Here' />
                            <div className='errorMessage'></div>
                        </div>
                    </div>
                    <div className="row2">
                        <div className="input">
                            <span>Score</span>
                            <input type="text" placeholder='Enter Maximum Score' />
                            <div className='errorMessage'></div>
                        </div>
                        <div className="input">
                            <span>Difficulty</span>
                            <div className="button-difficulty">
                                <button className='active-button'><svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5737 3.14153C9.60324 2.14278 8.41202 1.38565 7.09577 0.931013C7.02734 0.911575 6.95474 0.912363 6.88675 0.933284C6.81876 0.954205 6.75828 0.994362 6.71261 1.04891C6.66767 1.10391 6.63959 1.17073 6.63175 1.24133C6.6239 1.31192 6.63663 1.38327 6.6684 1.4468C7.44822 2.88907 7.6661 4.5691 7.27998 6.16258C7.27361 6.18729 7.25939 6.20928 7.23946 6.22522C7.21953 6.24116 7.19496 6.25021 7.16945 6.251C7.10314 6.251 7.0884 6.251 7.0884 6.19942C6.52577 4.83612 5.57846 3.66608 4.36209 2.83206C4.30008 2.79116 4.22714 2.76997 4.15287 2.77126C4.07859 2.77255 4.00644 2.79627 3.94588 2.8393C3.88532 2.88232 3.83918 2.94266 3.81352 3.01237C3.78786 3.08209 3.78388 3.15793 3.80209 3.22995C4.23683 4.93205 3.3821 5.95626 2.32841 7.2531C1.27473 8.54994 0 10.0678 0 12.5141C0.0258836 14.0773 0.575961 15.5865 1.56202 16.7997C2.54808 18.0129 3.91299 18.8598 5.43788 19.2046C5.12703 18.9852 4.87274 18.6951 4.69595 18.3582C4.51916 18.0213 4.42494 17.6472 4.42104 17.2668C4.42104 13.332 6.99998 12.352 6.99998 12.352C7.51577 14.931 9.57892 15.5204 9.57892 17.2668C9.57523 17.6428 9.4833 18.0127 9.31052 18.3468C9.13775 18.6808 8.88896 18.9696 8.58419 19.1899C9.6652 18.9554 10.6753 18.4681 11.5315 17.7678C12.3068 17.1251 12.9302 16.3187 13.357 15.4066C13.7838 14.4944 14.0034 13.4991 14 12.492C14 7.56257 12.1358 4.6889 10.5737 3.14153Z" fill="#00C49A" />
                                </svg>
                                    Easy</button>
                                <button className='button'> <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5737 3.14153C9.60324 2.14278 8.41202 1.38565 7.09577 0.931013C7.02734 0.911575 6.95474 0.912363 6.88675 0.933284C6.81876 0.954205 6.75828 0.994362 6.71261 1.04891C6.66767 1.10391 6.63959 1.17073 6.63175 1.24133C6.6239 1.31192 6.63663 1.38327 6.6684 1.4468C7.44822 2.88907 7.6661 4.5691 7.27998 6.16258C7.27361 6.18729 7.25939 6.20928 7.23946 6.22522C7.21953 6.24116 7.19496 6.25021 7.16945 6.251C7.10314 6.251 7.0884 6.251 7.0884 6.19942C6.52577 4.83612 5.57846 3.66608 4.36209 2.83206C4.30008 2.79116 4.22714 2.76997 4.15287 2.77126C4.07859 2.77255 4.00644 2.79627 3.94588 2.8393C3.88532 2.88232 3.83918 2.94266 3.81352 3.01237C3.78786 3.08209 3.78388 3.15793 3.80209 3.22995C4.23683 4.93205 3.3821 5.95626 2.32841 7.2531C1.27473 8.54994 0 10.0678 0 12.5141C0.0258836 14.0773 0.575961 15.5865 1.56202 16.7997C2.54808 18.0129 3.91299 18.8598 5.43788 19.2046C5.12703 18.9852 4.87274 18.6951 4.69595 18.3582C4.51916 18.0213 4.42494 17.6472 4.42104 17.2668C4.42104 13.332 6.99998 12.352 6.99998 12.352C7.51577 14.931 9.57892 15.5204 9.57892 17.2668C9.57523 17.6428 9.4833 18.0127 9.31052 18.3468C9.13775 18.6808 8.88896 18.9696 8.58419 19.1899C9.6652 18.9554 10.6753 18.4681 11.5315 17.7678C12.3068 17.1251 12.9302 16.3187 13.357 15.4066C13.7838 14.4944 14.0034 13.4991 14 12.492C14 7.56257 12.1358 4.6889 10.5737 3.14153Z" fill="#FF9736" />
                                </svg>
                                    Medium</button>
                                <button className='button'><svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5737 3.14153C9.60324 2.14278 8.41202 1.38565 7.09577 0.931013C7.02734 0.911575 6.95474 0.912363 6.88675 0.933284C6.81876 0.954205 6.75828 0.994362 6.71261 1.04891C6.66767 1.10391 6.63959 1.17073 6.63175 1.24133C6.6239 1.31192 6.63663 1.38327 6.6684 1.4468C7.44822 2.88907 7.6661 4.5691 7.27998 6.16258C7.27361 6.18729 7.25939 6.20928 7.23946 6.22522C7.21953 6.24116 7.19496 6.25021 7.16945 6.251C7.10314 6.251 7.0884 6.251 7.0884 6.19942C6.52577 4.83612 5.57846 3.66608 4.36209 2.83206C4.30008 2.79116 4.22714 2.76997 4.15287 2.77126C4.07859 2.77255 4.00644 2.79627 3.94588 2.8393C3.88532 2.88232 3.83918 2.94266 3.81352 3.01237C3.78786 3.08209 3.78388 3.15793 3.80209 3.22995C4.23683 4.93205 3.3821 5.95626 2.32841 7.2531C1.27473 8.54994 0 10.0678 0 12.5141C0.0258836 14.0773 0.575961 15.5865 1.56202 16.7997C2.54808 18.0129 3.91299 18.8598 5.43788 19.2046C5.12703 18.9852 4.87274 18.6951 4.69595 18.3582C4.51916 18.0213 4.42494 17.6472 4.42104 17.2668C4.42104 13.332 6.99998 12.352 6.99998 12.352C7.51577 14.931 9.57892 15.5204 9.57892 17.2668C9.57523 17.6428 9.4833 18.0127 9.31052 18.3468C9.13775 18.6808 8.88896 18.9696 8.58419 19.1899C9.6652 18.9554 10.6753 18.4681 11.5315 17.7678C12.3068 17.1251 12.9302 16.3187 13.357 15.4066C13.7838 14.4944 14.0034 13.4991 14 12.492C14 7.56257 12.1358 4.6889 10.5737 3.14153Z" fill="#FF9736" />
                                </svg>
                                    Hard</button>
                            </div>
                        </div>
                    </div>
                    <div className="row3">
                        <div className="skills-container">
                            <div className="input">
                                <span>Skills</span>
                                <input type="text" placeholder='@something_here' />
                                <div className="image">
                                    <img className='search' src={search} alt="" />
                                    <img className='tag' src={tag} alt="" />
                                </div>

                            </div>
                            <div className="skills-tag">

                                {arr.map((text) => {
                                    return (

                                        <button className='skill-button'> {text}
                                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">/*#00C49A"*/
                                                <circle cx="10" cy="10.5" r="10" fill="#F8F8F8" />
                                                <path d="M13 7.5L7 13.5" stroke="#DDDDDD" stroke-linecap="round" />
                                                <path d="M13 13.5L7.00019 7.50019" stroke="#DDDDDD" stroke-linecap="round" />
                                            </svg>
                                        </button>

                                    )
                                })}
                            </div>
                        </div>
                        <div className="topics-container">
                            <div className="input">
                                <span>Topics</span>
                                <input type="text" placeholder='@something_here' />
                                <div className="image">
                                    <img className='search' src={search} alt="" />
                                    <img className='tag' src={tag} alt="" />
                                </div>

                            </div>
                            <div className="topics-tag">

                                {arr.map((text) => {
                                    return (
                                        <button className='topics-button'> {text}
                                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">/*#00C49A"*/
                                                <circle cx="10" cy="10.5" r="10" fill="#F8F8F8" />
                                                <path d="M13 7.5L7 13.5" stroke="#DDDDDD" stroke-linecap="round" />
                                                <path d="M13 13.5L7.00019 7.50019" stroke="#DDDDDD" stroke-linecap="round" />
                                            </svg>
                                        </button>

                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newquestion1