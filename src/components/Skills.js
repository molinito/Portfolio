import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Tecnologias
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          <img src="./pngegg27.png" alt="1" style={{borderRadius:"20px", width:"50%", height:"50%", marginLeft:"25%"}}/>
            Traigo una gran cantidad de habilidades
            que me ayudan a trabajar en equipo y a comunicarme de manera efectiva, soy creativo, perseverante,
            respetuoso, con actitudes de líder y colaborativo, dedicándome
            a la resolución de problemas y a la mejora continua, dentro de un clima laboral agradable
            siempre con un mismo lema: "satisfacer una necesidad con excelencia".
            <br />
            <br />
            Además tengo conocimientos en las siguientes tecnologías:
            </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white" >
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}