import { NavLink } from "react-router-dom";

export default function Menu() {
    return (
        <div>
            Menu
            <ul>
                <li>
                    <NavLink to="/1">
                        Random number
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/2">
                        Random char
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}