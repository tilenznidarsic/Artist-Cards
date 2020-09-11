import React from "react"


export default function CardCountry({ data }) {
    return (
        <div className="row">
            <label>country</label>
            {
                data.country
                    ?
                    <span className="tag">{data.country.name}</span>
                    :
                    null
            }
        </div>
    )
}