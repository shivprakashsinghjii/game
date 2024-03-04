import React from "react";

const navbar = () => {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <i class="fa-solid fa-user"></i>
              &nbsp; UNREAL ENGINE
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa-solid fa-user-secret"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        <i class="fa-solid fa-f "></i>
                        &nbsp;&nbsp; Fortnite
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        <i class="fa-solid fa-handshake-simple"></i>
                        &nbsp;&nbsp; Rocket League
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        <i class="fa-solid fa-handshake-angle"></i>
                        &nbsp;&nbsp; Full Guys
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/about"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/community">
                    Community Tab
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="/purchase">
                    Purchase Plateform
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default navbar;
