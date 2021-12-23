import { useState, useEffect } from 'react';

import NavBar from './components/common/navBar';
import FeedbackItemList from './components/feedbackItemList';

import FeedbackData from './data/FeedbackData';

const App = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    setFeedback(FeedbackData);
  }, []);

  const handleFeedbackDelete = (id) => {
    if (window.confirm('¿Está seguro que deseas eliminar este comentario?')) {
      const newFeedback = feedback.filter((el) => el.id !== id);
      setFeedback(newFeedback);
    }
  };

  return (
    <div className='bg-customBlue2 h-screen overflow-y-scroll'>
      <NavBar title='Simple Feedback UI' />
      <div>
        <FeedbackItemList
          feedback={feedback}
          onFeedbackDelete={handleFeedbackDelete}
        />
      </div>
    </div>
  );
};

export default App;
