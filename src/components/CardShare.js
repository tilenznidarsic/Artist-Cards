import React from "react"
import ShareBTN from "../svg/share.svg"


export default function CardShare() {
    return (
        <div className="row share">
            <button>FOLLOW</button>
            <span><img src={ShareBTN} alt="share" /></span>
        </div>
    )
}