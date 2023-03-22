import {Link} from "react-router-dom";
import {Game} from "./Game/Game";

export function MainPage() {

    const logout = () => {
        localStorage.removeItem('name')
    }

    return (
        <>
            <h1>Привет {localStorage.getItem('name')}</h1>
            <Link to="/" onClick={logout}>Выйти</Link>
            <Game/>
        </>

    )
}