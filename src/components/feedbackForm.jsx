import { useState, useContext, useEffect } from 'react';

import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {
  // State variables
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);

  // Context global state
  const { feedbackEdit, handleFeedbackAdd, handleFeedbackUpdate } =
    useContext(FeedbackContext);

  // Effect whenever the feedbackEdit object changes
  useEffect(() => {
    // Destructure the object properties
    const { edit, item } = feedbackEdit;
    const { text, rating } = item;

    // Set these properties to the current form
    if (edit) {
      setText(text);
      setRating(rating);
      setBtnDisabled(false);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    // Sanity checks for the user input
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('La reseña debe contener al menos 10 caracteres.');
    } else if (text !== '' && text.trim().length > 300) {
      setBtnDisabled(true);
      setMessage('La reseña no puede superar los 300 caracteres.');
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
        if (feedbackEdit.edit) {
          handleFeedbackUpdate(feedbackEdit.item.id, newFeedback);
        } else {
          handleFeedbackAdd(newFeedback);
        }

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
        className='relative flex justify-center max-w-2xl px-8 py-2 mx-auto bg-gray-100 border border-gray-300 rounded-lg shadow-lg dark:border-none dark:bg-customBlue3'
      >
        {/* Form start */}
        <form className='flex-1 p-3' onSubmit={handleSubmit}>
          {/* Form header */}
          <h2 className='mb-3 text-lg font-bold text-center text-color9 dark:text-customWhite'>
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
              className='block w-full py-3 pl-3 break-all border-gray-300 rounded-md md:w-3/4 sm:text-sm'
              placeholder='Escribe una reseña'
              value={text}
            ></textarea>

            {/* Submit button */}
            <div className='relative flex items-center justify-end md:inset-y-0 md:right-3 md:absolute'>
              <button
                disabled={btnDisabled}
                type='submit'
                className='px-6 py-2.5 w-full rounded-md m-2 bg-white font-semibold text-customBlue3 dark:bg-customBlue1 dark:text-black
                md:hover:bg-customBlue1 md:hover:text-black disabled:cursor-not-allowed disabled:bg-gray-300 dark:disabled:bg-gray-300'
              >
                Enviar
              </button>
            </div>
          </div>

          {/* If there's any error message, display it */}
          {message && (
            <div className='flex items-center justify-start mt-1'>
              <span className='font-semibold text-customRed'>{message}</span>
            </div>
          )}
        </form>
        {/* Form end */}
      </div>
    </div>
  );
};

export default FeedbackForm;
