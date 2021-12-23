import PropTypes from 'prop-types';

const FeedbackStats = ({ feedback }) => {
  // Calculate average ratings
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='m-3'>
      <div className='flex items-center justify-between max-w-xl mx-auto'>
        <h4 className='text-gray-700 dark:text-customWhite font-semibold'>
          {feedback.length} reseñas
        </h4>
        <h4 className='text-gray-700 dark:text-customWhite font-semibold'>
          Calificación promedio: {isNaN(average) ? 0 : average}
        </h4>
      </div>
    </div>
  );
};

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
