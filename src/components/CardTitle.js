import React from "react"
import FireHot from "../svg/hot.svg"
import ClaimBTN from "../svg/checkbox-claim.svg"


export default function CardTitle({ data }) {
    return (
        <div className="title">
            {
                data.booking_available
                    ?
                    <button id="BQ">booking request</button>
                    :
                    null
            }
            <h1>{data.name + " "}
                <span>
                    {
                        data.claimed
                            ?
                            <img src={ClaimBTN} alt="" className="red-mark" />
                            :
                            null
                    }
                    {
                        data.trending
                            ?
                            <img src={FireHot} alt="trending" className="red-mark" />
                            :
                            null
                    }
                </span>
            </h1>
        </div>
    )
}