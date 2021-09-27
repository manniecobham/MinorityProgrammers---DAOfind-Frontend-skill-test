import React from 'react'
import '../App.css'
import {SidebarData} from './SidebarData'
import {Link} from "react-router-dom"


function sidebar() {
    return (
        <>
        <div className="Sidebar">
          <nav className="Sidebar-nav">
            <ul className="SidebarList">
                <li>
                    <div className="SideIcon">
                    <Link id="logo" width="200px" to="/"><img src="https://daofind.com/images/dao-logo.svg" alt=""/></Link>
                    </div>
                </li>
                {SidebarData.map((val, key) =>
                {
                return (
                    <div className="SideItems">
                    <li  key={key} className="Nav">
                         <Link id="sideTxt" to={val.link}> {val.icon} <span>{val.title}</span>
                        </Link>
                        </li>
                        </div>
                        );})}
            </ul>
            </nav>
        </div>
        </>
    );
}

export default sidebar
