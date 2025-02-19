import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Auth/signup';
import PersonalDetailsForm from './components/personel';
import JobSearchPage from './components/job';
import JobDetailPage from './components/jobdetail';
import InterviewBookingPage from './components/interviewpage';
import   BookingConfirmationPage from'./components/confirm';
import    WelcomePage from'./components/welcome';
import    RoleSelectionPage from'./components/role';

const App = () => {
  return (
    <Router>
     
      <Routes>
        {/* Public Routes */}
        <Route path="/sign" element={<Signup />} />
        <Route path="/per" element={<PersonalDetailsForm />} />
        <Route path="/job" element={<JobSearchPage />} />
        <Route path="/det" element={<JobDetailPage />} />
        <Route path="/book" element={<InterviewBookingPage />} />
        <Route path="/con" element={<BookingConfirmationPage />} />
        <Route path="/" element={< WelcomePage/>} />
        <Route path="/role" element={<RoleSelectionPage />} />
        
      </Routes>
    </Router>
  );
};

export default App;