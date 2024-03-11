import React from "react";

export const skills = [
  // incluir logos de las tecnologias que voy a usar
  <div className="flex flex-flex -m-1">
    <img
      alt="javascript"
      src="https://img.icons8.com/color/48/000000/javascript.png"
      style={{marginRight: "10px"}}
    />
    Javascript
  </div>,
  <div className="flex flex-wrap -m-1">
    <img
      alt="react"
      src="https://img.icons8.com/color/48/000000/react-native.png"
      style={{marginRight: "10px"}}
    />
    React
  </div>,
  <div className="flex flex-wrap -m-1">
    <img
      alt="node"
      src="https://img.icons8.com/color/48/000000/nodejs.png"
      style={{ background: "white", marginRight: "10px" }}
    />
    Node
  </div>,
  <div className="flex flex-wrap -m-1">
    <img
      alt="express"
      src="https://img.icons8.com/color/48/000000/express.png"
      style={{ background: "green", marginRight: "10px" }}
    />
    Express
  </div>,
  <div className="flex flex-wrap -m-1">
    <img
      alt="postgresql"
      src="https://img.icons8.com/color/48/000000/postgreesql.png"
      style={{marginRight: "10px"}}
    />
    PostgreSQL
  </div>,
  <div className="flex flex-wrap -m-1">
    <img alt="html" src="https://img.icons8.com/color/48/000000/html-5.png" 
    style={{marginRight: "10px"}}
    />
    
    HTML
  </div>,
  <div className="flex flex-wrap -m-1">
    <img alt="css" src="https://img.icons8.com/color/48/000000/css3.png" 
    style={{marginRight: "10px"}}
    />
    CSS
  </div>,
  <div className="flex flex-wrap -m-1">
    <img
      alt="bootstrap"
      src="https://img.icons8.com/color/48/000000/bootstrap.png"
      style={{marginRight: "10px"}}
    />
    Bootstrap
  </div>,
  <div className="flex flex-wrap -m-1">
    <img
      alt="tailwind"
      src="./tailwind.ico"
      style={{ width: "40px", height: "40px", marginRight: "10px" }}
    />
    Tailwind
  </div>,
  <div className="flex flex-wrap -m-1">
    <img
      alt="github"
      src="https://img.icons8.com/color/48/000000/github--v1.png"
      style={{marginRight: "10px"}}
    />
    GitHub
  </div>,
  <div className="flex flex-wrap -m-1">
    <img alt="redux" src="https://img.icons8.com/color/48/000000/redux.png" 
    style={{marginRight: "10px"}}
    />
    Redux
  </div>,
  <div className="flex flex-wrap -m-1">
    <img alt="sequelize" src="./sequelize.png" 
    style={{marginRight: "10px"}}
    />
    Sequelize
  </div>,
  <div className="flex flex-wrap -m-1">
    <img alt="mysql" src="./mysql.png" 
    style={{ width: "50px", height: "40px", marginRight: "10px"}}/>
    MySQL
  </div>,
  <div className="flex flex-wrap -m-1">
    <img alt="php" src="./php.png"
    style={{ width: "60px", height: "40px", marginRight: "10px" }} />
    PHP
  </div>,
  <div className="flex flex-wrap -m-1">
  <img alt="php" src="./figma.png"
  style={{ width: "50px", height: "40px", marginRight: "10px" }} />
  Figma
</div>,
<div className="flex flex-wrap -m-1">
    <img alt="php" src="./scrum.png"
    style={{ width: "50px", height: "40px", marginRight: "10px" }} />
    Scrum
  </div>,
];

