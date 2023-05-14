import React, { useState } from "react";
import './App'
import dark from './assets/desktop/icon-moon.svg'
import light from './assets/desktop/icon-sun.svg'

function DarkMode({ handleMode,classNa}) {

   

    return (
        <div className="button">
            <button className="light"><img src={light} alt="" /></button>
            <div className={`toggle-switch ${classNa}`} onClick={handleMode}></div>
            <button className="dark"><img src={dark} alt="" /></button>
        </div>
    );
}

export default DarkMode;