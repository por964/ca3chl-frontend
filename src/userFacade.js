import mainURL from "./settings";


function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

function userFacade() {


    const sendUpdate = async (user, mail, telno) => {
        const options = makeOptions("POST", { mail: mail, telno: telno });
        const res = await fetch(mainURL + "/api/info/" + user, options);
        return handleHttpErrors(res);
    }

    const makeOptions = (method, body) => {
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        }
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }
    return {
        makeOptions,
        sendUpdate
    }
}

const userfacade = userFacade();
export default userfacade;