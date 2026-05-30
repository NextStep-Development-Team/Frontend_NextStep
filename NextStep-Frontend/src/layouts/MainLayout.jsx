import './MainLayout.css'

const MainLayout = ({ children }) => {
  return (
    <div className="layout-container">
      <nav className="navbar">
        <div className="logo">NextStep</div>
        <div className="nav-links">
          <a href="#features">Funcionalidades</a>
          <a href="#about">Nosotros</a>
          <button className="btn-login">Login</button>
        </div>
      </nav>
      <main className="content">{children}</main>
      <footer className="footer">
        <p>&copy; 2026 NextStep Platform. Impulsando el talento joven.</p>
      </footer>
    </div>
  )
}

export default MainLayout
