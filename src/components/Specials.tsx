import React from 'react';
import { Link } from 'react-router-dom';

interface ActivePage {
  page?: string
}

function Specials({ page }:ActivePage) {
  return (
    <section className="lemon-specials">
      <div className="container">
        <div className="row row-header">
          <h3 className={ (page === 'menu') ? 'pg-menu' : '' }>This weeks specials!</h3>
          {
            (page === 'menu') || <Link className="lemon-link" to="/menu">Online Menu</Link>
          }
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <article className="lemon-item greek-salad">
              <div className="lemon-item-img"></div>
              <div className="card">
                <div className="card-header">
                  Greek salad
                </div>
                <div className="card-body">
                  <p>
                    The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and resomary croutons.
                  </p>
                </div>
                <div className="card-footer">
                  <a className="order-link" href="/order">Order a delivery</a>
                </div>
              </div>
            </article>
          </div>
          <div className="col-sm-12 col-md-4">
            <article className="lemon-item bruchetta">
              <div className="lemon-item-img"></div>
              <div className="card">
                <div className="card-header">
                  Bruchetta
                </div>
                <div className="card-body">
                  <p>
                    Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                  </p>
                </div>
                <div className="card-footer">
                  <a className="order-link" href="/order">Order a delivery</a>
                </div>
              </div>
            </article>
          </div>
          <div className="col-sm-12 col-md-4">
            <article className="lemon-item dessert">
              <div className="lemon-item-img"></div>
              <div className="card">
                <div className="card-header">
                  Lemon dessert
                </div>
                <div className="card-body">
                  <p>
                    This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                  </p>
                </div>
                <div className="card-footer">
                  <a className="order-link" href="/order">Order a delivery</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specials;
