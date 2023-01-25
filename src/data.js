export const skills = [
  // incluir logos de las tecnologias que voy a usar
  <div className="flex flex-wrap -m-1">
     <img alt="javascript"
     src="https://img.icons8.com/color/48/000000/javascript.png"/>
     Javascript
  </div>,
  <div className="flex flex-wrap -m-1">
      <img alt="react"
      src="https://img.icons8.com/color/48/000000/react-native.png"/>
      React
  </div>,
  <div className="flex flex-wrap -m-1">
      <img alt="node"
      src="https://img.icons8.com/color/48/000000/nodejs.png" style={{background:"white"}}/>
      Node
  </div>,
  <div className="flex flex-wrap -m-1">
      <img alt="express" 
      src="https://img.icons8.com/color/48/000000/express.png" style={{background:"green"}}/>
      Express
  </div>,
  <div className="flex flex-wrap -m-1">
      <img alt="postgresql"
      src="https://img.icons8.com/color/48/000000/postgreesql.png"/>
      PostgreSQL
  </div>,
  <div className="flex flex-wrap -m-1">
      <img alt="html"
      src="https://img.icons8.com/color/48/000000/html-5.png"/>
      HTML
  </div>,
  <div className="flex flex-wrap -m-1">
      <img alt="css"
      src="https://img.icons8.com/color/48/000000/css3.png"/>
      CSS
  </div>,
  <div className="flex flex-wrap -m-1">
      <img alt="bootstrap"
      src="https://img.icons8.com/color/48/000000/bootstrap.png"/>
      Bootstrap
  </div>,
  <div className="flex flex-wrap -m-1">
      <img alt="tailwind"
      src="./tailwind.ico" style={{width:"40px", height:"40px"}}/>
      Tailwind
  </div>,
  <div className="flex flex-wrap -m-1">
      <img alt="github"
      src="https://img.icons8.com/color/48/000000/github--v1.png"/>
      GitHub
  </div>,
  <div className="flex flex-wrap -m-1">
      <img alt="redux"
      src="https://img.icons8.com/color/48/000000/redux.png"/>
      Redux
  </div>,
  <div className="flex flex-wrap -m-1">
      <img alt="sequelize"
      src="./sequelize.png"/>
      Sequelize
  </div>,
  
   
];


export const projects = [
    {
      title: "ACMEtronics",
      subtitle: "Tienda de tecnología",
      description:
      "Proyecto final grupal del curso de React de Henry. Tienda de tecnología con carrito de compras, método de pagos, registro x mail, filtros, paginado, ordenamiento, etc. Se utilizó React, Redux, Node, Express, Sequelize, PostgreSQL, Tailwind, Bootstrap, etc.",
      image: "./20.gif",
      link: "https://front-acmetronic-production.up.railway.app/",
    },
    {
      title: "Fast Wheather",
      subtitle: "Pronóstico climatico",
      description: "Pequeño proyecto hecho con React. Se utiliza la API de Openweathermap para obtener el pronóstico climático de una ciudad. Se puede buscar por nombre de ciudad.",
      image: "./31.gif",
      link: "https://github.com/molinito/Fast-Weather",
    },
   
  ];

  export const testimonials = [
    {
      quote:
      <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7022256808715010048" height="450" width="100%" frameborder="0"  title="Publicación integrada"></iframe>,
      image: "./Pau.jpeg",
      name: "Paula Kunning",
      company: <a href="https://www.soyhenry.com/" className="text-yellow-500"><h6>Soy Henry</h6>
      <img src="./HenryLogo.jpg" alt="logo" className="w-6 inline-block" style={{width:"20%"}} />
      </a>,
      link: "https://linkedin.com/in/paula-kunning",
    },
    {
      quote:
      <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7023297202127036416" height="450" width="100%" frameborder="0" allowfullscreen="" title="Publicación integrada"></iframe>,
      image: "./Erika.jpeg",
      name: "Erika Pineda",
      company: <a href="https://www.soyhenry.com/" className="text-yellow-500"><h6>Soy Henry</h6>
      <img src="./HenryLogo.jpg" alt="logo" className="w-6 inline-block" style={{width:"20%"}} />
      </a>,
      link: "https://linkedin.com/in/erika-pineda-92322b262",
    },
    {
      quote:
      <img alt="perfil" src={"./04.png"} height="500" width="450" frameborder="100%" allowfullscreen="" title="Publicación integrada"></img>,
      image: "./Gian.jpeg",
      name: "Gian Franco Zabarino",
      company: <a href="https://trupropel.com/" className="text-yellow-500"> <h6>Trupropel</h6>
      <img src="./trupropel.jpeg" alt="logo" className="w-6 inline-block" style={{width:"20%"}} />
      </a> ,
      link:"https://linkedin.com/in/gfzabarino",
    },
    {
      quote:
      <img alt="perfil" src={"./6.png"} height="500" width="450" frameborder="100%" allowfullscreen="" title="Publicación integrada"></img>,
      image: "./17.jpeg",
      name: "Franco Charriol",
      company: <a href="https://cxonexus.com/" className="text-yellow-500"> <h6>CXO Nexus</h6>
      <img src="./nexus.jpg" alt="logo" className="w-6 inline-block" style={{width:"20%"}} />
      </a> ,
      link:"https://linkedin.com/in/franco-charriol-567bb536",
    },
  ];
  
