import React from "react"


export default function CardGenre({ data }) {
    return (
        <div className="row">
            <label>genre</label>
            {
                data.genre
                    ?
                    <span className="tag">{data.genre.name}</span>
                    :
                    null
            }
        </div>
    )
}