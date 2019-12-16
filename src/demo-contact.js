import Nav from "./components/Nav.js"
import Logo from "./components/Logo.js"


ReactDOM.render(
  <React.Fragment>
    <Nav logo={<Logo />} items={[
      {url: '/demo-gallery.html', label: 'Our Works'},
      {url: '/demo-about.html', label: 'About Us'},
      {url: '/demo-contact.html', label: 'Contact Us'},
    ]} />

    <div className="contact">
      <div className="modal">
        <div className="methods">
          <div className="address">
            <img className="title" src="../img/contact/007-map.svg" />
            <address>
              No. 1B, Level 1, Jalan BK 3/2,
              Bandar Kinrara, 47180 Puchong,
              Selangor Darul Ehsan, Malaysia
            </address>
          </div>
          <div className="phone">
            <img className="title" src="../img/contact/008-conversation.svg" />
            <div>
              <a href="tel:+60123767671">+6012 376 7671</a>
              <br/>
              <a title="call" href="tel:+60123767671"><img src="../img/contact/011-phone.svg" /></a>
              <a title="sms" href="sms:+60123767671"><img src="../img/contact/sms.svg" /></a>
              <a title="whatsapp" href="https://api.whatsapp.com/send?text=Hello&phone=60123767671"><img src="../img/contact/010-whatsapp.svg" /></a>
            </div>
            <div>
              <a href="tel:+60172246227">+6017 224 6227</a>
              <br/>
              <a title="call" href="tel:+60172246227"><img src="../img/contact/011-phone.svg" /></a>
              <a title="sms" href="sms:+60172246227"><img src="../img/contact/sms.svg" /></a>
              <a title="whatsapp" href="https://api.whatsapp.com/send?text=Hello&phone=60172246227"><img src="../img/contact/010-whatsapp.svg" /></a>            </div>
          </div>
          <div className="email">
            <img className="title" src="../img/contact/009-email.svg" />
            <a href="mailto:nicholas@goodwinds.com.my">nicholas@goodwinds.com.my</a>
            <br/>
            <a href="mailto:alfred@goodwinds.com.my">alfred@goodwinds.com.my</a>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15936.615076298222!2d101.6378927!3d3.053481!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x712a09ca12288897!2sGoodwinds%20Interior%20Design!5e0!3m2!1sen!2smy!4v1576433892690!5m2!1sen!2smy"
            width="700"
            height="300"
            frameBorder={0}
            style={{ border: 0 }}
            allowfullscreen={true}>
          </iframe>
        </div>
      </div>
      <div className="mask"></div>
    </div>
  </React.Fragment>,
  document.querySelector('#demo')
)