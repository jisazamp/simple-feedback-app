import PropTypes from 'prop-types';
import { useContext } from 'react';

import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({ item }) => {
  // Destructure the item props
  const { id, rating, text } = item;

  // Context state
  const { handleFeedbackDelete, handleFeedbackEdit } =
    useContext(FeedbackContext);

  const renderDeleteSVG = () => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5 md:h-4 md:w-4 stroke-color9 dark:stroke-customWhite'
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
    );
  };

  const renderEditSVG = () => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5 md:h-4 md:w-4 stroke-color9 dark:stroke-customWhite fill-color9 dark:fill-customWhite'
        viewBox='0 0 20 20'
      >
        <path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' />
      </svg>
    );
  };

  return (
    <div className='m-6'>
      {/* Card container */}
      <div
        className='bg-gray-100 border border-gray-200 dark:border dark:border-customBlue3 shadow-lg max-w-lg 
      flex justify-items-start mx-auto rounded-lg py-6 px-7 relative dark:bg-customBlue3 break-all'
      >
        {/* Circle rating container, located at the top left */}
        <span
          className='absolute top-1 -left-10 inline-flex items-center justify-center py-3 px-4 text-md font-bold leading-none
         text-customWhite transform translate-x-1/2 -translate-y-1/2 bg-color9 dark:bg-customRed rounded-full'
        >
          {rating}
        </span>

        {/* Feedback description */}
        <p className='text-gray-900 dark:text-customWhite mt-1.5'>{text}</p>

        {/* Feedback delete button */}
        <div>
          <button
            className='top-0 right-0 absolute m-2'
            onClick={() => handleFeedbackDelete(id)}
          >
            {renderDeleteSVG()}
          </button>

          {/* Feedback edit button */}
          <button
            className='top-0 right-6 md:right-5 absolute m-2'
            onClick={() => handleFeedbackEdit(item)}
          >
            {renderEditSVG()}
          </button>
        </div>
      </div>
    </div>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
