import React from "react"


export default function CardSocial({ data }) {
    return (
        <div className="row icons">
            {
                data.social_links
                    ?
                    data.social_links.map((item, index) => {
                        try {
                            if (item.channel == "home_page") return null
                            const myimg = require(`../svg/${item.channel.replaceAll("_", "-")}.svg`);
                            return (
                                <a href={item.link} key={`social-${index}`}>
                                    <img src={myimg} alt={item.channel} />
                                </a>
                            )
                        }
                        catch (err) {
                            console.log(err)
                        }
                    })
                    :
                    null
            }
        </div>
    )
}