import { selector } from "recoil";
import getSurvey from "../../services/getSurvey";

const surveyState = selector({
  key: 'surveyState',
  get: async ({ get }) => {
    const surveyId = window.location.pathname.split("/")[2];
    const response = await getSurvey(surveyId);
    return response.data;
  },
});

export default surveyState;

