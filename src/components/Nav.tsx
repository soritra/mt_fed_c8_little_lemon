import React from 'react';
import { Link } from 'react-router-dom';

interface ActivePage {
  page?: string
}

interface NavConfig {
  [key: string]: string
}

function Nav({ page }: ActivePage) {
  const config: NavConfig = {
    'home': "Home",
    'about': "About",
    'menu': "Menu",
    'reservation': "Reservations",
    'order': "Order Online",
    'login': "Login",
  };
  const navItems = Object.keys(config).map(key => {
    let cls = "nav-item";
    cls += (page === key) ? " active" : "";
    const href = `/${key}`.replace(/^\/home$/, '/');
    return (
      <li key={key} className={cls}>
        <Link className="nav-link" to={href}>{config[key]}</Link>
      </li>
    );
  });
  return (
    <>
      {/* <nav className="nav-top navbar navbar-expand">
        <div className="container">
          <Link to="/" className="navbar-brand"><img className="lemon-logo" src="/img/logo.png" alt="Little Lemon" title="Little Lemon" /></Link>
          <ul className="navbar-nav mr-auto" style={{ marginLeft: '280px' }}>
            { navItems }
          </ul>
        </div>
      </nav> */}

      <nav className="custom-nav navbar fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand"><img className="lemon-logo" src="/img/b.webp" alt="Little Lemon" title="Little Lemon" /></Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navtopNav" aria-controls="navtopNav" aria-expanded="false" aria-label="Toggle navigation">
              <span></span>
              <span></span>
              <span></span>
          </button>

          <div className="navitem-wrap collapse navbar-collapse" id="navtopNav">
              <ul className="navbar-nav ml-auto">
                { navItems }
              </ul>
          </div>

        </div>
      </nav>
    </>
  );
}

export default Nav;
