/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">The Dojo Blog</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <form className="mx-auto" >
            <ul className="navbar-nav">
              <li className="nav-item active ps2 text-white">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item ps-2">
                <a className="nav-link" href="#">Link</a>
              </li>
              {/* <li className="nav-item ps-2">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li> */}
            </ul>
          </form>
        </div>
    </nav>
  );
}

export default Navbar;
