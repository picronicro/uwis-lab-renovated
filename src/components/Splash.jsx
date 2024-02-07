import "../css/splash.css";
import logo from "../assets/picro-avatar.png";
import React, {useEffect} from "react";

function Splash() {
    const imgRef = React.createRef()
    const bgRef = React.createRef()

    useEffect(() => {
        setTimeout(() => {
            imgRef.current.classList.add("img_scale")
            bgRef.current.classList.add("bg_transparent")
            setTimeout(() => {
                bgRef.current.classList.add("splash_hide")
            }, 2000)
        }, 1500)
    }, []);

    return (
        <div ref={bgRef} className="splash_container">
            <img ref={imgRef} src={logo} alt="united world international school"/>
        </div>
    );
}

export default Splash;