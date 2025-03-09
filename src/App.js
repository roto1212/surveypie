import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import CompletionPage from './pages/CompletionPage';
import SurveyPage from './pages/SurveyPage';
import WelcomePage from './pages/WelcomePage';

function App() {
  return (
    <AppWrapper>
      <Box>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/done/:surveyId" element={<CompletionPage />} />
          <Route path="/survey/:surveyId" element={<SurveyPage />} >
            <Route path=":step" element={<SurveyPage />} />
          </Route>
        </Routes>
      </Box>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e5e5e5;
`;

const Box = styled.div`
  width: 700px;
  min-height: 500px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.07);
  padding: 60px;
  display: flex;
  box-sizing: border-box;
`;

export default App;
