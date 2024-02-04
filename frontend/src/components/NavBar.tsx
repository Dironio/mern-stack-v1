import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";


function NavBar() {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);

    const logoutHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        auth.logout();
        navigate('/');
    }
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink to='/'>Главная</NavLink></li>
                    <li><NavLink to='/' onClick={logoutHandler}>Выход</NavLink></li>
                </ul>
            </div>
        </nav>
    )

}

export default NavBar;