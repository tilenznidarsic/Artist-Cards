import React from "react"
import Plus from "../svg/plus-white.svg"
import "../css/DropDown.css"
import DropDown from "./DropDown"


export default function CardSubgenre({ data }) {
    return (
        <div className="row">
            <label>subgenres</label>
            {
                data.subgenres
                    ?
                    data.subgenres.map((item, index) => {
                        return <span className="tag" key={`tag-${index}`}>{item.name}</span>
                    })
                    :
                    null
            }
            <div className="tag dropdown-btn">
                <img src={Plus} alt="dropdown" />
                <DropDown data={data.subgenres} />
            </div>
        </div>
    )
}