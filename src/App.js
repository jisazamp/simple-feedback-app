import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/common/navBar';
import FeedbackItemList from './components/feedbackItemList';
import FeedbackStats from './components/feedbackStats';
import FeedbackForm from './components/feedbackForm';
import AboutPage from './pages/AboutPage';

import AboutIconLink from './components/AboutIconLink';

import { FeedbackProvider } from './context/FeedbackContext';

const App = () => {
  // State
  const [dark, setDark] = useState(true);

  const handleThemeChange = () => {
    setDark(!dark);
  };

  return (
    <FeedbackProvider>
      <BrowserRouter>
        <div className={dark ? 'dark relative' : 'relative'}>
          <div
            className={'bg-white dark:bg-customBlue2 h-screen overflow-auto'}
          >
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
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackItemList />

                    <AboutIconLink />
                  </div>
                }
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
};

export default App;
