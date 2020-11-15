import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react"
import facade from "./apiFacade";
import TwoJokes from './jokes';
import Header from './header';
import LoggedIn from './loggedin';
import SetUserInfo from './userSettings';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch,
  Prompt,
  Link,
  useHistory
} from "react-router-dom";


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [errorMessage, setErrorMessage] = useState("");

const logout = () => {
    facade.logout();
    setLoggedIn(false);
}

const login = (user, pass) => {
    facade.login(user, pass)
        .then((res) => {
            setLoggedIn(true);
        }).catch((error) => {
            error.fullError.then((err) => {
                setErrorMessage(err.message);
                console.log("Error: ", errorMessage);
            })
        })
}

  return (

    <div className="col-sm">
      <Header loginMsg={loggedIn ? 'You are logged in' : 'Please log in'} isLoggedin={loggedIn} />
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route path='/login-out'>
          {!loggedIn ? (
            <LogIn errorMessage={errorMessage} setErrorMessage={setErrorMessage} login={login} />
          ) : (
              <div>
                <LoggedIn />
                <button className="btn btn-primary" onClick={logout}>Logout</button>
              </div>
            )}
        </Route>
        <Route path="/user-info">
        <SetUserInfo />
        </Route>
        <Route path="/jokes">
        <Jokes />
        </Route>
        <Route path="*">
        <NoMatch />
        </Route>
      </Switch>
    </div>

  )
}



function LogIn({ login, errorMessage }) {
    const init = { username: "", password: "" };
    const [loginCredentials, setLoginCredentials] = useState(init);


    const performLogin = (evt) => {
        evt.preventDefault();
        login(loginCredentials.username, loginCredentials.password);
    }

    const onChange = (evt) => {
        setLoginCredentials({ ...loginCredentials, [evt.target.id]: evt.target.value })
    }


    return (
        <div>
          <h2>Login</h2>
            <form className="col-sm-1" onChange={onChange} >
                    <input className="form-control" placeholder="User Name" id="username" />
                    <input className="form-control" placeholder="Password" id="password" />
                    <br />
                    <button className="btn btn-primary" onClick={performLogin}>Login</button>
            </form>
            <h2>{errorMessage}</h2>
        </div>
    )
}

function NewFunction() {
  return (
    <div>
      <h2>Add new functionality here</h2>
    </div>
  );
}


function Home() {
  return (
    <div>
      <h2>Home CHL app</h2>
    </div>
  );
}



function Jokes() {
  return (
    <div>
      <h2>Two jokes</h2>
      <TwoJokes />
    </div>
  );
}

const NoMatch = () => {
  return (
    <div>
      <h3>
        No match found for this.
      </h3>
    </div>
  );
};

export default App;