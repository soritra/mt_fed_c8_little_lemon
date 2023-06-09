import React from 'react';
import { Link } from 'react-router-dom';

interface ActivePage {
  page?: string
}

interface NavConfig {
  [key: string]: string
}

function Nav({ page }: ActivePage) {
  // const cls = (page === '') ? : ;
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
    <nav className="nav-top navbar navbar-expand">
      <div className="container">
        <Link to="/"><img className="lemon-logo" src="/img/logo.png" alt="Little Lemon" title="Little Lemon" /></Link>
        <ul className="navbar-nav mr-auto">
          { navItems }
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
