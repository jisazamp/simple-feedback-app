import PropTypes from 'prop-types';

const NavBar = ({ title, dark, onThemeChange }) => {
  return (
    <nav className='py-4 px-4 flex items-center justify-between bg-gray-200 dark:bg-customBlue3'>
      <h1 className='font-bold text-2xl text-customBlue3 dark:text-customWhite'>
        {title}
      </h1>

      <button
        className='px-3 rounded py-2 stroke-customBlue3 dark:stroke-customWhite transition ease-in 300 hover:bg-customBlue3
         hover:stroke-customWhite dark:hover:bg-customWhite dark:hover:stroke-customBlue3'
        onClick={onThemeChange}
      >
        {dark ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
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
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
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
        )}
      </button>
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
