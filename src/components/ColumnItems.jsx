import React from "react"
import "../views/styles/HomePage-style.css"

const ColumnItems = ({cover1, cover2, cover3, cover4, cover5}) => {
    return (
        <div className="column-items">
            <img src={cover1}/>
            <img src={cover2}/>
            <img src={cover3}/>
            <img src={cover4}/>
            <img src={cover5}/>
            <img src={cover1}/>
            <img src={cover2}/>
            <img src={cover3}/>
            <img src={cover4}/>
            <img src={cover5}/>
        </div>
    )
}

export default ColumnItems