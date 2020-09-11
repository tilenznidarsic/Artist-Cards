import React from "react"
import "../css/DropDown.css"


export default function DropDown({ data }) {
    return (
        <div className="dropdown-menu">
            <h4>VOTE FOR SUBGENRES</h4>
            <p>Don’t agree with the subgenres? Add the ones you think are missing or vote for existing to get yours on top!</p>
            {
                data
                    ?
                    data.map((item, index) => {
                        return (
                            <div className="city" key={`city-${index}`}>
                                <label>{item.name}</label>
                                <div className="bar">
                                    <div className="percentage" style={{ width: item.vote_percentage + "%" }}></div>
                                    <div className="pct-num">{`${item.vote_percentage.toFixed(2)}%`}</div>
                                </div>
                            </div>
                        )
                    })
                    :
                    null
            }
            <div className="dropdown-vote-container">
                <button>VOTE NOW</button>
            </div>
        </div>
    )
}