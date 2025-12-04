import React from "react"
import { Home } from "../components/home"
import { NavigationBar } from "../components/nav"
import { Footer } from "../components/footer"

export function HomePage(){


    return(
    <>
    <NavigationBar />
    <Home />
    <Footer/>
    </>
    )
}