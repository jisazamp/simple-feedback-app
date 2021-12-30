import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className='m-4'>
      <div
        className='max-w-2xl bg-gray-100 dark:bg-customBlue3 border 
      border-gray-300 dark:border-none mx-auto m-4 py-5 px-7 rounded-md
      text-color9 dark:text-white'
      >
        <h1 className='font-bold text-xl'>Acerca de este proyecto</h1>
        <p className='mt-3 text-sm'>
          Esta es una aplicación realizada con React para dejar
          retroalimentación para un producto o servicio.
        </p>
        <p className='mt-3 text-sm'>Versión: 1.0.0</p>
        <p className='mt-5 text-sm underline cursor-pointer'>
          <Link to='/'>Volver al inicio</Link>
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
