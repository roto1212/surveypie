import styled from 'styled-components';

import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionBox from '../../components/QuestionBox';
import { Suspense } from 'react';

function SurveyPage() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SurveyPageWrapper>
        <ProgressIndicator />
        <QuestionBox />
      </SurveyPageWrapper>
    </Suspense>
  );
}

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

export default SurveyPage;
