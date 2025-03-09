import mainApi from "./apis/mainApi";

async function postAnswers(surveyId, data) {
  return mainApi.post(`/answers`, { surveyId, data });
}

export default postAnswers;

