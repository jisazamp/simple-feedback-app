import spinner from '../assets/spinner.gif';

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt='Loading spinner'
      className='block w-20 h-20 mx-auto'
    />
  );
};

export default Spinner;
