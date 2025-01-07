import { NavLink } from "react-router-dom";
import s from "./nav.module.scss";

export const Nav = ({ children }) => {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <NavLink to="/">Forside</NavLink>
        </li>
        <li>
          <NavLink to="/products">Produkter</NavLink>
        </li>
        <div className={s.logo}>Bageriet</div>
        <li>
          <NavLink to="/contact">Kontakt</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
