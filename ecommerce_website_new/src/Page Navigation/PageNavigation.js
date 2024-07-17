import { NavLink } from "react-router-dom";
import './PageNavigation.css'

export default function PageNavigation({ title }) {
    return (
        <div className="section-page">
            <NavLink to="/" style={{textDecoration:"none"}}>Home</NavLink>/{title}
        </div>
    )
}