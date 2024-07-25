
![WhatsApp Image 2024-03-06 at 21 48 31](/src/assets/assets-img/portada.jpg)


# Introducción: ![WhatsApp Image 2024-03-06 at 21 48 31](/src/assets/assets-png/2.png)

**Descripción General:** 

TalentPlace es una plataforma diseñada para conectar freelancers y empleadores a nivel global, con un enfoque especial en brindar oportunidades reales y significativas a profesionales junior en la industria tecnológica. La plataforma facilita la contratación y gestión de proyectos, ofreciendo un entorno seguro y confiable para todas las partes involucradas..

**Problema que se intenta resolver:**

Las empresas a menudo enfrentan dificultades para encontrar y contratar desarrolladores
junior cualificados para proyectos freelance. Paralelamente, los desarrolladores junior
encuentran obstáculos para acceder a oportunidades laborales que les permitan ganar
experiencia y demostrar sus habilidades.

**Solución Propuesta:**

TalentPlace ofrece una plataforma integrada que simplifica el proceso de conexión entre
empresas y desarrolladores junior. Mediante una interfaz intuitiva y un sistema seguro de
gestión de proyectos y pagos, TalentPlace facilita la colaboración efectiva y el crecimiento
profesional de los desarrolladores junior.


## Características principales
* Landing page: Información clara y detallada sobre los beneficios de la plataforma para juniors y empresas.

* Autenticación: Registro y login utilizando JWT.

* Gestión de proyectos: Empresas pueden publicar proyectos y los juniors pueden aplicar
a ellos fácilmente.

* Sistema de reputación: Feedback bidireccional entre juniors y empresas para fomentar
la confianza y la calidad del trabajo.

* Responsive design: La plataforma está optimizada para su uso en diferentes
dispositivos y resoluciones de pantalla.

<!-- 
## Ventajas de Talent Place
<br> -->

## Demo
https://talent-place.netlify.app/

<!-- ![video_promocional](/ruta "Esta es una previsualizacion del proyecto.") -->

## Estado Actual del Proyecto:

**1. Funcionalidades y Componentes Implementados:**

- **Autenticación y Sesiones:**
  - Se ha implementado un sistema de autenticación que permite a los usuarios registrarse, iniciar sesión y cerrar sesión. La lógica de autenticación se maneja a través de un contexto de usuario (`UserProvider`) y hooks personalizados.

- **Navegación y UI:**
  - El proyecto incluye una barra de navegación (`Navbar`) que utiliza un diseño responsivo con un menú hamburguesa animado. Se ha implementado la funcionalidad de mostrar y ocultar el menú en dispositivos móviles utilizando solo CSS.
  - Se han creado componentes reutilizables para la presentación de proyectos y acciones del usuario.

- **Búsqueda y Filtros:**
  - La sección de oportunidades (`Opportunities`) incluye un sistema de búsqueda y filtrado de proyectos, permitiendo a los usuarios buscar proyectos específicos por título. La lógica de filtrado se maneja con un hook de estado y se actualiza dinámicamente según la entrada del usuario.

- **Publicación y Postulación de Proyectos:**
  - Los perfiles de empresa pueden publicar y editar proyectos detallados en la plataforma, especificando requisitos, presupuestos y otros detalles relevantes. Los perfiles de freelancers pueden buscar estos proyectos y postularse, facilitando la conexión entre talentos y oportunidades laborales.

- **Perfiles editables:**
  - Los perfiles de empresa y freelancer pueden ser editados y actualizados en cualquier momento asegurando una mejor dinámica y conexión entre los perfiles.

- **Carga y Estado:**
  - Un componente de carga (`Loading`) muestra una animación de carga mientras los datos están siendo recuperados del backend.

**2. Estado de Desarrollo y Consideraciones:**

- **Responsividad:**
  - La interfaz se ha optimizado para ser responsiva, con un enfoque en mejorar la experiencia de usuario en dispositivos móviles. Las clases de Bootstrap se han utilizado para asegurar la adaptabilidad, y se ha añadido CSS personalizado para elementos específicos.

- **Optimización de Código:**
  - Se ha mantenido un enfoque modular, utilizando componentes y hooks personalizados para una mejor organización y reutilización del código.

- **Estilización:**
  - Se han utilizado variables CSS para gestionar colores, fuentes y otros estilos, lo que facilita el mantenimiento y la consistencia del diseño.

**3. Próximos Pasos:**

- **Integración de Funcionalidades Avanzadas:**
  - Implementación de funcionalidades avanzadas como notificaciones, chat en vivo entre freelancers y empleadores, y un sistema de calificaciones y reseñas.

- **Sistema de Pago:**
  - Se planea implementar un sistema de pago que permita a las empresas realizar pagos a los freelancers de manera segura y eficiente a través de la plataforma. Esto incluirá la integración de métodos de pago populares y el manejo de transacciones financieras dentro del sistema.

