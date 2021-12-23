import PropTypes from 'prop-types';

const FeedbackItem = ({ item, onDelete }) => {
  const { id, rating, text } = item;

  return (
    <div className='m-6'>
      <div className='bg-gray-200 border border-gray-300 dark:border-none shadow-lg max-w-lg flex justify-items-start mx-auto rounded-lg py-4 px-10 relative dark:bg-customBlue3'>
        <span
          className='absolute top-1 -left-10 inline-flex items-center justify-center py-3 px-4 text-md font-bold leading-none
         text-customWhite transform translate-x-1/2 -translate-y-1/2 bg-customRed rounded-full'
        >
          {rating}
        </span>

        <p className='text-gray-700 dark:text-customWhite'>{text}</p>

        <button
          className='top-0 right-0 absolute m-2'
          onClick={() => onDelete(id)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 md:h-4 md:w-4 stroke-customBlue3 dark:stroke-customWhite'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default FeedbackItem;
