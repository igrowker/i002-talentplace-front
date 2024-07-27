import React from 'react'
import { BsLightbulb } from "react-icons/bs";
import { PiSuitcaseSimple } from "react-icons/pi";
import { BiWorld } from "react-icons/bi";
import CardInfo from '../../components/CardInfo/CardInfo';
import { Accordion, Card } from 'react-bootstrap';
import './Nosotros.css'
import nosotros01  from '../../assets/assets-png/nosotros01.png';
import nosotros02  from '../../assets/assets-png/nosotros02.png';
import nosotros03  from '../../assets/assets-png/nosotros03.png';
import { RiSuitcaseFill } from "react-icons/ri";
import { FaBriefcase, FaUserGraduate } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";


export const Nosotros = () => {

    const infoObjetivos = [
        {
            id: 1,
            title: "Facilitar Conexiones",
            text: "Ayudar a los profesionales juniors a encontrar trabajos que se alineen con sus habilidades y objetivos profesionales."
        },
        {
            id: 2,
            title: "Ofrecer Oportunidades Reales",
            text: "Proporcionar a los empleadores acceso a un pool de talento emergente y cualificado."
        },
        {
            id: 3,
            title: "Seguridad y Confianza",
            text: "Garantizar un entorno seguro y confiable para que los juniors puedan trabajar con tranquilidad."
        }
    ];

    return (
        <Fade>
            <main className='px-3 text-center'>
                    <section className='nosotros-head__container'>
                        <h1 className='my-4'>TALENTPLACE</h1>
                        <p className='px-5 fs-5'>TalentPlace es una plataforma innovadora diseñada para conectar a freelancers y empleadores de todo el mundo. Nuestra misión es ofrecer oportunidades reales y significativas tanto para quienes buscan trabajo como para quienes necesitan talento especializado.</p>
                        <div className='cardInfo-container'>
                            <CardInfo imagen={nosotros01} textColor="color" text="Conectamos el talento junior con las oportunidades"/>
                            <CardInfo imagen={nosotros02} textColor="color" text="Nos reinventamos para brindarte un servicio excepcional"/>
                            <CardInfo imagen={nosotros03} textColor="color" text="Ofrecemos oportunidades laborales reales y significativas"/>
                        </div>
                        <h5 className='px-5 fs-4 pt-5'>Fundada en 2024, TalentPlace nació con la visión de facilitar la entrada al mercado laboral para los profesionales juniors. Hoy en día, somos una plataforma confiable para miles de juniors y empleadores que confían en nosotros para llevar a cabo sus proyectos con éxito.</h5>
                    </section>

                <section>
                    <h3 className='my-4 pt-4 pb-3'>Nuestros objetivos</h3>
                    <Fade duration="2000" triggerOnce="true">
                        <div className='cardInfo-container'>
                            {infoObjetivos.map(({id, title, text})=>(
                                <CardInfo key={id} title={title} text={text} border="true"/>
                            ))}
                        </div>
                    </Fade>
                </section>
                <section className='nosotros-section3'>
                    <h3 className='my-4 pt-4'>Cargos y tarifas</h3>
                    <h5 className='pb-5'>En TalentPlace, nos aseguramos de que tanto Empleados como Empleadores comprendan claramente nuestras tarifas y comisiones.</h5>
                    <section className='container-fluid section4 pt-4 pb-5 mb-5'>
                        <div className='svg3'></div>    
                            <div className='row'>
                                <div className='col-sm-12 col-md-6 md-pe-sec4 p-0 '>
                                    <Fade direction="left" delay="50" triggerOnce="true">
                                        <div className='d-flex align-items-center jce pe-sec4'>
                                            <div className='contratar d-flex flex-column align-items-center justify-content-center'>
                                                <div className='icon-container d-flex align-items-center justify-content-center bg-white mb-4 mt-5'>
                                                    <FaBriefcase className='icons'/>
                                                </div>
                                                <div className='text-center w-75 p-2 pt-4 mb-3'>
                                                    <p><strong>Comisión por Contratación:&nbsp;</strong>Los empleadores también están sujetos a una pequeña comisión sobre el pago total por proyecto.</p>
                                                    <p><strong>Boletas y Facturación:&nbsp;</strong>Recibirás una copia de la boleta en tu correo electrónico para cada proyecto contratado.</p>
                                                    <p><strong>Extras:&nbsp;</strong>Ofrecemos diversas opciones de facturación y soporte para que tu experiencia sea lo más fluida posible.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                                <div className='col-sm-12 col-md-6 p-0 '>
                                    <Fade direction="left" triggerOnce="true">
                                        <div className='d-flex align-items-center jcs ps-sec4'>
                                            <div className='trabajar d-flex flex-column align-items-center justify-content-center'>
                                                <div className='icon-container d-flex align-items-center justify-content-center bg-white mb-4 mt-5'>
                                                    <FaUserGraduate className='icons'/>
                                                </div>
                                                <div className='text-center w-75 p-2 pt-4 mb-3'>
                                                    <p><strong>Comisión por Proyecto:&nbsp;</strong> Retenemos un porcentaje del pago total por proyecto completado.</p>
                                                    <p><strong>Boletas y Facturación:&nbsp;</strong> Una copia de la boleta se enviará automáticamente a tu correo electrónico después de cada transacción</p>
                                                    <p><strong>Transparencia:&nbsp;</strong>Mantenemos tarifas justas y transparentes para que puedas concentrarte en tu trabajo sin preocupaciones..</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </section>
                </section>
                <section className='pt-0 pb-5'>
                    <h3 className='my-4 pt-4'>Membresías en TalentPlace</h3>
                    <Accordion className='px-5 accordion'>

                        <Fade direction="left"  triggerOnce="true">
                        <Accordion.Item eventKey="0" className='mb-2'>
                            <Accordion.Header>Membresía Básica</Accordion.Header>
                            <Accordion.Body>
                                <div className='text-start'>
                                    <strong>Descripcion:</strong>Acceso gratuito con funciones básicas.
                                    <br />
                                    <strong>Membresía para Empleados Juniors</strong>
                                    <br />
                                    <strong>Beneficios:</strong>
                                    <br />
                                    <li>Posicionamiento estándar en las búsquedas.</li>
                                    <li>Acceso a proyectos básicos.</li>
                                    <li>Notificaciones de nuevos proyectos.</li>
                                    <br />
                                    <strong>Membresía para Empleadores</strong>
                                    <br />
                                    <strong>Beneficios:</strong>
                                    <br />
                                    <li>Posicionamiento estándar de proyectos.</li>
                                    <li>Publicación de un número limitado de proyectos al mes.</li>
                                    <li>Acceso a freelancers básicos.</li>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        </Fade>

                        <Fade delay="50" direction="left"  triggerOnce="true">
                        <Accordion.Item eventKey="1" className='mb-2'>
                            <Accordion.Header>Membresía Premium</Accordion.Header>
                            <Accordion.Body>
                                <div className='text-start'>
                                    <strong>Descripcion:</strong>Acceso a funciones avanzadas por una tarifa mensual.
                                    <br />
                                    <strong>Membresía para Empleados Juniors</strong>
                                    <br />
                                    <strong>Beneficios:</strong>
                                    <br />
                                    <li>Mejor posicionamiento en las búsquedas.</li>
                                    <li>Recomendaciones de perfil a empleadores.</li>
                                    <li>Acceso prioritario a nuevos proyectos.</li>
                                    <li>Soporte prioritario.</li>
                                    <li>Análisis y reportes de perfil para mejorar visibilidad.</li>
                                    <br />
                                    <strong>Membresía para Empleadores</strong>
                                    <br />
                                    <strong>Beneficios:</strong>
                                    <br />
                                    <li>Mejor posicionamiento de proyectos en las búsquedas.</li>
                                    <li>Publicación de proyectos ilimitada.</li>
                                    <li>Etiqueta de "Empleador Premium".</li>
                                    <li>Acceso prioritario a freelancers recomendados.</li>
                                    <li>Soporte prioritario.</li>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        </Fade>

                        <Fade delay="100" direction="left"  triggerOnce="true">
                        <Accordion.Item eventKey="2" className='mb-2'>
                            <Accordion.Header>Membresía Pro</Accordion.Header>
                            <Accordion.Body>
                                <div className='text-start'>
                                    <strong>Descripcion:</strong>Acceso gratuito con funciones básicas.
                                    <br />
                                    <strong>Membresía para Empleados Juniors</strong>
                                    <br />
                                    <strong>Beneficios:</strong>
                                    <br />
                                    <li>Posicionamiento destacado en las búsquedas.</li>
                                    <li>Recomendaciones frecuentes a empleadores de alto nivel.</li>
                                    <li>Acceso exclusivo a proyectos de alto perfil.</li>
                                    <li>Soporte VIP 24/7.</li>
                                    <li>Análisis detallado de perfil y consejos personalizados para optimizar oportunidades.</li>
                                    <br />
                                    <strong>Membresía para Empleadores</strong>
                                    <br />
                                    <strong>Beneficios:</strong>
                                    <br />
                                    <li>Mejor posicionamiento de proyectos en las búsquedas.</li>
                                    <li>Publicación de proyectos ilimitada.</li>
                                    <li>Etiqueta de "Empleador Premium".</li>
                                    <li>Acceso prioritario a freelancers recomendados.</li>
                                    <li>Soporte prioritario.</li>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        </Fade>

                        <Fade delay="150" direction="left"  triggerOnce="true">
                        <Accordion.Item eventKey="3" className='mb-2'>
                            <Accordion.Header>Membresía Corporativa</Accordion.Header>
                            <Accordion.Body>
                                <div className='text-start'>
                                    <strong>Descripcion:</strong>Acceso gratuito con funciones básicas.
                                    <br />
                                    <strong>Membresía para Empleadores</strong>
                                    <br />
                                    <strong>Beneficios:</strong>
                                    <br />
                                    <li>Posicionamiento destacado de proyectos en las búsquedas.</li>
                                    <li>Publicación de proyectos ilimitada con opciones destacadas.</li>
                                    <li>Etiqueta de "Empleador VIP".</li>
                                    <li>Acceso exclusivo a los mejores freelancers juniors.</li>
                                    <li>Soporte VIP 24/7.</li>
                                    <li>Análisis y reportes detallados sobre el rendimiento de los proyectos y recomendaciones para optimizar la contratación.</li>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        </Fade>

                    </Accordion>
                </section>
                <section className='container-fluid container-mapa-del-sitio rounded position-relative'>
                    <div className='bg-container-mapa-del-sitio'></div>
                    <div className="row">
                        <div className="col-xs-12">
                            <h3 className='my-4 pt-4'>Mapa del sitio</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-lg-3">
                            <p className="subtitle-mapa">Inicio/Home</p>
                            <ul className="list-mapa">
                                <li className="list-item-mapa">Categorias destacadas</li>
                                <li className="list-item-mapa">Categorias</li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-lg-3">
                            <p className="subtitle-mapa">Nosotros</p>
                            <ul className="list-mapa">
                                <li className="list-item-mapa">TalentPlace</li>
                                <li className="list-item-mapa">Historia</li>
                                <li className="list-item-mapa">Objetivos</li>
                                <li className="list-item-mapa">Cargos y Tarifas</li>
                                <li className="list-item-mapa">Membresías</li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-lg-3">
                            <p className="subtitle-mapa">Contáctanos</p>
                            <ul className="list-mapa">
                                <li className="list-item-mapa">Aprende en TalentPlace</li>
                                <li className="list-item-mapa ml-2">Aprende a Trabajar</li>
                                <li className="list-item-mapa ml-2">Aprende a Contratar</li>
                                <li className="list-item-mapa">Preguntas Frecuentes (FAQ)</li>
                                <li className="list-item-mapa">Comunícate con Nosotros</li>
                                <li className="list-item-mapa">Contacto</li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-lg-3">
                            <p className="subtitle-mapa">Oportunidades</p>
                            <ul className="list-mapa">
                                <li className="list-item-mapa">Explora proyectos publicados</li>
                            </ul>
                        </div>
                    </div>
                
                </section>
            </main>
        </Fade>
    )
}

export default Nosotros