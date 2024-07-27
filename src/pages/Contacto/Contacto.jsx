import { CardInfoContact } from "../../components/CardInfoContact/CardInfoContact";
import { Accordion } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { FaTools } from "react-icons/fa";
import "../Nosotros/Nosotros.css";
import "./Contacto.css";

export const Contacto = () => {
  return (
    <section className="container-fluid px-0">
      <div className="container-fluid bg-white py-4">
        <div className="row">
          <div className="col-xs-12">
            <h3 className="title-contacto mt-5 mb-4">Aprende en TalentPlace</h3>
            <p className="text-info-contacto mb-5">
              Tu tiempo y dedicación son la clave para alcanzar el éxito.
              Tomarse el tiempo para aprender es la mejor herramienta para
              crecer y prosperar en nuestra plataforma.
            </p>
            <h4 className="title-contacto mb-5">
              Aprende a Trabajar en TalentPlace
            </h4>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-lg-4 d-flex justify-content-end">
            <CardInfoContact
              className="card-contact"
              num={1}
              text={
                'Crea una cuenta y asegúrate de seleccionar "Busco trabajar". Completar tu perfil con datos reales para garantizar la veracidad y confiabilidad.'
              }
            />
          </div>
          <div className="col-xs-12 col-lg-4 d-flex justify-content-center">
            <CardInfoContact
              className="card-contact"
              num={2}
              text={
                "Completa tu perfil detalladamente así los empleadores puedan encontrarte fácilmente. Esto te permitirá buscar y acceder a opciones reales según tus capacidades."
              }
            />
          </div>
          <div className="col-xs-12 col-lg-4 d-flex justify-content-start">
            <CardInfoContact
              className="card-contact"
              num={3}
              text={
                "Navega entre los miles de proyectos que se publican diariamente para encontrar el trabajo de tus sueños."
              }
            />
          </div>
        </div>

        <div className="row pb-4">
          <div className="col-xs-12">
            <h5 className="title-contacto mt-5 mb-4">
              Consejos para una experiencia más satisfactoria
            </h5>
          </div>
          <div className="col-xs-12 col-lg-3">
            <p className="p-contacto">Optimiza tu Perfil:</p>
            <label className="label-contacto">
              Lee detenidamente los requisitos del proyecto antes de postularte
              y personaliza tu propuesta.
            </label>
          </div>
          <div className="col-xs-12 col-lg-3">
            <p className="p-contacto">Postulación a Proyectos:</p>
            <label className="label-contacto">
              Asegúrate de que tu perfil tenga una descripción clara y detallada
              de tus habilidades y experiencia.
            </label>
          </div>
          <div className="col-xs-12 col-lg-3">
            <p className="p-contacto">Comunicación Efectiva:</p>
            <label className="label-contacto">
              Mantén una comunicación clara y profesional con tus clientes.
            </label>
          </div>
          <div className="col-xs-12 col-lg-3">
            <p className="p-contacto">Entrega de Calidad:</p>
            <label className="label-contacto">
              Revisa tu trabajo antes de entregarlo y busca feedback para
              mejorar.
            </label>
          </div>
        </div>

        <div className="row bg-gray">
          <div className="col-xs-12">
            <h4 className="title-contacto my-5">
              Aprende a Contratar en TalentPlace
            </h4>
          </div>
          <div className="col-xs-12 col-lg-4 d-flex justify-content-end">
            <CardInfoContact
              className="card-contact bg-white"
              num={1}
              text={
                'Crea una cuenta en TalentPlace y selecciona "Busco contratar". Asegúrate de completar tu perfil con datos reales para garantizar la veracidad y confiabilidad.'
              }
            />
          </div>
          <div className="col-xs-12 col-lg-4 d-flex justify-content-center">
            <CardInfoContact
              className="card-contact bg-white"
              num={2}
              text={
                "Publica tu proyecto con una descripción clara y detallada, incluyendo los objetivos, plazos y habilidades requeridas."
              }
            />
          </div>
          <div className="col-xs-12 col-lg-4 d-flex justify-content-start">
            <CardInfoContact
              className="card-contact bg-white"
              num={3}
              text={
                "Revisa los perfiles de los posibles empleados. Utiliza filtros para encontrar profesionales que se ajusten a tus necesidades y expectativas."
              }
            />
          </div>
          <div className="col-xs-12">
            <h5 className="title-contacto mt-5 mb-4">
              Consejos para una experiencia más satisfactoria
            </h5>
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-xs-12 col-lg-3">
            <p className="p-contacto">Selecciona y Contrata:</p>
            <label className="label-contacto">
              Realiza entrevistas para conocer a los candidatos. Selecciona
              empleados que se adapten a tus requerimientos.
            </label>
          </div>
          <div className="col-xs-12 col-lg-3">
            <p className="p-contacto">Comunicación y Seguimiento:</p>
            <label className="label-contacto">
              Mantén una comunicación constante y solicita actualizaciones
              regulares sobre el progreso del trabajo.
            </label>
          </div>
          <div className="col-xs-12 col-lg-3">
            <p className="p-contacto">Comunicación Efectiva:</p>
            <label className="label-contacto">
              Revisa el trabajo final para asegurarte de que cumple con tus
              expectativas y los requisitos establecidos.
            </label>
          </div>
          <div className="col-xs-12 col-lg-3">
            <p className="p-contacto">Entrega de Calidad:</p>
            <label className="label-contacto">
              Realiza el pago acordado de manera puntual y deja una reseña sobre
              el freelancer para ayudar a otros contratadores.
            </label>
          </div>
        </div>

        <div className="row bg-gray">
          <div className="col-xs-12">
            <h3 className="title-contacto mt-5 mb-4">
              Preguntas Frecuentes (FAQ)
            </h3>
            <p className="text-info-contacto mb-5">
              Encuentra respuestas a las preguntas más comunes sobre nuestros
              servicios. Si no encuentras lo que buscas, ¡no dudes en
              contactarnos!
            </p>
            <Accordion className="px-5 accordion">
              <Fade direction="left" triggerOnce="true">
                <Accordion.Item eventKey="0" className="mb-2">
                  <Accordion.Header>
                    <strong>¿Cómo puedo registrarme en TalentPlace?</strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="text-start">
                      <p>
                        Para registrarte, haz clic en el botón "Registrarse" en
                        la parte superior derecha de la página y completa el
                        formulario con tus datos personales y profesionales.
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Fade>

              <Fade direction="left" triggerOnce="true">
                <Accordion.Item eventKey="1" className="mb-2">
                  <Accordion.Header>
                    <strong>
                      ¿Cuáles son los métodos de pago disponibles?
                    </strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="text-start">
                      <p>
                        Aceptamos varios métodos de pago, incluyendo tarjetas de
                        crédito, PayPal y transferencias bancarias. Puedes
                        configurar tu método de pago en la sección "Cuenta" de
                        tu perfil.
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Fade>

              <Fade direction="left" triggerOnce="true">
                <Accordion.Item eventKey="2" className="mb-2">
                  <Accordion.Header>
                    <strong>¿Cómo puedo buscar y contratar freelancers?</strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="text-start">
                      <p>
                        Para buscar freelancers, utiliza la barra de búsqueda en
                        la página principal y filtra los resultados según
                        categoría, habilidades y experiencia. Una vez encuentres
                        el perfil adecuado, puedes enviar una oferta
                        directamente desde su perfil.
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Fade>

              <Fade direction="left" triggerOnce="true">
                <Accordion.Item eventKey="3" className="mb-2">
                  <Accordion.Header>
                    <strong>
                      ¿Cómo puedo postularme a proyectos como freelancer?
                    </strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="text-start">
                      <p>
                        Para postularte a proyectos, navega a la sección
                        "Proyectos", elige los que se ajusten a tus habilidades
                        y experiencia, y haz clic en "Postularse". Asegúrate de
                        personalizar tu propuesta para destacar tus capacidades.
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Fade>

              <Fade direction="left" triggerOnce="true">
                <Accordion.Item eventKey="4" className="mb-2">
                  <Accordion.Header>
                    <strong>
                      ¿Qué medidas de seguridad tienen para proteger mis datos?
                    </strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="text-start">
                      <p>
                        Tomamos la seguridad de tus datos muy en serio.
                        Utilizamos encriptación SSL para proteger la información
                        transmitida y tenemos políticas estrictas de privacidad
                        y seguridad para asegurar que tus datos estén
                        protegidos.
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Fade>

              <Fade direction="left" triggerOnce="true">
                <Accordion.Item eventKey="5" className="mb-2">
                  <Accordion.Header>
                    <strong>
                      ¿Cómo puedo comunicarme con mi freelancer o empleador?
                    </strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="text-start">
                      <p>
                        Puedes comunicarte directamente a través de nuestra
                        plataforma utilizando el sistema de mensajería interna.{" "}
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Fade>

              <Fade direction="left" triggerOnce="true">
                <Accordion.Item eventKey="6" className="mb-2">
                  <Accordion.Header>
                    <strong>
                      ¿Qué debo hacer si tengo un problema con un proyecto?
                    </strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="text-start">
                      <p>
                        Si tienes un problema con un proyecto, puedes contactar
                        a nuestro equipo de soporte a través del formulario de
                        contacto o escribiendonos a nuestras redes sociales.
                        Estamos aquí para ayudarte a resolver cualquier
                        inconveniente.
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Fade>

              <Fade direction="left" triggerOnce="true">
                <Accordion.Item eventKey="7" className="mb-2">
                  <Accordion.Header>
                    <strong>¿Puedo cambiar mi plan de membresía?</strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="text-start">
                      <p>
                        Sí, puedes cambiar tu plan de membresía en cualquier
                        momento desde la sección "Cuenta" en tu perfil. Los
                        cambios se reflejarán inmediatamente en tu próxima
                        facturación.
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Fade>

              <Fade direction="left" triggerOnce="true">
                <Accordion.Item eventKey="8" className="mb-2">
                  <Accordion.Header>
                    <strong>
                      ¿Cómo puedo retirar mis ganancias como freelancer?
                    </strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="text-start">
                      <p>
                        Para retirar tus ganancias, dirígete a la sección
                        "Finanzas" en tu perfil y selecciona tu método de retiro
                        preferido. Las opciones incluyen transferencias
                        bancarias y PayPal.
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Fade>
            </Accordion>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <h3 className="title-contacto mt-5 mb-4">
              ¡Comunícate con Nosotros!
            </h3>
            <p className="text-info-contacto mb-5">
              Estamos aquí para ayudarte a resolver cualquier duda o
              inconveniente que tengas.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <p className="text-info-contacto text-left">
              ¿Tienes preguntas o necesitas ayuda?
            </p>
            <label className="label-contacto text-left">
              ¡Estamos aquí para asistirte! Completa el formulario a continuación y nuestro equipo se pondrá en contacto contigo lo antes posible.
              Tu feedback es muy importante para nosotros, y queremos asegurarnos de que tengas la mejor experiencia. 
              ¡Gracias por tu confianza!
            </label>
          </div>
          <div className="col-xs-12 col-lg-6 text-center">
            <p className="title">Formulario en Construcción</p>
            <FaTools size={"6em"} color={"#8C52FF"} />
            <p className="text mt-4 mb-0">
              Estamos trabajando arduamente para traerte una experiencia mejorada.
              <br />
              Vuelve pronto para ver las novedades.
            </p>
            <p className="text">¡Gracias por tu paciencia!</p>
          </div>
        </div>
      </div>
    </section>
  );
};
