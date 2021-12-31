import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackStats = () => {
  // Context global state
  const { feedback } = useContext(FeedbackContext);

  // Calculate average ratings
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='m-3'>
      <div className='px-4 flex items-center justify-between max-w-lg mx-auto'>
        <h4 className='text-color9 dark:text-customWhite font-semibold'>
          {feedback.length} reseñas
        </h4>
        <h4 className='text-color9 dark:text-customWhite font-semibold'>
          Calificación promedio: {isNaN(average) ? 0 : average}
        </h4>
      </div>
    </div>
  );
};

export default FeedbackStats;
