import { useRecoilValue } from "recoil";

import questionsState from "../stores/questions/atom";
import useStep from "./useStep";

function useCurrentQuestion() {
  const questions = useRecoilValue(questionsState);
  const step = useStep();
  return questions[step];
}

export default useCurrentQuestion;
