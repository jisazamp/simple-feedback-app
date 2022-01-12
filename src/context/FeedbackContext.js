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
      text: 'Yo también vengo del context',
      rating: 1,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

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

  const handleFeedbackUpdate = (id, updatedItem) => {
    // Update the object
    setFeedback(
      feedback.map((el) => (el.id === id ? { ...el, ...updatedItem } : el))
    );

    // Reset the feedback edit
    setFeedbackEdit({ item: {}, edit: false });
  };

  const handleFeedbackEdit = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        handleFeedbackDelete,
        handleFeedbackAdd,
        handleFeedbackEdit,
        handleFeedbackUpdate,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
