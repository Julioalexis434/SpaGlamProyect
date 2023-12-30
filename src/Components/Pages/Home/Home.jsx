import React from "react";
import Servicios from "../../Mocks/Servicios.json";
import { Link } from "react-router-dom";
import IconWha from "../../Global/IconWha";
import Images from "../../Mocks/Imagenes.json";
import { UseImages } from "../../Hooks/UseImages";
import { RiCloseLine } from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { openImage, closeImage, toggleImage, displayImage } = UseImages();
  const { isAuthenticated, user } = useAuth0();

  return (
    <section>
      <div className=" bg-primary-100 w-full max-w-3xl px-3 py-8 text-2xl mx-auto flex items-center justify-between mb-5">
        <Link to="/sobre/nosotros">HISTORIA</Link>
        <nav className="flex gap-4 justify-center items-center">
          <span className="block p-2 lg:hover:translate-y-1 lg:hover:text-primary-600 transition-all duration-200">
            <IconWha
              textDefault={
                "Hola, estoy interesad@ en sus productos y servicios"
              }
            />
          </span>
          <a
            href="https://www.instagram.com/spaglampei/"
            target="_blank"
            className="block p-2 lg:hover:translate-y-1 lg:hover:text-primary-600 transition-all duration-200"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@spaglam_?_t=8eyRJqeR02Y&_r=1&fbclid=IwAR3hEPQ0B6zBx3z7yQt5yz6psJXuMLfXevAnPBznIo0NSRDK6J2n-RkcDic"
            target="_blank"
            className="block p-2 lg:hover:translate-y-1 lg:hover:text-primary-600 transition-all duration-200"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 8.24537V15.5C16 19.0899 13.0899 22 9.5 22C5.91015 22 3 19.0899 3 15.5C3 11.9101 5.91015 9 9.5 9C10.0163 9 10.5185 9.06019 11 9.17393V12.3368C10.5454 12.1208 10.0368 12 9.5 12C7.567 12 6 13.567 6 15.5C6 17.433 7.567 19 9.5 19C11.433 19 13 17.433 13 15.5V2H16C16 4.76142 18.2386 7 21 7V10C19.1081 10 17.3696 9.34328 16 8.24537Z"></path>
            </svg>
          </a>
        </nav>
      </div>

      
      <h1 className="my-10 text-center">Bienvenido {isAuthenticated && user.given_name}</h1>


      <div className="font-[cursive] w-full max-w-3xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-2 text-xl gap-x-4">
          <div>
            {Servicios.slice(0, 3).map((item) => {
              return (
                <article
                  key={item.id}
                  className="flex flex-col border w-full h-max rounded-lg overflow-hidden lg:w-5/6 bg-white lg:pb-6 shadow-md select-none lg:p-2  relative z-10 hover:scale-[1.02] transition-transform duration-300 mb-6"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full lg:w-auto object-cover lg:mb-5 rounded-lg aspect-auto"
                  />

                  <div className="px-1 pt-[10%] flex flex-col justify-between lg:px-3 w-full">
                    <div>
                      <h1 className="font-bold text-sm mb-4 lg:text-xl">
                        {item.title}
                      </h1>
                      <p className="text-xs mb-4 lg:text-lg">
                        {item.description.slice(0, 50) + "..."}
                      </p>
                    </div>

                    <div className="flex flex-col justify-between items-center lg:gap-y-8 mb-2 mr-2 lg:m-0 font-mono">
                      <strong>${item.price}</strong>

                      <div className="flex lg:justify-between gap-x-6 flex-wrap justify-center gap-y-3 mt-2">
                        <Link to={`/servicio/${item.id}`}>
                          <button className="bg-primary-100 px-4 py-2 rounded-lg hover:bg-primary-100/50 hover:text-white transition-all duration-300">
                            Detalles
                          </button>
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

          <div className="flex flex-col gap-y-6 justify-between">
            {Images.slice(14).map((item) => {
              return (
                <img
                  key={item.id}
                  src={item.img}
                  alt={item.img}
                  className="w-full h-auto rounded-lg shadow-md aspect-video object-cover cursor-pointer hover:opacity-[.5]"
                  onClick={() => {
                    openImage(item, Images);
                  }}
                />
              );
            })}

            <div
              className={`fixed w-full h-full top-0 left-0 justify-center items-center bg-black/50 z-20 p-8 ${
                toggleImage ? "flex" : "hidden"
              }`}
            >
              <img
                src={displayImage}
                alt=""
                width={500}
                className="h-full object-contain rounded-lg"
              />
              <span
                className="absolute p-3 top-4 right-4 bg-primary-100 rounded-full"
                onClick={() => {
                  closeImage();
                }}
              >
                <RiCloseLine />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
