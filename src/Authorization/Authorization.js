import {useEffect, useState} from "react";
import classes from "./Authorization.module.css";
import {Link} from "react-router-dom";


function Authorization() {

    const [login, setLogin] = useState('')
    let enterLogin = function (){
        if (login.trim() !== '') {
            localStorage.setItem('name', login);
            setLogin('');
        }
        else alert("слишком короткий никнейм")

    }
    useEffect(() => {console.log('hello')}, [])

    return (
        <div className={classes.main}>
            <span className={classes.logo}>MiniGame</span>
            <input
                className={classes.inputLogo}
                type="text"
                value={login}
                onChange={(event) => setLogin(event.target.value)}
            />
            <Link className={classes.enter} onClick={enterLogin} to={login.trim() !== '' ? '/main' : '/'}>ENTER</Link>

            {localStorage.getItem('name') !== null ? <h1>{localStorage.getItem('name')}</h1> : null}
        </div>
    )
}

export default Authorization