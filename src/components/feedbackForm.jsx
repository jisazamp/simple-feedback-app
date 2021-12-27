import { useState } from 'react';
import PropTypes from 'prop-types';

import RatingSelect from './RatingSelect';

const FeedbackForm = ({ onFeedbackAdd }) => {
  // State variables
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);

  const handleTextChange = (e) => {
    // Sanity checks for the user input
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('La reseña debe contener al menos 10 caracteres.');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // First check if the text length is ok
    if (text.trim().length > 10) {
      // Later, check if the user selected any rating
      if (rating !== 0) {
        // Instiate the new feedback item
        const newFeedback = {
          text: text,
          rating: rating,
        };

        // Call the paretn function to add a new feedback item
        onFeedbackAdd(newFeedback);

        // Reset the form state
        setText('');
        setBtnDisabled(true);
        setRating(0);
        setMessage('');
      } else {
        setMessage('Debe seleccionar una calificación.');
      }
    } else {
      setBtnDisabled(true);
      setMessage('La reseña debe contener más de 10 caracteres.');
    }
  };

  const handleRating = (rating) => {
    setRating(() => {
      return rating;
    });
  };

  return (
    <div className='m-4'>
      <div
        className='bg-color1 border border-gray-300 max-w-2xl dark:border-none shadow-lg flex justify-center
       mx-auto rounded-lg py-2 px-8 relative dark:bg-customBlue3'
      >
        {/* Form start */}
        <form className='p-3 flex-1' onSubmit={handleSubmit}>
          {/* Form header */}
          <h2 className='text-color9 text-lg font-bold text-center dark:text-customWhite mb-3'>
            ¿Cómo calificarías tu servicio con nosotros?
          </h2>

          {/* Rating select component, for user rating selection */}
          <RatingSelect rating={rating} onRating={handleRating} />

          {/* Div containing the textarea and the submit button */}
          <div className='relative rounded-md'>
            {/* Text area */}
            <textarea
              onChange={handleTextChange}
              type='text'
              className='block w-full md:w-3/4 pl-3 py-3 sm:text-sm border-gray-300 rounded-md break-all'
              placeholder='Escribe una reseña'
              value={text}
            ></textarea>

            {/* Submit button */}
            <div className='relative justify-end md:inset-y-0 md:right-3 flex items-center md:absolute'>
              <button
                disabled={btnDisabled}
                type='submit'
                className='px-6 py-2.5 w-full rounded-md m-2 bg-white font-semibold text-customBlue3 dark:bg-customBlue1 dark:text-black
                md:hover:bg-customBlue1 md:hover:text-white disabled:cursor-not-allowed disabled:bg-gray-300 dark:disabled:bg-gray-300'
              >
                Enviar
              </button>
            </div>
          </div>

          {/* If there's any error message, display it */}
          {message && (
            <div className='mt-1 flex items-center justify-start'>
              <span className='font-semibold text-customRed'>{message}</span>
            </div>
          )}
        </form>
        {/* Form end */}
      </div>
    </div>
  );
};

FeedbackForm.propTypes = {
  onFeedbackAdd: PropTypes.func.isRequired,
};

export default FeedbackForm;
