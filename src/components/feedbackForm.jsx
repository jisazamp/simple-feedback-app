import { useState } from 'react';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = (e) => {
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

  const handleTextSubmit = (e) => {
    e.preventDefault();
    console.log('Form recibido');
  };

  return (
    <div className='m-6'>
      <div className='bg-gray-200 border border-gray-300 max-w-2xl dark:border-none shadow-lg flex justify-center mx-auto rounded-lg py-4 px-10 relative dark:bg-customBlue3'>
        <form className='p-3 flex-1'>
          <h2 className='text-gray-800 text-lg font-bold text-center dark:text-customWhite mb-3'>
            ¿Cómo calificarías tu servicio con nosotros?
          </h2>

          <div className='relative rounded-md'>
            <textarea
              onChange={handleTextChange}
              type='text'
              className='focus:ring-red-500 focus:border-red-500 block w-full md:w-3/4 pl-3 py-3 sm:text-sm border-gray-300 rounded-md break-all'
              placeholder='Escribe una reseña'
              value={text}
            ></textarea>

            <div className='relative justify-end md:inset-y-0 md:right-3 flex items-center md:absolute'>
              <button
                disabled={btnDisabled}
                onClick={handleTextSubmit}
                type='submit'
                className='px-6 py-2.5 w-full rounded-md m-2 bg-white font-semibold text-customBlue3 dark:bg-customBlue1 dark:text-black
                hover:bg-customBlue3 hover:text-white disabled:cursor-not-allowed disabled:bg-gray-300 dark:disabled:bg-gray-300'
              >
                Enviar
              </button>
            </div>
            {message && (
              <div className='mt-1 flex items-center justify-start'>
                <span className='font-semibold text-customRed'>{message}</span>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
