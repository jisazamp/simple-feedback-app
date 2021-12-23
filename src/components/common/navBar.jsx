import PropTypes from 'prop-types';

const NavBar = ({ title }) => {
  return (
    <nav className='py-4 px-4 flex items-center justify-center bg-violet-900'>
      <h1 className='font-bold text-xl md:text-2xl text-pink-300'>{title}</h1>
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
