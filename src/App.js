import { Route, Routes } from 'react-router-dom';

import CompletionPage from './pages/CompletionPage';
import SurveyPage from './pages/SurveyPage';
import WelcomePage from './pages/WelcomePage';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/done" element={<CompletionPage />} />
        <Route path="/survey/:id" element={<SurveyPage />} >
          <Route path=":step" element={<SurveyPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
