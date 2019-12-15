import Nav from "./components/Nav.js"
import Logo from "./components/Logo.js"
import Hero from "./components/Hero.js"

ReactDOM.render(
  <React.Fragment>
    <Nav logo={<Logo />} items={[
      {url: '/demo-gallery.html', label: 'Our Works'},
      {url: '/demo-about.html', label: 'About Us'},
      {url: '/demo-contact.html', label: 'Contact Us'},
    ]} />

    <Hero content={
      <p>
        <strong>GOODWINDS Interior Design Sdn Bhd</strong> is a
        design &amp; built company that provide a comprehensive services from
        interior design planning, architecture, implementation &amp; 
        construction management, and consultancy services to literally
        almost all sectors that you can imagine which mentioned below:
        <ul className="mark-list">
          <li>Commercial</li>
          <li>Corporate</li>
          <li>Residential</li>
          <li>Private</li>
        </ul>
      </p>
    } />

    <article className="bright">
      <h2>What we do</h2>
      <ul className="icon-list">
        <li>
          <figure>
            <img src="../img/services/001-blueprint.svg" />
            <figcaption>
              Design &amp; Built
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src="../img/services/005-brainstorming.svg" />
            <figcaption>
              Design Consultancy
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src="../img/services/006-risks.svg" />
            <figcaption>
              Project Management
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src="../img/services/004-hotel.svg" />
            <figcaption>
              Upgrading Work
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src="../img/services/002-clean-house.svg" />
            <figcaption>
              Refurbishment
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src="../img/services/003-logistics.svg" />
            <figcaption>
              Relocation
            </figcaption>
          </figure>
        </li>
      </ul>
    </article>

    <article className="right-figure">
      <h2>Background</h2>
      <figure>
        <img src="../img/office.png" />
        <figcaption>Our office</figcaption>
      </figure>
      <p>
        <strong>GOODWINDS Interior Design Sdn Bhd</strong> was established on 18th June 2009
        (Previously known as DID Project Solutions Sdn Bhd) as an Interior Design &amp; Built company
        which began by offering Design consultancy and Interior Fit out work services
        mainly for corporate office.
      </p>
      <p>
        Throughout the years of experiences and challenges faced in
        this industry, <strong>GOODWINDS Interior Design Sdn Bhd</strong> was 
        formed on 30th March 2015 which founded by a passionate and dynamic team 
        that strive for improvement to ensure a continuous delivery of the 
        most innovative with the highest professional standards to our customers.
      </p>
      <p>
        We are One-Stop Solution Interior Design Company that offers a 
        complete design &amp; built, end-to-end solution from strategic planning 
        &amp; design consultancy, project management, and fit-out construction work.
      </p>
    </article>

    <article className="bright split">
      <div className="left">
        <h2>Our Team</h2>
        <p>
          <strong>GOODWINDS</strong> group's management and personnel consists of highly
          experienced and self-motivated experts across this industry. Our designers
          and project team posseses strong technical knowledge and project management
          in many years of relevant industry experience.
        </p>
        <p>
          We are a company of high energy entrepreneurs and
          dedicated professionals working together to provide the highest quality,
          innovative and market relevant products and services profitably in a competitive
          engineering services environment to the complete satisfaction of our customer.
        </p>
      </div>
      <div className="right">
        <img src="../img/group-photo.jpg" />
      </div>
    </article>
  </React.Fragment>,
  document.querySelector('#demo')
)