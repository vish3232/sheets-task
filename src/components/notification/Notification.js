import React from 'react'
import Card from '../card/Card'
import './Notification.css'

function Notification() {
    return (
        <div className="notification-container">
            <div className="notif-top">
                <div className="notification-heading">
                    <span>Notifications (3)</span>
                </div>
            </div>

            <div className="all-cards">
                <div className="notif-card">
                    <Card />
                </div>
                <div className="notif-card">
                    <Card />
                </div>
                <div className="notif-card">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Notification