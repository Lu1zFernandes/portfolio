import {  NavLink } from "react-router-dom"

const Navbar = () => {
  return (
<nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid mx-3">
    <NavLink className="navbar-brand fw-bold" to="/">Home</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/About">Sobre</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/Projects">Projetos</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Ensino</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contatos
          </a>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">LinkedIn</a></li>
            <li><a className="dropdown-item" href="#">Git Hub</a></li>
            <li><a className="dropdown-item" href="#">WhatsApp</a></li>
            <li><a className="dropdown-item" href="#">Email</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Currículo Completo</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar