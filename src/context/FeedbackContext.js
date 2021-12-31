import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'Vengo del context',
      rating: 3,
    },
    {
      id: 2,
      text: 'I too come from context',
      rating: 1,
    },
  ]);

  const handleFeedbackDelete = (id) => {
    // Prompt user for confirmation
    if (window.confirm('¿Está seguro que deseas eliminar este comentario?')) {
      // Delete feedback by id
      const newFeedback = feedback.filter((el) => el.id !== id);
      setFeedback(newFeedback);
    }
  };

  const handleFeedbackAdd = (el) => {
    // Add id to the new feedback item
    el['id'] = feedback.length + 1;

    // Spread the previous state, and add the new feedback element
    const newFeedback = [el, ...feedback];
    setFeedback(newFeedback);
  };

  return (
    <FeedbackContext.Provider
      value={{ feedback, handleFeedbackDelete, handleFeedbackAdd }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
