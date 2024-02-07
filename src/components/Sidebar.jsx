import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import "../css/sidebar.css";
import {useDispatch, useSelector} from "react-redux";

function Sidebar() {
    const dispatch = useDispatch()
    const sidebarRef = React.createRef()
    const sidebarState = useSelector(state => state.sidebarState)

    useEffect(() => {
        console.log(sidebarState)
        if (sidebarState) {
            sidebarRef.current.classList.add("open")
        } else {
            sidebarRef.current.classList.remove("open")
        }
    }, [sidebarState]);
    
    return (
        <div className="sidebar" ref={sidebarRef}>
            <div className="links">
                <NavLink to="/" draggable="false">Home</NavLink>
                <NavLink to="basics" draggable="false">Basics</NavLink>
                <NavLink to="basics" draggable="false">Basics</NavLink>
                <NavLink to="basics" draggable="false">Basics</NavLink>
                <NavLink to="basics" draggable="false">Basics</NavLink>
                <NavLink to="basics" draggable="false">Basics</NavLink>
                <NavLink to="basics" draggable="false">Basics</NavLink>
            </div>
            <button className="btn_sidebar_close" onClick={() => dispatch({type: "SIDEBAR_CLOSE"})}>〈</button>
        </div>
    );
}

export default Sidebar;