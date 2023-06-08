import React from 'react';

function Main() {
  return (
    <main>
      <section className="lemon-specials">
        <div className="container">
          <div className="row row-header">
            <h3>This weeks specials!</h3>
            <button>Online Menu</button>
          </div>
          <div className="row">
            <div className="col col-4">
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
                    Order a delivery
                  </div>
                </div>
              </article>
            </div>
            <div className="col col-4">
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
                    Order a delivery
                  </div>
                </div>
              </article>
            </div>
            <div className="col col-4">
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
                    Order a delivery
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="lemon-testimonials">
        <div className="container">
          <div className="row row-header">
            <h3>Testimonials</h3>
          </div>
        </div>
      </section>
      <section className="lemon-about">
        <div className="container">
          <div className="row">
            <section className="hd-left col col-6">
              <h3>Little Lemon</h3>
              <h5>Chicago</h5>
              <p>
                We are a family owned Mediterranean restaurant, 
                focused on traditional recipes served with a modern twist.
              </p>
            </section>
            <section className="col col-6">
              {/* <div className="lemon-food"></div> */}
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
