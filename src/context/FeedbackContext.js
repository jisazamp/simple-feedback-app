import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch data
  const fetchData = async () => {
    const response = await fetch('/feedback?_sort=id&_order=desc');
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  const handleFeedbackDelete = async (id) => {
    // Prompt user for confirmation
    if (window.confirm('¿Está seguro que deseas eliminar este comentario?')) {
      // Server request for deleting element from the database
      await fetch(`/feedback/${id}`, { method: 'DELETE' });

      // Delete feedback by id
      const newFeedback = feedback.filter((el) => el.id !== id);
      setFeedback(newFeedback);
    }
  };

  const handleFeedbackAdd = async (el) => {
    // Server requests
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(el),
    });

    const data = await response.json();

    // Spread the previous state, and add the new feedback element
    const newFeedback = [data, ...feedback];
    setFeedback(newFeedback);
  };

  const handleFeedbackUpdate = async (id, updatedItem) => {
    // Server response
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedItem),
    });

    // Get the server response data
    const data = await response.json();

    // Update the object
    setFeedback(feedback.map((el) => (el.id === id ? { ...el, ...data } : el)));

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
        isLoading,
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
