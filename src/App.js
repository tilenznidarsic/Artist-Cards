import React, { useEffect } from "react"
import Header from "./components/Header"
import "./css/App.css"
import { Router } from "@reach/router"
import Section from "./components/Section"


export default function App(props) {

    useEffect(() => {
        window.addEventListener("resize", () => {
            window.scrollTo(0, 0)
        })
    }, [])

    return (
        <div className="app">
            <Header />
            <div className="container">
                <Router>
                    <HelloWorld path="/" />
                    <Section path="/:uuid" />
                    <NotFound path="/error" />
                </Router>
            </div>
        </div>
    )
}


function HelloWorld() {
    return (
        <div className="home">
            <h1>Viberate project</h1>
            <h3>Tilen Znidarsic</h3>
        </div>
    )
}


function NotFound() {
    return (
        <div className="home error">
            <h1>404</h1>
            <h3>Not found!</h3>
        </div>
    )
}