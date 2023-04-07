import React from 'react'
import state from "../store/index.js";
import {useSnapshot} from "valtio";

const Tab = ({tab, isActiveTab, isFilterTab, handleClick}) => {
    const snap = useSnapshot(state)
    const activeStyles = isFilterTab && isFilterTab ? {
        background: snap.color,
        opacity: 0.5
    } : {background: 'transparent', opacity: 1}

    return (
        <div
            className={`tab-btn ${isFilterTab ? 'rounded-full glass-morphism' : 'rounded-4'}`}
            onClick={handleClick}
        >
            <img src={tab.icon} alt={tab.name}/>
        </div>
    )
}

export default Tab
