import React from 'react';


export default function About() {
    return (
        <section id="about">
       
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hola, mi nombre es Marcelo.
                </h1>
                <br className="hidden lg:inline-block" />
                <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-white">
                Me apasiona la tecnología y la creación de aplicaciones.
                
              </h1>
              <p className="mb-8 leading-relaxed">
                Estoy en constante aprendizaje y me encanta compartir mis conocimientos. 
                Recién graduado de la carrera de Fullstack Developer en la Academia Henry. Búscalo en
                {/*crear un llink referencia a soyhenry.com*/ }
                <a href="https://www.soyhenry.com/" className="text-green-500"> SoyHenry</a> .
                <br className="hidden lg:inline-block" />
                Me desempeño en el desarrollo de aplicaciones web. Trabajo de forma individual, pero hacerlo en equipo es donde puedo potenciar mis fortalezas.
                <br className="hidden lg:inline-block" />
                Vengo a integrarme al mundo IT ofreciendo mis servicios para satisfacer 
                las necesidades de las empresas y clientes usuarios.
                Este es mi portfolio, espero que lo disfrutes.
                </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Contáctame
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  Mis proyectos
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./pngegg30.png"
              />
            </div>
          </div>
        </section>
      );
    }