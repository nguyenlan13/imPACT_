import React, { useEffect } from "react"
import { logout } from "../actions/user"
import { Redirect } from "react-router-dom"

export default function Logout(){

    if(localStorage.getItem("token") === null) {
        return <Redirect to="/login" />
    }

    logout()

}