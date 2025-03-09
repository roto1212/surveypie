import mainApi from "./apis/mainApi";

async function postAnswers(surveyId, data) {
  return mainApi.post(`/ans123wers`, { surveyId, data });
}

export default postAnswers;