export const projects = [
  {
    title: "ACMEtronics",
    subtitle: "Tienda de tecnología",
    description:
      "Proyecto final grupal del curso de React de Henry.",
    image: "./20.gif",
    link: "https://acmetronics-henryproject.vercel.app/",
  },
  {
    title: "Fast Wheather",
    subtitle: "Pronóstico climatico",
    description:
      "Pequeño proyecto hecho con React.Se usó la API de Openweathermap.",
    image: "./31.gif",
    link: "https://jolly-jalebi-8d2c66.netlify.app/",
  },

  {
    title: "Mini ecommerce",
    subtitle: "Tienda virtual",
    description:
      "Proyecto hecho con React. Se utiliza la API de la web Fakestoreapi.com para crear los articulos.",
    image: "./05.gif",
    link: "https://superb-melomakarona-ba2814.netlify.app/",
  },
  {
    title: "Desis PHP",
    subtitle: "Sistema de Votación",
    description:
      "Proyecto hecho con HTML,PHP, MySQL, Javascript, Xampp, sobre sistema de votación",
    image: "./06.gif",
    link: "https://molinitodesis.000webhostapp.com/",
  },

  {
    title: "Language App",
    subtitle: "Traductor de textos a diferentes idiomas",
    description:
      "Traductor de texto a diferentes lenguajes usando la Api de la web RapidApi.com.",
    image: "./text-translator.gif",
    link: "https://splendorous-shortbread-63d3c3.netlify.app/",
  },

  {
    title: "Calculadora Intereses",
    subtitle: "Proyección intereses método simple",
    description:
      "Calculadora de intereses para proyección de ganancias usando el método simple. Hecho con React y Javsacript.",
    image: "./output.gif",
    link: "https://calculo-interes.vercel.app/",
  },
];

export const testimonials = [
  {
    quote: (
      <iframe
        src="https://www.linkedin.com/embed/feed/update/urn:li:share:7022256808715010048"
        height="450"
        width="100%"
        frameBorder="0"
        title="Publicación integrada"
      ></iframe>
    ),
    image: "./Pau.jpeg",
    name: "Paula Kunning",
    company: (
      <a href="https://www.soyhenry.com/" className="text-yellow-500">
        <h6>Soy Henry</h6>
        <img
          src="./HenryLogo.jpg"
          alt="logo"
          className="w-6 inline-block"
          style={{ width: "20%" }}
        />
      </a>
    ),
    link: "https://linkedin.com/in/paula-kunning",
  },
  {
    quote: (
      <iframe
        src="https://www.linkedin.com/embed/feed/update/urn:li:share:7023297202127036416"
        height="450"
        width="100%"
        frameBorder="0"
        allowFullScreen=""
        title="Publicación integrada"
      ></iframe>
    ),
    image: "./Erika.jpeg",
    name: "Erika Pineda",
    company: (
      <a href="https://www.soyhenry.com/" className="text-yellow-500">
        <h6>Soy Henry</h6>
        <img
          src="./HenryLogo.jpg"
          alt="logo"
          className="w-6 inline-block"
          style={{ width: "20%" }}
        />
      </a>
    ),
    link: "https://linkedin.com/in/erika-pineda-92322b262",
  },
  {
    quote: (
      <img
        alt="perfil"
        src={"./04.png"}
        height="500"
        width="450"
        frameBorder="100%"
        allowFullScreen=""
        title="Publicación integrada"
      ></img>
    ),
    image: "./Gian.jpeg",
    name: "Gian Franco Zabarino",
    company: (
      <a href="https://trupropel.com/" className="text-yellow-500">
        {" "}
        <h6>Trupropel</h6>
        <img
          src="./trupropel.jpeg"
          alt="logo"
          className="w-6 inline-block"
          style={{ width: "20%" }}
        />
        
      </a>
    ),
    link: "https://linkedin.com/in/gfzabarino",
  },
  {
    quote: (
      <img
        alt="perfil"
        src={"./6.png"}
        height="500"
        width="450"
        frameBorder="100%"
        allowFullScreen=""
        title="Publicación integrada"
      ></img>
    ),
    image: "./17.jpeg",
    name: "Franco Charriol",
    company: (
      <a href="https://cxonexus.com/" className="text-yellow-500">
        {" "}
        <h6>CXO Nexus</h6>
        <img
          src="./nexus.jpg"
          alt="logo"
          className="w-6 inline-block"
          style={{ width: "20%" }}
        />
      </a>
    ),
    link: "https://linkedin.com/in/franco-charriol-567bb536",
  },
];
