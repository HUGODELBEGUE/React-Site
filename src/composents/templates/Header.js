import { NavLink } from "react-router-dom";

const Header = () => {
    return (

        <header>
        <div id="NavBar">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">React.js</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink activeClassName="active" exact className="nav-link" aria-current="page" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="active" className="nav-link" to="/Gallery">Gallery</NavLink>
                  </li>
                  <li className="nav-item">
                    <a activeClassName="active" className="nav-link" href="#">Pricing</a>
                  </li>
                  <li className="nav-item">
                    <a activeClassName="active" className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

    )
}
export default Header;