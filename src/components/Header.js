import React, { useEffect, useState } from "react"
import "../css/Header.css"
import Logo from "../svg/logo-v.svg"
import ArtistLink from "./ArtistLink"
import { Link } from "@reach/router"


export default function Header(props) {
    const [artist, setArtist] = useState([])

    useEffect(() => {
        async function getArtist() {
            await fetch("https://run.mocky.io/v3/3cab6663-7cd8-4365-b8a6-4a1d89305f6a")
                .then(response => response.json())
                .then(jsn => setArtist(jsn["all_artists"]))
                .catch(err => console.log(err))
        }
        getArtist()
    }, [])

    return (
        <div className="header">
            <div className="header-logo">
                <Link to="/">
                    <img src={Logo} alt="Viberate" />
                </Link>
            </div>
            <div className="header-nav">
                {
                    artist.map((item, index) => {
                        return <ArtistLink
                            name={item.artist_name}
                            link={item.artist_uuid}
                            key={`ArtistLink-${index}`}
                        />
                    })
                }
            </div>
        </div>
    )
}