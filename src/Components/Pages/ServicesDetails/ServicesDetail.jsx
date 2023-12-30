import React from "react";
import { useParams } from "react-router-dom";
import Servicios from "../../Mocks/Servicios.json";
const ServicesDetail = () => {
  const { id } = useParams();
  const servicios = Servicios.find((servicio) => servicio.id === parseInt(id));

  return (
    <section>
      <div className="lg:w-1/2 mx-auto flex flex-col justify-start items-center  gap-y-4">
        <h1>{servicios.title}</h1>
        <p>{servicios.description}</p>
        <img src={servicios.img} alt="" />
        <p>{servicios.info}</p>
        <div className="flex flex-col justify-start items-start gap-y-10">
          {servicios.careInfo.map((item) => {
            return (
              <div key={item.title}>
                <h1>{item.title}</h1>
                <p>{item.info}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetail;
