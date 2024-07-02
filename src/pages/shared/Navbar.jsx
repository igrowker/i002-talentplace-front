import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="src/assets/assets-png/2.png"
            alt="imagen logo"
            width="30px"
            height="30px"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/contratar"
            >
              Contratar
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/oportunidades"
            >
              Oportunidades
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/contact"
            >
              Contactanos
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/about"
            >
              Nosotros
            </NavLink>
          </div>
        </div>
        
        <a href="/login" class="btn btn-primary" role="button" aria-disabled="true">Ingresar</a>
        
      </div>
    </nav>
  );
};
