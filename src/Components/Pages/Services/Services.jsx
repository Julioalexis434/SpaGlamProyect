import React from "react";
import Servicios from "../../Mocks/Servicios.json";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <section>
      <h1 className="text-center">SERVICIOS</h1>

      <div className="grid  grid-cols-1 lg:grid-cols-3 w-full lg:w-5/6 mx-auto gap-3 justify-items-center">
        {Servicios?.map((item) => {
          return (
            <article key={item.id} className="flex border w-full h-max rounded-lg overflow-hidden lg:w-5/6 bg-white lg:flex-col lg:pb-6 shadow-md select-none lg:p-2  relative z-10 hover:scale-[1.02] transition-transform duration-300">
              <img
                src={item.img}
                alt={item.title}
                className="w-[100px] lg:w-auto object-cover lg:mb-5 rounded-lg"
              />

              <div className="px-1 pt-[10%] flex flex-col justify-between lg:px-3 w-full">
                <div>
                  <h1>{item.title}</h1>
                  <p className="text-xs mb-4 lg:text-lg">{item.description.slice(0,70) + "..."}</p>
                </div>

                <div className="flex lg:flex-col justify-between items-center lg:gap-y-8 mb-2 mr-2 lg:m-0 ">
                  <strong className="font-mono text-xl">{item.price}</strong>
                

                <div className="flex justify-between gap-x-8 flex-col lg:flex-row gap-y-3">

                  <Link to={`/servicio/${item.id}`}>
                    <button>DETALLES</button>
                  </Link>

                  <Link to={`/agendar/servicio`}>
                    <button>AGENDAR </button>
                  </Link>
                </div>
                </div>

              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
