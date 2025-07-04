import React from 'react';

const Careers = () => {
  return (
    <div id="main-wrapper">
      <div id="main" className="container">
        <div className="row">
          {/* Main Content Area */}
          <div id="content" className="8u 12u(mobile)">
            <article className="box post">
              <header>
                <h2><strong>Careers</strong></h2>
              </header>
              {/* <span className="image featured">
                <img src="images/pic04.jpg" alt="Career Opportunities" />
              </span> */}

              {/* <a href="#" className="image left">
                <i>Everising Circular Saw Machine</i>
                <img src="images/circular-saw-image.jpg" alt="Circular Saw" />
              </a> */}

              <section>
                <h2>1. Sales Engineers</h2>
                <p><strong>Post:</strong> Sales Engineers</p>
                <p><strong>Qualification:</strong> Diploma in Mechanical / Degree in BA/BSC/BCom with similar experience.</p>
                <p><strong>Experience:</strong> Minimum of 2 years Experience for Degree holders and Fresh Diploma holders with/without experience are eligible.</p>
                <ul className="actions">
                  <li><a href="/contact" className="button icon fa-file">Send CV</a></li>
                </ul>
              </section>

              <section>
                <h2>2. Service Engineers</h2>
                <p><strong>Post:</strong> Service Engineers</p>
                <p><strong>Qualification:</strong> Diploma in Mechanical / ITI with similar experience.</p>
                <p><strong>Experience:</strong> Minimum of 1 year Experience in Cutting Tools, Servicing of Band Saw & Circular Saw Machines, and Demo of Machines & Cutting Tools.</p>
                <ul className="actions">
                  <li><a href="/contact" className="button icon fa-file">Send CV</a></li>
                </ul>
              </section>

              <section>
                <h2>3. Machine Operators</h2>
                <p><strong>Post:</strong> Machine Operators</p>
                <p><strong>Qualification:</strong> SSLC with similar experience.</p>
                <p><strong>Experience:</strong> Band Saw & Circular Saw Machines Operation.</p>
                <ul className="actions">
                  <li><a href="/contact" className="button icon fa-file">Send CV</a></li>
                </ul>
              </section>
            </article>
          </div>

          {/* Sidebar Area */}
          {/* <div id="sidebar" className="4u 12u(mobile)">
            <section>
              <ul className="divided">
                <li>
                  <article className="box excerpt">
                    <header>
                      <h2><a href="#">Spares Supply</a></h2>
                    </header>
                    <a href="#" className="image left">
                      <i>Everising Band Saw Machine</i>
                      <img src="images/band-saw.jpg" alt="Band Saw Machine" />
                    </a>
                    <p>--text here--</p>
                  </article>
                </li>
                <li>
                  <article className="box excerpt">
                    <header>
                      <span className="date">July 28</span>
                      <h3><a href="#">--header here--</a></h3>
                    </header>
                    <p>--text here--</p>
                  </article>
                </li>
                <li>
                  <article className="box excerpt">
                    <header>
                      <span className="date">July 24</span>
                      <h3><a href="#">--header here--</a></h3>
                    </header>
                    <p>--text here--</p>
                  </article>
                </li>
              </ul>
            </section>

            <section>
              <ul className="divided">
                <li>
                  <article className="box highlight">
                    <header>
                      <h3><a href="#">--header here--</a></h3>
                    </header>
                    <a href="#" className="image left">
                      <img src="images/pic06.jpg" alt="Highlight" />
                    </a>
                    <p>--text here--</p>
                    <ul className="actions">
                      <li><a href="#" className="button icon fa-file">Learn More</a></li>
                    </ul>
                  </article>
                </li>
                <li>
                  <article className="box highlight">
                    <header>
                      <h3><a href="#">--header here--</a></h3>
                    </header>
                    <a href="#" className="image left">
                      <img src="images/pic07.jpg" alt="Highlight" />
                    </a>
                    <p>--text here--</p>
                    <ul className="actions">
                      <li><a href="#" className="button icon fa-file">Learn More</a></li>
                    </ul>
                  </article>
                </li>
              </ul>
            </section>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Careers;
