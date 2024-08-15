import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ dogs }) {
    const links = dogs.map(dog => (
        <NavLink key={dog.name}
            to={`/dogs/${dog.name.toLoweCase()}`}>
            {dog.name}
        </NavLink>
    ));

    return (
        <nav>
            <NavLink to="/dogs">Home</NavLink>
            {links}
        </nav>
    );
}

export default Navbar;