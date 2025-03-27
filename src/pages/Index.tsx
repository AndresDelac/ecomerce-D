
import React, { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Inicializar AOS cuando el componente se monta
    // @ts-ignore
    if (typeof AOS !== 'undefined') {
      // @ts-ignore
      AOS.init();
    }
  }, []);

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Fondo con gradiente */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-cyan-100 via-gray-200 to-green-100 blur-xl h-full w-full"></div>
      
      {/* Header y Navegación */}
      <header className="fixed top-0 left-0 w-full py-4 z-50">
        <nav className="container mx-auto flex justify-center p-3 w-auto md:w-[24vw] rounded-3xl border border-gray-600 bg-zinc-800">
          <ul className="flex space-x-5 md:space-x-10">
            <li><a href="#about" className="text-gray-200 font-quicksand hover:font-black duration-200 ease-linear text-base md:text-xl">Sobre mi</a></li>
            <li><a href="#projects" className="text-gray-200 font-quicksand hover:font-black duration-200 ease-linear text-base md:text-xl">Proyectos</a></li>
            <li><a href="#tecnologias" className="text-gray-200 font-quicksand hover:font-black duration-200 ease-linear text-base md:text-xl">Tecnologias</a></li>
          </ul>
        </nav>
      </header>
      
      <main className="container mx-auto p-4">
        {/* Sección de inicio */}
        <section 
          data-aos="fade-up" 
          data-aos-duration="1500" 
          data-aos-delay="100" 
          className="my-36 flex flex-col justify-center items-center mt-36"
        >
          <h1 className="text-4xl md:text-6xl font-quicksand font-bold">Hola, soy Andres</h1>
          <p className="mt-8 md:mt-16 text-xl md:text-3xl mx-4 md:mx-96 text-center text-gray-600 font-sans font-medium">
            Desarrollador web junior, con <span className="text-cyan-500">especializacion en Front-end. </span>
            <span className="text-green-500">De Cali, Colombia.</span> Apasionado por el mundo IT, ¡gracias por estar aquí!
          </p>
        
          <div className="mt-10 p-2 rounded-xl bg-green-400 hover:bg-green-300 duration-300 ease-in-out">
            <p className="font-quicksand text-base uppercase">Disponible para trabajar</p> 
          </div>
        </section>

        {/* Sección de enlaces de contacto */}
        <section 
          data-aos="fade-up" 
          data-aos-duration="1500" 
          data-aos-delay="400" 
          className="flex flex-col md:flex-row justify-center md:space-x-10 space-y-4 md:space-y-0 my-10"
        >
          <a href="https://www.linkedin.com/in/hugo-andres-de-la-cruz-oyola-0b9b20289/">
            <div className="mt-10 flex flex-row border shadow-lg hover:shadow-stone-600 border-cyan-500 hover:bg-zinc-700 hover:text-white hover:border-gray-200 duration-300 ease-in-out p-5 rounded-3xl max-w-56 max-h-10 items-center text-xl">
              <svg 
                className="h-7 w-7 m-1"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512"
                fill="currentColor"
              >
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
              </svg>
              Linkedin
            </div>
          </a>

          <a href="https://github.com/AndresDelac">
            <div className="md:mt-10 flex flex-row border shadow-lg hover:shadow-stone-600 border-cyan-500 hover:bg-zinc-700 hover:text-white hover:border-gray-200 duration-300 ease-in-out p-5 rounded-3xl max-w-56 max-h-10 items-center text-xl">
              <svg 
                className="h-7 w-7 m-1"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 496 512"
                fill="currentColor"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
              </svg>
              GitHub
            </div>
          </a>

          <div className="md:mt-10 flex flex-row shadow-lg hover:shadow-stone-600 border border-cyan-500 hover:bg-zinc-700 hover:text-white hover:border-gray-200 duration-300 ease-in-out p-3 rounded-3xl max-w-72 max-h-10 items-center text-lg">
            <svg 
              className="h-8 w-8 m-1"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
            </svg>
            hugoandres2205@gmail.com
          </div>
        </section>

        {/* Sección Sobre mí */}
        <section id="about" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="200" className="my-60">
          <div className="flex flex-row items-center space-x-6">
            <svg 
              className="h-12 w-10 m-2"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 448 512"
              fill="currentColor"
            >
              <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/>
            </svg>
            <h1 className="text-4xl font-quicksand font-bold my-10">Sobre mi</h1>
          </div>
        
          <div className="flex flex-col md:flex-row md:space-x-40">
            <div className="max-w-full md:max-w-[40vw] font-quicksand text-xl space-y-5">
              <p>
                Mi nombre es Hugo Andres De la Cruz y tengo 18 años. Desde pequeño, he estado apasionado por la tecnología y siempre me ha fascinado cómo funcionan las cosas. Pasaba horas viendo videos sobre temas tecnológicos.
              </p>

              <p>
                En mi adolescencia, mi amor por la tecnología creció aún más cuando tuve mi primer contacto con la programación en la secundaria. Aprendí HTML básico, lógica de programación y fundamentos de programación orientada a objetos.
              </p>

              <p>
                Al graduarme, decidí dedicar mi vida a la tecnología. Intenté ingresar a la universidad para estudiar Ingeniería de Software, pero no pude debido a problemas de gestión de documentos (aun planeo entrar). Sin embargo, encontré muchos cursos en línea y el Bootcamp de Henry fue el que más me llamó la atención
              </p>

              <p>
                Me uní a este Bootcamp, y aunque fue desafiante aprender a programar, logré superar todas las tareas, proyectos y exámenes, y me gradué. Ahora, sigo estudiando de forma autodidacta en este apasionante mundo tecnológico.
              </p>
            </div>
            <div className="mt-8 md:mt-0 flex justify-center">
              <div data-aos="zoom-in" data-aos-delay="600" className="h-80 w-80 md:h-[28vw] md:w-auto rounded-3xl shadow-xl shadow-stone-600 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">Foto de perfil</span>
              </div>
            </div>
          </div>
        </section>
         
        {/* Sección de proyectos */}
        <section id="projects" data-aos="zoom-in" data-aos-duration="1500" data-aos-duration="2000" className="my-48">
          <div data-aos="zoom-in" data-aos-duration="1500" data-aos-duration="2000" data-aos-delay="150" className="flex flex-row space-x-5 items-center">
            <svg 
              className="h-10 w-10 m-2"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 640 512"
              fill="currentColor"
            >
              <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/>
            </svg>
            <h1 className="text-4xl font-quicksand font-bold my-10">Mis Proyectos</h1>
          </div>

          <div className="flex flex-col gap-4 mt-5 mx-4 md:mx-12 space-y-16">
            {/* Proyecto 1 */}
            <div data-aos="fade-up-left" data-aos-duration="1500" data-aos-duration="3000" data-aos-delay="1000" className="bg-white p-4 rounded shadow flex flex-col md:flex-row items-center md:space-x-10">
              <div className="w-full md:w-1/3 h-72 bg-gray-300 flex items-center justify-center rounded">
                <span className="text-gray-600">Imagen del Proyecto 1</span>
              </div>
              <div className="mt-4 md:mt-0 md:ml-4">
                <div className="flex flex-col md:flex-row md:space-x-20 lg:space-x-80">
                  <h2 className="text-3xl font-quicksand font-semibold uppercase">Pagina Personal</h2>
                  
                  <div className="relative group mt-4 md:mt-0">
                    <button className="border border-cyan-600 hover:bg-green-200 rounded-xl p-3 flex items-center">
                      <span className="ml-2 text-xl">Tecnologías</span>
                      <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ul className="p-2">
                        <li className="py-1 px-2 hover:bg-gray-100">HTML</li>
                        <li className="py-1 px-2 hover:bg-gray-100">CSS</li>
                        <li className="py-1 px-2 hover:bg-gray-100">JavaScript</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="mt-2 md:max-w-[30vw] my-4 font-sans">Este fue uno de los primeros proyectos donde implemente las tres tecnologias basicas para el desarrollo web, tiene como objetivos esta pagina de presentarme y de que la persona que entre a esta pagina pueda en el apartado de activiades pueda crear su tarjeta con su actividad favorita</p>

                <div className="flex flex-row md:space-x-60 items-center mt-4">    
                  <div className="flex flex-row border items-center border-gray-600 hover:border-green-500 hover:bg-green-300 duration-300 ease-in-out rounded-3xl p-1">
                    <svg 
                      className="h-9 w-9 m-2"
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 496 512"
                      fill="currentColor"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                    </svg>
                    <a href="https://github.com/AndresDelac/Pagina-Personal" className="text-green-700 text-lg font-quicksand font-medium">
                      Repositorio 
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Proyecto 2 */}
            <div data-aos="fade-down-right" data-aos-duration="1500" data-aos-duration="3000" data-aos-delay="1000" className="bg-white p-4 rounded shadow flex flex-col md:flex-row items-center md:space-x-10">
              <div className="w-full md:w-1/3 h-72 bg-gray-300 flex items-center justify-center rounded">
                <span className="text-gray-600">Imagen del Proyecto 2</span>
              </div>
              <div className="mt-4 md:mt-0 md:ml-4">
                <div className="flex flex-col md:flex-row md:space-x-20 lg:space-x-80">
                  <h2 className="text-3xl font-quicksand font-semibold uppercase">Web de peliculas</h2>
                  
                  <div className="relative group mt-4 md:mt-0">
                    <button className="border border-cyan-600 hover:bg-green-200 rounded-xl p-3 flex items-center">
                      <span className="ml-2 text-xl">Tecnologías</span>
                      <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ul className="p-2">
                        <li className="py-1 px-2 hover:bg-gray-100">HTML</li>
                        <li className="py-1 px-2 hover:bg-gray-100">Bootstrap</li>
                        <li className="py-1 px-2 hover:bg-gray-100">JavaScript</li>
                        <li className="py-1 px-2 hover:bg-gray-100">MongoDB</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="mt-2 md:max-w-[30vw] my-4 font-sans">En esta ocasion diseñé una web para un sitio de peliculas donde la persona podia ingresar y ver el catalogo que la pagina ofrecia, como peliculas nuevas, recomendadas, y por ultimo favoritas. De igual manera el usuario podia agregar a la pagina y a la base de datos su propia pelicula favorita.</p>

                <div className="flex flex-row space-x-1 items-center mt-4">    
                  <div className="flex flex-row border items-center border-gray-600 hover:border-green-500 hover:bg-green-300 duration-300 ease-in-out rounded-3xl p-1">
                    <svg 
                      className="h-9 w-9 m-2"
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 496 512"
                      fill="currentColor"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                    </svg>
                    <a href="https://github.com/AndresDelac/Web-Peliculas" className="text-green-700 text-lg font-quicksand font-medium">
                      Repositorio 
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Proyecto 3 */}
            <div data-aos="fade-up-left" data-aos-duration="1500" data-aos-duration="3000" data-aos-delay="1000" className="bg-white p-4 rounded shadow flex flex-col md:flex-row items-center md:space-x-10">
              <div className="w-full md:w-1/3 h-72 bg-gray-300 flex items-center justify-center rounded">
                <span className="text-gray-600">Imagen del Proyecto 3</span>
              </div>
              <div className="mt-4 md:mt-0 md:ml-4">
                <div className="flex flex-col md:flex-row md:space-x-20 lg:space-x-80">
                  <h2 className="text-3xl font-quicksand font-semibold uppercase">Gestor de turnos</h2>
                  
                  <div className="relative group mt-4 md:mt-0">
                    <button className="border border-cyan-600 hover:bg-green-200 rounded-xl p-3 flex items-center">
                      <span className="ml-2 text-xl">Tecnologías</span>
                      <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ul className="p-2">
                        <li className="py-1 px-2 hover:bg-gray-100">Typescript</li>
                        <li className="py-1 px-2 hover:bg-gray-100">Express</li>
                        <li className="py-1 px-2 hover:bg-gray-100">React</li>
                        <li className="py-1 px-2 hover:bg-gray-100">CSS</li>
                        <li className="py-1 px-2 hover:bg-gray-100">PostgreSQL</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="mt-2 md:max-w-[30vw] my-4 font-sans">Esta app fue la primera que hize con una structura completa tanto de front como de back, esta app fue hecho para que una tienda que vende juegos ya usados, esta ofrece la posibilidad de agendar un turno para probar el producto que va acomprar y luego decidir si se lo lleva.</p>

                <div className="flex flex-row space-x-1 items-center mt-4">    
                  <div className="flex flex-row border items-center border-gray-600 hover:border-green-500 hover:bg-green-300 duration-300 ease-in-out rounded-3xl p-1">
                    <svg 
                      className="h-9 w-9 m-2"
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 496 512"
                      fill="currentColor"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                    </svg>
                    <a href="https://github.com/AndresDelac/Web-Turnos" className="text-green-700 text-lg font-quicksand font-medium">
                      Repositorio 
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Proyecto 4 */}
            <div data-aos="fade-down-right" data-aos-duration="1500" data-aos-duration="3000" data-aos-delay="1000" className="bg-white p-4 rounded shadow flex flex-col md:flex-row items-center md:space-x-10">
              <div className="w-full md:w-1/3 h-72 bg-gray-300 flex items-center justify-center rounded">
                <span className="text-gray-600">Imagen del Proyecto 4</span>
              </div>
              <div className="mt-4 md:mt-0 md:ml-4">
                <div className="flex flex-col md:flex-row md:space-x-20 lg:space-x-80">
                  <h2 className="text-3xl font-quicksand font-semibold uppercase">E-comerce</h2>
                  
                  <div className="relative group mt-4 md:mt-0">
                    <button className="border border-cyan-600 hover:bg-green-200 rounded-xl p-3 flex items-center">
                      <span className="ml-2 text-xl">Tecnologías</span>
                      <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ul className="p-2">
                        <li className="py-1 px-2 hover:bg-gray-100">Typescript</li>
                        <li className="py-1 px-2 hover:bg-gray-100">Tailwind</li>
                        <li className="py-1 px-2 hover:bg-gray-100">NextJs</li>
                        <li className="py-1 px-2 hover:bg-gray-100">PostgreSQL</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="mt-2 md:max-w-[30vw] my-4 font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ullam? Nemo dolores aliquam tempore doloribus ducimus voluptates, dolorum nam eligendi repudiandae, tempora ipsum id dignissimos voluptatum natus quibusdam. Nesciunt, maxime!</p>

                <div className="flex flex-row space-x-1 items-center mt-4">    
                  <div className="flex flex-row border items-center border-gray-600 hover:border-green-500 hover:bg-green-300 duration-300 ease-in-out rounded-3xl p-1">
                    <svg 
                      className="h-9 w-9 m-2"
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 496 512"
                      fill="currentColor"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                    </svg>
                    <a href="https://github.com/AndresDelac/E-Comerce" className="text-green-700 text-lg font-quicksand font-medium">
                      Repositorio 
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sección de tecnologías */}
        <section id="tecnologias" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="200" className="my-48">
          <div className="flex flex-row items-center space-x-4">
            <svg 
              className="h-8 w-8 m-2"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c-35.3 0-64 28.7-64 64l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c0 35.3 28.7 64 64 64l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c35.3 0 64-28.7 64-64l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0c0-35.3-28.7-64-64-64l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40zM160 128l192 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32zm192 32l-192 0 0 192 192 0 0-192z"/>
            </svg>
            <h1 className="text-4xl font-quicksand font-bold my-10">Tecnologías</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5 font-quicksand text-xl">
            <div className="bg-white p-4 h-[20vw] md:h-[15vw] rounded shadow-lg flex flex-col items-center space-y-6 md:space-y-12 hover:shadow-orange-400 duration-300 ease-in-out">
              <div className="h-28 md:h-40 flex items-center">
                <div className="bg-gray-200 h-24 w-full md:h-40 rounded flex items-center justify-center">
                  <span className="text-gray-600">HTML, CSS, JavaScript</span>
                </div>
              </div>
              <h2 className="text-xl md:text-2xl font-semibold">HTML, CSS, JavaScript</h2>
            </div>
            <div className="bg-white p-4 h-[20vw] md:h-[15vw] rounded shadow-lg flex flex-col items-center space-y-6 md:space-y-12 hover:shadow-blue-400 duration-300 ease-in-out">
              <div className="h-28 md:h-40 flex items-center">
                <div className="bg-gray-200 h-24 w-full md:h-40 rounded flex items-center justify-center">
                  <span className="text-gray-600">TypeScript</span>
                </div>
              </div>
              <h2 className="text-xl md:text-2xl font-semibold">TypeScript</h2>
            </div>
            <div className="bg-white p-4 h-[20vw] md:h-[15vw] rounded shadow-lg flex flex-col items-center space-y-6 md:space-y-12 hover:shadow-cyan-300 duration-300 ease-in-out">
              <div className="h-28 md:h-40 flex items-center">
                <div className="bg-gray-200 h-24 w-full md:h-40 rounded flex items-center justify-center">
                  <span className="text-gray-600">React</span>
                </div>
              </div>
              <h2 className="text-xl md:text-2xl font-semibold">React</h2>
            </div>
            <div className="bg-white p-4 h-[20vw] md:h-[15vw] rounded shadow-lg flex flex-col items-center space-y-6 md:space-y-12 hover:shadow-gray-600 duration-300 ease-in-out">
              <div className="h-28 md:h-40 flex items-center">
                <div className="bg-gray-200 h-24 w-full md:h-40 rounded flex items-center justify-center">
                  <span className="text-gray-600">Next.js</span>
                </div>
              </div>
              <h2 className="text-xl md:text-2xl font-semibold">Next.js</h2>
            </div>
            <div className="bg-white p-4 h-[20vw] md:h-[15vw] rounded shadow-lg flex flex-col items-center space-y-6 md:space-y-12 hover:shadow-emerald-400 duration-300 ease-in-out">
              <div className="h-28 md:h-40 flex items-center">
                <div className="bg-gray-200 h-24 w-full md:h-40 rounded flex items-center justify-center">
                  <span className="text-gray-600">Tailwind CSS</span>
                </div>
              </div>
              <h2 className="text-xl md:text-2xl font-semibold">Tailwind CSS</h2>
            </div>
            <div className="bg-white p-4 h-[20vw] md:h-[15vw] rounded shadow-lg flex flex-col items-center space-y-6 md:space-y-12 hover:shadow-purple-400 duration-300 ease-in-out">
              <div className="h-28 md:h-40 flex items-center">
                <div className="bg-gray-200 h-24 w-full md:h-40 rounded flex items-center justify-center">
                  <span className="text-gray-600">Vite</span>
                </div>
              </div>
              <h2 className="text-xl md:text-2xl font-semibold">Vite</h2>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-800 text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Hugo Andres. Mas o menos todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/hugo-andres-de-la-cruz-oyola-0b9b20289/" className="hover:text-gray-400">LinkedIn</a>
            <a href="https://github.com/AndresDelac" className="hover:text-gray-400">Proyectos</a>
            <a href="mailto:hugoandres2205@gmail.com" className="hover:text-gray-400">Email</a>
          </div>
        </div>
      </footer>

      {/* Script para AOS (Animate On Scroll) */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
      <script dangerouslySetInnerHTML={{ __html: `
        document.addEventListener('DOMContentLoaded', function() {
          AOS.init();
        });
      `}} />
    </div>
  );
};

export default Index;
