import React from 'react';

import NavBar from './components/common/navBar';
import FeedbackItem from './components/feedbackItem';

const App = () => {
  return (
    <div className='bg-customBlue2 h-screen'>
      <NavBar title='Simple Feedback UI' />
      <div>
        <FeedbackItem />
      </div>
    </div>
  );
};

export default App;
