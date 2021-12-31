import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import FeedbackItem from './feedbackItem';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItemList = () => {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return (
      <div className='m-3'>
        <p className='mx-auto font-semibold text-lg max-w-xl text-color9 dark:text-customWhite'>
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
            <FeedbackItem key={el.id} item={el} />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
};

export default FeedbackItemList;
