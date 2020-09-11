import React, { useState, useEffect } from "react"
import "../css/Section.css"
import { useParams, useLocation, navigate } from "@reach/router"
import ArtistInfo from "./ArtistInfo"
import Popularity from "./Popularity"


export default function Section(props) {
    const [artistData, setArtistData] = useState({})
    const { uuid } = useParams()
    let location = useLocation()

    useEffect(() => {
        async function getArtistData() {
            await fetch(`https://run.mocky.io/v3/${uuid}`)
                .then(response => response.json())
                .then(jsn => setArtistData(jsn["data"]))
                .catch(err => navigate("/error"))
        }
        getArtistData()
    }, [location])

    return (
        <div className="section">
            <div className="artist-image">
                <img src={artistData.image} alt="Artist" />
            </div>
            <div className="responsive-container">
                <ArtistInfo data={artistData} />
                <Popularity data={artistData.popularity} />
            </div>
        </div>
    )
}