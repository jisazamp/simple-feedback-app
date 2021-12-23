import { useState } from 'react';

const FeedbackItem = () => {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');

  return (
    <div className='m-6'>
      <div className='bg-customWhite max-w-xl flex justify-items-start mx-auto rounded-lg py-4 px-10 relative'>
        <span
          class='absolute top-1 -left-8 inline-flex items-center justify-center py-3 px-4 text-md font-bold leading-none
         text-customWhite transform translate-x-1/2 -translate-y-1/2 bg-customRed rounded-full'
        >
          {rating}
        </span>
        {text}
      </div>
    </div>
  );
};

export default FeedbackItem;
