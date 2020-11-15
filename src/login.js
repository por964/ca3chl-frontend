import facade from './apiFacade';

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
export default LogIn;