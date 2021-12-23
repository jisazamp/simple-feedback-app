import { useState, useEffect } from 'react';

import NavBar from './components/common/navBar';
import FeedbackItemList from './components/feedbackItemList';
import FeedbackStats from './components/feedbackStats';

import FeedbackData from './data/FeedbackData';

const App = () => {
  const [feedback, setFeedback] = useState([]);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setFeedback(FeedbackData);
  }, []);

  const handleFeedbackDelete = (id) => {
    if (window.confirm('¿Está seguro que deseas eliminar este comentario?')) {
      const newFeedback = feedback.filter((el) => el.id !== id);
      setFeedback(newFeedback);
    }
  };

  const handleThemeChange = () => {
    setDark(!dark);
  };

  return (
    <div className={dark ? 'dark' : ''}>
      <div
        className={'bg-white dark:bg-customBlue2 h-screen overflow-y-scroll'}
      >
        <NavBar
          title='Simple Feedback UI'
          onThemeChange={handleThemeChange}
          dark={dark}
        />
        <div>
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
