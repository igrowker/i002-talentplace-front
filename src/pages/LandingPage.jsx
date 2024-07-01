import Button from '../components/Button/Button'
import Card from '../components/Card/Card'
import itImg from '../assets/assets-svg/it.svg'


export const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 bg-primary">
            <div className="row">
              <Card img={itImg} alt="IT" title="It"/>

              
            </div>
            <div className="row">
              <p className="text-center">En TalentPlace, ofrecemos una amplia variedad de categorías y la posibilidad de personalizar tu perfil para compartir tus proyectos propios y colaborativos, facilitando que te encuentren. Y si buscas contratar, mantenete al tanto a estas  variedad de opciones.</p>
            </div>
            <div className="row">
              <Button type="white" width="100%">Tus Proyectos</Button>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <h1>Columna 2</h1>
          </div>
        </div>
      </section>
        
    </div>
  )
}
