import "./Header.css"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { ActionType } from "../../redux/action-type"

function Header() {
    const [subText, setSubtext] = useState("")
    let dispatch = useDispatch()
    function updateSearchedText(subText: string) {
        dispatch({
            type: ActionType.SearchText,
            payload: subText,
        })
    }

    
    return (
        <header className="header">
            <input
                className="search"
                type="text"
                placeholder="Search"
                onChange={(event) => updateSearchedText(event.target.value)}
            />
            <div className="links">
                <a href="/main">Home</a>
                <a href="/">About</a>
                <a href="">Contact</a>
            </div>
        </header>
    )
}

export default Header
