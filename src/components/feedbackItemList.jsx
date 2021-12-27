import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

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
      <AnimatePresence>
        {feedback.map((el) => (
          <motion.div
            key={el.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={el.id} item={el} onDelete={onFeedbackDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
};

FeedbackItemList.propTypes = {
  feedback: PropTypes.array.isRequired,
  onFeedbackDelete: PropTypes.func.isRequired,
};

export default FeedbackItemList;
