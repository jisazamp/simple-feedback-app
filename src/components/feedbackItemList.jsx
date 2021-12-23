import PropTypes from 'prop-types';

import FeedbackItem from './feedbackItem';

const FeedbackItemList = ({ feedback, onFeedbackDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
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
