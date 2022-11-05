import React from 'react'

function Newquestionsidebar() {
    return (
        <div className="sidebar-container">
            <div className="heading">
                <span>Step 1</span>
                <p>New Question</p>
            </div>
            <div className="button-container">
                <button className='active-button'> <svg className='user' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 15V13.5C15 12.7044 14.6839 11.9413 14.1213 11.3787C13.5587 10.8161 12.7957 10.5 12 10.5H6C5.20435 10.5 4.44129 10.8161 3.87868 11.3787C3.31607 11.9413 3 12.7044 3 13.5V15" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9 7.5C10.6569 7.5 12 6.15685 12 4.5C12 2.84315 10.6569 1.5 9 1.5C7.34315 1.5 6 2.84315 6 4.5C6 6.15685 7.34315 7.5 9 7.5Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg><span> Your Details</span></button>
                <button className='button'> <svg className='user' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.25 8.25H3.75C2.92157 8.25 2.25 8.92157 2.25 9.75V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V9.75C15.75 8.92157 15.0784 8.25 14.25 8.25Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5.25 8.25V5.25C5.25 4.25544 5.64509 3.30161 6.34835 2.59835C7.05161 1.89509 8.00544 1.5 9 1.5C9.99456 1.5 10.9484 1.89509 11.6517 2.59835C12.3549 3.30161 12.75 4.25544 12.75 5.25V8.25" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>Password</button>
                <button className='button'> Log Out</button>
            </div>
            <div className="support-box">
                <span>Reach Out To Us!</span>
                <p>Any doubt? Problem? feel free to drop a support request</p>

                <button><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.73438 14.1807C11.294 14.1807 14.1797 11.2948 14.1797 7.7349C14.1797 4.17496 11.294 1.28906 7.73438 1.28906C4.17473 1.28906 1.28906 4.17496 1.28906 7.7349C1.28906 11.2948 4.17473 14.1807 7.73438 14.1807Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5.85938 5.80084C6.01091 5.37005 6.31 5.00678 6.70368 4.77539C7.09736 4.54401 7.56023 4.45942 8.01029 4.53663C8.46035 4.61383 8.86857 4.84784 9.16265 5.19721C9.45672 5.54657 9.61767 5.98875 9.61699 6.44542C9.61699 7.73459 7.6834 8.37917 7.6834 8.37917" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.73438 10.958H7.74211" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                    Support</button>
            </div>
        </div>
    )
}

export default Newquestionsidebar