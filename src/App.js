import { useState } from 'react';

import NavBar from './components/common/navBar';
import FeedbackItemList from './components/feedbackItemList';
import FeedbackStats from './components/feedbackStats';

import FeedbackForm from './components/feedbackForm';

const App = () => {
  // State
  const [feedback, setFeedback] = useState([]);
  const [dark, setDark] = useState(true);

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

  const handleThemeChange = () => {
    setDark(!dark);
  };

  return (
    <div className={dark ? 'dark' : ''}>
      <div className={'bg-white dark:bg-customBlue2 h-screen overflow-auto'}>
        <NavBar
          title='Simple Feedback UI'
          onThemeChange={handleThemeChange}
          dark={dark}
        />

        <div>
          <FeedbackForm onFeedbackAdd={handleFeedbackAdd} />
          <FeedbackStats feedback={feedback} />
          <FeedbackItemList
            feedback={feedback}
            onFeedbackDelete={handleFeedbackDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
