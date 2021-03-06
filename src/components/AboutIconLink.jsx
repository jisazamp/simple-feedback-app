import { Link } from 'react-router-dom';

const AboutIconLink = () => {
  return (
    <Link to='about'>
      <div className='invisible md:visible'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8 stroke-gray-600 dark:stroke-customWhite absolute right-3 bottom-3
      hover:stroke-color9 dark:hover:stroke-color9 cursor-pointer transition-all duration-200 ease-in'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      </div>
    </Link>
  );
};

export default AboutIconLink;
