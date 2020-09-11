import React from "react"
import "../css/ArtistInfo.css"
import CardCountry from "./CardCountry"
import CardGenre from "./CardGenre"
import CardShare from "./CardShare"
import CardSocial from "./CardSocial"
import CardSubgenre from "./CardSubgenre"
import CardTitle from "./CardTitle"


export default function ArtistInfo({ data }) {
    return (
        <div className="artist-info">
            <div className="center">
                <CardTitle data={data} />
                <CardShare />
                <CardCountry data={data} />
                <CardGenre data={data} />
                <CardSubgenre data={data} />
                <CardSocial data={data} />
            </div>
        </div>
    )
}