import React from "react"
import "../css/Popularity.css"


export default function Popularity({ data }) {
    return (
        <div className="artist-stats">
            <div className="graph">
                <label>MOST POPULAR IN</label>
                {
                    data
                        ?
                        data.map((item, index) => {
                            return (
                                <div className="city" key={`city-${index}`}>
                                    <label>{item.city}</label>
                                    <div className="bar">
                                        <div className="percentage" style={{ width: item.percentage + "%" }}></div>
                                        <div className="pct-num">{`${item.percentage.toFixed(2)}%`}</div>
                                    </div>
                                </div>
                            )
                        })
                        :
                        null
                }
            </div>
        </div>
    )
}