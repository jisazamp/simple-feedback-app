import PropTypes from 'prop-types';

const RatingSelect = ({ rating, onRating }) => {
  return (
    <div className='py-2 flex justify-center mt-4 mb-4'>
      {/* List of the ratings selection */}
      <ul className='space-x-2 flex'>
        {[...Array(5)].map((el, index) => (
          // Conditional rendering depending if the items is selected
          <li
            key={index}
            onClick={() => onRating(index + 1)}
            className={`${
              rating !== index + 1
                ? 'bg-white'
                : 'bg-color9 dark:bg-customRed text-white'
            } h-12 w-12 flex items-center justify-center text-center rounded-full shadow-md
            hover:cursor-pointer hover:bg-color4 transition-all duration-200`}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

RatingSelect.propTypes = {
  rating: PropTypes.number.isRequired,
  onRating: PropTypes.func.isRequired,
};

export default RatingSelect;
