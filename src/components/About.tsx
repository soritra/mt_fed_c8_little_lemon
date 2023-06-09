import React from 'react';

function About() {
  return (
    <section className="lemon-about">
      <div className="container">
        <div className="row">
          <section className="hd-left col col-6">
            <h3>Little Lemon</h3>
            <h5>Chicago</h5>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </section>
          <section className="col col-6">
            <div className="lemon-brother1"></div>
            <div className="lemon-brother2"></div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default About;
