const Card = ({ children }) => {
  return (
    <div className='m-6'>
      <div className="'bg-customWhite max-w-xl flex justify-items-start mx-auto rounded-lg py-4 px-10 relative'">
        {children}
      </div>
    </div>
  );
};

export default Card;
