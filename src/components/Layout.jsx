import {Outlet} from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import "../css/layout.css";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import Splash from "./Splash.jsx";

function Layout() {
    const sidebarState = useSelector(state => state.sidebarState)
    const dispatch = useDispatch()
    const outletRef = React.createRef()

    useEffect(() => {
        if (sidebarState) {
            outletRef.current.classList.add("blur")
        } else {
            outletRef.current.classList.remove("blur")
        }
    }, [sidebarState]);

    function openSidebar() {
        dispatch({type: "SIDEBAR_OPEN"})
    }

    return (
        <div>
            <Splash />
            <Sidebar />
            <button className="btn_sidebar" onClick={openSidebar}>〉</button>
            <div className="outlet" ref={outletRef}><Outlet /></div>
        </div>
    );
}

export default Layout;