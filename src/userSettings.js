import userfacade from './userFacade';
import React, { useState, useEffect } from "react";

export default function SetUserInfo() {
    const init = { user: "", mail: "", telno: "" };
    const [infoDetails, setInfoDetails] = useState(init);
    const [errorMessage, setErrorMessage] = useState("");


    const sendInfo = (evt) => {
        evt.preventDefault();
        updateInfo(infoDetails.userid, infoDetails.mail, infoDetails.telno);
    }

    const onChange = (evt) => {
        setInfoDetails({ ...infoDetails, [evt.target.id]: evt.target.value })
    }

    const updateInfo = (user, mail, telno) => {
        userfacade.sendUpdate(user, mail, telno)
            .then((res) => {
            }).catch((error) => {
                error.fullError.then((err) => {
                    setErrorMessage(err.message);
                    console.log("Error: ", errorMessage);
                })
            })
    }


    return (
        <div>
            <h2>Update your contact info</h2>
            <form className="col-sm-1" onChange={onChange} >
                <input className="form-control" placeholder="UserID" id="userid" />
                <input className="form-control" placeholder="Email" id="mail" />
                <input className="form-control" placeholder="Phone no" id="telno" />
                <br />
                <button className="btn btn-primary" onClick={sendInfo}>Send update</button>
            </form>
            <h2>{errorMessage}</h2>
        </div>
    )
}