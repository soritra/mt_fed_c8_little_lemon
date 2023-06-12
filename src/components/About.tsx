import React from 'react';

function About() {
  return (
    <section className="lemon-about">
      <div className="container">
        <div className="row">
          <section className="hd-left col-sm-12 col-md-7 col-lg-6">
            <div className="inner">
              <h3>Little Lemon</h3>
              <h5>Chicago</h5>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </section>
          <section className="col-sm-12 col-md-5 col-lg-6">
            <div className="mx-auto lemon-brother1"></div>
            <div className="mx-auto lemon-brother2"></div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default About;
