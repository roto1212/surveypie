import { useParams } from "react-router-dom";

function useSurveyId() {
  const params = useParams();
  const { surveyId } = params;
  return surveyId;
}

export default useSurveyId;

