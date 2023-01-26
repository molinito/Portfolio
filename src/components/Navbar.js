import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        
        <a href="#about" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <img className='w-10 h-10 rounded-full object-cover object-center'
                alt='avatar'
                src="./176.jpg" >
                    </img>
            <a href="#about" className="ml-3 text-xl">
                Marcelo Saravia
            </a>
        </a>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Experiencia Laboral
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
            <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonios
            </a>
        </nav>

        <a href="linkedin.com/in/marcelo-saravia-27128092" className="mr-1 hover:text-white" >
            <img alt="icono" src="./51.png" style={{width:"100%"}}/>
            </a>
        <a href="https://github.com/molinito" >
            <img alt="icono" src="./github15.png" style={{width:"100%"}}/>
            </a>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Contactame
          <ArrowRightIcon className="w-4 h-4 ml-1" />
          
        </a>
      </div>
    </header>
  );
}