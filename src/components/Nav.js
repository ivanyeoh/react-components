export default ({ logo, items = [] }) => {
  return (
    <nav className="nav">
      <a href="/" className="logo">
        {logo}
      </a>
      <ul className="menu">
        {
          items.map((item, index) => (
            <li key={`nav-item-${index}`} className={location.pathname === item.url ? "active" : null}>
              <a href={item.url}>{item.label}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}