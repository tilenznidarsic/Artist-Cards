import React from "react"
import "../css/ArtistLink.css"
import { Link } from "@reach/router"


export default function ArtistLink({ link, name }) {
    return (
        <div className="artist-link">
            <Link to={link}>
                <span>{name}</span>
            </Link>
        </div>
    )
}
