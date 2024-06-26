import React, { useState } from 'react'
import { assets } from "../../assets/assets"


import "./Sidebar.css"
const Sidebar = () => {
    const [extended, setExtended] = useState();
    return (
        <div className='sidebar'>
            <div className="top">
                <img src={assets.menu_icon} alt="" className='menu' onClick={() => setExtended(prev => !prev)} />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className="recent-title">
                            Recent
                        </p>
                        <div className="recent-entry">
                            <img src={assets.message_icon} alt="" />
                            <p>What is react...</p>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
            <div className="bottom">
                <div className="bottom-items recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}

                </div>
                <div className="bottom-items recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}

                </div>
                <div className="bottom-items recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
