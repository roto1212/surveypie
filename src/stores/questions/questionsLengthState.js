import { atom } from "recoil";
import questionsState from "./atom";
const questionsLengthState = atom({
  key: "questionsLengthState",
  get: ({ get }) => {
    const questions = get(questionsState);
    return questions.length;
  },
});

export default questionsLengthState;


