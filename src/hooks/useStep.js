import { useParams } from "react-router-dom";

function useStep() {
  const params = useParams();
  const { step } = params;
  const parsedStep = step ? parseInt(step) : 0;
  return parsedStep;
}

export default useStep;

