import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = ({ title, dark, onThemeChange }) => {
  const renderThemeButton = () => {
    // Render sun SVG
    if (dark)
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-6 h-6'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
          />
        </svg>
      );

    // Render moon SVG
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-6 h-6'
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
        />
      </svg>
    );
  };

  const renderQuestionButton = () => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 visible md:invisible stroke-color9 dark:stroke-customWhite mt-0.5'
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
    );
  };

  return (
    <nav className='flex items-center justify-between px-4 py-4 bg-gray-200 bg-opacity-50 dark:bg-customBlue3'>
      {/* Navbar title */}
      <h1 className='text-2xl font-bold text-color9 dark:text-customWhite'>
        <Link to='/'>{title}</Link>
      </h1>

      {/* Theme button */}
      <div className='flex items-center space-x-2 cursor-pointer'>
        <Link to='about'>{renderQuestionButton()}</Link>
        <button
          className='px-3 py-2 transition ease-in rounded stroke-color9 dark:stroke-customWhite 500 md:hover:bg-color9 md:hover:stroke-color1 md:dark:hover:bg-customWhite md:dark:hover:stroke-customBlue3'
          onClick={onThemeChange}
        >
          {renderThemeButton()}
        </button>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  title: PropTypes.string,
  dark: PropTypes.bool.isRequired,
  onThemeChange: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  title: 'Feedback UI',
};

export default NavBar;
