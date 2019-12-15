import ImageGallery from "./components/ImageGallery.js"
import Nav from "./components/Nav.js"
import Logo from "./components/Logo.js"

const images = [
  {
    url: '/img/interior-designs/1.jpg',
    title: 'Petron Office',
    description: 'design & build'
  },
  {
    url: '/img/interior-designs/2.jpg',
    title: 'Airasia Office',
    description: 'design & build & project management'
  },
  {
    url: '/img/interior-designs/3.jpg',
    title: 'Airasia Office',
    description: 'build'
  },
  {
    url: '/img/interior-designs/4.jpg',
    title: 'Chicken Rice Shop',
    description: 'design'
  },
  {
    url: '/img/interior-designs/5.jpg',
    title: 'Shah Alam Residential',
    description: 'build & project management'
  },
  {
    url: '/img/interior-designs/6.jpg',
    title: 'Serin Residency Cyberjaya',
    description: 'design & build'
  },
  {
    url: '/img/interior-designs/7.jpg',
    title: 'Salak South School',
    description: 'project management'
  },
  {
    url: '/img/interior-designs/8.jpg',
    title: 'National Library',
    description: 'build & project management'
  },
]

ReactDOM.render(
  <React.Fragment>
    <Nav logo={<Logo />} items={[
      {url: '/demo-gallery.html', label: 'Our Works'},
      {url: '/demo-about.html', label: 'About Us'},
      {url: '/demo-contact.html', label: 'Contact Us'},
    ]} />

    <ImageGallery>
      {
        images.map((image, i) => (
          <ImageGallery.Image
            key={i}
            imageUrl={image.url}
            title={image.title}
            description={image.description}
            link={'/'}
          />
        ))
      }
    </ImageGallery>
  </React.Fragment>,
  document.querySelector('#demo')
)