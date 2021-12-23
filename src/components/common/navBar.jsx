import PropTypes from 'prop-types';

const NavBar = ({ title }) => {
  return (
    <nav className='py-4 px-4 flex items-center justify-center bg-customWhite dark:bg-customBlue3'>
      <h1 className='font-bold text-xl md:text-2xl text-customBlue3 dark:text-customWhite'>
        {title}
      </h1>
    </nav>
  );
};

NavBar.propTypes = {
  title: PropTypes.string,
};

NavBar.defaultProps = {
  title: 'Feedback UI',
};

export default NavBar;
