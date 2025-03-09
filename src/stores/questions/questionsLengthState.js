import { selector } from "recoil";
import questionsState from "./atom";

const questionsLengthState = selector({
  key: "questionsLengthState",
  get: ({ get }) => {
    const survey = get(questionsState);
    return survey.questions.length;
  },
});

export default questionsLengthState; 