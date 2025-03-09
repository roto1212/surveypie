import styled from 'styled-components';
import congratulation from '../../assets/congratulation.png';
import reload from '../../assets/Reload.png';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import useSurveyId from '../../hooks/useSurveyId';

function CompletionPage() {
  const navigate = useNavigate();
  const surveyId = useSurveyId();
  console.log('surveyId', surveyId);
  return <CompletionPageWrapper>
    <img src={congratulation} alt="" width={209} height={204}></img>
    <MidText >설문을 완료하였습니다.</MidText>
    <ReloadButton type="TERTIARY" onClick={() => {
      navigate(`/survey/${surveyId}/0`);
    }}>
      <img src={reload} alt="" width={24} height={24}></img>
      새로운 응답 제출하기
    </ReloadButton>
  </CompletionPageWrapper>;
}

const CompletionPageWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const MidText = styled.div`
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  margin-bottom: 56px;
  margin-top: 16px;
`;

const ReloadButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 10px;

`;

export default CompletionPage;

