import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/common/navBar';
import FeedbackItemList from './components/feedbackItemList';
import FeedbackStats from './components/feedbackStats';
import FeedbackForm from './components/feedbackForm';
import AboutPage from './pages/AboutPage';

import AboutIconLink from './components/AboutIconLink';

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
    <BrowserRouter>
      <div className={dark ? 'dark relative' : 'relative'}>
        <div className={'bg-white dark:bg-customBlue2 h-screen overflow-auto'}>
          <NavBar
            title='Simple Feedback UI'
            onThemeChange={handleThemeChange}
            dark={dark}
          />

          <Routes>
            <Route path='/about' element={<AboutPage />} />
            <Route
              path='/'
              exact
              element={
                <div>
                  <FeedbackForm onFeedbackAdd={handleFeedbackAdd} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackItemList
                    feedback={feedback}
                    onFeedbackDelete={handleFeedbackDelete}
                  />

                  <AboutIconLink />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
