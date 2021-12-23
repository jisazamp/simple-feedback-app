import PropTypes from 'prop-types';

import FeedbackItem from './feedbackItem';

const FeedbackItemList = ({ feedback, onFeedbackDelete }) => {
  if (!feedback || feedback.length === 0) {
    return (
      <div className='m-3'>
        <p className='mx-auto font-semibold text-lg max-w-xl text-gray-900 dark:text-customWhite'>
          No hay reseñas aún
        </p>
      </div>
    );
  }

  return (
    <>
      {feedback.map((el) => (
        <FeedbackItem key={el.id} item={el} onDelete={onFeedbackDelete} />
      ))}
    </>
  );
};

FeedbackItemList.propTypes = {
  feedback: PropTypes.array.isRequired,
  onFeedbackDelete: PropTypes.func.isRequired,
};

export default FeedbackItemList;
