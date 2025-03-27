
import { Link } from 'react-router-dom';


// Hay algunos colores que estan configurados al reves
const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[80vh]">
      <div className="max-w-md w-full text-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-9xl font-bold text-gray-800 dark:text-gray-200">404</h1>
          {/* AQUI ESTA AL REVES POR EJEMPLO */}
          <h2 className="text-3xl font-bold dark:text-gray-900 text-gray-700 mb-4">
            Pagina no encontrada
          </h2>
          <p className="text-gray-600 dark:text- mb-8">
            Lo sentimos la pagina que estas buscando no existe o ha sido redireccionada
          </p>
          <Link 
            to="/" 
            className="inline-block text-gray-700 dark:text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Volver a la Pagina principal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
