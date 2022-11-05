import React from 'react'
import './Newquestion2.css'
import search from '../../assets/icons/search.svg'
import tag from "../../assets/icons/tag.svg";


function Newquestion2() {
    return (
        <div className="temp">
            <div className="newquestion1-container">

                <div className="header">
                    <div className="title">
                        {/* <img src={avatar} alt="" /> */}



                        <div className="group">
                            <span>Create Question</span>
                            <p>Write problem statement and solutions</p>
                        </div>
                    </div>

                    <div className="btn-container">
                        <button className="back">
                            <div className="arrow">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="10" fill="white" />
                                    <svg className='arrow' width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 11.2661L7 6.61302L1 1.95996" stroke="#00C49A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </svg>
                            </div>
                            Back
                        </button>
                        <button className="next">
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
                </div>
                <div className="newquestion1-form">
                    <div className="row">
                        <div className="input">
                            <span>Problem Statement</span>

                            <textarea type="text" placeholder='Your Problem Statement here:
                            

                            Case 1: Something here
                            Case 2: Something here

                            <script type="module" src="new_tab_page.js"></script>
                            <link rel="stylesheet" href="chrome://resources/css/text_defaults_md.css">
                            <link rel="stylesheet" href="shared_vars.css">'></textarea>
                            <div className='errorMessage'></div>
                        </div>
                    </div>
                    <div className="row2">
                        <div className="input">
                            <div className="solution-bar">
                                <span>Solution</span>
                                <div className="checkbox">
                                    <input type="checkbox" />
                                    <span>Allow Multiple Answers</span>
                                </div>
                            </div>
                            <input type="text" placeholder='Enter Maximum Score' />
                            <div className='errorMessage'></div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Newquestion2