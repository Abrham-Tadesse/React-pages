import React from "react"
import { Dash } from "../components/dash"
import { NavigationBar } from "../components/nav"
import { Footer } from "../components/footer"

export function DashBoard(){


    return(
        <>
        <NavigationBar />
        <Dash />
        <Footer/>
        </>
    )
}