import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import myfont from '../../../config/myFonts'
import mycolor from '../../../config/mycolor'
import { Link } from 'react-router-dom'
import '../../../App.css'
import { withTheme } from '../hoc/withTheme'
const minWidth = 992

const Navbar = props => {
    const {  theme, changeTheme, history } = props
  
    const pathname = props.history.location.pathname
    
        return (
            <nav className="navbar navbar-expand-md py-3  justify-content-between no-wrap">
                <ul className="navbar-nav" >    
                    <li className={`nav-item nav-link px-3 py-4`}
                        style={{ cursor: 'pointer', fontWeight: 'bold', }}>
                        <div
                            onClick={() => {
                                
                                history.push("/vibration-info")
                            }}
                            //to="/dashboard"
                            style={{ fontSize: myfont.labels, paddingBottom: 5, color: pathname === "/vibration-info" ? mycolor[theme].bodyText : mycolor[theme].labelSideBarRight, borderBottom: pathname === "/vibration-info" ? `2px solid ${mycolor[theme].primaryButton2}` : null }}
                            onMouseOver={e => { return (e.target.style.background = "none", e.target.style.textDecoration = "none") }}//color.darkSlateGray1}
                            onMouseOut={e => { return (e.target.style.background = "none", e.target.style.textDecoration = "none") }}
                        >
                        Vibration Info</div>
                    </li>
                        
                    {/* <li className={`nav-item nav-link px-3 py-4`}
                        style={{ cursor: 'pointer', fontWeight: 'bold', }}>
                        <div
                            onClick={() => {
                               
                                history.push("/general-info")
                            }}
                            //to="/dashboard"
                            style={{ fontSize: myfont.labels, paddingBottom: 5, color: pathname === "/general-info" ? mycolor[theme].bodyText : mycolor[theme].labelSideBarRight, borderBottom: pathname === "/general-info" ? `2px solid ${mycolor[theme].primaryButton2}` : null }}
                            onMouseOver={e => { return (e.target.style.background = "none", e.target.style.textDecoration = "none") }}//color.darkSlateGray1}
                            onMouseOut={e => { return (e.target.style.background = "none", e.target.style.textDecoration = "none") }}
                        >
                        General Info</div>
                    </li> */}
                                      
                </ul>
            </nav >

        )
    
}

export default withTheme(withRouter(Navbar));
