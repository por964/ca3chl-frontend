import React, { useState, useEffect } from "react";
import facade from "./apiFacade";


export default function LoggedIn() {
    const [dataFromServer, setDataFromServer] = useState("Loading...")

    useEffect(() => {
        facade.fetchUserData().then(data => setDataFromServer(data.msg));
    }, [])

    useEffect(() => {
        facade.fetchAdminData().then(data => setDataFromServer(data.msg));
    }, [])

    return (
        <div>
            <h2>{dataFromServer} </h2>
        </div>
    )

}
