import Button from '@/components/common/Button'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="home-hero">
      <div className="hero-content">
        <span className="badge">Nueva era del empleo joven</span>
        <h1>
          Tu primer trabajo, <br /> sin pedirte experiencia.
        </h1>
        <p>
          NextStep conecta tu potencial académico con empresas que valoran tu
          futuro. Olvídate del círculo vicioso de la experiencia y empieza a
          construir tu carrera hoy.
        </p>
        <div className="hero-actions">
          <Button variant="primary">Soy Egresado</Button>
          <Button variant="outline">Soy Empresa</Button>
        </div>
      </div>
      <div className="hero-visual">
        {/* Placeholder para la imagen de IA que generaré */}
        <div className="glass-card">
          <h3>Match con IA</h3>
          <p>Calculando compatibilidad...</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '85%' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