- **Páginas de Información:**
  - Se completarán y mejorarán las páginas de información relacionadas con TalentPlace, incluyendo formularios de contacto, información respecto al uso de la plataforma. Esto ayudará a los usuarios a comprender mejor los servicios ofrecidos y cómo aprovecharlos al máximo.


**4. Conclusión:**
El proyecto TalentPlace está en una fase avanzada de desarrollo, con las funcionalidades principales implementadas y una interfaz de usuario pulida. La plataforma está bien posicionada para convertirse en una herramienta esencial para profesionales y empleadores en la industria tecnológica. Los próximos pasos se centrarán en mejorar la experiencia del usuario, la seguridad y la estabilidad del sistema. 


### Tecnologías

- Frontend:

  - **Javascript**
  - **React.Js**
  - **Vite Js**
  - **Bootstrap**


### Dependencias Frontend:

- "axios": Para realizar solicitudes HTTP de manera sencilla.
- "sweetalert2": Para dar mensajes a los usuarios con estilos mas detallados mejorando la UX.
- "react-loader-spinner": Para efectos de loading al conectar a la BD y dar un mejora de UX.
- "react-router-dom" y "react-dom": Para establecer el enrutamiento y la navegación.
- "react-awesome-reveal": Efecto de animación para los componentes principales.
- "react-icons": Librería utilizada para los iconos.
- "dotenv":Utilizado para ocultar los endpoints

### Repositorio de BackEnd:

[Backend TP Github](https://github.com/igrowker/i002-talentplace-back).


### Uso de la app-web

1. Clonar el repositorio desde GitHub.

```bash
   git clone https://github.com/igrowker/i002-talentplace-front
```

2. Asegurarse que se está en la carpeta correcta para instala las dependencias.

```bash
    npm install
```

3. Ejecuta el proyecto.

```bash
    npm run dev
```


### Link al prototipo

[Diseño y prototipado en Figma](https://www.figma.com/design/ePyQIYo9ZxXtLiImRiqd7p/TALENTPLACE?node-id=676-132&t=1IBsoYRz0U4wrVLY-0).


## Equipo:

| Rol               | Nombre               | Redes                                                                                                                             |
| :---------------- | :------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| `Back End`       | Octavio Quintero       | [![GitHub]](https://github.com/octa-quintero) [![linkedin]](https://www.linkedin.com/in/octavio-quintero/)                               |
| `Full Stack`       | Cesar Augusto Ausa Vasquez | [![GitHub]](https://github.com/DEV-AusA) [![linkedin]](https://www.linkedin.com/in/dev-ausa//)                                |
| `DevOps`       | Adrián José Ramos Guararima        | [![GitHub]](https://github.com/aramos20)  |
| `Front End`       | Lucas Nahuel Nuñez     | [![GitHub]](https://github.com/LucaasN) [![linkedin]](https://www.linkedin.com/in/lucas-n-nunez/)                      |
| `Front End`       | Joaquin Herrera  | [![GitHub]](https://github.com/JoaquinxHerrera) [![linkedin]](https://www.linkedin.com/in/joaquinherrera1/)                      |
| `Back End`        | Gabriel Alejandro Leal Naranjo       | [![GitHub]](https://github.com/ParkerPiter) [![linkedin]](https://www.linkedin.com/in/gabriel-lea-n/)                             |
| `Back End`        | Facundo Tiede      | [![GitHub]](https://github.com/iamtiedev) [![linkedin]](https://www.linkedin.com/in/iamtiedev/)                             |
| `Full Stack`  | Javier Rodriguez       | [![Github]](https://github.com/XabierGallardo) [![linkedin]](https://www.linkedin.com/in/javier-rodriguez-3267712b2/)           |
| `Front End`  | Julieta Mamani       | [![Github]](https://github.com/julimamani) [![linkedin]](https://www.linkedin.com/in/julieta-agustina-mamani-perez-083295250/)           |
| `QA`  | Mariano Sosa Alvarez       | [![Github]](https://github.com/Marianoafx22) [![linkedin]](https://www.linkedin.com/in/mariano-sosa-alvarez-a52440284/)           |
| `Front End`  | Kevin Joel Noviello       | [![Github]](https://github.com/kjnoviello) [![linkedin]](https://www.linkedin.com/in/kevinjoelnoviello/)           |
| `UX UI`  | Nayroby Azuaje       | [![linkedin]](https://www.linkedin.com/in/nazuaje14/)           |
| `Back End`  | Sasha Ailen Franchini       | [![Github]](https://github.com/SashaFran) [![linkedin]](https://www.linkedin.com/in/sasha-ailen-franchini/)           |



